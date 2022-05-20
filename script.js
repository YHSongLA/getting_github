// fetch("https://api.github.com/users/YHSongLA")
//     .then(response => response.json() )
//     .then(coderData => console.log(coderData["login"]))
//     .catch(err => console.log(err) )


async function getCoderData() {
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch("https://api.github.com/users/YHSongLA");
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    console.log(coderData)
    document.querySelector("div").innerHTML = coderData['avatar_url']
    return coderData;
}

// console.log(getCoderData());