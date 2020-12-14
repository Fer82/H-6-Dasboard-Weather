function initPage() {
    const input = document.getElementById("city-input");
    const search = document.getElementById("search-button");
    const clear = document.getElementById("clear-history");
    const name = document.getElementById("city-name");
    const Temp = document.getElementById("temperature");
    const Humidity = document.getElementById("humidity");4
    const Wind = document.getElementById("wind-speed");
    const UVI = document.getElementById("UV-index");
    const Pic = document.getElementById("current-pic");
    const history = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    const APIKey = "27c6a7d77fad7e746e399a4f188c8ea0";
}