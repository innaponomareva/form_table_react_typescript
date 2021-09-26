import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";

interface Props extends FieldProps {
  label: string;
}

export const MyField: React.FC<Props> = (props) => {
  //console.log(props)
  return <TextField label={props.label} {...props.field} fullWidth />;
};
