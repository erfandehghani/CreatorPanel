import React from "react";
import Card from "./Global/Card";
import CardHeader from "./Global/CardHeader";
import { PlusIcon } from "@heroicons/react/24/outline";
import TextInput from "./Global/Inputs/TextInput";
import SelectInput from "./Global/Inputs/SelectInput";
import TextareaInput from "./Global/Inputs/TextareaInput";
import SubmitInput from "./Global/Inputs/SubmitInput";


const Catgories = () => {


    const testOptions = [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
        {id: 3, name: 'Carl', country: 'Canada'},
        {id: 4, name: 'Dean', country: 'Denmark'},
        {id: 5, name: 'Ethan', country: 'Egypt'},
      ];

	return(
		<>
			{/* First Section: Choosing a category */}
			<Card className="col-span-1 h-admin-full-card-height">

				{/* Card Header */}
				<CardHeader cardTitle={"دسته بندی ها"}/>


				{/* Loop over all categories and echo them out */}
				<div class="flex-grow py-6 space-y-4">
					<div class="flex w-full justify-between items-center px-4 hover:bg-light-primary hover:text-blue-primary py-2 rounded-4xl text-light-auxulary cursor-pointer font-medium transition duration-100">
						<span>دسته اول</span>
						<span>55</span>
					</div>
				</div>


				{/* Adding new categories */}
				<div
					class="flex items-center justify-start font-normal hover:font-bold fill-light-secondary px-4 py-2 hover:fill-secondary duration-100 mt-2 cursor-pointer">
					<div class="w-7 flex justify-center items-center">
						<PlusIcon className="size-6 text-inherit"/>
					</div>
					<span class="mr-4">افزودن دسته جدید</span>
				</div>
			</Card>

			{/* Second Section: Editing Or Adding a new category */}
			<Card className="col-span-2 h-admin-full-card-height">
				<CardHeader cardTitle={"ویرایش / افزودن دسته"}/>

				<form class="flex-grow py-8 space-y-6 overflow-y-scroll pl-4">

					<TextInput name="name" label="نام دسته" description="نام دسته را وارد کنید"/>
					
					<SelectInput name="parent" label="دسته والد - در صورت وجود" description="والد را انتخاب کنید" options={testOptions}/>

					<TextareaInput name="metaDesc" label="متا دیسکریپشن دسته"
					description="باید یک متن شامل 60 الی 160 کارکتر برای نمایش به عنوان شرح صفحه در موتور های جستجو وارد کنید."/>
					
					<TextareaInput name="description" label="توضیحات صفحه دسته"
					description="باید یک یا دو پاراگراف حداکثر دارای 480 کارکتر برای نمایش در صفحه مخصوص دسته که مطالب آن نمایش داده میشوند وارد کنید"/>

					<SubmitInput/>
				</form>

			</Card>
		</>
	);
};

export default Catgories;
