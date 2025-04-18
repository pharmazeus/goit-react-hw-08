import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css";
import Button from "../Button/Button";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    // const newUserRegister = {
    //   username: values.username,
    //   email: values.email,
    //   password: values.password,
    // };
    // console.log(newUserRegister);
    actions.resetForm();
  };

  const signupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(30, "Max length!")
      .required("Username is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Minimum 6 characters!")
      .required("Password is required!"),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome back 👋</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label}>Email:</label>
            <Field name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.label}>Password:</label>
            <Field name="password" type="password" className={css.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <Button buttonTitle="Log in" />
        </Form>
      </Formik>
    </div>
  );
}
