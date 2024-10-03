import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to import the CSS file if you're using external CSS


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6"
                    component={Link}
                    to="/"
                    className="header-title">
                    RN. SABINA JOSHI
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
