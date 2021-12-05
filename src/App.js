import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainPage from "./pages/MainPage";
import UserProfileProvider from './contexts/profile/UserProfileProvider'

// global variables
global.apiUrl = process.env.REACT_APP_BACKEND_API

function App() {
  return (
    <div>
      <UserProfileProvider>
        <MainPage/>
      </UserProfileProvider>
    </div>
  );
}

export default App;
