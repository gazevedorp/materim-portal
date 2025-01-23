import "./page.css";

export default function NotFound() {
  return (
    <div className="not-found__container">
      <div>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__description">Página não encontrada</p>
      </div>
    </div>
  );
}