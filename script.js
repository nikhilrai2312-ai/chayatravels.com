document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll(".booking-form");

    forms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();

            let car = form.querySelector("input[name='car_name']").value;
            let type = form.dataset.type;

            let message = `Hello, I want to book a ${type === "taxi" ? "Taxi" : "Self-Drive Car"}.\nCar: ${car}\n`;

            if (type === "taxi") {
                message +=
                    `Pickup: ${form.pickup.value}\n` +
                    `Pickup Date: ${form.pickup_date.value}\n` +
                    `Drop: ${form.drop.value}\n` +
                    `Drop Date: ${form.drop_date.value}`;
            } else {
                message +=
                    `From: ${form.start_date.value}\n` +
                    `To: ${form.end_date.value}`;
            }

            const url = `https://wa.me/918123711526?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    });
});
