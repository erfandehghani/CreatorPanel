import React from 'react';
import Card from './Global/Card';
import CardHeader from "./Global/CardHeader";
import TextInput from './Global/Inputs/TextInput';
import SubmitInput from './Global/Inputs/SubmitInput'; // Assuming you have a button component
import SelectInput from "./Global/Inputs/SelectInput";
import { UserIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <>
      {/* Profile Picture Card */}
      <Card class="h-admin-half-card-height">
        <CardHeader cardTitle="تصویر پروفایل" />
        <div className="p-4 flex justify-center">
          <div className="flex flex-col items-center space-y-4">
            {/*<img src="/path-to-profile-image.jpg" alt="Profile" className="size-16 rounded-full" />*/}
            <UserIcon className='size-48 text-light-secondary'/>
            <SubmitInput value="Save Picture" additionalClasses="bg-blue-500 text-white" />
          </div>
        </div>
      </Card>

      {/* Personal Information Card */}
      <Card className="col-span-2 h-admin-half-card-height">
        <CardHeader cardTitle="اطلاعات شخصی" />
        <div className="p-4 space-y-4">
          <TextInput label="نام" name="firstname" placeholder="John" />
          <hr/>
          <TextInput label="نام خانوادگی" name="lastname" placeholder="Doe" />
          <hr/>
          <TextInput label="ایمیل" name="email" type="email" placeholder="john.doe@example.com" />
          <hr/>
          <SubmitInput value="Update Personal Info" additionalClasses="bg-green-500 text-white" />
        </div>
      </Card>

      {/* Address Information Card */}
      <Card className="h-admin-half-card-height col-span-2">
        <CardHeader cardTitle="آدرس شما" />
        <div className="p-4 space-y-4">
          <TextInput label="استان" description="استان محل زندگی خود را وارد کنید" name="state" placeholder="California" />
          <hr/>
          <TextInput label="شهر" description="شهر محل زندگی خود را وارد کنید" name="city" placeholder="San Francisco" />
          <hr/>
          <TextInput label="کد پستی" description="کد پستی محل زندگی خود را وارد کنید" name="zipcode" placeholder="94103" />
          <hr className='w-2/3'/>
          <SubmitInput value="Update Address" additionalClasses="bg-yellow-500 text-white" />
        </div>
      </Card>

      {/* Role Change Request Card */}
      <Card className="h-admin-half-card-height">
        <CardHeader cardTitle="درخواست تغییر نقش" />
        <div className="flex-grow flex flex-col justify-around w-min">
          <SelectInput
            name="role"
            label="نقش"
            description="نقشی انتخابی"
            options={[
              { id: 1, name: "Admin" },
              { id: 2, name: "Moderator" },
              { id: 3, name: "Creator" },
              { id: 4, name: "User" },
            ]}
          />
          <TextInput label="اضافه" name="additionalInfo" placeholder="اطلاعات اضافی" />
          <SubmitInput value="Request Role Change" className="w-8" />
        </div>
      </Card>
    </>
  );
};

export default Profile;

