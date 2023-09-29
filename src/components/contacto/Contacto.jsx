import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contacto = () => {
  const apiContacto =
    "https://contactoportafolio-production.up.railway.app/api/v1/contacto";
  const { register, handleSubmit, reset } = useForm();
  const defaultValues = {
    name: "",
    email: "",
    affair: "",
    message: "",
  };
  const onSubmit = (form) => {
    // console.log(form)
    axios
      .post(apiContacto, form)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Listo!",
          text: "Mensaje enviado correctamente",
          confirmButtonText: "Ok",
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    reset(defaultValues);
  };

  return (
    <div>
      <div className="contact">
        <h1>Contacto</h1>

        <div
          className="contact__container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="contact__container--form"
            name="contacto-portafolio"
          >
            <div className="container_text--contacto">
              <p>
                Completa el siguiente formulario y me pondré en contacto contigo
                lo antes posible.
              </p>
            </div>
            <div>
              <input
                id="nombre"
                type="text"
                name="name"
                placeholder="Nombre"
                required
                {...register("name")}
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
                {...register("email")}
              />
            </div>
            <div>
              <input
                id="asunto"
                type="text"
                name="affair"
                placeholder="Asunto"
                required
                {...register("affair")}
              />
            </div>
            <div>
              <textarea
                id="mensaje"
                cols="20"
                rows="4"
                name="message"
                placeholder="Mensaje"
                required
                {...register("message")}
              ></textarea>
            </div>
            <div className="btn_form--contacto">
              <button id="btn-enviar" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
