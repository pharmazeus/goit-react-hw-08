import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import {
  selectContactCount,
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

export default function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contactsOverall = useSelector(selectContactCount);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log("dispatching fetchContacts from App.jsx...");
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        <h1 style={{ fontSize: 38 }}>Phonebook</h1>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
            color: "#333",
          }}
        >
          Contacts in Book : {contactsOverall}
        </p>
        <SearchBox />
      </div>
      <div>
        <ContactForm />
      </div>
      {isError && (
        <h3 style={{ fontSize: 28, color: "red", marginLeft: "30px" }}>
          Contacts cant be shown , reload page please
        </h3>
      )}
      {isLoading && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
