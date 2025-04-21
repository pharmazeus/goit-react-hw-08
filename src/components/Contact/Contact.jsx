import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/operations";
import { confirmAlert } from "react-confirm-alert";
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
        onClick={() =>
          confirmAlert({
            title: "Confirm Delete",
            message: `Are you sure you want to delete "${name}"?`,
            buttons: [
              {
                label: "Yes",
                onClick: () => onDelete(id),
              },
              {
                label: "No",
              },
            ],
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
