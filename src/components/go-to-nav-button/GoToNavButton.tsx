import "./GoToNavButton.scss";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface IGoToNavButtonProps { }

const GoToNavButton: React.FunctionComponent<IGoToNavButtonProps> = (props: IGoToNavButtonProps) => {
    return <>
        <IconButton size="medium" className="go-to-nav-button" onClick={goToNavSection}>
            <MenuIcon />
        </IconButton>
    </>
}

const goToNavSection = () => {
    document.getElementsByClassName("App")[0].scroll({
        top: document.getElementById("navCards")!.offsetTop,
        behavior: "smooth"
    });
}

export default GoToNavButton;