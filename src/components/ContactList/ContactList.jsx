import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {contacts?.length === 0 && (
        <li className={css.item}>
          You do not have any contacts yet. You can start adding contacts.
        </li>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
