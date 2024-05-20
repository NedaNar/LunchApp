export function formatCurrency(number: number) {
  return new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
}

// ar daryt en-US + .replace('.', ',')  ar 'de-DE';
