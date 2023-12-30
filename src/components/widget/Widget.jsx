import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';

const Widget =({type}) =>{

    let data;
    switch(type){
        case 'user':
            data = {
                title:'Users',
                isMoney:false,
                value: '1.27M',
                percentage: 19,
                pdecrease:false,
                link:'See all users',
                icon:<PersonIcon className="icon" />
            }
            break;
            case 'order':
                data = {
                    title:'Orders',
                    isMoney:false,
                    value:'21.9K',
                    percentage:11,
                    pdecrease:true,
                    link:'See all orders',
                    icon:<ShoppingCartIcon className="icon" />
                }
                break;
                case 'earning':
                    data = {
                        title:'Earnings',
                        isMoney:true,
                        value:'1.83M',
                        percentage:7,
                        pdecrease:true,
                        link:'See all earnings',
                        icon:<AccountBalanceWalletOutlinedIcon className="icon" />
                    }
                    break;
                    case 'balance':
                        data = {
                            title:'Balance',
                            isMoney:true,
                            value:'3.17B',
                            percentage:13,
                            pdecrease:false,
                            link:'See balance sheet',
                            icon:<MonetizationOnOutlinedIcon className="icon" />
                        }
                        break;
        default:
            break;
    }
    return(
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney ?<><EuroOutlinedIcon />{data.value}</> : data.value}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className={`percentage ${data.pdecrease ? 'negative' : 'positive'}`}>
                {data.percentage}% {data.pdecrease ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;