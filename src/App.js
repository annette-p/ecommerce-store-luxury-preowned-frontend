import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainPage from "./pages/MainPage";

// global variables
global.apiUrl = process.env.REACT_APP_BACKEND_API

function App() {
  return (
    <div>
      <MainPage/>
    </div>
  );
}

export default App;
