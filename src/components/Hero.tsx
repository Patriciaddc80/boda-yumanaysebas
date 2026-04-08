import { Countdown } from "./Countdown";

export interface HeroProps {
  brideName: string;
  groomName: string;
  eventDateIso: string;
}

export function Hero({ brideName, groomName, eventDateIso }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__inner">
        <p className="hero__subtitle">
          Queremos comenzar esta aventura contigo.
        </p>
        <h1 className="hero__title">
          <span className="hero__name-main">{brideName}</span>{" "}
          <span className="hero__name-fine">
            <span className="hero__amp">y</span> {groomName}
          </span>
        </h1>
        <div className="hero__count">
          <p className="hero__count-subtext">
            Nos gustaría que nos acompañaseis en este día tan especial
          </p>
        </div>
        <Countdown targetIso={eventDateIso} />
      </div>
    </header>
  );
}
