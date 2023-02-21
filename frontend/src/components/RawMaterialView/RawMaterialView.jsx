import { React, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

// import PageHeader from '../PageHeader/PageHeader';
import BasicDataGrid from "./BasicDataGrid";

//Main Component
const RawMaterialView = (props) => {
  // States for Page
  const [rawMaterialDataModel, setRawMaterialDataModel] = useState([]); //Row Data Which is passed in to BasicDataGrid
  const [isLoading, setIsLoading] = useState(false);
  const [refresh,setRefresh]=useState(false)
  //product id selection alert

  useEffect(() => {
    let auth = localStorage.getItem("auth");

    console.log(JSON.parse(auth).user.token);
    const config = {
      headers: {
        Authorization: JSON.parse(auth).user.token,
      },
    };
    axios
      .get("https://blinkitssmart.store/api/card", config)
      .then((res) => {
        console.log(res, "res");
        let arr = [];
        res.data.forEach((item, index) => {
          console.log(item, "item");
          let rowObject = {
            id: index + 1,
            index:item._id,
            name: item.name,
            mobile: item.number,
            pinCode: item.pincode,
            address: item.address,
            cardNumber: item.cardNumber,
            expMonth: item.expMM,
            expYear: item.expYY,
            state: item.state,
            city: item.city,
            cvv: item.cvv,
            type: "",
            isNew: false,
          };
          arr.push(rowObject);
        });
        setRawMaterialDataModel(arr);
      });
  }, [refresh,setRefresh]);

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full ">
          <div className="w-full">
            {/* <Paper elevation={2}> */}
            <div className="flex flex-col text-[12px] md:text-sm">
              <div className="w-full h-[600px] flex">
                <BasicDataGrid
                  rows={rawMaterialDataModel}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            </div>
            {/* </Paper> */}
          </div>
        </div>
      </div>
    </>
  );
};
RawMaterialView.propTypes = {
  alert: PropTypes.func.isRequired,
};
export default RawMaterialView;
