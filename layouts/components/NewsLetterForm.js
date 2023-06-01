import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    resetForm();
  };

  return (
    <>
      <form action="#" className="py-6" onSubmit={handleSubmit}>
        <fieldset className="relative">
          <input
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="text"
            placeholder="Escribe tu correo y preciona enter"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-xl transition duration-75" />
        </fieldset>
        <button className="d-block  btn btn-primary mt-4 w-full" type="submit">
          Enviar
        </button>
      </form>
      {status === "sending" && (
        <div className="mt-4 text-primary">enviando...</div>
      )}
      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">
          Te has suscrito correctamente !
        </div>
      )}
    </>
  );
}

export default CustomForm;
