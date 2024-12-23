import "./styles.css";
import { mainView } from "./views/mainView";

mainView();

const dropdownBtn = document.getElementById("dropdownBtn");
dropdownBtn.addEventListener("click", (e) => {
  if (dropdownBtn.parentNode.classList.contains("closed")) {
    dropdownBtn.parentNode.classList.remove("closed");
  } else {
    dropdownBtn.parentNode.classList.add("closed");
  }
});
