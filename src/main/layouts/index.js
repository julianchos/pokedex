import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/AppBar';
// ----------------------------------------------------------------------
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
/*  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }*/
});

// ----------------------------------------------------------------------
const Layout = () => {
  return (
    <RootStyle>
        <ResponsiveAppBar/>
        <MainStyle>
            <Outlet />
        </MainStyle>
    </RootStyle>
  );
}

export default Layout