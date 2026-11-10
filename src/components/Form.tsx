import * as emailjs from '@emailjs/browser';
import { useForm } from '@tanstack/react-form';
import { useState, type Dispatch, type SetStateAction } from 'react';

type FormProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
};

type ContactValues = {
    from_name: string; // user name
    from_email: string; // user email
    message: string;
};

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validate = ({ value }: { value: ContactValues }) => {
    const fields: Partial<Record<keyof ContactValues, string>> = {};
    if (!value.from_name) {
        fields.from_name = 'Merci de remplir ce champ.';
    }
    if (!value.from_email) {
        fields.from_email = 'Ce champ est obligatoire.';
    } else if (!regexEmail.test(value.from_email)) {
        fields.from_email = 'Veuillez utiliser une adresse email valide.';
    }
    if (!value.message) {
        fields.message = 'Ce champ est obligatoire.';
    }
    return Object.keys(fields).length > 0 ? { fields } : undefined;
};

const Form = ({ setShowModal }: FormProps) => {
    const [sendError, setSendError] = useState(false);

    const form = useForm({
        defaultValues: {
            from_name: '',
            from_email: '',
            message: '',
        } satisfies ContactValues,
        validators: {
            onChange: validate,
        },
        onSubmit: async ({ value }) => {
            setSendError(false);
            try {
                await emailjs.send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    { ...value, to_name: 'Alexandre' }, // my name
                    { publicKey: import.meta.env.VITE_PUBLIC_KEY },
                );
            } catch {
                // On garde la saisie pour permettre un nouvel essai
                setSendError(true);
                return;
            }
            setShowModal(true);
            form.reset();
        },
    });

    return (
        <section className="contact-form">
            <form
                className="form-content"
                onSubmit={(e) => {
                    e.preventDefault();
                    void form.handleSubmit();
                }}
            >
                <form.Field name="from_name">
                    {(field) => {
                        const error = field.state.meta.isBlurred && field.state.meta.errors[0];
                        return (
                            <div className="form-content-field">
                                <label className="form-content-field-label" htmlFor={field.name}>
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    className={error ? 'invalid' : ''}
                                    placeholder="Prénom Nom"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                />
                                {error ? <span className="form-content-error">{error}</span> : null}
                            </div>
                        );
                    }}
                </form.Field>
                <form.Field name="from_email">
                    {(field) => {
                        const error = field.state.meta.isBlurred && field.state.meta.errors[0];
                        return (
                            <div className="form-content-field">
                                <label className="form-content-field-label" htmlFor={field.name}>
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    className={error ? 'invalid' : ''}
                                    placeholder="email@example.com"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                />
                                {error ? <span className="form-content-error">{error}</span> : null}
                            </div>
                        );
                    }}
                </form.Field>
                <form.Field name="message">
                    {(field) => {
                        const error = field.state.meta.isBlurred && field.state.meta.errors[0];
                        return (
                            <div className="form-content-field">
                                <label className="form-content-field-label" htmlFor={field.name}>
                                    Message
                                </label>
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    className={error ? 'invalid' : ''}
                                    placeholder="Comment puis-je aider ?"
                                    rows={3}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                />
                                {error ? <span className="form-content-error">{error}</span> : null}
                            </div>
                        );
                    }}
                </form.Field>
                {sendError ? (
                    <p className="form-content-error" role="alert">
                        L'envoi a échoué, merci de réessayer dans quelques instants.
                    </p>
                ) : null}
                <form.Subscribe
                    selector={(state) => [state.isValid && state.isDirty, state.isSubmitting]}
                >
                    {([canSubmit, isSubmitting]) => (
                        <button
                            type="submit"
                            className="button button-white button-form form-content-button"
                            disabled={!canSubmit || isSubmitting}
                        >
                            {isSubmitting ? 'Envoi…' : 'Envoyer'}
                        </button>
                    )}
                </form.Subscribe>
            </form>
        </section>
    );
};

export default Form;
