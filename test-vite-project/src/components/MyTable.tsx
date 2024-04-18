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
                <TableCell>University Name</TableCell>
                <TableCell align="center">Web Pages</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row: UniversityData, index: number) => (
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default MyTable;
