import { BellAlertIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
	<nav class="col-span-4 flex row flex-wrap justify-between items-center w-full h-fit mt-12 px-4">

		<h2 class="font-bold text-2xl text-dark-primary">
			پنل مدیریت
		</h2>

		<div class="flex items-center ">
			<div className="w-12 h-12 bg-white duration-100 hover:shadow-md rounded-full fill-black flex items-center justify-center p-3.5">
				<BellAlertIcon className="size-6"/>
			</div>

			<NavLink
			to="/Profile" 
			className={({ isActive }) => (
                // Check if the link is active and apply the following styles
                isActive ? 
                'w-12 h-12 bg-blue-primary text-white duration-100 hover:shadow-md rounded-full fill-black flex items-center justify-center p-3.5 mr-4' 
                
                // if the link was not active... apply these classes
                :'w-12 h-12 bg-white duration-100 hover:shadow-md rounded-full fill-black flex items-center justify-center p-3.5 mr-4'
                )}>
				<UserIcon className="size-6"/>
			</NavLink>
		</div>

	</nav>
	);
};

export default Header;
