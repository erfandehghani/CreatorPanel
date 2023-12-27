import Router from "./Router";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/header/Header";

export default function App() {
	return (
		<div>
			<Header />

			<SideNav />

			<main className="col-span-3 grid grid-cols-3 gap-4">
				<Router />
			</main>

		</div>
	);
}
