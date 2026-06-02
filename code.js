const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button")
const inputs =document.querySelectorAll("input")

buttons.forEach(button => {
  button.addEventListener("click",(e) => {
    e.stopPropagation();
  })
})
inputs.forEach(input => {
  input.addEventListener("click",(e) => {
    e.stopPropagation();
  })
})

// animação de entrada (scroll)
function reveal() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// clique para expandir
cards.forEach(card => {
  card.addEventListener("click", () => {
    
    // fecha outros cards (opcional, mas deixa mais “app”)
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove("active");
      }
    });

    // abre/fecha o clicado
    card.classList.toggle("active");
  });
});
