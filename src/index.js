import './style.css';
import Background from './pic/bg.jpg';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

class Main {
  static jumbo() {
    const bg = new Image();
    bg.src = Background;
    const jumbo = document.createElement('div');
    jumbo.className = 'jumbotron text-center bg';

    jumbo.innerHTML = `
      <h1 class="text-white">Cafe Plaza</h1>
      <h2 class="text-white">Cafe - Food - Ambient</h2>
      `;

    return jumbo;
  }

  static navbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-sm bg-dark navbar-dark';

    navbar.innerHTML = `
      <a class="navbar-brand" id="homeLnk" href="#">Cafe plaza</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="menuLnk" href="#">Our menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contLnk" href="#">Contact</a>
        </li>
      </ul>
      `;

    return navbar;
  }

  static main(element) {
    const row = document.createElement('div');
    row.className = 'row';
    row.id = 'main';

    row.appendChild(element);
    return row;
  }

  static footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer page-footer font-small bg-dark pt-4';

    footer.innerHTML = `
      <div class="footer-copyright text-center py-3 text-white">© 2020 Copyright:
      <a href="https://github.com/jairjy">Jair Jaramillo. All Rights Reserved.</a>
      </div>
      `;

    return footer;
  }

  static tabChange(element) {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(element);
  }
}

document.getElementById('content').appendChild(Main.jumbo());
document.getElementById('content').appendChild(Main.navbar());
document.getElementById('content').appendChild(Main.main(Home.main()));
document.getElementById('content').appendChild(Main.footer());

document.getElementById('homeLnk').onclick = () => Main.tabChange(Home.main());
document.getElementById('menuLnk').onclick = () => Main.tabChange(Menu.main());
document.getElementById('contLnk').onclick = () => Main.tabChange(Contact.main());
