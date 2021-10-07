import React, {FC, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as paper from 'paper/dist/paper-core';
import './app.scss';
import drawHandle from "./drawHandle";

// @ts-ignore
paper = paper.default;

const App: FC = () => {
    useEffect(() => {
        paper.setup('myCanvas');

        drawHandle();
    });

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Hurdy-Gurdy handle designer
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{overflow: 'auto'}}>
                <canvas id="myCanvas" width="500" height="500"/>
            </div>
        </div>
    );
};

export default App;
