import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import "./Input.css";
import { useDispatch, useSelector } from "react-redux";
import { cleanInput, editInput } from "../actions/inputAction";
import { statusInput } from "../data/data";
import { addList, updateList } from "../actions/listAction";

const SignupSchema = Yup.object().shape({
  inputType: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Input = ({}) => {
  const { status, term, id } = useSelector((state) => {
    return { input: state.input };
  }).input;

  const dispatch = useDispatch();

  const renderNameBtn = () => {
    return status == statusInput.CREATE ? "ADD" : "SAVE";
  };

  return (
    <>
      <Formik
        className="ui form"
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          if (status == statusInput.CREATE) dispatch(addList(term));
          else {
            dispatch(await updateList(id, term));
            dispatch(await cleanInput());
          }
        }}
        initialValues={{
          inputType: "",
        }}
      >
        {(props: FormikProps<any>) => {
          // setChangeField(props.setFieldValue);
          return (
            <Form>
              <Field name="inputType">
                {({ field, form: { touched, errors }, meta }) => {
                  return (
                    <div className="input_btn">
                      <div>
                        <input
                          type="text"
                          placeholder="type..."
                          {...field}
                          value={term}
                          onChange={(e) => {
                            props.setFieldValue("inputType", e.target.value);
                            dispatch(editInput({ term: e.target.value }));
                          }}
                        />
                        {meta.touched && meta.error && (
                          <div className="error div_err_input">
                            {meta.error}
                          </div>
                        )}
                      </div>

                      <button className="ui button submit" type="submit">
                        {renderNameBtn()}
                      </button>
                    </div>
                  );
                }}
              </Field>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Input;
