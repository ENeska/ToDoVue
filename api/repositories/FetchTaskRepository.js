export async function getAllTask(url = 'https://api-nodejs-todolist.herokuapp.com/task') {

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2YWRhMGMwZWNmZDAwMTc0MWZjMmIiLCJpYXQiOjE2MjU3MzA0NjR9.FkhVqrsoCKyW6ZsaiWUOnnNAgfRFR17hJguLtRN-DOU'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export async function addTask(data) {

    const response = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2YWRhMGMwZWNmZDAwMTc0MWZjMmIiLCJpYXQiOjE2MjU3MzA0NjR9.FkhVqrsoCKyW6ZsaiWUOnnNAgfRFR17hJguLtRN-DOU'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }
