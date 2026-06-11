const passwordInput = document.getElementById("password");
const enterBtn = document.getElementById("enterBtn");
const response = document.getElementById("response");
const gate = document.querySelector(".gate");
const runes = document.querySelector(".runes");

const correctHash =
    "83006a438f94daf3a7dd9c7b27f70c15e443c0ca55d58fcdfa76899ae466b455";

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

        enterBtn.disabled = true;
        passwordInput.disabled = true;

        runes.classList.add("awaken");

        response.className = "response opened";
        response.innerHTML =
            "Slovo bylo vysloveno...";

        setTimeout(() => {
            response.innerHTML =
                "Pedo mellon a minno.";
        }, 1800);

        setTimeout(() => {
            response.innerHTML =
                "Brána rozpoznala přítele.";
        }, 3800);

        setTimeout(() => {
            gate.classList.add("opening");
        }, 5000);

        setTimeout(() => {
            window.location.href = "party.html";
        }, 7500);

    } else {

        response.className = "response error";

        response.innerHTML =
            "Ticho. Kámen zůstává nehybný.";
    }
}

enterBtn.addEventListener("click", tryEnter);

passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        tryEnter();
    }
});
