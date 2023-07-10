import { IconButton } from '@mui/material';
import './NavBar.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function NavBar() {

    return <>
        <div className="navbar">
            <IconButton>
                <MenuRoundedIcon />
            </IconButton>
            <div className="navbar__content">
                <p>
                    Ali Haidar Md
                </p>
            </div>
        </div>
    </>
}