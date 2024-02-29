import React from "react";
import Card from "./Global/Card"
import CardHeader from "./Global/CardHeader";

const dashboard = () => {
	return (
	<>
		{/* sales in the last year */}
		<div class="h-admin-half-card-height col-span-1">
			<Card>

				<CardHeader cardTitle="فروش یک سال اخیر"/>

				{/* @vite('resources/js/admin/salesThisYearChart.js') */}

				<canvas id="salesOfTheYear">
					<p>Hello Fallback World</p>
				</canvas>

			</Card>
		</div>


		{/* sales in the last 14 days */}
		<div class="h-admin-half-card-height col-span-2">
			<Card>

				<CardHeader cardTitle="فروش 14 روز گذشته"/>

				{/* @vite('resources/js/admin/salesCountChart.js') */}
				<canvas id="acquisitions">
					<p>Hello Fallback World</p>
				</canvas>

			</Card>
		</div>
	</>
	);
};

export default dashboard;
