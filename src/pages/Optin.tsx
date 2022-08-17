import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Optin = () => {
  const navigate = useNavigate();
  const submitForm = async (values: FormValues, formik: FormikHelpers<FormValues>) => {
    const { firstName, lastName, email } = values;
    try {
      const payload = {
        firstName,
        lastName,
        email,
      };

      await axios.post('/api/subscribe', payload);
      formik.resetForm();
      navigate('/')
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {(formik) => (
          <Form className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
            <h2 className="text-center text-2xl font-bold">
              Sign up for our newsletter!
            </h2>
            <div className="my-2 flex flex-col">
              <Field
                id="firstName"
                className="p-2 border-2 border-gray-400"
                name="firstName"
                placeholder="First Name"
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="firstName"
              />
            </div>

            <div className="my-2 flex flex-col">
              <Field
                id="lastName"
                className="p-2 border-2 border-gray-400"
                name="lastName"
                placeholder="Last Name"
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="lastName"
              />
            </div>

            <div className="my-2 flex flex-col">
              <Field
                id="email"
                className="p-2 border-2 border-gray-400"
                name="email"
                placeholder="Email"
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="email"
              />
            </div>
            <button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Optin;
