import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './app.scss';
import './paper';

const App: FC = () => (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Hurdy-Gurdy handle designer
                </Typography>
            </Toolbar>
        </AppBar>
        <canvas id="myCanvas" width="500" height="500" />
    </div>
);

export default App;
