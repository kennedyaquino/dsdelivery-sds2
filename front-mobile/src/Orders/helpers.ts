export function formartPrice(price: number) {
  const formarter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formarter.format(price);
}