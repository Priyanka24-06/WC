import { useState } from "react";

import Search from "./Search";
import Header from "./Header";
import { Box  } from "@mui/material";
import Conversation from "./Conversation";




const Menu = () => {

    const [text, setText] = useState('');
    return (
        <Box>
            <Header/>
            <Search setText={setText}/>
            <Conversation text={text}/>
        </Box>
    )
}
export default Menu;