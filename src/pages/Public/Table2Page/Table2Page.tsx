import { useNavigate } from "react-router-dom";

import { Divider, Grid } from "@mui/material";

import { useGetUniversityDataByCountryQuery } from "@api/api";
import { UniversityData } from "@apiModels/universityData";
import MyButton from "@components/Button/MyButton";
import MyTable from "@components/Table/MyTable";
import { useAppSelector } from "@store/hooks/hooks";
import { RootState } from "@store/store";


const Table2Page = () => {
  const navigate = useNavigate();
  const country = useAppSelector((state: RootState) => state.table.country);
  const { data } = useGetUniversityDataByCountryQuery(country);

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
        <Grid container alignItems="center" display="flex" spacing={2}>
          <Grid item marginLeft="auto">
            <MyButton
              text="Go back to table 1"
              onClick={() => {
                navigate("/");
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <MyTable data={data as Array<UniversityData>} />
      </Grid>
    </Grid>
  );
};

export default Table2Page;
