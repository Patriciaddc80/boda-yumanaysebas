import { DressCode } from "./components/DressCode";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Locations } from "./components/Locations";
import { RsvpForm } from "./components/RsvpForm";
import { Welcome } from "./components/Welcome";
import { invitation } from "./data/invitation";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Hero
        brideName={invitation.brideName}
        groomName={invitation.groomName}
        eventDateIso={invitation.eventDate}
      />

      <main id="contenido" className="main" tabIndex={-1}>
        <Welcome
          message={invitation.welcome}
          eventDateIso={invitation.eventDate}
          ceremonyVenue={invitation.ceremony.venue}
          receptionVenue={invitation.reception.venue}
        />
        <Locations
          ceremony={invitation.ceremony}
          reception={invitation.reception}
          transport={invitation.transport}
        />
        <DressCode text={invitation.dressCode} />
        <RsvpForm />
      </main>

      <Footer
        brideName={invitation.brideName}
        groomName={invitation.groomName}
      />
    </div>
  );
}
