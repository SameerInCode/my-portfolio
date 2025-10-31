import { useState,useEffect } from "react";
import {FaSun,FaMoon} from "react-icons/fa";

function ThemeToggle(){
  const[darkMode,setDarkMode]=useState(()=>{
  const savedMode = localStorage.getItem("darkMode");
  return savedMode==="true";
  });
  const toggleTheme=()=>{
    const newMode=!darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode",newMode);
  };
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark-mode")
    }
    else{
      document.body.classList.remove("dark-mode")
    }
  },[darkMode]);
  return(
    <button onClick={toggleTheme} className="theme-toggle" >
      {darkMode ? <FaSun/> : <FaMoon/>}
    </button>
  );
}

export default ThemeToggle;