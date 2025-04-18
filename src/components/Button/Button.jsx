import css from "../Button/Button.module.css";
export default function Button({ buttonTitle, onClick }) {
  return (
    <button type="submit" className={css.button} onClick={onClick}>
      {buttonTitle}
    </button>
  );
}
