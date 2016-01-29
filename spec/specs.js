describe('Pizza', function() {
  it("creates a pizza object to store properties.", function() {
  var testPizza = new Pizza ("Large","Pepperoni");
  expect(testPizza.pizzaSize).to.equal("Large");
  expect(testPizza.pizzaTopping).to.equal("Pepperoni");
  });
});
