import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newUserRegister = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(newUserRegister));
    actions.resetForm();
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(30, "Max length!")
      .required("Name is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Minimum 6 characters!")
      .required("Password is required!"),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Register ✍️</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label}>Name:</label>
            <Field name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

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

          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
