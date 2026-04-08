/** Datos de la invitación (luego podrán venir de una API o Prisma). */

export interface PlaceInfo {
  title: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
}

/** Un trayecto del servicio de transporte (ida / vuelta). */
export interface TransportLeg {
  /** Texto tras “Salida desde …” */
  departureFrom: string;
  mapsUrl: string;
}

export interface TransportInfo {
  ida: TransportLeg;
  vuelta: TransportLeg;
}

export interface InvitationData {
  brideName: string;
  groomName: string;
  eventDate: string;
  welcome: string;
  ceremony: PlaceInfo;
  reception: PlaceInfo;
  transport: TransportInfo;
  dressCode: string;
}

/** 12 de septiembre de 2026, hora local (cuenta atrás del Hero). */
function dateLocalIso(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): string {
  const d = new Date(year, month - 1, day, hour, minute, 0, 0);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${da}T${h}:${min}:00`;
}

export const invitation: InvitationData = {
  brideName: "Yumana",
  groomName: "Sebas",
  eventDate: dateLocalIso(2026, 9, 12, 0, 0),
  welcome:
    "Con el corazón lleno de ilusión, queremos compartir contigo uno de los días más importantes de nuestra historia.",
  ceremony: {
    title: "Ceremonia",
    time: "19:00 hrs.",
    venue: "TORRENUEVA",
    address: "HOTEL LA CAMINERA CLUB DE CAMPO",
    mapsUrl: "https://maps.google.com",
  },
  reception: {
    title: "Celebración",
    time: "20:00 h",
    venue: "NOMBRE DEL LUGAR",
    address: "Direccion · Ciudad",
    mapsUrl: "https://maps.google.com",
  },
  transport: {
    ida: {
      departureFrom: "LUGAR",
      mapsUrl: "https://maps.google.com",
    },
    vuelta: {
      departureFrom: "LUGAR",
      mapsUrl: "https://maps.google.com",
    },
  },
  dressCode:
    "Evtar color blanco y negro, Tonos neutros o verdes apagados serán bienvenidos.",
};
