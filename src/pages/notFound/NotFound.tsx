import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notfound}>
      <h1 className={styles["notfound__title"]}>404</h1>
      <p className={styles["notfound__message"]}>Not Found</p>
      <button
        className={styles["notfound__button"]}
        onClick={() => navigate("/")}
      >
        Go to user page
      </button>
    </div>
  );
};

export default NotFound;
