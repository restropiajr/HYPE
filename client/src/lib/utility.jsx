export function totalCartQuantity(cart) {
  return cart.reduce((acc, obj) => acc + Number(obj.quantity), 0);
}

export function totalCartCost(cart) {
  const totalCost = cart.reduce(
    (acc, obj) => acc + Number(obj.price * obj.quantity),
    0
  );
  return totalCost.toFixed(2);
}
