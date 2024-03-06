import Router from "./Router";
import Header from "./components/Global/Header";
import SideNav from "./components/SideNav/SideNav";

export default function App() {
	return (
		<>
			<Header />

			<SideNav />	

			<main className="grid grid-cols-3 col-span-3 gap-4 h-admin-full-card-height">
				<Router />
			</main>

		</>
	);
}
