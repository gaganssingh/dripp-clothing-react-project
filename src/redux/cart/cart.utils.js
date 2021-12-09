export const addItemToCart = (cartItems, cartItemToAdd) => {
  // If item adding to the cart already exists in the cart
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // Update the qty of the existing item
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    // Otherwise, add it to car with a qty of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
