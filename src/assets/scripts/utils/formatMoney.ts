export default function formatMoney(value: number | string, locale = 'pt-br') {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
