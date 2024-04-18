import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/MyTable";
import { updateData } from "../store/features/tableSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { useGetUniversityDataByCountryQuery } from "../api/api";
import MyText from "../components/TextField";
import { UniversityData } from "../apiModels/universityData";

const Table1Page = () => {
  const navigate = useNavigate();
  const tableData: Array<UniversityData> = useAppSelector(
    (state) => state.table.tableData
  );
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState("");
  const [skip, setSkip] = useState(true);
  const { data, isLoading } = useGetUniversityDataByCountryQuery(country, {
    skip,
  });

  useEffect(() => {
    if (data) {
      dispatch(updateData(data));
    }
  }, [data, dispatch]);

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>Table 1 page</div>
      </Grid>
      <Grid item marginTop={3}>
        <form
          style={{ display: "flex" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setSkip(false);
            }
          }}
        >
          <Grid container spacing={2} display="flex" alignItems="center">
            <Grid item>
              <MyText
                type="text"
                placeholder="Please enter a country"
                value={country}
                label="Country"
                onChange={(e) => {
                  setSkip(true);
                  setCountry(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  backgroundColor: "antiquewhite",
                  color: "brown",
                  fontFamily: "cursive",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "semibold",
                }}
                onClick={() => setSkip(false)}
              >
                Search
              </Button>
            </Grid>
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
                  navigate("/second_table");
                }}
              >
                Go to table 2
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid item>
          <MyTable data={tableData} />
        </Grid>
      )}
    </Grid>
  );
};

export default Table1Page;
