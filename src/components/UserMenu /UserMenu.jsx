import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import Button from "../Button/Button";
export default function UserMenu() {
  const user = useSelector(selectUser);
  function handleLogout() {
    console.log("Fn working");
  }
  const users = {
    name: "John",
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {users.name}</p>
      <Button buttonTitle="Log Out" onClick={handleLogout} />
    </div>
  );
}
