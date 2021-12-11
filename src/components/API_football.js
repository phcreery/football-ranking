async function fetchGames() {
  const response = await fetch(
    "https://thingproxy.freeboard.io/fetch/https://api.collegefootballdata.com/games?year=2021&seasonType=regular",
    {
      headers: {
        accept: "application/json",
        // 'Content-Type': 'application/json',
        // "accept-language": "en-US,en;q=0.9",
        authorization:
          "Bearer NJRgktQC/FilkL37+s4ZSvckBKL/Iox5fw18DumOF+X8u2DntZqcJ44P9imkoG+t",
        // "if-none-match": "W/\"93f97-bd8lO4nIKIW0ZF6n4neQI+4nSe8\"",
        // "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
        // "sec-ch-ua-mobile": "?0",
        // "sec-ch-ua-platform": "\"Windows\"",
        // "sec-fetch-dest": "empty",
        // "sec-fetch-mode": "cors",
        // "sec-fetch-site": "same-origin",
        // "Origin": "bridged.xyz",
        // 'Access-Control-Allow-Origin': '*'
      },
      // "referrerPolicy": "no-referrer",
      body: null,
      method: "GET",
      mode: "cors",
      // "credentials": "include",
      // "crossDomain": true,
    }
  );
  let json = await response.json();
  console.log("res", json);
  return json;
}

export { fetchGames };
