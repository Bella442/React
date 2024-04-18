import { TextField } from "@mui/material";
import { BaseSyntheticEvent } from "react";

interface MyTextProps {
  value: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (event: BaseSyntheticEvent) => void;
}

const MyText = (props: MyTextProps) => {
  return (
    <TextField
      placeholder={props.placeholder}
      type={props.type}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      sx={{ height: "50px"}}
    />
  );
};

export default MyText;
