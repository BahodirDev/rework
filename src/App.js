import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import SignUp from './Screens/SignUp';
import Login from './Screens/SignIn';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

function App() {
  const user = useSelector(state=>state);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:'PENDING',payload:JSON.parse(localStorage.getItem('user'))})
  },[])
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/signup' index element={<SignUp />} />
        <Route path='/sign' index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
