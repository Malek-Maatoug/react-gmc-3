import { useState } from "react"
const Navbar = ()=>{
    const navEl= [
        "Home",
        "New",
        "Popular",
        "Trending",
        "Categories"
    ]
    const [open, setOpen] = useState(false)
    return(
        <nav className="relative flex justify-between p-3 items-center" >
           <img src="./assets/images/logo.svg" alt="logo" />
           <button className="md:hidden" onClick={()=>{setOpen(!open)}} >
            menu
           </button>
            <ul className={`absolute z-10   md:static ${open ? "flex flex-col":"hidden"} right-0 top-full bg-white md:flex md:gap-5`}>
                {
                    navEl.map( (v,i) => <li key={i} > {v} </li> )
                }
            </ul>
        </nav>
    )
}
export default Navbar