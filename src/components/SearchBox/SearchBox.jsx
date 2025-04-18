import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilterName } from "../../redux/filters/selectors";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p className={styles.searchLabel}>Find contacts by name below</p>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>
    </div>
  );
}
