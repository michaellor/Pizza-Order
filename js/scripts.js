function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPriceTotal = [];
}

Pizza.prototype.pizzaSizePrice = function() {

  var price = 0;
  if (this.pizzaSize === "Large") {
    price = 12.00;
  } else if (this.pizzaSize === "Medium") {
    price = 10.00;
  } else if (this.pizzaSize === "Small") {
    price = 8.00;
  }
  console.log(price);
  return price;
}

Pizza.prototype.pizzaToppingPrice = function() {

  var priceTopping = 0;
  priceTopping = (this.pizzaTopping * .50)
  return priceTopping;
}

Pizza.prototype.pizzaTotalPrice = function() {

  var totalPrice = 0;
  var price = 0;
  var priceTopping = 0;

  if (this.pizzaSize === "Large") {
    price = 12.00;
  } else if (this.pizzaSize === "Medium") {
    price = 10.00;
  } else if (this.pizzaSize === "Small") {
    price = 8.00;
  }

  priceTopping = (this.pizzaTopping * .50)

  totalPrice = price + priceTopping;

  return totalPrice;
}
