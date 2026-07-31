function initializeReasons() {
    const reasons = [
        "Your smile brightens my darkest days.",
        "You believe in me.",
        "You make me laugh.",
        "You're beautiful inside and out.",
        "You're the kindest person i know.",
        "You're always there when i need you.",
        "I love the way you care for others.",
        "You're a safe place.",
        "You've taught me so many things about love and family relationship.",
        "I love how you appreciate the little things.",
        "I love you because nobody has ever given me the love that you have given me and.",
        "You bring out the best in me.",
        "I love how you treat me with grace and respect.",
    ];

    const cardsContainer = document.getElementById("cardsContainer");

    if (!cardsContainer) return;

    reasons.forEach((reason, index) => {
        const card = document.createElement("div");
        card.className = "flip-card";

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    ❤️<br>Reason ${index + 1}
                </div>

                <div class="flip-card-back">
                    ${reason}
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        cardsContainer.appendChild(card);
    });
}