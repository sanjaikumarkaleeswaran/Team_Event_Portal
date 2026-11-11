const events = [
  { title: 'Git Fundamentals', date: '2026-12-01', seats: 25 },
  { title: 'JavaScript Basics', date: '2026-12-05', seats: 20 }
];

function renderEvents(items = events) {
  const container = document.getElementById('event-list');
  if (!container) return;
  container.replaceChildren();
  items.forEach((event) => {
    const card = document.createElement('article');
    card.className = 'event-card';
    const heading = document.createElement('h3');
    heading.textContent = event.title;
    const details = document.createElement('p');
    details.textContent = `Date: ${event.date} | Seats: ${event.seats}`;
    card.append(heading, details);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => renderEvents());