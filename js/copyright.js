const prefix = "&copy; "
const suffix = " Byteland. All rights reserved."

const jokes = ["Not really, this is just to look cool", "Get noobed, loser", "Did you know? Byteland uses python.", "Make sure to code in Luau for scripts to work!", "Jarararad45 forgot to subscribe :laugh:", "BOOOOOOOOOOOOOOOOOOOOOOOOM!!!", "Tbh, I dont know why this exists"]

function getYear() {
    const date = new Date()
    return date.getFullYear()
}

function getJoke() {
    const joke = jokes[Math.floor((Math.random() * jokes.length))]

    return joke
}

function setYear() {
    const element = document.getElementById("copyright")
    const element2 = document.getElementById("joke")
    const fulltext = "".concat(prefix, getYear().toString(), suffix)
    const joke = getJoke()

    console.log(joke)

    element.innerHTML = fulltext
    element2.innerHTML = "".concat("(", joke, ")")
}

document.addEventListener("DOMContentLoaded", () => {
    setYear()
})
