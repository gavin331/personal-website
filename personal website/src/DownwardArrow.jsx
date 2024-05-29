import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function DownwardArrow(props) {
    return (
        <div className="nav-icon">
            <IconButton href={props.navTarget} className="nav-icon" aria-label="downward-arrow" sx={{ height: 'fit-content' }}>
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
            </IconButton>
        </div>
    )
}

export default DownwardArrow