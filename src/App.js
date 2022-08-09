import { Store } from "./Store/Store";
import { Provider } from "react-redux";
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Provider store={Store}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>
      </BrowserRouter>

    </Provider>
  )
}

export default App
