import React from 'react'
import MainCard from '../../ui-component/cards/MainCard'
import {useLocation} from 'react-router-dom';
import ViewSms from '../../components/ViewSms/ViewSms';

const Dashboard = () => {
  const location = useLocation();
  console.log(location.state)
  return (
    <>
    <MainCard title="View Sms">
    <ViewSms id={location.state&&location.state}/>
    </MainCard> 
    </>
  )
}
export default Dashboard;