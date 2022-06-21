async function routeConfig() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  await fetch("http://localhost:3000/user", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

routeConfig();

