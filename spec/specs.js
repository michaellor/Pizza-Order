describe('Pizza', function() {
  it("creates a pizza object to store properties.", function() {
  var testPizza = new Pizza ("Large",2,1);
  expect(testPizza.pizzaSize).to.equal("Large");
  expect(testPizza.pizzaTopping).to.equal(2);
  expect(testPizza.pizzaQuantity).to.equal(1);
  });
  it("will find the total pizza price by adding size price to the toppings price.", function() {
    var testPizza = new Pizza ("Large",2,2);
    expect(testPizza.pizzaTotalPrice()).to.equal(26.00);
  });
  it("will check for more than one quantity for the same pizza.", function() {
    var testPizza = new Pizza ("Large",2,0);
    expect(testPizza.pizzaFindQuantity()).to.equal(1);
  })
});
