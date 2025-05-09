export function parsePrice(priceStr) {
  let cleaned = priceStr.replace(/[^\d,\.]/g, '');
  cleaned =  cleaned.replace(/\./g, '');
  const number = parseInt(cleaned, 10) ;
  return isNaN(number) ? 0 : number;
}