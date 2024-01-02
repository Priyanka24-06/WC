
import { MoreVert} from "@mui/icons-material";
import {Menu, MenuItem, styled} from "@mui/material";
import { useState } from "react";

const Menuoption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    color: #4A4A4A;
`


const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleopen = (e) => {
        setOpen(e.currentTarget);
    }

    return (
        <>
            <MoreVert onClick={handleopen}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical : 'bottom',
                    horizontal : 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <Menuoption onClick={() => {handleClose(); setOpenDrawer(true);}}>Profile</Menuoption>
                
            </Menu>
        </>
    )
}
export default HeaderMenu;