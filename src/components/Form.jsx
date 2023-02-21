import * as emailjs from "@emailjs/browser";
import { useFormik } from "formik";

const Form = ({ setShowModal }) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const formik = useFormik({
    initialValues: {
      from_name: '', // user name
      to_name: 'Alexandre', // my name
      from_email: '', // user email
      message: '',
    },
    validate: values => {
      const errors = {};
      if (!values.from_name) {
        errors.from_name = "Ce champ est obligatoire.";
      }
      if (!values.from_email) {
        errors.from_email = 'Ce champ est obligatoire.'
      } else if (!regexEmail.test(values.from_email)) {
        errors.from_email = 'Veuillez utiliser une adresse email valide';
      }
      if (!values.message) {
        errors.message='Ce champ est obligatoire'
      }
      return errors;
    },
    onSubmit: values => {
      // console.log('Submit : ', values);
      emailjs.send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID,
        values,
        import.meta.env.VITE_PUBLIC_KEY
      ).then((result) => {
        // console.log(result.text, "email sent");
      }, (error) => {
        // console.log(error.text);
      });
      openModal();
      formik.resetForm({ values: '' });
    }
  });

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <section className="contact-form">
      <h2 className="contact-form-title big-title">Contactez-moi</h2>
      <form className="form-content" onSubmit={formik.handleSubmit}>
        <div className="form-content-field">
          <label className="form-content-field-label" htmlFor="from_name">
            Nom
          </label>
          <input
            type="text"
            name="from_name"
            className={`${formik.touched.from_name && formik.errors.from_name ? "invalid" : ""}`}
            placeholder="Prénom Nom"
            {...formik.getFieldProps("from_name")}
          />
          {formik.touched.from_name && formik.errors.from_name ? (
            <span className="form-content-error">{formik.errors.from_name}</span>
          ) : null}
        </div>
        <div className="form-content-field">
          <label className="form-content-field-label" htmlFor="from_email">
            Email
          </label>
          <input
            type="text"
            name="from_email"
            className={`${formik.touched.from_email && formik.errors.from_email ? "invalid" : ""}`}
            placeholder="email@example.com"
            {...formik.getFieldProps("from_email")}
          />
          {formik.touched.from_email && formik.errors.from_email ? (
            <span className="form-content-error">{formik.errors.from_email}</span>
          ) : null}
        </div>
        <div className="form-content-field">
          <label className="form-content-field-label" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            className={`${formik.touched.message && formik.errors.message ? "invalid" : ""}`}
            placeholder="Comment puis-je aider ?"
            rows={3}
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="form-content-error">{formik.errors.message}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="button button-white button-form form-content-button"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};
 
export default Form;