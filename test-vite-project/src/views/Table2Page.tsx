import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/MyTable";
import { useAppSelector } from "../store/hooks/hooks";

const Table2Page = () => {
  const navigate = useNavigate();
  const tableData = useAppSelector((state) => state.table.tableData);
  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <Grid item>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>
            Table 2 page
          </div>
        </Grid>
      </Grid>
      <Grid item marginTop={3}>
        <Grid container spacing={2} display="flex" alignItems="center">
          <Grid item marginLeft="auto">
            <Button
              style={{
                backgroundColor: "antiquewhite",
                color: "brown",
                fontFamily: "cursive",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "semibold",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Go back to table 1
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <MyTable data={tableData} />
      </Grid>
    </Grid>
  );
};

export default Table2Page;
