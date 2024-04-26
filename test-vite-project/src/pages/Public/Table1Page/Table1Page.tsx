import { BaseSyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Divider, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks/hooks";
import { updateCountry } from "@store/features/tableSlice";
import { useGetUniversityDataByCountryQuery } from "@api/api";
import { UniversityData } from "@apiModels/universityData";
import MyText from "@components/Input/TextField";
import MyButton from "@components/Button/MyButton";
import MyTable from "@components/Table/MyTable";

const Table1Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.table.country);
  const [skip, setSkip] = useState(false);
  const { data, isLoading } = useGetUniversityDataByCountryQuery(country, {
    skip,
  });

  const submitForm = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setSkip(false);
  };

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>
          Table of Universities
        </div>
      </Grid>
      <Grid item marginTop={3}>
        <form style={{ display: "flex" }} onSubmit={(e) => submitForm(e)}>
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
              <MyButton type="submit" text="Search" />
            </Grid>
            <Grid item marginLeft="auto">
              <MyButton
                type="button"
                text="Go to table 2"
                onClick={() => {
                  navigate("/second_table");
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      {isLoading ? (
        <Box display="flex" justifyContent="center" marginTop="16px">
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
