export function totalCartQuantity(cart) {
  const totalQuantity = cart.reduce(
    (acc, obj) => acc + Number(obj.quantity),
    0
  );
  return totalQuantity;
}

export function totalCartCost(cart) {
  const totalCost = cart.reduce(
    (acc, obj) => acc + Number(obj.price) * Number(obj.quantity),
    0
  );
  return totalCost;
}
