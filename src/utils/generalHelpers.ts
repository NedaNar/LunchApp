export function formatCurrency(number: number) {
  return new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
}

// Šis komentaras bus ištrintas prieš sumerginant į developerį
// standarinio Intl.NumberFormat  'de-DE'outputas (55,55 €) ,o  'en-US' outputas (€55.55)  nzn kaip formatuot, nebent su .replace('.', ',')  ;
