import React from 'react'
import LightButton from "../assets/LightButton.png";
import NightButton from "../assets/NightButton.png";

const DarkMode = () => {
  const [theme, setTheme]=React.useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"Light");
   
  const element=document.documentElement; //html element
  React.useEffect(()=>{
    if (theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
      else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
      }
      },[theme]);
    
  return (
    <div className='relative'>
    
      <img src={LightButton} alt='Light mode' 
      onClick={()=>setTheme(theme==="light"?"dark":"light")}
       className={`w-12 h-5 cursor-pointer drop-shadow-md transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
       />
      
   
      <img src={NightButton} alt='' 
 onClick={()=>setTheme(theme==="light"?"dark":"light")}
 className={'w-12 h-5 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]transition-all duration-300 ' }
     />
      
    </div>
    
  );
}

export default DarkMode;



