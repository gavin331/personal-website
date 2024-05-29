import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function DownwardArrow(props) {
    const handleClick = () => {
        const targetElement = document.getElementById(props.navTarget);
        if (targetElement) {
            console.log("HELLO")
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        console.log("DIDNT ENTER FUNCTION")
    };

    return (
        <div className="nav-icon">
            <IconButton onClick={handleClick} aria-label="downward-arrow" sx={{ height: 'fit-content' }}>
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
            </IconButton>
        </div>
    );
}

export default DownwardArrow;
