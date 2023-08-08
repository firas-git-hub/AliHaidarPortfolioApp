import './NavBar.scss';
import React from "react";
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useTranslation } from 'react-i18next';

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {

    const { t } = useTranslation();

    return <>
        <div className="navbar">
            <IconButton>
                <MenuRoundedIcon />
            </IconButton>
            <div className="navbar__content">
                <p>
                    {t("navbarText")}
                </p>
            </div>
        </div>
    </>
}

export default NavBar;