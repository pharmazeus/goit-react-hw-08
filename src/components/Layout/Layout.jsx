import AppBar from "../AppBar/AppBar";
export default function Layout({ children }) {
  return (
    <div className="container">
      <AppBar />
      {children}
    </div>
  );
}
