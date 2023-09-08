import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      hotelname: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      username: "John Smith",
      Sdate: "1 March",
      Edate: "7 March",
      amount: 785,
      method: "Cash on hand",
      status: "Approved",
    },
    {
      id: 2235235,
      hotelname: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      username: "Michael Doe",
      Sdate: "1 March",
      Edate: "7 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      hotelname: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      username: "John Smith",
      Sdate: "1 March",
      Edate: "7 March",
      amount: 350,
      method: "Cash on hand",
      status: "Approved",
    },
    {
      id: 2357741,
      hotelname: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      username: "Jane Smith",
      Sdate: "1 March",
      Edate: "7 March",
      amount: 920,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 2342355,
      hotelname: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      username: "Harold Carol",
      Sdate: "1 March",
      Edate: "7 March",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">User Name</TableCell>
            <TableCell className="tableCell">Hotel Name</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
            <TableCell className="tableCell">End Date</TableCell>
            <TableCell className="tableCell">Total Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.username}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.hotelname}</TableCell>
              <TableCell className="tableCell">{row.Sdate}</TableCell>
              <TableCell className="tableCell">{row.Edate}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
