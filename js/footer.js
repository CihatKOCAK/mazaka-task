const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML= `
    <div class="footer-content">
        <img src="./assets/img/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">Erkek</li>
            <li class="category-title">
              <a href="#" class="footer-link">Tişörtler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Svetşörtler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Kotlar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Pantolonlar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Ayakkabılar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Gündelik Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Resmi Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Spor Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Saatler</a>
            </li>
          </ul>
          <ul class="category">
            <li class="category-title">Kadın</li>
            <li class="category-title">
              <a href="#" class="footer-link">Tişörtler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Svetşörtler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Kotlar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Pantolonlar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Ayakkabılar</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Gündelik Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Resmi Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Spor Kıyafetler</a>
            </li>
            <li class="category-title">
              <a href="#" class="footer-link">Saatler</a>
            </li>
          </ul>
        </div>
        
      </div>
      <p class="footer-title">Hakkımızda</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente, aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sapiente, aperiam!Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sapiente, aperiam!Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sapiente, aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente, aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sapiente, aperiam!Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sapiente, aperiam!Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sapiente, aperiam!
        </p>
        <p class="info">Destek Mail - yardim@clothing.com, musteritemsilcisi@clothing.com</p>
        <p class="info">Telefon - 90 123 132 12 12, 90 123 132 12 13</p>
        <div class="footer-social-container">
          <div>
            <a href="#" class="social-link">Şartlar ve Hizmetler</a>
            <a href="#" class="social-link">Gizlilik Politikası</a>
          </div>
          <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
        <div class="footer-credit">Clothing, En iyi giyim online mağazası</div>
    
    `;
}

createFooter();