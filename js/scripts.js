function Pizza (pizzaSize, pizzaTopping, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaQuantity = pizzaQuantity;
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

  totalPrice = (price + priceTopping) * this.pizzaQuantity;
  this.pizzaPriceTotal = totalPrice
  console.log(this.pizzaQuantity, totalPrice, this.pizzaPriceTotal);
  return totalPrice;
}

Pizza.prototype.pizzaFindQuantity = function() {

  this.pizzaQuantity = Math.abs(this.pizzaQuantity);
  if (this.pizzaQuantity === 0) {
    this.pizzaQuantity = this.pizzaQuantity + 1;
  }
  else {
    this.pizzaQuantity = this.pizzaQuantity
  }
  return this.pizzaQuantity;
}
// End of Business Logic

$(document).ready(function() {

  $("#addAnotherPizza").click(function() {
    $(".form-group").append('<br><br><div class="addNewPizza">' +
                          '<label for="pizzaSize">Pizza Size</label><br>' +
                          '<select name="pizzeSize" id="pizzaSizeInput">' +
                            '<option value="Small">Small</option>' +
                            '<option value="Medium">Medium</option>' +
                            '<option value="Large">Large</option>' +
                          '</select><br>' +
                          '<label for="Toppings">Toppings</label><br>' +
                          '<input type="checkbox" name="toppings"> Extra Cheese' +
                          '<input type="checkbox" name="toppings"> Pepperoni' +
                          '<input type="checkbox" name="toppings"> Steak' +
                          '<input type="checkbox" name="toppings"> Sausage' +
                          '<input type="checkbox" name="toppings"> Bacon' +
                          '<input type="checkbox" name="toppings"> Ham' +
                          '<br>' +
                          '<input type="checkbox" name="toppings"> Olives' +
                          '<input type="checkbox" name="toppings"> Pineapples' +
                          '<input type="checkbox" name="toppings"> Green Peppers' +
                          '</div>');
  });


  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var selectedPizzaSize = $("select#pizzaSizeInput").val();
    console.log(selectedPizzaSize);

    var selectedPizzaToppings = ($("input:checkbox:checked").length);

    console.log(selectedPizzaToppings);

    var selectedPizzaQuantity = $("input#numberOfPizzas").val();
    var selectedPizzaQuantity = Math.abs(selectedPizzaQuantity);

    var newPizza = new Pizza(selectedPizzaSize, selectedPizzaToppings, selectedPizzaQuantity);

    console.log(newPizza);

    var PriceOfPizza = newPizza.pizzaTotalPrice().toFixed(2);

    console.log(PriceOfPizza);

    $("div#outputPrice").append("<p><strong>Price: $" + PriceOfPizza + "</strong><br>Description: <br>Pizza Size: " + selectedPizzaSize + "<br>Number of Toppings: " + selectedPizzaToppings + "<br>Quantity: " + selectedPizzaQuantity + "</p>");
  });
});
