import Card from "./Global/Card"
import CardHeader from "./Global/CardHeader"
import Table from "./Global/Table/Table";
import TableBody from "./Global/Table/TableBody";
import TableBodyItem from "./Global/Table/TableBodyItem";
import TableHead from "./Global/Table/TableHead";
import TableHeadItem from "./Global/Table/TableHeadItem";
import TableRow from "./Global/Table/TableRow";

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
                    <TableBodyItem>تست</TableBodyItem>
                </TableRow>
            </TableBody>
        </Table>

	</Card>
	);
};

export default Users;
