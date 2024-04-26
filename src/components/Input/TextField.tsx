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
      label={props.label}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default MyText;
