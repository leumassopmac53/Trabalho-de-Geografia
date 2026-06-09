const feeds = document.querySelectorAll(".feed")
const cards = document.querySelectorAll(".card")

function activeFeed(id){
  feeds.forEach(feed =>{
    feed.classList.remove("active")
    feed.classList.remove("show")
  })
  const cd = document.getElementById(id)
  cd.classList.add("active")
  setTimeout(() => {
    cd.classList.add("show")
  }, 100)
}


cards.forEach(card => {
  card.addEventListener("click", () => {

    const estavaAtivo = card.classList.contains("active");

    cards.forEach(c => {
      c.classList.remove("active");
      c.classList.remove("inative");
    });

    if (!estavaAtivo) {
      card.classList.add("active");

      cards.forEach(c => {
        if (c !== card) {
          c.classList.add("inative");
        }
      });
    }

  });
});