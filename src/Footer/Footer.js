import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '10px 0', width: '100%' }}>
            <Container>
                <Typography variant="body2" align="center">
                    © 2024 DHYAKSHI. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
