import type { PlaceInfo, TransportInfo } from "../data/invitation";

export interface LocationsProps {
  ceremony: PlaceInfo;
  reception: PlaceInfo;
  transport: TransportInfo;
}

function PlaceCard({
  place,
  transparent = false,
}: {
  place: PlaceInfo;
  transparent?: boolean;
}) {
  return (
    <article className={`card${transparent ? " card--transparent" : ""}`}>
      {place.title === "Ceremonia" && (
        <img
          className="card__illustration"
          src="/img/iglesia.webp"
          alt="Ceremonia"
          width={768}
          height={768}
          loading="lazy"
        />
      )}
      {place.title === "Celebración" && (
        <img
          className="card__illustration"
          src="/img/copas-fiesta-1.gif"
          alt="Celebración"
          width={768}
          height={768}
          loading="lazy"
        />
      )}
      <h3 className="card__title">{place.title}</h3>
      <p className="card__time">{place.time}</p>
      <p className="card__venue">{place.venue}</p>
      <p className="card__addr">{place.address}</p>
      <a
        className="btn"
        href={place.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mapa
      </a>
    </article>
  );
}

function TransportBlock({ transport }: { transport: TransportInfo }) {
  return (
    <div className="transport">
      <h3 className="transport__title">Transporte</h3>
      <div className="transport__grid">
        <div className="transport__leg">
          <h4 className="transport__leg-label">Ida</h4>
          <p className="transport__dep">Llegada hacia la boda</p>
          <a
            className="btn"
            href={transport.ida.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir mapa
          </a>
        </div>
        <div className="transport__leg">
          <h4 className="transport__leg-label">Vuelta</h4>
          <p className="transport__dep">Salida desde la boda</p>
          <a
            className="btn"
            href={transport.vuelta.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir mapa
          </a>
        </div>
      </div>
    </div>
  );
}

export function Locations({ ceremony, reception, transport }: LocationsProps) {
  return (
    <section className="section section--hero-bg">
      <div className="section__inner">
        <h2 className="section__heading">Ubicación</h2>
        <p className="section__lead">
          Calle Vega s/n 13740 Torrenueva (Ciudad Real).
        </p>
        <div className="grid-2">
          <PlaceCard place={ceremony} />
          <PlaceCard place={reception} transparent />
        </div>
        <TransportBlock transport={transport} />
      </div>
    </section>
  );
}
