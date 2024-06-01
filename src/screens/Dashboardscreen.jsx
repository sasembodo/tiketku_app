import React from 'react';
import SideMenu from '../components/SideMenu';
import { useNavigate, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Dashboard = () => {
  return (
    <Container>
        <SideMenu/>
        <Outlet/>
    </Container>
  );
};

const Container = styled.section``

export default Dashboard;
