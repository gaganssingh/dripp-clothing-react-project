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

export const clearItemFromCart = (allCartItems, itemToClear) =>
  allCartItems.filter((item) => item.id !== itemToClear.id);

export const removeItemFromCart = (allCartItems, itemToRemove) => {
  console.log("CLICKED REMOVE ITEM");
  const existingItem = allCartItems.find((item) => item.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    // If the item has a quantity of 1 in the cart, remove it from the cart completely
    return clearItemFromCart(allCartItems, itemToRemove);
    // return allCartItems.filter((item) => item.id !== itemToRemove.id);
  } else {
    // Otherwise decrease quantity by 1
    return allCartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
