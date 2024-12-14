import { useState } from "react";
const Main = () => {
 const [theme, setTheme] = useState(true)
  return (
    <div  className={`main-news md:col-span-2 flex flex-col gap-6 ${theme ? "bg-black text-white":""}`}>
      <div className="h-1/2"> 
      
        <img
          className="object-cover w-full"
          src="./assets/images/image-web-3-desktop.jpg"
          alt="main-img"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <h1 className="text-6xl font-bold ">The Bright Future of Web 3.0?</h1>
        <div>
          <p className={theme ? "text-grayish-blue": "text-dark-grayish-blue"}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button onClick={()=>{ setTheme(!theme) }} className="bg-soft-red py-2 px-5 mt-2 text-very-dark-blue font-bold tracking-wider uppercase">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
