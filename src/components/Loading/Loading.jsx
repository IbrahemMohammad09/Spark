import { Spinner } from "react-bootstrap";
import "./Loading.css";
export const Loading = ({ color }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner
        animation="border"
        role="status"
        className="spinner-large"
        style={{ color: color, textAlign: "center" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
