import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContacts(id));
  };
  return (
    <div className={styles.contact}>
      <ul className={styles.info}>
        <li>
          <FaUser className={styles.icon} /> {name}
        </li>
        <li>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </li>
      </ul>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
