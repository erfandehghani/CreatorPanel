import Card from "@/components/Global/Card";
import CardHeader from "@/components/Global/CardHeader";
import Table from "@/components/Global/Table/Table";
import TableBody from "@/components/Global/Table/TableBody";
import TableBodyItem from "@/components/Global/Table/TableBodyItem";
import TableHead from "@/components/Global/Table/TableHead";
import TableHeadItem from "@/components/Global/Table/TableHeadItem";
import TableRow from "@/components/Global/Table/TableRow";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Users = () => {
	return (
	<Card className="col-span-3 h-admin-full-card-height">
         
        {/* A table of users and the actions that can be done on that spicific user */}

        {/* Header of the card */}
        <CardHeader cardTitle="لیست کاربران"/>


        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadItem>نام</TableHeadItem>
                    <TableHeadItem>نام خانوادگی</TableHeadItem>
                    <TableHeadItem>شماره تماس</TableHeadItem>
                    <TableHeadItem>وضعیت آدرس</TableHeadItem>
                    <TableHeadItem>ابزار</TableHeadItem>
                </TableRow>
            </TableHead>
            
            <TableBody>
                <TableRow>
                    <TableBodyItem>عرفان</TableBodyItem>
                    <TableBodyItem>دهقانی</TableBodyItem>
                    <TableBodyItem>09179679459</TableBodyItem>
                    <TableBodyItem>ثبت شده</TableBodyItem>

                    {/* Tools to control the user */}
                    <TableBodyItem>
                        
                    <div className="flex items-center gap-x-6">
                        <button
                            className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                            <TrashIcon className="size-6"/>
                        </button>

                        <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                            <PencilIcon className="size-6"/>
                        </button>
                    </div>

                    </TableBodyItem>
                </TableRow>
            </TableBody>
        </Table>

	</Card>
	);
};

export default Users;
