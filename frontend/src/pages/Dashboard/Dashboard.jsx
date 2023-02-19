import React from 'react'
import MainCard from '../../ui-component/cards/MainCard'
import {useLocation} from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  console.log(location.state)
  return (
    <>
    <MainCard title="View Sms">
      ViewSms
    </MainCard> 
    </>
  )
}
export default Dashboard;