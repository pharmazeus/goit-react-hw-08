import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Sticky from "react-sticky-el";
import { useScrollDirection } from "../../hooks/useScrollyDirection";
import { logout } from "../../redux/auth/operations";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const scrollDirection = useScrollDirection();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Sticky
      stickyClassName={css.stickyWrapper}
      stickyStyle={{
        zIndex: 1000,
        width: "100%",
        left: 0,
        top: 0,
      }}
    >
      <div
        className={`${css.header} ${
          scrollDirection === "down" ? css.hide : css.show
        }`}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        {isLoggedIn && <Button buttonTitle="Log out" onClick={handleLogOut} />}
      </div>
    </Sticky>
  );
}
