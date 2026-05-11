<!-- NAVIGATION -->
<nav id="mainNav">
  <a class="nav-logo" href="#" onclick="showPage('home');return false;">
  <img src="logo-v3.png" alt="Daily Picks Logo" style="width:150px;height:auto;">
</a>

<ul class="nav-links" id="navLinks">
    <li><a href="#" onclick="showPage('home');toggleMenu();return false;">Home</a></li>
    <li><a href="#" onclick="showPage('home');setTimeout(()=>document.getElementById('products').scrollIntoView({behavior:'smooth'}),100);toggleMenu();return false;">Products</a></li>
    <li><a href="#" onclick="showPage('about');toggleMenu();return false;">About</a></li>
    <li><a href="#" onclick="showPage('contact');toggleMenu();return false;">Contact</a></li>
    <li><a href="#" onclick="showPage('disclosure');toggleMenu();return false;">Disclosure</a></li>
    <li><a href="https://www.amazon.com" target="_blank" class="nav-cta">Shop Amazon ↗</a></li>
  </ul>

  <button class="menu-toggle" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>