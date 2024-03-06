import Router from "./Router";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/header/Header";

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
