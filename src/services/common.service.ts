export const numberFormat = (value) =>
new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'EUR'
}).format(value);