import { useState, useEffect, useContext } from 'react';
import { Box, styled, Divider } from '@mui/material';
import Conversations from './Conversations';
import { getUsers } from '../../../service/api';
import { AccountContext } from '../../../Context/AccountProvider';

const Component=styled(Box)`
    height=81vh;
    overflow=overlay;    
`;
const StyledDivider= styled(Divider)`
    margin: 0 0 0 70px;
    background-color:#e9edef;
    opacity: .6;

`

const Conversation = ({text}) => {

    const [users, setUsers] = useState([]);
    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            let filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                <>
                    <Conversations user={user}/>
                    <StyledDivider/>
                </>
                ))
            }
        </Component>
    )
}
export default Conversation;