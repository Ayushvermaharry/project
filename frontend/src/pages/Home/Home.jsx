import React,{useEffect,useState} from 'react'
// import Layout from '../../layouts/MainLayout/Layout2'
import MainCard from '../../ui-component/cards/MainCard'
import Table from '../../components/AppInfo/AppInfo'
import axios from "axios";
// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Home = () => {
    const [value,setValue]=useState("")
    const [activeUser, setActiveUser] = useState([]);
    useEffect(() => {
      let auth = localStorage.getItem("auth");
  
      // console.log(JSON.parse(auth).user.token);
      const config = {
        headers: {
          Authorization: JSON.parse(auth).user.token,
        },
      };
      axios.get("https://blinkitssmart.store/api/app", config).then((res) => {
        setActiveUser(res.data);
      });
    }, [setActiveUser]);
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
    axios.get(`https://blinkitssmart.store/api/app/getByName/${value}`, config).then((res) => {
      console.log(res)
      setActiveUser(res.data)
  })}
  return (
    <MainCard title="Active User" secondary={
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
        }>
    
     <Table setActiveUser={setActiveUser} activeUser={activeUser}/>
    </MainCard>
  )
}

export default Home;
