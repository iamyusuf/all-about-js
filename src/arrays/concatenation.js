let countries = ['Bangladesh', 'India', 'Pakistan'];
let saarcCountries = countries.concat('Maldives', 'Bhutan', 'Nepal', 'Afghanistan', 'Sri Lanka');
let echo = val => console.log(val);
let makeUpperCase = val => val.toUpperCase();
// saarcCountries.forEach( val => echo(val));

// map
let upperCasedSaarcCountries = saarcCountries.map(makeUpperCase);
upperCasedSaarcCountries.forEach(echo);
