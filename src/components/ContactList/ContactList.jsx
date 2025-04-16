import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

//
export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("Fetched contacts:", filteredContacts);
  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact}></Contact>
        </li>
      ))}
    </ul>
  );
}
