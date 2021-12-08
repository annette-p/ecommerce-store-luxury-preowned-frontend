import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import './mobile.css'
import MainPage from "./pages/MainPage";
import UserProfileProvider from './contexts/profile/UserProfileProvider'
import ProductProvider from './contexts/products/ProductProvider'

// global variables
global.apiUrl = process.env.REACT_APP_BACKEND_API

function App() {
  return (
    <div>
      <UserProfileProvider>
        <ProductProvider>
          <MainPage/>
        </ProductProvider>
      </UserProfileProvider>
    </div>
  );
}

export default App;
