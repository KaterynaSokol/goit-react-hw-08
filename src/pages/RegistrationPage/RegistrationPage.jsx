import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { selectAuthError } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Create a new account</h2>
      <RegistrationForm />
      {error && (
        <p className={css.errorText}>
          Incorrect email or password. Please try again. {error}
        </p>
      )}
    </div>
  );
};

export default RegistrationPage;
