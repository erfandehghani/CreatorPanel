import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
	return (
		<div className="w-[25rem] flex flex-col">
			<p>sidenav</p>
			<ul className="flex flex-col">
				<li>
					{" "}
					<Link to="/"> dashboard</Link>
				</li>
				<li>
					{" "}
					<Link to="/Catgories"> Catgories</Link>
				</li>
				<li>
					{" "}
					<Link to="/Content"> content</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
