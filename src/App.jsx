import Router from "./Router";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/header/Header";

export default function App() {
	return (
		<div>
			<Header />

			<div className=" flex ">
				<SideNav />

				<main>
					<Router />
				</main>
			</div>

			{/* Navigation */}
			{/* <x-admin.nav/> */}

			{/* Side Navigation */}
			{/* <x-admin.side-nav/> */}

			{/* <main class="col-span-3 grid grid-cols-3 gap-4">
				{/* Main content of the page */}
			{/* </main> */}

			{/* An status modal to show what happened after making a request to server */}
			{/* <x-admin.inform-modal/> */}
		</div>
	);
}
