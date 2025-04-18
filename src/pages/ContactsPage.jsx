import css from "./styles/ContactsPage.module.css";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import Loader from "../components/Loader/Loader";
import {
  selectContactCount,
  selectContacts,
  selectLoading,
  selectError,
} from "../redux/contacts/selectors";

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contactsOverall = useSelector(selectContactCount);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log("dispatching fetchContacts from ContactsPage...");
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.topSection}>
        <h1 className={css.heading}>Phonebook 📱</h1>
        {contacts.length > 0 && (
          <p className={css.counter}>Contacts in Book: {contactsOverall}</p>
        )}
        <SearchBox />
      </div>

      <div className={css.formSection}>
        <ContactForm />
      </div>

      {isError && (
        <div className={css.errorMsg}>
          😟 Contacts cant be shown. Reload the page please 🫨
        </div>
      )}

      {isLoading && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
