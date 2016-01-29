function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPriceTotal;
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
  this.pizzaPriceTotal = totalPrice;
  return totalPrice;
}
// End of Business Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var selectedPizzaSize = $("select#pizzaSizeInput").val();
    console.log(selectedPizzaSize);

    var selectedPizzaToppings = ($("input:checkbox:checked").length);

    console.log(selectedPizzaToppings);

    var newPizza = new Pizza(selectedPizzaSize, selectedPizzaToppings);

    console.log(newPizza);

    var PriceOfPizza = newPizza.pizzaTotalPrice().toFixed(2);

    console.log(PriceOfPizza);

    $("div#outputPrice").append("<p>$" + PriceOfPizza + "</p>");
  });
});
