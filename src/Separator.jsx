import React from 'react';
import SeparatorLogo from './resources/separator.svg';
import { Box } from '@mui/material';

function Separator() {

    return (
        <div style={{height: '0px', position: 'relative'}}>
            <img src={SeparatorLogo} style={{position: 'absolute', left: '0px', top: '-150px', width: '100%'}}/>
        </div>
        
    )
}

export default Separator;