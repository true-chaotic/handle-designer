import React, {FC, useEffect, useCallback} from 'react';
import ReactDOM from "react-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import * as paper from 'paper/dist/paper-core';
import { saveAs } from 'file-saver';
import './app.scss';
import drawHandle from "./drawHandle";

// @ts-ignore
paper = paper.default;

const App: FC = () => {
    useEffect(() => {
        paper.setup('myCanvas');

        drawHandle();
    });

    const downLoadSvg = useCallback(() => {
        const svg = paper.project.exportSVG({asString: true});
        const blob = new Blob([svg as BlobPart], {type: "image/svg+xml;charset=utf-8"});

        saveAs(blob, "handle.svg");
    }, [paper]);

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
            <Container>
                <Button variant="contained" size="large" onClick={downLoadSvg}>Download svg</Button>
            </Container>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
