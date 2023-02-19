import {React, useState, useEffect, useRef, memo} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {Stack} from '@mui/material';


import { 
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid'
import {
  randomId,
} from '@mui/x-data-grid-generator';
import axios from 'axios'

function NoRowsOverlay() {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="h5">No Data Available.</Typography>    
    </Stack>
  );
}

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  
  const handleAddClick = () => {
    const id = randomId();  
    setRows((oldRows) => [...oldRows, 
      { 
        id, 
        id:"", 
        name: "", 
        mobile:"", 
        pinCode:"", 
        address: "",
        cardNumber: "", 
        expMonth: "", 
        expYear: "", 
        state:"", 
        city:"",
        cvv:"", 
        type:"",
        isNew: true ,
       

      }
    ]);
    
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'id' },
    }));
  };
  

  return (
    <GridToolbarContainer>
      <Button color="primary" variant="outlined" startIcon={<AddIcon />} onClick={handleAddClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = useRef(null);
  const cellDiv = useRef(null);
  const cellValue = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFullCell, setShowFullCell] = useState(false);
  const [showPopper, setShowPopper] = useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: '100%',
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  );
});

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
  return (
    <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
  );
}

renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.string,
};




const BasicDataGrid = (props) => {
  const [rows, setRows] = useState([]);

  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  // const handleDeleteClick = (id) => () => {
  //   setRows(rows.filter((row) => row.id !== id));
  // };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };
  const processRowUpdate = (newRow) => {
    
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));

    if(newRow.isNew){
      addRawMaterialforProduct(newRow)
    }else{
      updateRawMaterial(newRow)
    }

    return updatedRow;
  };
  
  const updateRawMaterial = (updatedRow) => {
    let valuesArray = [];
    if(typeof updatedRow.mobile === "string"){
      valuesArray.push(updatedRow.mobile);
    }else{
      valuesArray = updatedRow.mobile;
    }
    
    let updatedRowObject =   {
      id: updatedRow.id,
      id: updatedRow.id,
      name: updatedRow.name,
      rawMaterialProvider:updatedRow.pinCode,
      Address: updatedRow.address,
      values: valuesArray,
      City: updatedRow.city,
      cardNumber: updatedRow.cardNumber,
      expMonth:updatedRow.expMonth,
      materialStatus: updatedRow.expYear,
      State:updatedRow.state,
      note:updatedRow.cvv,
      type:updatedRow.type,
      index:updatedRow.index
     
    };
    // if(typeof updatedRow.mobile === "array"){
    //   updatedRowObject.values = updatedRow.mobile;
    //   console.log("inside if")
    // }else{
    //   console.log("inside else")
    //   console.log(valuesArray)
    //   valuesArray.push(updatedRow.mobile); 
    //   console.log(valuesArray) 
    // }
    // console.log(valuesArray)
    props.setAddedRow(updatedRowObject);
  }

  const addRawMaterialforProduct = (newRow) =>{ 
   
    let newRowObject =   {
      id: newRow.id,
      name: newRow.name,
      values:[ newRow.mobile],
      rawMaterialProvider:newRow.pinCode,
      Address: newRow.address,
      City: newRow.city,
      cardNumber: newRow.cardNumber,
      expMonth:newRow.expMonth,
      materialStatus: newRow.expYear,
      State:newRow.state,
      note:newRow.cvv,
      type:newRow.type,
      index:newRow.index
      
    };
    props.setAddedRow(newRowObject);
  }


  const handleDelete=(id)=>{
    let auth = localStorage.getItem("auth");
    
    // console.log(JSON.parse(auth).user.token);
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    
    axios.delete(`http://localhost:5000/api/card/delete/${id}`,config).then((res)=>{ 
        console.log(res,"res")
        props.setRefresh(!props.refresh)

        
    })

  }
  useEffect(() => {
 
  }, [props.setRefresh])
  
  

  const columns = [
    { field: 'id',          headerName: 'id',     editable: true,  flex: 1},
    { field: 'name',          headerName: 'name',      editable: true, minWidth: 100, flex: 1},
    { field: 'mobile',         headerName: 'Mobile',     editable: true, minWidth: 50, flex: 1,},
    { field: 'address',           headerName: 'Address',           editable: true, minWidth: 50,   flex: 1},
    { field: 'state',          headerName: 'State',               editable: true, minWidth: 100,flex: 1},
    { field: 'city',         headerName: 'City',              editable: true, minWidth: 50,  flex: 1,},
    { field: 'pinCode',  headerName: 'Pin Code' ,       editable: true, minWidth: 100, flex: 1 ,type: 'number'},
    { field: 'cardNumber',     headerName: 'Card Number',         editable: true, minWidth: 100, flex: 1},
    { field: 'expMonth',  headerName: 'Exp Month',      editable: true, minWidth: 100, type: 'date', flex: 1},
    { field: "expYear",headerName: "Exp Year",             editable: true, minWidth: 100, type: 'date',flex: 1},
    { field: 'cvv',          headerName: 'Cvv',               editable: true, minWidth: 100, flex: 1,renderCell: renderCellExpand },
    { field: 'type',          headerName: 'Type',               editable: true, minWidth: 100, flex: 1,renderCell: renderCellExpand },
    { field: 'actions', headerName: 'Actions',width: 70,cellClassName: 'actions', type: 'actions',
    getActions: ({ id }) => {
     

      return [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Edit"
          className="textPrimary"
          onClick={()=>handleDelete(rows&&rows[id-1]&&rows[id-1].index)}
          color="inherit"
        />,
        // <GridActionsCellItem
        //   icon={<DeleteIcon />}
        //   label="Delete"
        //   onClick={handleDeleteClick(id)}
        //   color="inherit"
        // />,
      ];
    },
  },
];

useEffect(() => {
  if(props.rows !==undefined){
    setRows(props.rows)
    }
  }, [props.rows]);
  // console.log(rows[0].index,"rows")

  return (
    <>
    <div className="flex-auto w-full">
      <DataGrid
      rows={rows}
      columns={columns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowEditStart={handleRowEditStart}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      hideFooter={true}
      loading={props.isLoading}
      experimentalFeatures={{ newEditingApi: true }}
      initialState={{ pinnedColumns: { left: ['actions'] } }}
      // components={{
      //   Toolbar:  
      //             NoRowsOverlay,
      // }}
      componentsProps={{
        toolbar: { setRows, setRowModesModel },
      }}
      >
      </DataGrid>
    </div>
    </>
  )
}

BasicDataGrid.propTypes = {
  rows: PropTypes.array.isRequired,
  setAddedRow : PropTypes.func,
  isLoading : PropTypes.bool,
  setIsLoading : PropTypes.func,
}

export default BasicDataGrid