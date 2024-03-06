import React from "react";

const Header = () => {
	return (
	<nav class="col-span-4 flex row flex-wrap justify-between items-center w-full h-fit mt-12 px-4">

		<h2 class="font-bold text-2xl text-t-primary">
			پنل مدیریت فروشگاه
		</h2>

		<div class="flex items-center ">
			<div class="w-12 h-12 bg-white rounded-full fill-black flex items-center justify-center p-3.5">
				{/* @include('icons.bell-outline') */}
			</div>

			<div class="w-12 h-12 rounded-full fill-black flex items-center justify-center p-3.5 mr-4">
				{/* @include('icons.user-outline') */}
			</div>
		</div>

	</nav>
	);
};

export default Header;
