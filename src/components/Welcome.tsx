export interface WelcomeProps {
  message: string;
  eventDateIso: string;
  ceremonyVenue: string;
  receptionVenue: string;
}

function longDate(iso: string): string {
  return new Intl.DateTimeFormat("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function Welcome({
  message,
  eventDateIso,
  ceremonyVenue,
  receptionVenue,
}: WelcomeProps) {
  return (
    <section className="section section--dark">
      <div className="section__inner section__inner--narrow">
        <h2 className="section__heading section__heading--gold">
          Nos gustaria{" "}
        </h2>
        <p className="section__text">{message}</p>
        <p className="section__meta">
          <span className="meta-highlight">{longDate(eventDateIso)}</span>
        </p>
        <p className="section__meta">
          <span className="meta-highlight">
            {ceremonyVenue} · {receptionVenue}
          </span>
        </p>
      </div>
    </section>
  );
}
