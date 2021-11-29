import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import MainPage from "./pages/MainPage";

// to remove once implementing the route
// import ProductPage from "./pages/ProductPage";   
// import ProfilePage from "./pages/ProfilePage";
import ConsignmentPage from "./pages/ConsignmentPage";

function App() {
  return (
    <div>
      {/* <MainPage/> */}
      {/* to remove once implementing the route */} 
      {/* <ProductPage/>     */}
      {/* <ProfilePage/> */}
      <ConsignmentPage/>
    </div>
  );
}

export default App;
