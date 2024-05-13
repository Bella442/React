import { BaseSyntheticEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Box, CircularProgress, Divider, Grid } from "@mui/material";

import { useGetUniversityDataByCountryQuery } from "@api/shared/universityApi";
import MyButton from "@components/Button/MyButton";
import MyText from "@components/Input/TextField";
import MyTable from "@components/Table/MyTable";
import { ROUTES } from "@constants/routes";
import { updateCountry } from "@pages/Public/Table1Page/table1PageSlice";
import { UniversityData } from "@sharedTypes/universityData";
import { useAppDispatch, useAppSelector } from "@store/hooks/hooks";

const Table1Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.table1Page.country);
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
          <Grid container alignItems="center" display="flex" spacing={2}>
            <Grid item>
              <MyText
                label="Country"
                placeholder="Please enter a country"
                type="text"
                value={country}
                onChange={(e) => {
                  setSkip(true);
                  dispatch(updateCountry(e.target.value));
                }}
              />
            </Grid>
            <Grid item>
              <MyButton text="Search" type="submit" />
            </Grid>
            <Grid item marginLeft="auto">
              <MyButton
                text="Go to table 2"
                type="button"
                onClick={() => {
                  navigate(ROUTES.SECOND_TABLE_PAGE);
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
