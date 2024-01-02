import Messenger from "./components/Messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./Context/AccountProvider";
function App() {
  const clientId='110269779246-ea4ultprrhd3rj43i0469p9o58mn6n3c.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
