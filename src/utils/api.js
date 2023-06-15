export const fetchAllTickers = () => {
  return fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
    .then((res) => res.json())
    .catch((e) => console.error(e))
}

export const fetchTickersWithInterval = (name) => {
  const params = new URLSearchParams();
  params.set('fsym', name);
  params.set('tsyms', 'USD');
  params.set('api_key', 'bdd9c98341c80c28459323768736a77bdab43ebdaca5e0b34746c745a473732a');

  const url = `https://min-api.cryptocompare.com/data/price?${params.toString()}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.error(e))
}