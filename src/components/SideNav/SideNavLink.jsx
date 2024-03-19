import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({name, link, icon}) => {
	return (
		<NavLink
            to={link}
            className={({ isActive }) => (
                // Check if the link is active and apply the following styles
                isActive ? 
                'font-bold text-blue-primary flex items-center justify-start hover:bg-light-primary  px-4 py-2 rounded-full duration-100 group' 
                
                // if the link was not active... apply these classes
                :'flex text-light-secondary items-center justify-start hover:bg-light-primary px-4 py-2 rounded-full duration-100 group'
                )}
        >
            <div class="w-7 flex justify-center items-center text-current group-hover:text-blue-primary">
                { icon }
            </div>
            <span class="mr-4 text-dark-primary group-hover:font-bold">{  name  }</span>

        </NavLink>
	);
};

export default SideNavLink;
