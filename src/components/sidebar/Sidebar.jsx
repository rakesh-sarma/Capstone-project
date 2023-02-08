import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.jpeg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {

    const[selected, setSelected] = useState(0)
    const [expanded, setExpaned] = useState(true)
    const navigate = useNavigate()

    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }




  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className="Sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Ad<span>m</span>in
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=> {
                return(
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className="menuItem" onClick={()=>navigate("/login")}>
                <UilSignOutAlt/>
                <span>Log Out</span>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar