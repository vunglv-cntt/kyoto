export const formatCurrency = (amount?: number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });
  return formatter.format(amount || 0).replaceAll(".", ",");
};
