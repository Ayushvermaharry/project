import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import RawMaterialView from '../../components/RawMaterialView/RawMaterialView'
import AlertHandler from '../../components/Alerts/AlertHandler';
import MainCard from '../../ui-component/cards/MainCard';
import Table from '../../components/RawMaterialView/Table'
const RawMaterialViewPage = () => {
  const [alertHandler , setAlertHandler ] = useState({
    hasAlert : false,
    alertType:"success",
    alertMessage: "",
    alertTitle: ""
  })

  return (
    <>
    <MainCard >
      <AlertHandler alertHandler={alertHandler} />
      <div className="flex flex-row items-center">
        <RawMaterialView alert={setAlertHandler}/>
        {/* <Table/> */}
      </div>
    </MainCard>
  </>
  )
}

export default RawMaterialViewPage