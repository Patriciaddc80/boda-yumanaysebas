export interface DressCodeProps {
  text: string;
}

export function DressCode({ text }: DressCodeProps) {
  return (
    <section className="section section--hero-bg section--bordered">
      <div className="section__inner section__inner--narrow">
        <h2 className="section__heading">Código de vestimenta</h2>
        <p className="section__text">{text}</p>
        <ul className="chips" aria-label="Ideas de estilo">
          <li className="chips__item">Traje</li>
          <li className="chips__item">Vestido largo</li>
          <li className="chips__item">Etiqueta</li>
        </ul>
      </div>
    </section>
  );
}
