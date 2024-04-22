import {
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { UniversityData } from "../apiModels/universityData";
import { BaseSyntheticEvent, useState } from "react";

interface TableProps {
  data: Array<UniversityData>;
}

const MyTable = (props: TableProps) => {
  const rows = props.data;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (
    event: BaseSyntheticEvent | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: BaseSyntheticEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  University Name
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Web Pages
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Country
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.length ? (
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: UniversityData, index: number) => (
                    <TableRow
                      key={`${row.name}-${index}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          href={`${row.web_pages[0]}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {row.web_pages[0]}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{row.country}</TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No Records to display
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

export default MyTable;
