import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [open, setOpen] = useState(0);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
      ];
    return (
        <div className="text-black bg-yellow-200 p-6">
            
            <div onClick={() => setOpen(!open)} className="text-4xl md:hidden ">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
           <ul className={`md:flex ${open == true ? "top-20" : "-top-60"} bg-yellow-200 px-6 absolute md:static duration-1000`}>
           {
                routes.map((route) => <Link key={route.id} route={route} ></Link>)
            }
           </ul>
        </div>
    );
};

export default Nav;