import Picture from './pic/food.jpg';

class Menu {
  static main() {
    const main = document.createElement('main');
    const title = document.createElement('h2');
    const menu = document.createElement('table');
    const food = new Image();
    food.src = Picture;

    main.className = 'col-12';
    title.className = 'col-12 text-center';
    menu.className = 'col-12';
    food.className = 'col-sm-8 offset-sm-2';

    title.innerHTML = 'Our Menu';
    menu.innerHTML = `
      <tr>
        <th>Product</th>
        <th>Cost</th>
      </tr>
      <tr>
        <td>Cafe</td>
        <td>$12</td>
      </tr>
      <tr>
        <td>Pizza</td>
        <td>$32</td>
      </tr>
      <tr>
        <td>Pasta</td>
        <td>$12</td>
      </tr>
      <tr>
        <td>Soda</td>
        <td>$5</td>
      </tr>
      <tr>
        <td>Cake</td>
        <td>$20</td>
      </tr>
      `;

    main.appendChild(title);
    main.appendChild(menu);
    main.appendChild(food);

    return main;
  }
}

export default Menu;
