//import useState hook to create menu collapse state
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import AddOperator from "./AddOperators";


const Sidebar = () => {
    const navigate = useNavigate();
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p><FaList onClick={menuIconClick} />
                                {menuCollapse ? "" : "    Bal Raj"}</p>
                        </div>

                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}
                                      onClick={() => navigate('/home')}>
                                Home
                            </MenuItem>
                            <MenuItem active={true} icon={<FaList />}>Lists</MenuItem>
                            <MenuItem active={true} icon={<RiPencilLine />}><span><Link to={/Notifications/}>Notifications</Link></span></MenuItem>
                            <MenuItem active={true} icon={<FaList/>}><span ><AddOperator/></span></MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>

                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;