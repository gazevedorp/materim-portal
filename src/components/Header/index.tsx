import "./styles.css";

function Header(props: { title: string }) {
  return (
    <div className="header__container">
      <p className="header__title">{props.title.toUpperCase()}</p>
    </div>
  );
}

export default Header;
