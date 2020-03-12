class Home {
  static main() {
    const main = document.createElement('main');
    const title = document.createElement('h2');
    const content = document.createElement('div');
    main.className = 'col-md-12';
    title.className = 'col-md-12 text-center';
    content.className = 'col-md-12';

    title.innerHTML = 'Welcome!';
    content.innerHTML = `
      <div class="col-12 text-center">
        This is Cafe Plaza. All our food and drinks are specially made to fulfill your tastes.<br>
        From a simple ensaland, to the most expensive of our wines. <br><br>
        Why don't you take a seat?
      </div>
      `;

    main.appendChild(title);
    main.appendChild(content);

    return main;
  }
}

export default Home;
