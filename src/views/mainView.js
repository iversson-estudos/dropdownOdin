function mainView() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="dropdown closed">
      <button id="dropdownBtn">Dropdown</button>
      <ul class="menu">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>
    </div>
    `;
}

export { mainView };
