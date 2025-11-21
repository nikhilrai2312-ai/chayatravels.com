document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.booking-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const type = form.getAttribute('data-type');
            const carName = form.querySelector('input[name="car_name"]').value;

            let message = `Hello, I want to book a ${type === 'taxi' ? 'taxi' : 'self-drive car'}.\nCar: ${carName}\n`;

            if (type === 'taxi') {
                const pickup = form.querySelector('input[name="pickup"]').value;
                const pickupDate = form.querySelector('input[name="pickup_date"]').value;
                const drop = form.querySelector('input[name="drop"]').value;
                const dropDate = form.querySelector('input[name="drop_date"]').value;
                message += `Pickup: ${pickup}, ${pickupDate}\nDrop: ${drop}, ${dropDate}`;
            } else {
                const startDate = form.querySelector('input[name="start_date"]').value;
                const endDate = form.querySelector('input[name="end_date"]').value;
                message += `From: ${startDate}\nTo: ${endDate}`;
            }

            const whatsappURL = `https://wa.me/918123711526?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });
});
