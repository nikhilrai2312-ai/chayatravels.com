document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".request-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            const card = btn.closest(".car-card");
            const carName = card.querySelector(".car-name").textContent;
            const type = card.dataset.type;

            let phone = "";
            let message = "";

            if (type === "taxi") {
                phone = "919447823597";
                message =
                    `Hello, I would like to book a Taxi.\n` +
                    `Car: ${carName}\n` +
                    `Please share availability and pricing.`;
            } else {
                phone = "918123711526";
                message =
                    `Hello, I want to book a Self-Drive car.\n` +
                    `Car: ${carName}\n` +
                    `Please share availability.`;
            }

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    });

});
