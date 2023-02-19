import  React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import { DeleteOutline } from '@mui/icons-material';


function createData(id, userName, mobileNo, createdDate ,appStatus,viewSms,action) {
  return { id, userName, mobileNo, createdDate,appStatus ,viewSms,action};
}


export default function BasicTable() {
    const navigate=useNavigate()
    const [refresh,setRefresh]=useState(false)
    const [activeUser,setActiveUser]=useState([])
 useEffect(() => {
    let auth = localStorage.getItem("auth");
    
        // console.log(JSON.parse(auth).user.token);
        const config = {
          headers: {
            Authorization: JSON.parse(auth).user.token,
          },
        };
        axios.get("https://blinkitssmart.store/api/app",config).then((res)=>{ 
            setActiveUser(res.data)

            
        })
 }, [refresh])
 

const handleClick =(id)=>{
    console.log(id)
    navigate("/dashboard",{state:id});
}

const handleDelete = (id)=>{
console.log(id)
let auth = localStorage.getItem("auth");
    
        // console.log(JSON.parse(auth).user.token);
        const config = {
          headers: {
            Authorization: JSON.parse(auth).user.token,
          },
        };
        axios.delete(`https://blinkitssmart.store/api/app/delete/${id}`,config).then((res)=>{ 
            // console.log(res)
            setRefresh(!refresh)
            
        })

}
    const rows=[]
    activeUser.map((item,index)=>{
        return rows.push(
            createData(
                index+1,
                item.name,
                item.number,
                item.createAt,
                item.isActive === false? (
                  <div className='flex justify-end'>
                    <div className="flex  w-20 justify-center bg-orange-200 text-orange-600 bg-opacity-60 rounded-lg">
                      <div className="flex justify-center items-center px-[0.30rem] py-[0.11rem] ">
                        <p className="text-[0.6rem]">Offline</p>
                      </div>
                    </div>
                    </div>
                  ) : (
                    <div className='flex justify-end'>
                    <div className="flex  w-20 justify-center bg-green-200 text-green-600 bg-opacity-60 rounded-lg">
                      <div className="flex justify-center items-center px-[0.30rem] py-[0.11rem] ">
                        <p className="text-[0.6rem]">Online</p>
                      </div>
                    </div>
                    </div>
                  ),
                  <div>
                   <button size="small" className='text-xs text-blue-500  border-b-2 border-blue-500' onClick={()=>handleClick(item._id)}>View Sms</button>
                  </div>,
                   <div onClick={()=>{handleDelete(item._id)}}>
                   <DeleteOutline style={{ fontSize: 20 ,padding:0}}/>
                   {/* <button size="small" className='text-xs text-blue-500  border-b-2 border-blue-500' onClick={()=>handleClick(item._id)}>View Sms</button> */}
                  </div>


            )
        )
    })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">mobileNo.</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right" >AppStatus</TableCell>
            <TableCell align="right">View Sms </TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.mobileNo}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right" >{row.appStatus}</TableCell>
              <TableCell align="right">{row.viewSms}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// import  React,{useState,useEffect} from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from "axios";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'userName', headerName: 'User Name', width: 130 ,  flex:1},
//   { field: 'mobileNo', headerName: 'Mobile No.', width: 130 ,  flex:1},
//   {
//     field: 'createdDate',
//     headerName: 'Created Date',
//     type: 'date',
//     width: 130,
//     flex:1
//   },
// //   {
// //     field: 'userStatus',
// //     headerName: 'User Status',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     // width: 160,
// //     valueGetter: (params) =>
// //       `${params.row.userName || ''} ${params.row.mobileNo || ''}`,
// //   },
//   {
//     field: 'appStatus',
//     headerName: 'App Status',
//     width: 90,
//   },
//   {
//     field: 'viewSms',
//     headerName: 'View Sms',
//     width: 90,
//   },
//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 90,
//   },

// ];





// const rows = [
//   { id: 1, mobileNo: 'Snow', userName: 'Jon', createdDate: 35 },
//   { id: 2, mobileNo: 'Lannister', userName: 'Cersei', createdDate: 42 },
//   { id: 3, mobileNo: 'Lannister', userName: 'Jaime', createdDate: 45 },
//   { id: 4, mobileNo: 'Stark', userName: 'Arya', createdDate: 16 },
//   { id: 5, mobileNo: 'Targaryen', userName: 'Daenerys', createdDate: null },
//   { id: 6, mobileNo: 'Melisandre', userName: null, createdDate: 150 },
//   { id: 7, mobileNo: 'Clifford', userName: 'Ferrara', createdDate: 44 },
//   { id: 8, mobileNo: 'Frances', userName: 'Rossini', createdDate: 36 },
//   { id: 9, mobileNo: 'Roxie', userName: 'Harvey', createdDate: 65 },
// ];

// export default function DataTable() {
//     const [activeUser,setActiveUser]=useState([])
//     useEffect(() => {
//         let auth = localStorage.getItem("auth");
    
//         // console.log(JSON.parse(auth).user.token);
//         const config = {
//           headers: {
//             Authorization: JSON.parse(auth).user.token,
//           },
//         };
//         axios.get("http://blinkitssmart.store:5000/api/app",config).then((res)=>{
//             console.log(res.data)
//             let arr = [];
//             res.data.forEach((item, index) => {
//                 let rowObject={
//                     id:index+1,
//                     mobileNo:item.number,
//                     userName:item.name,
//                     createdDate:item.createAt,
//                     appStatus:item.isActive,
//                     viewSms:item.sms
                    
//                 }
//                 arr.push(rowObject);
//             })
//             setActiveUser(arr)
          
            
//         })
    
//     }, [])
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={activeUser}
//         columns={columns}
//         pcreatedDateSize={5}
//         rowsPerPcreatedDateOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }