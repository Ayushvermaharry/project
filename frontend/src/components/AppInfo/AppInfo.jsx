import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { DeleteOutline } from "@mui/icons-material";

function createData(
  id,
  userName,
  mobileNo,
  createdDate,
  appStatus,
  viewSms,
  action
) {
  return { id, userName, mobileNo, createdDate, appStatus, viewSms, action };
}

export default function AppInfo(props) {
  const navigate = useNavigate();
 


  const handleClick = (id) => {
    console.log(id);
    navigate("/viewSms", { state: id });
  };

  function convert(str) {
    var date = new Date(str);
    return (
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "  " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  const handleDelete = (id) => {
    console.log(id);
    let auth = localStorage.getItem("auth");

    // console.log(JSON.parse(auth).user.token);
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    axios
      .delete(`https://blinkitssmart.store/api/app/delete/${id}`, config)
      .then((res) => {        
        if(res.data.message !== 'Id not found or Deleted'){
          props.setActiveUser(res.data);
        }else{
          const arr = [];
          props.setActiveUser(arr);
        }
      });
  };
  const rows = [];
  props.activeUser?.map((item, index) => {
    return rows.push(
      createData(
        index + 1,
        item.name,
        item.number,
        convert(item.createAt),
        item.isActive === false ? (
          <div className="flex justify-end">
            <div className="flex  w-20 justify-center bg-orange-200 text-orange-600 bg-opacity-60 rounded-lg">
              <div className="flex justify-center items-center px-[0.30rem] py-[0.11rem] ">
                <p className="text-[0.6rem]">Offline</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="flex  w-20 justify-center bg-green-200 text-green-600 bg-opacity-60 rounded-lg">
              <div className="flex justify-center items-center px-[0.30rem] py-[0.11rem] ">
                <p className="text-[0.6rem]">Online</p>
              </div>
            </div>
          </div>
        ),
        <div>
          <button
            size="small"
            className="text-xs text-blue-500  border-b-2 border-blue-500"
            onClick={() => handleClick(item._id)}
          >
            View Sms
          </button>
        </div>,
        <div
          onClick={() => {
            handleDelete(item._id);
          }}
        >
          <DeleteOutline style={{ fontSize: 20, padding: 0 }} />
          {/* <button size="small" className='text-xs text-blue-500  border-b-2 border-blue-500' onClick={()=>handleClick(item._id)}>View Sms</button> */}
        </div>
      )
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className=" font-bold">Id </TableCell>
            <TableCell align="right" className=" font-bold">
              Name
            </TableCell>
            <TableCell align="right" className=" font-bold">
              mobileNo.
            </TableCell>
            <TableCell align="right" className=" font-bold">
              Created Date
            </TableCell>
            <TableCell align="right" className=" font-bold">
              AppStatus
            </TableCell>
            <TableCell align="right" className=" font-bold">
              View Sms{" "}
            </TableCell>
            <TableCell align="right" className=" font-bold">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.mobileNo}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right">{row.appStatus}</TableCell>
              <TableCell align="right">{row.viewSms}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
