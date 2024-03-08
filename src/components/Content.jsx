import Card from "./Global/Card";
import Table from "./Global/Table/Table";
import TableBody from "./Global/Table/TableBody";
import TableBodyItem from "./Global/Table/TableBodyItem";
import TableHead from "./Global/Table/TableHead";
import TableHeadItem from "./Global/Table/TableHeadItem";
import TableRow from "./Global/Table/TableRow";

const Content = ({}) => {

	const posts = [
		{
		  id: 1,
		  title: "Hi, My Dude!",
		  category: "General",
		  tags: "greeting, introduction",
		  author: "Testing",
		  date: "2024-03-06",
		  comments: 5,
		  views:95
		},
		{
		  id: 2,
		  title: "Exploring the World of React",
		  category: "Programming",
		  tags: "react, javascript, web development",
		  author: "TechEnthusiast",
		  date: "2024-03-05",
		  comments: 10,
		  views:55
		}
	  ];
	  

	return( 
	<Card className="col-span-3 h-admin-full-card-height">

			<Table>
				<TableHead>
					<TableRow>
						<TableHeadItem>شماره</TableHeadItem>
						<TableHeadItem>عنوان</TableHeadItem>
						<TableHeadItem>دسته بندی</TableHeadItem>
						<TableHeadItem>تگ ها</TableHeadItem>
						<TableHeadItem>نویسنده</TableHeadItem>
						<TableHeadItem>تاریخ انتشار</TableHeadItem>
						<TableHeadItem>تعداد بازدید</TableHeadItem>
						<TableHeadItem>تعداد کامنت ها</TableHeadItem>
					</TableRow>
				</TableHead>
				<TableBody>
					{posts.map((post) => (
						<TableRow>
							<TableBodyItem>{post.id}</TableBodyItem>
							<TableBodyItem>{post.title}</TableBodyItem>
							<TableBodyItem>{post.category}</TableBodyItem>
							<TableBodyItem>{post.tags}</TableBodyItem>
							<TableBodyItem>{post.author}</TableBodyItem>
							<TableBodyItem>{post.date}</TableBodyItem>
							<TableBodyItem>{post.comments}</TableBodyItem>
							<TableBodyItem>{post.views}</TableBodyItem>
						</TableRow>
					))}
				</TableBody>
			</Table>

	</Card>
	);
};

export default Content;
