describe('Pizza', function() {
  it("creates a pizza object to store properties.", function() {
  var testPizza = new Pizza ("Large",2);
  expect(testPizza.pizzaSize).to.equal("Large");
  expect(testPizza.pizzaTopping).to.equal(2);
  });
  it("will adjust the price based on pizza size.", function() {
    var testPizza = new Pizza ("Large",2);
    expect(testPizza.pizzaSizePrice()).to.equal(12.00);
  });
  it("will determine the additional price of toppings.", function() {
    var testPizza = new Pizza ("Large",2);
    expect(testPizza.pizzaToppingPrice()).to.equal(1.00);
  });
});
