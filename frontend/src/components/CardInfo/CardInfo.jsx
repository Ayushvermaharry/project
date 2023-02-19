import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { DeleteOutline } from "@mui/icons-material";

function createData(
  id,
  name,
  mobile,
  address,
  state,
  city,
  pincode,
  cardName,
  cardNumber,
  expMonth,
  expYear,
  cvv,
  type,
  action
) {
  return {
    id,
    name,
    mobile,
    address,
    state,
    city,
    pincode,
    cardName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
    type,
    action,
  };
}

export default function CardInfo(props) {

  const handleDelete = (id) => {
    // console.log(id);
    let auth = localStorage.getItem("auth");
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    axios
      .delete(`http://localhost:5000/api/card/delete/${id}`, config)
      .then((res) => {
        // console.log(res);
        props.setCardInfo(res.data);
      });
  };
  const rows = [];
  props.cardInfo.map((item, index) => {
    return rows.push(
      createData(
        index + 1,
        item.name,
        item.number,
        item.address,
        item.state,
        item.city,
        item.pincode,
        item.nameOnCard,
        item.cardNumber,
        item.expMM,
        item.expYY,
        item.cvv,
        item.typeOfCard,
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
            <TableCell className=" font-bold" align="right">
              Name
            </TableCell>
            <TableCell className=" font-bold" align="right">
              mobile.
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Address
            </TableCell>
            <TableCell className=" font-bold" align="right">
              State
            </TableCell>
            <TableCell className=" font-bold" align="right">
              City
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Pin Code
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Card Name
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Card Number
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Exp Month
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Exp Year
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Cvv
            </TableCell>
            <TableCell className=" font-bold" align="right">
              Type
            </TableCell>
            <TableCell className=" font-bold" align="right">
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.pincode}</TableCell>
              <TableCell align="right">{row.cardName}</TableCell>
              <TableCell align="right">{row.cardNumber}</TableCell>
              <TableCell align="right">{row.expMonth}</TableCell>
              <TableCell align="right">{row.expYear}</TableCell>
              <TableCell align="right">{row.cvv}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
