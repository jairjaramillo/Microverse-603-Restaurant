class Contact {
  static main() {
    const main = document.createElement('main');
    const title = document.createElement('h2');
    const content = document.createElement('div');
    main.className = 'col-md-12';
    title.className = 'col-md-12';
    content.className = 'col-md-12';

    title.innerHTML = 'Contact Us';
    content.innerHTML = `
      <div class="col-md-8">
        This is our contact information: <br>
        Name: Jair Jaramillo <br>
        Tel: 2222313223; <br>
        Email: jair.jaramillo@outlook.com;
      </div>
      `;

    main.appendChild(title);
    main.appendChild(content);

    return main;
  }
}

export default Contact;
