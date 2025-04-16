import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilterName } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p className={styles.searchLabel}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  );
}
