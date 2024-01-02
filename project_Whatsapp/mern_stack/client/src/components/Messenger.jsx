import { useContext } from "react";
import { AppBar, Toolbar, styled , Box} from "@mui/material";

import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../Context/AccountProvider";
const Component= styled(AppBar)`
    height: 100vh;
    background-color:#DCDCDC;
    box-shadow:none;
`;
const Header= styled(AppBar)`
    height: 125px;
    background-color:#00A884;
    box-shadow:none;
`;
const LoginHeader= styled(AppBar)`
    height: 220px;
    background-color:#00bfa5;
    box-shadow:none;
`;

const Messenger = () => {


    const {account} = useContext(AccountContext);
    return(
        <Component>{
            //if any value in account open chatdialog else login dialog
            account
            ?
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/>
            </>
            :
            <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog/>
            </>

            }
        </Component>
    )
}
export default Messenger;