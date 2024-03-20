import React from "react";
import Card from "./Global/Card";
import CardHeader from "./Global/CardHeader";
import { PlusIcon } from "@heroicons/react/24/outline";
import TextInput from "./Global/Inputs/TextInput";
import SelectInput from "./Global/Inputs/SelectInput";
import TextareaInput from "./Global/Inputs/TextareaInput";
import SubmitInput from "./Global/Inputs/SubmitInput";
import { useState } from "react";
import CategoryListItem from "./Categories/CategoryListItem";

const categories = [
  {
    id: 1,
    name: "لوازم الکترونیکی",
    metaDescription: "آخرین لوازم الکترونیکی و گجت ها را کشف کنید",
    description:
      "از گوشی های هوشمند و لپ تاپ ها گرفته تا لوازم خانگی و دوربین ها، بهترین محصولات الکترونیکی را برای نیازهای خود پیدا کنید.",
    parentId: null,
  },
  {
    id: 2,
    name: "پوشاک",
    metaDescription: "با مجموعه پوشاک ما، استایل داشته باشید",
    description:
      "آخرین روندها و سبک های مد را در دسته بندی پوشاک ما کشف کنید که شامل لباس های مردانه، زنانه و کودکان می شود.",
    parentId: null,
  },
  {
    id: 3,
    name: "کتاب ها",
    metaDescription: "در دنیای کتاب ها غرق شوید",
    description:
      "کتاب بعدی خود را از میان انتخاب گسترده کتاب ها در ژانرهای مختلف از جمله داستان، غیرداستان و بیشتر پیدا کنید.",
    parentId: null,
  },
  {
    id: 4,
    name: "گوشی های هوشمند",
    metaDescription: "آخرین گوشی های هوشمند را کشف کنید",
    description:
      "از مجموعه گوشی های هوشمند جدیدترین و بهترین از برندهای برتر با فناوری پیشرفته و ویژگی های نوآورانه دیدن کنید.",
    parentId: 1,
  },
  {
    id: 5,
    name: "پوشاک مردانه",
    metaDescription: "ضروریات مد مردانه",
    description:
      "گزینه های لباس شیک و راحت برای آقایان را کشف کنید، از جمله پیراهن، شلوار، کت و موارد بیشتر.",
    parentId: 2,
  },
];

const Catgories = () => {
  // Reactive CategoryId and Category
  const [selectedCategoryId, setCategoryId] = useState(null);
  const [selectedCategory, setCategory] = useState(null);

  // Sets the category id and ClassName if user clicked on it
  function selectCategory(category) 
  {
    setCategoryId(category.id);
    setCategory(category)
  }

  function clearSelectedCategory() 
  {
    setCategoryId(null);
    setCategory(null)
  }
    
  return (
    <>
      {/* First Section: Choosing a category */}
      <Card className="col-span-1 h-admin-full-card-height">
        {/* Card Header */}
        <CardHeader cardTitle={"دسته بندی ها"} />

        {/* Loop over all categories and echo them out */}
        <div class="flex-grow py-6 space-y-4">
          {categories.map((category) => {
            return (
              <CategoryListItem
                clickHandler={selectCategory}
                category={category}
                active={selectedCategoryId === category.id ? true : false}
              />
            );
          })}
        </div>

        {/* Adding new categories */}
        <div onClick={clearSelectedCategory} class="flex items-center justify-start font-normal hover:font-bold fill-light-secondary px-4 py-2 hover:fill-secondary duration-100 mt-2 cursor-pointer">
          <div class="w-7 flex justify-center items-center">
            <PlusIcon className="size-6 text-inherit" />
          </div>
          <span class="mr-4">افزودن دسته جدید</span>
        </div>
      </Card>

      {/* Second Section: Editing Or Adding a new category */}
      <Card className="col-span-2 h-admin-full-card-height">
        <CardHeader cardTitle={"ویرایش / افزودن دسته"} />

        <form class="flex-grow py-8 space-y-6 overflow-y-scroll pl-4">
          <TextInput
            name="name"
            label="نام دسته"
            description="نام دسته را وارد کنید"
            value={selectedCategory != null ? selectedCategory.name : ""}
          />

          <SelectInput
            name="parent"
            label="دسته والد - در صورت وجود"
            description="والد را انتخاب کنید"
            options={categories}
            value={selectedCategory != null ? selectedCategory.parentId : ""}
          />

          <TextareaInput
            name="metaDesc"
            label="متا دیسکریپشن دسته"
            description="باید یک متن شامل 60 الی 160 کارکتر برای نمایش به عنوان شرح صفحه در موتور های جستجو وارد کنید."
            value={selectedCategory != null ? selectedCategory.metaDescription : ""}
          />

          <TextareaInput
            name="description"
            label="توضیحات صفحه دسته"
            description="باید یک یا دو پاراگراف حداکثر دارای 480 کارکتر برای نمایش در صفحه مخصوص دسته که مطالب آن نمایش داده میشوند وارد کنید"
            value={selectedCategory != null ? selectedCategory.description : ""}
          />

          <SubmitInput />
        </form>
      </Card>
    </>
  );
};

export default Catgories;
