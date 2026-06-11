const passwordInput = document.getElementById("password");
const enterBtn = document.getElementById("enterBtn");
const response = document.getElementById("response");

const correctHash =
    "c1863b86e8fce94f051cf9c1e8b8f7f1cf7928f9a783b7f4f1c54c2f7f9d564c";

async function sha256(text) {
    const data = new TextEncoder().encode(text);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

async function tryEnter() {

    const value = passwordInput.value.trim().toLowerCase();

    const enteredHash = await sha256(value);

    if (enteredHash === correctHash) {

        response.className = "response opened";

        response.innerHTML =
            "Brána poznala hlas přítele. Kámen se zachvěl a dávná cesta se otevřela...";

        setTimeout(() => {
            window.location.href = "party.html";
        }, 2500);

    } else {

        response.className = "response error";

        response.innerHTML =
            "Ticho. Jen vítr mezi horami. Brána neodpověděla.";
    }
}

enterBtn.addEventListener("click", tryEnter);

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        tryEnter();
    }
});
