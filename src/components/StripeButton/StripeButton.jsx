import StripeCheckout from "react-stripe-checkout";

import React from "react";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K5DEDDoKWXzFvdYrOYr7MZPHYrF4f1gf8FY5uEbBIjCn8BI8bQtVbG7a5lBB4jIAOum51FbZNaIcFcFV5hasDQZ00VtKxEbz2";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="DRIPP Clothing Inc."
      billingAddress
      shippingAddress
      image="https:svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
