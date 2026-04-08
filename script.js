const targetIso = "2026-09-12T00:00:00";
const countdownEl = document.getElementById("countdown");
const eventDateEl = document.getElementById("event-date");
const messageEl = document.getElementById("form-message");
const form = document.getElementById("rsvp-form");

function formatLongDate(iso) {
    return new Intl.DateTimeFormat("es", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(iso));
}

function getParts(endMs) {
    const diff = Math.max(0, endMs - Date.now());
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function pad(value) {
    return String(value).padStart(2, "0");
}

function renderCountdown() {
    const endMs = new Date(targetIso).getTime();
    const parts = getParts(endMs);
    const cells = [
        { label: "Días", value: parts.days },
        { label: "Horas", value: parts.hours },
        { label: "Min", value: parts.minutes },
        { label: "Seg", value: parts.seconds },
    ];

    if (!countdownEl) return;
    countdownEl.innerHTML = cells
        .map(
            ({ label, value }) =>
                `<div class="countdown__cell"><span class="countdown__num">${pad(value)}</span><span class="countdown__lbl">${label}</span></div>`,
        )
        .join("");
}

function showMessage(text) {
    if (!messageEl) return;
    messageEl.textContent = text;
}

function setupForm() {
    if (!form) return;
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const attendance = document.querySelector("input[name=attendance]:checked");

        if (name.length < 2) {
            showMessage("Escribe tu nombre completo.");
            return;
        }

        if (!attendance) {
            showMessage("Indica si podrás asistir.");
            return;
        }

        const value = attendance.value === "yes"
            ? "¡Gracias! Hemos recibido tu confirmación (demo: aún sin guardar en base de datos)."
            : "Gracias por avisar. ¡Te echaremos de menos! (demo: sin base de datos).";

        showMessage(value);
    });
}

window.addEventListener("DOMContentLoaded", function () {
    if (eventDateEl) {
        eventDateEl.textContent = formatLongDate(targetIso);
    }
    renderCountdown();
    setupForm();
    setInterval(renderCountdown, 1000);
});
