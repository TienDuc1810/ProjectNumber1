import logo from './logo.svg';
import './App.scss';
import Test from './test';
import ListTodo from './todo/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './NAV/nav';
import Home from './NAV/Home';
import { Routes, Route } from "react-router-dom";
import ListUser from './User/ListUser';
import InfoUser from './User/InfoUser';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/todos" element={<ListTodo/>}></Route>
          <Route path="/about" element={<Test />}></Route>
          <Route path="/user" element={<ListUser />} exact></Route>  
          <Route path="/user/:id" element={<InfoUser />}></Route>  
        </Routes>
      </header>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App;
