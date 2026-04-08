import { FormEvent, useState } from "react";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [companions, setCompanions] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [allergies, setAllergies] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setMessage("Escribe tu nombre completo.");
      return;
    }
    if (!attendance) {
      setMessage("Indica si podrás asistir.");
      return;
    }
    setMessage(
      attendance === "yes"
        ? "¡Gracias! Hemos recibido tu confirmación (demo: aún sin guardar en base de datos)."
        : "Gracias por avisar. ¡Te echaremos de menos! (demo: sin base de datos).",
    );
  }

  return (
    <section className="section section--hero-bg" id="rsvp">
      <div className="section__inner section__inner--narrow">
        <h2 className="section__heading">Confirmar asistencia</h2>
        <p className="section__lead">
          Estamos muy ilusionados de poder contar contigo, por favor confirmanos
          tu presencia.
        </p>
        <form className="form" onSubmit={onSubmit}>
          <label className="form__label">
            Nombre completo
            <input
              className="form__input"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              autoComplete="name"
            />
          </label>
          <div className="form__row form__row--2">
            <label className="form__label form__label--cell">
              N.º acompañantes
              <input
                type="number"
                className="form__input"
                min={0}
                step={1}
                inputMode="numeric"
                value={companions}
                onChange={(ev) => setCompanions(ev.target.value)}
                placeholder="0"
              />
            </label>
            <label className="form__label form__label--cell">
              Niños
              <input
                type="number"
                className="form__input"
                min={0}
                step={1}
                inputMode="numeric"
                value={childrenCount}
                onChange={(ev) => setChildrenCount(ev.target.value)}
                placeholder="0"
              />
            </label>
          </div>
          <fieldset className="form__fieldset">
            <legend className="form__legend">¿Asistirás?</legend>
            <label className="form__radio">
              <input
                type="radio"
                name="att"
                checked={attendance === "yes"}
                onChange={() => setAttendance("yes")}
              />
              Sí
            </label>
            <label className="form__radio">
              <input
                type="radio"
                name="att"
                checked={attendance === "no"}
                onChange={() => setAttendance("no")}
              />
              No
            </label>
          </fieldset>
          <label className="form__label">
            Alergias (opcional)
            <textarea
              className="form__input form__textarea"
              value={allergies}
              onChange={(ev) => setAllergies(ev.target.value)}
              rows={2}
            />
          </label>
          <button type="submit" className="btn btn--block">
            Enviar
          </button>
        </form>
        {message ? <p className="form__msg">{message}</p> : null}
      </div>
    </section>
  );
}
