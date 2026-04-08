import { Countdown } from "./Countdown";

export interface HeroProps {
  readonly brideName: string;
  readonly groomName: string;
  readonly eventDateIso: string;
}

export function Hero({
  brideName: _brideName,
  groomName: _groomName,
  eventDateIso,
}: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          <img
            className="hero__logo"
            src="/img/yumana-logotipo.svg"
            alt="Yumana y Sebas"
            width={1024}
            height={1024}
            loading="eager"
          />
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
