/**
 * Card Component Controller
 * Implements flip logic and dynamic content generation.
 */
(() => {
  const CONFIG = {
    selectors: {
      card: ".card",
      number: "#cardNumber",
      label: ".card__label-text",
      labelHidden: ".card__label-text--hidden",
      numberContainer: ".card__number",
      labelContainer: ".card__label",
    },
    classes: {
      isFlipped: "is-flipped",
    },
    labelOptions: [
      //   "LEGENDARY",
      //   "EPIC",
      //   "RARE",
      //   "COMMON",
      //   "MYTHIC",
      //   "UNIQUE",
      //   "SPECIAL",
      //   "EXCLUSIVE",
      //   "LIMITED",
      //   "COLLECTIBLE",
      "NEW",
    ],
    randomNumberRange: 9,
  };

  function updateRandomNumber() {
    const numberElement = document.querySelector(CONFIG.selectors.number);
    if (numberElement) {
      numberElement.textContent = Math.floor(
        Math.random() * CONFIG.randomNumberRange,
      );
    }
  }

  function updateRandomLabel() {
    const labelElement = document.querySelector(CONFIG.selectors.label);
    const labelHiddenSpan = document.querySelector(
      CONFIG.selectors.labelHidden,
    );

    if (labelElement && labelHiddenSpan) {
      const randomIndex = Math.floor(
        Math.random() * CONFIG.labelOptions.length,
      );
      const text = CONFIG.labelOptions[randomIndex];

      labelElement.textContent = text;
      labelHiddenSpan.textContent = text;
    }
  }

  function toggleCardFlip(cardElement) {
    if (cardElement) {
      cardElement.classList.toggle(CONFIG.classes.isFlipped);
    }
  }

  function initialize() {
    const card = document.querySelector(CONFIG.selectors.card);
    const numberContainer = document.querySelector(
      CONFIG.selectors.numberContainer,
    );
    const labelContainer = document.querySelector(
      CONFIG.selectors.labelContainer,
    );

    updateRandomNumber();
    updateRandomLabel();

    card?.addEventListener("click", () => toggleCardFlip(card));

    numberContainer?.addEventListener("click", (e) => {
      e.stopPropagation();
      updateRandomNumber();
    });

    labelContainer?.addEventListener("click", (e) => {
      e.stopPropagation();
      updateRandomLabel();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
