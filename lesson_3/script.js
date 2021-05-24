class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item">
    <img class="main-photo" src="img/nophoto.png" alt="photo">
    <div class="item-info">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>
    <button class="item-button" type="button">Добавить</button>
    </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    // Вариант из методички
    /*this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });*/
    
    let listHtml = this.goods.reduce((total, item) => 
        {
            const goodsItem = new GoodsItem(item.title, item.price)
            return total + goodsItem.render(goodsItem.title, goodsItem.price)
        }, '');
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  getTotal() {
    return this.goods.reduce((acc, current) => acc + current.price, 0)
  }
}

class Cart {
    constructor() {
        isEmpty = true;
    }
    addPosition() {

    }
    delPosition() {

    }
    clear() {
        
    }
    render() {

    }
    getTotal() {

    }

}

class CartItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
    render() {

    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
