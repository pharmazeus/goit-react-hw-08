import css from "../Button/Button.module.css";

export default function Button({ buttonTitle, onClick, type = "button" }) {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {buttonTitle}
    </button>
  );
}
