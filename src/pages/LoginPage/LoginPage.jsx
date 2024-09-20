import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectAuthError } from "../../redux/auth/selectors";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}> Log in</h2>
      <LoginForm />
      {error && (
        <p className={css.errorText}>
          Incorrect email or password. Please try again.{error}
        </p>
      )}
    </div>
  );
};

export default LoginPage;
