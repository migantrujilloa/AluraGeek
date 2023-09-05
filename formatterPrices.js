export const formatPrice = (num) => {
  return new Intl.NumberFormat("us", {
    style: "currency",
    currency: "PEN",
  }).format(num);
};
