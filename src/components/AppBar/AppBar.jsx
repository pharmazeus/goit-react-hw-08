import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu /UserMenu";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNavigation />
    </header>
  );
}
