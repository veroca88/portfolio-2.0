// import React, { useState } from "react";

// export default function ContactMe({ id, color }) {
//   const initialValues = {
//     subject: "",
//     email: "",
//     message: "",
//   };
//   const [message, setMessage] = useState({ initialValues });
//   const [onSubmitting, setOnSubmitting] = useState(false);
//   const [values, setValues] = useState({});

//   const saveMessage = (event) => {
//     setOnSubmitting(true);
//     event.preventDefault();
//     const data = {
//       subject: message.subject,
//       email: message.email,
//       message: message.message,
//     };
//   };
//   const resetForm = (e) => {
//     e.target.reset(e);
//   };

//   const handleChange = (e) => {
//     e.persist();
//     setMessage({ ...message, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <div id={id} className={`contact-me ${color}`}>
//         <h2 className="title">Keep in touch</h2>
//         <div className="form-message">
//           <form onSubmit={saveMessage} className="contact-me-form">
//             <label htmlFor="subject" className="label">
//               Subject:
//             </label>
//             <input
//               onChange={handleChange}
//               value={values.subject}
//               className="input"
//               name="subject"
//               type="text"
//               placeholder="Subject"
//             ></input>

//             <label htmlFor="email" className="label">
//               Email:
//             </label>
//             <input
//               onChange={handleChange}
//               value={values.email}
//               className="input"
//               name="email"
//               type="email"
//               placeholder="Email"
//             />

//             <label htmlFor="message" className="label">
//               Message:
//             </label>
//             <textarea
//               onChange={handleChange}
//               value={values.message}
//               className="input"
//               rows="5"
//               cols="50"
//               id="message"
//               name="message"
//               type="text"
//               placeholder="Enter your message"
//             />
//             <button className="btn sm">Send message!</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import CONTACTME_SERVICE from "./services/ContactMeService";
import { useForm } from "react-hook-form";

export default function Contact({id, color}) {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      subject: "",
      email: "",
      message: "",
    },
  });

  const saveMessage = (data, e) => {
    const filledForm = {
      subject: data.subject,
      email: data.email,
      message: data.message,
    };
    CONTACTME_SERVICE.message(filledForm);
    e.target.reset(e);
  };

  return (
    <div id={id} className={`contact-me ${color}`}>
      <div className="form-message">
        <form onSubmit={handleSubmit(saveMessage)} className="contact-me-form">
          <label htmlFor="subject" className="label">
            Subject:
          </label>
          <input
            aria-invalid={errors.name ? "true" : "false"}
            className="input"
            name="subject"
            type="text"
            placeholder="Subject"
            ref={register({ required: true })}
          ></input>
          {errors.subject && <span>This field is required</span>}

          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            className="input"
            rows="5"
            cols="50"
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
            ref={register({ required: true })}
          />
          {errors.message && <span>This field is required</span>}
          <button className="btn sm">Send message!</button>
        </form>
      </div>
    </div>
  );
}
