class {
  constructor(div) {
    this.div = div;
    this.addAutorize();
  }
  addAutorize() {
    this.div.innerHTML = 
     `<form id="auto" autocomplete="on">
        <input type="text" id="inpLogin" class="form-control input" placeholder="Логін">
        <input type="password" id="inpPassword" class="form-control input" placeholder ="Пароль">
        <input type="submit" class="btn btn-primary" value="Увійти">
      </form>`;
    $('#auto').on('submit', e => {
      e.preventDefault();
      fetch('user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: $('#inpLogin').value,
          password: $('#inpPassword').value
        })
      })
        .then(res => res.json())
        .then(res => res.message === "Login successful" ? this.renderAdminPanel() : alert('Не вірний логін або пароль'));
    });
  }
  renderAdminPanel() {
    this.div.innerHTML =
     `<div class="column">
        <form id='ownerFormAdd'>
          <input type='file' name='filetoupload' id='filetoupload'>
          <input id='addBikeName' type='text' placeholder='Назва товару'>
          <input id='addBikePrice' type='text' placeholder='Ціна товару'>
          <input id='addBikeDescription' type='text' placeholder='Oпис товару'>
          <input type='submit' value='Додати товар'>
        </form>
        <form id='ownerFormRemove'>
          <input id='removeBikeName' type='text' placeholder='Назва товару для видалення' required>
          <input type='submit' value='Видалити товар'>
        </form>
      </div>
      <div class="column">
        Замовлення:
        <table id='orders'></table>
        <button id='del-orders'>Очистити список</button>
        Замовлення з конструкторa:
        <table id='selected-orders'></table>
        <button id='del-selected-orders'>Очистити список</button>
        Передзвоніть мені:
        <table id='call-me'></table>
        <button id='del-call-me'>Очистити список</button>
      <div>`;
    this.prepareTable('orders', $('#orders'));
    this.prepareTable('selected-orders', $('#selected-orders'));
    this.prepareTable('call-me', $('#call-me'));
    this.addEventListeners();
  }
  async prepareTable(url, table) {
    const res = await fetch(url);
    const dataArr = await res.json();
    let result = '';
    dataArr.forEach(obj => {
      result += '<tr>';
      for (let el in obj) result += `<td>${obj[el]}</td>`;
      result += '</tr>';
    })
    table.innerHTML += result;
  }
  addEventListeners() {
    $('#del-orders').on('click', () => this.delData('orders'));
    $('#del-selected-orders').on('click', () => this.delData('selected-orders'));
    $('#del-call-me').on('click', () => this.delData('call-me'));
    $('#ownerFormAdd').on('submit', e => {
      e.preventDefault();
      const item = {
        name: $('#addBikeName').value,
        price: $('#addBikePrice').value,
        description: $('#addBikeDescription').value,
        fileName: $('#filetoupload').value ? $('#filetoupload').value.match(/[^\\]+$/)[0] : 'bike-offroad.jpg'
      };
      const form = new FormData(e.target)
      form.append('name', item.name)
      form.append('price', item.price)
      form.append('description', item.description)
      form.append('fileName', item.fileName);
      fetch('products', {
        method: 'POST',
        headers: {
          "Authorization": localStorage.getItem('token')
        },
        body: form
      });
      e.target.reset();
    });
    $('#ownerFormRemove').on('submit', e => {
      e.preventDefault();
      const id = this.productList.productsArr.find(el => el.name === $('#removeBikeName').value)._id;
      fetch('products/' + id, {
        method: 'DELETE',
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      });
      e.target.reset();
    });
  }
  delData(nameToRemove) {
    fetch(nameToRemove, {
      method: 'DELETE'
    });
    $(`#${nameToRemove}`).innerHTML = '';
  }
}