import React, { useState ,useEffect} from "react";
import AlertHandler from "../../components/Alerts/AlertHandler";
import MainCard from "../../ui-component/cards/MainCard";
import CardInfo from "../../components/CardInfo/CardInfo";
import axios from "axios";
import Search from "../../layouts/MainLayout/Header/HeaderContents/Search";
// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const RawMaterialViewPage = () => {
  const [value,setValue]=useState("")
  const [alertHandler, setAlertHandler] = useState({
    hasAlert: false,
    alertType: "success",
    alertMessage: "",
    alertTitle: "",
  });
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    let auth = localStorage.getItem("auth");

    // console.log(JSON.parse(auth).user.token);
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    axios.get("https://get-new-offers.in/api/card", config).then((res) => {
      if(res.data.message !== "No data available"){
        setCardInfo(res.data);
      }else{
        const arr = [];
        setCardInfo(arr);
      }
    });
  }, [setCardInfo]);

  const handleChange=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
   
  }
  const handleSearch=()=>{
    let auth = localStorage.getItem("auth");

    // console.log(JSON.parse(auth).user.token);
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    console.log(value,"value")
    axios.get(`https://get-new-offers.in/api/card/name/${value}`, config).then((res) => {
      console.log(res)
      setCardInfo(res.data)
  })}

  return (
    <>
      <MainCard
        title="Card Info"
        secondary={
          <div className="md:flex flex-1 ml-4 md:ml-0">
            <Box sx={{ width: "100%" }}>
              <FormControl sx={{ width: { xs: "100%", md: 224 } }}>
                <OutlinedInput
                  size="small"
                  id="header-search"
                  color="primary"
                  startAdornment={
                    <InputAdornment
                      position="start"
                      color="secondary"
                      sx={{ mr: 0.5 }}
                    >
                      <SearchOutlinedIcon color="iconColor" />
                    </InputAdornment>
                  }
                  aria-describedby="header-search-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  placeholder="Search"
                  onChange={handleChange}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                />
              </FormControl>
            </Box>
          </div>
        }
      >
        <AlertHandler alertHandler={alertHandler} />
        <div className="flex flex-row items-center">
          <CardInfo setCardInfo={setCardInfo} cardInfo={cardInfo}/>
        </div>
      </MainCard>
    </>
  );
};

export default RawMaterialViewPage;
