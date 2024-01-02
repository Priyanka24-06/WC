import { useContext } from "react";
import { Dialog ,Box,Typography, List, ListItem, styled} from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from "../../Context/AccountProvider";
import { addUser } from "../../service/api";
const Component = styled(Box)`
    display:flex; //displays side by side
`;
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;
const QRCode = styled('img')({
    height:264,
    width:264,
    margin:'40px 40px 40px 40px'
})
const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom: 25px;
`;
const StyledList = styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height: 28px;
        color: #4a4a4a;
    }

`
const dialogStyle = {
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}
const LoginDialog = () =>{


    const {setAccount} = useContext(AccountContext);
    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        //console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res) => {
        console.log('Login failed',res);

    }

    return (
        <Dialog 
        open = {true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To use whatsapp on computer</Title>
                    <StyledList>
                        <ListItem>1.Open Whatsapp on your phone</ListItem>
                        <ListItem>2.Tap Menu: or settings and select Linked List </ListItem>
                        <ListItem>3.Point your phone to this screen to capture this screen </ListItem>
                    </StyledList>
                </Container>
                <Box style={{position: 'relative'}}>
                    <QRCode src={qrCodeImage} alt='qrcode' />
                    <Box style={{position: 'absolute',top:'50%', transform:'translateX(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>       
        </Dialog>
    )
}
export default LoginDialog;
