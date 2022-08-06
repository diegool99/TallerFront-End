import { Store } from "./Store/Store";
import { Provider } from "react-redux";

import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register'


const App = () => {
  return (
    <Provider store={Store}>
      {/* <Register /> */}
      {/* <Login/> */}
      <Dashboard />
    </Provider>
  )
}

export default App
