import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import Image from "../components/Image";
import Input from "../components/Input";
import Paragraph from "../components/Paragraph";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import Title from "../components/Title";
import styles from "../styles/pages/ContactUs.module.scss";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import PageContext from "../contexts/PageContext";

const optionsSelect = [
  {
    id: "",
    label: "Seleccione",
  },
  {
    id: "Crear un producto digital",
    label: "Crear un producto digital",
  },
  {
    id: "Descubrir la solución a un problema",
    label: "Descubrir la solución a un problema",
  },
];

const msgRequired = "Este campo es requerido";

const defaultValues = {
  name: "",
  email: "",
  company: "",
  telephone: "",
  task: "",
  description: "",
};

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [errorSendEmail, setErrorSendEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });
  const onSubmit = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "gmail",
        "pagina_web_template",
        e.target,
        "user_SWcDfQMSuh2pyfIXpSYgb"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSendEmail(true);
          reset(defaultValues);
        },
        (error) => {
          setIsLoading(false);
          setErrorSendEmail(true);
          reset(defaultValues);
        }
      );
  };

  return (
    <form className={styles.contactUs} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.contactUsBegin}>
        <div className={styles.frontPage}>
          <Title text="Empecemos ..." size={28} />
          <Paragraph content="Cuéntanos quien eres y que estas haciendo" />
          <div className={styles.contactImage}>
            <Image name="let_us_begin" width={260} height={200} />
          </div>
        </div>
        {/* <div className={styles.form}>
          <Input label="Nombre *" register='name' />
          <Input label="Email *" />
          <Input label="Compañía" />
          <Input label="Rol" />
          <Input label="Teléfono" type="email" />
          <Select label="Necesito *" options={optionsSelect} />
        </div> */}
        <div className={styles.form}>
          <div className={styles.container}>
            <label>
              Nombre <span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Ingrese su nombre"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className={styles.required}>{msgRequired}</span>
            )}
          </div>
          <div className={styles.container}>
            <label>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Ingrese su email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className={styles.required}>{msgRequired}</span>
            )}
          </div>
          <div className={styles.container}>
            <label>Compañía</label>
            <input
              placeholder="Ingrese su compañía"
              type="text"
              {...register("company")}
            />
          </div>
          <div className={styles.container}>
            <label>Rol</label>
            <input
              placeholder="Ingrese su rol"
              type="text"
              {...register("rol")}
            />
          </div>
          <div className={styles.container}>
            <label>Teléfono</label>
            <input
              placeholder="Ingrese su teléfono"
              type="tel"
              {...register("telephone")}
            />
          </div>
          <div className={styles.container}>
            <label>
              Necesito <span className={styles.required}>*</span>
            </label>
            <select {...register("task", { required: true })}>
              {optionsSelect.map(({ id, label }) => {
                return (
                  <option key={id} value={id}>
                    {label}
                  </option>
                );
              })}
            </select>
            {errors.task && (
              <span className={styles.required}>{msgRequired}</span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.contactUsMind}>
        <Title text="¿Qué tienes en mente?" size={26} />
        <textarea {...register("description")}></textarea>
      </div>
      <div className={styles.contactUsFooter}>
        <Button
          text={isLoading ? "Cargando..." : "Enviar"}
          borderRadius={8}
          type="submit"
          disabled={isLoading ? true : false}
        />
      </div>
      {isSendEmail && (
        <div className={styles.messageResponse}>
          Gracias por contactarnos, en unos momentos nos estaremos comunicando
          con usted
        </div>
      )}
      {errorSendEmail && (
        <div className={styles.messageResponse}>
          En estos momentos no se puede enviar el email, por favor intente
          nuevamente o contactenos a 975703863
        </div>
      )}
    </form>
  );
}
