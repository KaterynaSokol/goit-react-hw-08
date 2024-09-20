import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { apiGetAllContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      {isLoading && <Loader />}
      {error && (
        <p className={css.text}>
          Oops! Something went wrong... try again later{" "}
        </p>
      )}
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
