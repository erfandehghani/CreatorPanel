import React from "react";
import Card from "../components/Global/Card"
import CardHeader from "../components/Global/CardHeader";

const dashboard = () => {
	return (
	<>
		{/* sales in the last year */}
			<Card className="col-span-1 h-admin-half-card-height">

				<CardHeader cardTitle="فروش یک سال اخیر"/>

				{/* @vite('resources/js/admin/salesThisYearChart.js') */}

				<canvas id="salesOfTheYear">
					<p>Hello Fallback World</p>
				</canvas>

			</Card>


		{/* sales in the last 14 days */}
			<Card className="col-span-2 h-admin-half-card-height">

				<CardHeader cardTitle="فروش 14 روز گذشته"/>

				{/* @vite('resources/js/admin/salesCountChart.js') */}
				<canvas id="acquisitions">
					<p>Hello Fallback World</p>
				</canvas>

			</Card>
	</>
	);
};

export default dashboard;
