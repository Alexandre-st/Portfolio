import { useFormik } from "formik";

const Form = () => {

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Ce champ est obligatoire.';
      }
      if (!values.email) {
        errors.email = 'Ce champ est obligatoire.'
      } else if (!regexEmail.test(values.email)) {
        errors.email = 'Veuillez utiliser une adresse email valide';
      }
      if (!values.message) {
        errors.message='Ce champ est obligatoire'
      }
      return errors;
    },
    onSubmit: values => {
      console.log('Submit : ', values);
      formik.resetForm({ values: '' });
    }
  });

  return (
    <section className="contact-form">
      <h2 className="contact-form-title">Contactez-moi</h2>
      <form className="form-content" onSubmit={formik.handleSubmit}>
        <div className="form-content-field">
          <label 
            className="form-content-field-label" htmlFor="name"
          >
            Nom
          </label>
          <input
            type="text"
            name="name"
            className="form-content-field-input"
            placeholder="Alexandre Saint-Prix"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="form-content-error">{formik.errors.name}</span>
          ) : null}
        </div>
        <div className="form-content-field">
          <label className="form-content-field-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-content-field-input"
            placeholder="email@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="form-content-error">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="form-content-field">
          <label 
            className="form-content-field-label" htmlFor="message"
          >
            Message
          </label>
          <textarea
            type="text"
            name="message"
            className="form-content-field-input"
            placeholder="Comment puis-je aider ?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows={3}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="form-content-error">{formik.errors.message}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="button form-content-button"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
};
 
export default Form;