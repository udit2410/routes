// my-react-login-app/src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
const history = BrowserRouter();

  const handleLogin = async () => {
     
    const route=await fetch("http://localhost:3000/home").then(()=>{
        // history.push('/home'); 
    })
            
      
    
  };

  return (
    <div>
      <h1>Login App</h1>
      <button >Login</button>
    </div>
  );
};

export default App;
