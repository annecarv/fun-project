async function routeConfig() {
   await fetch('http://localhost:3000/user/')
    .then(function(response) {
      console.log(response)
    })
}

routeConfig();

