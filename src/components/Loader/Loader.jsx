import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <ClipLoader color="#0077ff" size={50} />
    </div>
  );
}
