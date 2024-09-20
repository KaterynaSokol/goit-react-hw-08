import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h3 className={css.title}>Page Not Found</h3>
      <Link to="/" className={css.goBackBtn}>
        {" "}
        ↩️ Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
