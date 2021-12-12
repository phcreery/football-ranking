

async function fetchGames() {
  // let proxy = 'https://thingproxy.freeboard.io/fetch/'
  // let proxy = 'http://alloworigin.com/get?url='
  // let proxy = 'https://crossorigin.me/'
  // let proxy = 'http://192.168.1.123:8084/'
  let proxy = 'https://peyton.creery.org/coors/'
  let request = 'https://api.collegefootballdata.com/games?year=2021&seasonType=regular'
  // let request = 'https://peyton.creery.org/cfb/games?year=2021&seasonType=regular'
  const response = await fetch(
    // request,
    proxy + request,
    // 'http://www.whateverorigin.org/get?url=' + encodeURIComponent(request) + '&callback=?',
    // 'https://api.allorigins.win/raw?url='+ encodeURIComponent(request),
    {
      headers: {
        accept: 'application/json',
        // 'Content-Type': 'application/json',
        // "accept-language": "en-US,en;q=0.9",
        authorization: 'Bearer NJRgktQC/FilkL37+s4ZSvckBKL/Iox5fw18DumOF+X8u2DntZqcJ44P9imkoG+t',
        // "if-none-match": "W/\"93f97-bd8lO4nIKIW0ZF6n4neQI+4nSe8\"",
        // "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
        // "sec-ch-ua-mobile": "?0",
        // "sec-ch-ua-platform": "\"Windows\"",
        // "sec-fetch-dest": "empty",
        // "sec-fetch-mode": "cors",
        // "sec-fetch-site": "same-origin",
        // "Origin": "localhost",
        // origin: 'https://api.collegefootballdata.com',
        // origin: null,
        // 'X-Requested-With': 'https://api.collegefootballdata.com',
        'x-requested-with': 'https://peyton.creery.org/',
        // 'Access-Control-Allow-Origin': '*'
      },
      // referrer: 'none',
      // referrerPolicy: 'no-referrer',
      body: null,
      method: 'GET',
      // mode: 'cors',
      // "credentials": "include",
      // "crossDomain": true,
    }
  )
  let json = await response.json()
  console.log('res', json)
  return json
}

async function fetchGames2() {

}

export { fetchGames, fetchGames2 }
