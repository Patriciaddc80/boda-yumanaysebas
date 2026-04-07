export interface FooterProps {
  brideName: string;
  groomName: string;
}

export function Footer({ brideName, groomName }: FooterProps) {
  return (
    <footer className="footer">
      <p className="footer__names">
        <span className="footer__name-main">{brideName}</span>
        <span className="footer__name-fine">
          {" "}
          <span className="footer__amp">y</span> {groomName}
        </span>
      </p>
      <p className="footer__note">Con cariño</p>
    </footer>
  );
}
