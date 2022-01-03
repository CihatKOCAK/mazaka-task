const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML= `
    <div class="nav">
    <img src="./assets/img/dark-logo.png" class="brand-logo" alt="" />
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">
                Search
            </button>
        </div>
        <a href="#"><img src="./assets/img/user.png" alt=""></a>
        <a href="#"><img src="./assets/img/cart.png" alt=""></a>
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
}


 createNav();