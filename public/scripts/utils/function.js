async function getPhotographers() {
    let response = await fetch("./data/photographers.json");
      return await response.json();
    }


function echapClose(fctn) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      fctn(e);
    }
  });
}