import { useState } from "react";
import Card from "./Global/Card";
import Table from "./Global/Table/Table";
import TableBody from "./Global/Table/TableBody";
import TableBodyItem from "./Global/Table/TableBodyItem";
import TableHead from "./Global/Table/TableHead";
import TableHeadItem from "./Global/Table/TableHeadItem";
import TableRow from "./Global/Table/TableRow";
import Pagination from "./Pagination";
import { posts } from "../POSTDATA.JS";
const Content = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(posts.length / recordsPerPage);
  const numbers = [...Array(lastPage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
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
          {records.map((post) => (
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
      <Pagination
        prePage={prePage}
        changePage={changePage}
        nextPage={nextPage}
        numbers={numbers}
      />
    </Card>
  );
};

export default Content;
