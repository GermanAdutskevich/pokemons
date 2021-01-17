function getPokemonList(offset) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/api/v2/pokemon?limit=5&offset=${offset}`,
    requestOptions
  ).then(res => res.json())
  .then(res => {
      return res;
  })
  ;
}

function getPokemonDetails(url) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    url,
    requestOptions
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
}

export default { getPokemonList, getPokemonDetails };
