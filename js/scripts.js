function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPriceTotal = [];
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
// End of Business Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var selectedPizzaSize = $("input#pizzaSizeInput").val();

    var selectedPizzaToppings = $("input#pizzaToppingInput").val();

    var newPizza = new Pizza(selectedPizzaSize, selectedPizzaToppings);
};
