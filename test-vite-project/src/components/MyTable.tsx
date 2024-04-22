import {
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UniversityData } from "../apiModels/universityData";

interface TableProps {
  data: Array<UniversityData>;
}

const MyTable = (props: TableProps) => {
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
              {props.data?.length ? (
                props.data.map((row: UniversityData, index: number) => (
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
      </Grid>
    </Grid>
  );
};

export default MyTable;
