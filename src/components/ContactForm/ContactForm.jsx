import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .matches(
      phoneRegExp,
      "The phone number must match the format 'xxx-xxx-xxxx'"
    )
    .required("Required!")
    .typeError("Enter phone-number!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          <span className={css.spanText}>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
        </label>

        <ErrorMessage className={css.errorText} name="name" component="span" />

        <label className={css.label} htmlFor={numberFieldId}>
          <span className={css.spanText}>Number</span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
          />
        </label>

        <ErrorMessage
          className={css.errorText}
          name="number"
          component="span"
        />

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
