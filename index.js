const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('75.155.74.153', (error, coordinates) => {
  if (error) {
    console.log("There was an error fetching coordinates", error);
    return;
  }
  console.log('Coordinates found!:', coordinates);
}) 