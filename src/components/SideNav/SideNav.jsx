import React from "react";
import Card from "../Global/Card"
import { Link } from "react-router-dom";
import SideNavLink from "./SideNavLink";
import {Squares2X2Icon, DocumentTextIcon, UserGroupIcon, Square3Stack3DIcon, ArrowRightEndOnRectangleIcon} from '@heroicons/react/24/solid'

const SideNav = () => {
	return (
		<aside class="h-admin-full-card-height grid-cols-1">
			<Card className="h-admin-full-card-height">


			{/* User's Name and Photo Section */}

			<div class="flex justify-start items-center">
				
				<img
					src="/storage/media/images/admin/test-profile.jpg"
					alt="profile-pic"
					class="w-10 h-10 rounded-full"/>

				<span class="mr-4 text-xl font-bold text-dark-primary">عرفان دهقانی</span>

			</div>

			{/* End */} 


			{/* Navigation items */}

			<div className="py-4 space-y-2 grow">
				<SideNavLink link="/" name="داشبورد" icon={<Squares2X2Icon/>}/>
				<SideNavLink link="/Catgories" name="دسته بندی" icon={<Square3Stack3DIcon/>}/>
				<SideNavLink link="/Content" name="محتوا" icon={<DocumentTextIcon/>}/>
				<SideNavLink link="/Users" name="کاربران" icon={<UserGroupIcon/>}/>
			</div>

			{/* End */}


			{/* Logiut button on the bottom of the nav */}

			<div>
				<a href="/admin/logout"
				class="flex items-center justify-start font-normal hover:font-bold fill-light-secondary px-4 py-2 rounded-full hover:fill-secondary duration-100 mt-2"
				>
					<div class="w-7 flex justify-center items-center">
						<ArrowRightEndOnRectangleIcon className="size-6 text-inherit"/>
					</div>
					<span class="mr-4">خروج از حساب کاربری</span>

				</a>
			</div>

			{/* End */}

			</Card>
		</aside>
	);
};

export default SideNav;
