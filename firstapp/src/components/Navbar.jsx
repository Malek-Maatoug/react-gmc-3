const Navbar = ()=>{
    const navEl= [
        "Home",
        "New",
        "Popular",
        "Trending",
        "Categories"
    ]
    return(
        <nav className="flex justify-between p-3 items-center" >
           <img src="./assets/images/logo.svg" alt="logo" />
            <ul className="flex gap-5">
                {
                    navEl.map( (v,i) => <li key={i} > {v} </li> )
                }
            </ul>
        </nav>
    )
}
export default Navbar