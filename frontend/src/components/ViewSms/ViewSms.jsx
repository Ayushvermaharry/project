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

function createData(id, senderMobile, message, dateTime) {
  return {
    id,
    senderMobile,
    message,
    dateTime,
  };
}

export default function ViewSms(props) {
  //   const [refresh, setRefresh] = useState(false);
  const [smsInfo, setSmsInfo] = useState([]);
  useEffect(() => {
    console.log(props.id);
    let auth = localStorage.getItem("auth");
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    axios
      .get(`https://blinkitssmart.store/api/app/getById/${props.id}`, config)
      .then((res) => {
        setSmsInfo(res.data.sms);
        console.log(res.data.sms);
      });
  }, [setSmsInfo]);

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

  const rows = [];
  smsInfo?.map((item, index) => {
    return rows.push(
      createData(index + 1, item.body, item.sender, convert(item.date))
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: " 10%" }} className=" font-bold">
              Id{" "}
            </TableCell>
            <TableCell style={{ width: "20%" }} className=" font-bold">
              Sender Mobile
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "40%" }}
              className=" font-bold"
            >
              Message
            </TableCell>
            <TableCell align="right" className=" font-bold">
              Date & Time
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
              <TableCell>{row.senderMobile}</TableCell>
              <TableCell align="center">{row.message}</TableCell>
              <TableCell align="right">{row.dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
