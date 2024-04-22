import { useState } from "react";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/MyTable";
import { updateCountry } from "../store/features/tableSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { useGetUniversityDataByCountryQuery } from "../api/api";
import MyText from "../components/TextField";
import { UniversityData } from "../apiModels/universityData";

const Table1Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
const country = useAppSelector((state) => state.table.country)
  const [skip, setSkip] = useState(false);
  const { data, isLoading } = useGetUniversityDataByCountryQuery(country, {
    skip,
  });

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>Table of Universities</div>
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
                  dispatch(updateCountry(e.target.value));
                }}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  backgroundColor: "antiquewhite",
                  color: "brown",
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
          <MyTable data={data as Array<UniversityData>} />
        </Grid>
      )}
    </Grid>
  );
};

export default Table1Page;
