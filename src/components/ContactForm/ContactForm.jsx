import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContacts } from "../../redux/contacts/operations";
import Button from "../Button/Button";

const sighupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(30, "Max length!")
    .required("Required!"),
  number: Yup.string()
    .matches(/^(\d{1,4}-?)+\d{1,4}$/, "Only numbers and dashes allowed!")
    .min(3, "Too short!")
    .max(30, "Max length!")
    .required("Required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${values.name} is already in contacts!`);
      return;
    }
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContacts(newContact));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={sighupSchema}
      >
        <Form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Contact name </label>
            <Field className={styles.input} type="text" name="name"></Field>
            <ErrorMessage name="name" />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Number</label>
            <Field className={styles.input} type="text" name="number"></Field>
            <ErrorMessage name="number" />
          </div>

          <Button buttonTitle="Add contact" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
