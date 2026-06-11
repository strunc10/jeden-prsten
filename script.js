const passwordInput = document.getElementById("password");
const enterBtn = document.getElementById("enterBtn");
const response = document.getElementById("response");

function tryEnter() {

    const value = passwordInput.value.trim().toLowerCase();

    if (value === "mellon") {

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
