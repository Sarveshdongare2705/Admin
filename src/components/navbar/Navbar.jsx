import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

//toggle
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';



const Navbar =() =>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                <SearchOutlinedIcon className="icon"/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <LightModeOutlinedIcon  className="icon"/>
                    </div>
                    <div className="item">
                        <ListRoundedIcon  className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;