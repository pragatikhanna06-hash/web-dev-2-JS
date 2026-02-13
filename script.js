// ================= SELECT ELEMENTS =================

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");

// ================= CREATE EVENT CARD =================

function createEventCard(eventData) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>📅 ${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}

// ================= FORM SUBMIT =================

eventForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    // ✅ Add new event ABOVE previous ones
    eventContainer.prepend(createEventCard(eventData));

    eventForm.reset();
});

// ================= DELETE SINGLE EVENT =================

eventContainer.addEventListener("click", (e) => {

    const card = e.target.closest(".event-card");

    if (e.target.classList.contains("delete-btn") && card) {
        card.remove();
    }

    // If no events left → show empty state
    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML =
            `<div class="empty-state">No events yet. Add your first event!</div>`;
    }
});

// ================= CLEAR ALL EVENTS =================

clearAllBtn.addEventListener("click", () => {

    eventContainer.innerHTML =
        `<div class="empty-state">No events yet. Add your first event!</div>`;
});
