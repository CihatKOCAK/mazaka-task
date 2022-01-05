const createNav = () => {
  let nav = document.querySelector(".navbar");
  let btn;
  if (window.screen.width <= 768) {
    btn = ` <img src="/assets/img/search.png" class="search-btn" alt=""> `;
  } else {
    btn = `
    <button class="search-btn">
               Search
            </button>
    `;
  }
  nav.innerHTML =
    `
    <div class="nav">
    <img src="./assets/img/dark-logo.png" class="brand-logo" alt="" />
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            ` +
    btn +
    `
        </div>
        <a href="#" class="ico"><img src="./assets/img/user.png" alt=""></a>
        <a href="#" class="ico"><img src="./assets/img/cart.png" alt=""></a>
    </div>
  </div>

  <ul class="links-container">
      <li class="link-item"><a href="#" class="link">Ana Sayfa</a></li>
      <li class="link-item"><a href="#" class="link">Kadın</a></li>
      <li class="link-item"><a href="#" class="link">Erkek</a></li>
      <li class="link-item"><a href="#" class="link">Çocuk</a></li>
      <li class="link-item"><a href="#" class="link">Aksesuar</a></li>
  </ul>
    `;
};

createNav();
