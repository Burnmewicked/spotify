document.getElementById('retrieveData').addEventListener('click', retrieveData);

function retrieveData(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/')
    .then((res) => res.text())
    .then((data) => console.log(data))
}