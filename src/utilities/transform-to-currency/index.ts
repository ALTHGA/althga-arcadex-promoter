const formatAmountToCurrency = (item: number) => {
  return item?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export { formatAmountToCurrency };
