const btnToday = document.getElementById("today");
const btnForecast = document.getElementById("forecast");

for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener("click", (e) => {
    let div = e.target.parentNode.parentNode;
    div.classList.toggle("active");
  });
}
