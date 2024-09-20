import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactItem}>
        <p className={css.contactName}>
          <FaUser className={css.icon} size="15px" />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} size="15px" />
          {number}
        </p>
        <button
          type="button"
          className={css.contactDeleteBtn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
