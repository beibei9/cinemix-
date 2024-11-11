const premiereDates = [
    { id: '1', date: new Date('November 22, 2024 12:00:00'), title: 'Wicked' },
    { id: '2', date: new Date('November 27, 2024 18:00:00'), title: 'Moana 2' },
    { id: '3', date: new Date('February 14, 2025 15:00:00'), title: 'Captain America: Brave New World' }
];

function updateCountdowns() {
    premiereDates.forEach(movie => {
        const now = new Date().getTime();
        const timeLeft = movie.date.getTime() - now;

        if (timeLeft <= 0) {
            document.getElementById(`time-left-${movie.id}`).innerText = 'The movie has premiered!';
            return;
        }
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById(`premiere-date-${movie.id}`).innerHTML = `Premiere Date: ${movie.date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })}`;
        document.getElementById(`time-left-${movie.id}`).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

setInterval(updateCountdowns, 1000);
updateCountdowns();
