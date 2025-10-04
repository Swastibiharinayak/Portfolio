import NavItems from "./NavItems";

const Nav = () =>{
    const navitems = ["Home","Projects","Tools","Contact"]
    return (
        <nav>
            <div id="navlist">
                {
                    navitems.map((item)=>{
                        return (<NavItems item = {item}/>)
                    })
                }
            </div>
        </nav>
    )
}

export default Nav;