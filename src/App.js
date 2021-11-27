import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainPage from "./pages/MainPage";
// import ProfilePage from "./pages/ProfilePage";

// to remove once implementing the route
// import ProductPage from "./pages/ProductPage";   

function App() {
  return (
    <div>
      <MainPage/>
      {/* to remove once implementing the route */} 
      {/* <ProductPage/>     */}
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
