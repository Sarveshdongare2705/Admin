import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DvrIcon from '@mui/icons-material/Dvr';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Person4Icon from '@mui/icons-material/Person4';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar =() =>{
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">ControlCenter</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title"> Main</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    <p className="title">List</p>
                    <li><GroupIcon  className="icon"/><span>Users</span></li>
                    <li><ProductionQuantityLimitsIcon className="icon"/><span>Products</span></li>
                    <li><DvrIcon className="icon"/><span>Orders</span></li>
                    <li><DeliveryDiningIcon className="icon"/><span>Delivery</span></li>
                    <p className="title">Other</p>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>
                    <li><NotificationsActiveIcon className="icon"/><span>Notifications</span><div className="value">3</div></li>
                    <li><BarChartIcon className="icon"/><span>Stats</span></li>
                    <p className="title">User</p>
                    <li><Person4Icon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <span>Theme Settings</span>
                <div className="color">
                <div className="coloropt"></div>
                <div className="coloropt"></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;