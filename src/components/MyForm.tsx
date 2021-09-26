import * as React from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/SendRounded";
import { Field, Form, Formik } from "formik";
import { MyField } from "./MyField";

interface SubmitBtn {
  display: string;
  padding: string;
  margin: string;
}
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}
const SendButton = styled(Button)<SubmitBtn>(() => ({
  display: "flex",
  padding: "10px 15px",
  margin: "15px 0 0 auto",
}));

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <div className="field-item">
            <Field name="firstName" label="first name" component={MyField} />
          </div>
          <div className="field-item">
            <Field name="lastName" label="last name" component={MyField} />
          </div>
          <div className="field-item">
            <Field name="email" label="email" component={MyField} />
          </div>
          <SendButton
            variant="outlined"
            color="primary"
            type="submit"
            endIcon={<SendIcon className="send-icon" />}
          >
            submit
          </SendButton>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
