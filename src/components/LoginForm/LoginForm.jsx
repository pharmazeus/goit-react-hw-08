import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(userCredentials));
    actions.resetForm();
  };

  const loginSchema = Yup.object().shape({
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
        validationSchema={loginSchema}
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

          <Button buttonTitle="Log in" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
