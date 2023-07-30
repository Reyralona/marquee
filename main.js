// char = document.querySelector("#char1")
// pixel = document.getElementsByClassName("char-pixel")

// charMap = []
charDictionary = {
    A: [65, 56, 47, 38, 29, 20, 12, 13, 14, 24, 33, 42, 51, 60, 69, 39, 40, 41],
    B: [11, 20, 29, 38, 47, 56, 65, 12, 13, 14, 24, 33, 41, 40, 39, 51, 60, 68, 67, 66],
    C: [14, 13, 12, 20, 29, 38, 47, 56, 66, 67, 68, 69, 15],
    D: [11, 20, 29, 38, 47, 56, 65, 13, 12, 14, 24, 33, 42, 51, 60, 68, 67, 66],
    E: [11, 20, 29, 47, 38, 56, 65, 66, 67, 68, 69, 12, 13, 14, 15, 39, 40, 41],
    F: [11, 20, 29, 38, 47, 56, 65, 12, 13, 14, 15, 39, 40, 41],
    G: [14, 13, 12, 20, 29, 38, 47, 56, 66, 67, 68, 60, 51, 40, 42, 41],
    H: [11, 20, 29, 38, 47, 56, 65, 39, 40, 41, 15, 24, 33, 42, 51, 60, 69],
    I: [12, 13, 14, 22, 31, 40, 49, 58, 66, 67, 68],
    J: [11, 12, 13, 14, 15, 23, 32, 41, 50, 59, 67, 66, 56],
    K: [11, 20, 29, 38, 47, 56, 65, 39, 31, 23, 15, 49, 59, 69],
    L: [11, 20, 29, 38, 47, 56, 65, 66, 67, 68, 69],
    M: [64, 55, 46, 37, 28, 19, 10, 20, 30, 40, 49, 58, 67, 32, 24, 16, 25, 34, 43, 52, 61, 70],
    N: [65, 56, 47, 38, 29, 20, 11, 30, 40, 50, 15, 24, 33, 42, 51, 60, 69],
    O: [12, 13, 14, 20, 29, 38, 47, 56, 66, 67, 68, 60, 51, 42, 33, 24],
    P: [11, 29, 20, 38, 47, 56, 65, 12, 13, 14, 33, 24, 41, 40, 39],
    Q: [12, 13, 14, 20, 29, 38, 47, 57, 58, 59, 51, 42, 33, 24, 69],
    R: [11, 20, 29, 38, 47, 56, 65, 12, 13, 14, 24, 33, 41, 40, 39, 49, 59, 69],
    S: [14, 13, 12, 20, 29, 39, 40, 41, 51, 60, 68, 67, 66],
    T: [12, 13, 14, 11, 15, 22, 31, 40, 49, 58, 67],
    U: [11, 20, 29, 38, 47, 56, 66, 67, 68, 60, 51, 42, 33, 24, 15],
    V: [11, 20, 29, 38, 47, 57, 67, 59, 51, 42, 33, 24, 15],
    W: [10, 19, 28, 37, 46, 56, 66, 58, 49, 40, 31, 16, 22, 68, 60, 52, 43, 34, 25],
    X: [10, 20, 30, 40, 50, 60, 70, 64, 56, 48, 32, 24, 16],
    Y: [11, 20, 29, 39, 40, 41, 33, 24, 15, 51, 60, 68, 67, 66],
    Z: [11, 12, 13, 14, 15, 24, 32, 40, 39, 47, 56, 65, 66, 67, 68, 69],
}


// for (let i = 0; i < pixel.length; i++) {
//     pixel[i].addEventListener("click", function () {
//         if (isActive(char, i)) {
//             turnPixelOff(char, i)
//             charMap.pop(i)
//             console.log(charMap)
//         } else {
//             turnPixelOn(char, i)
//             charMap.push(i)
//             console.log(charMap)
//         }
//     })
// }

const timer = ms => new Promise(res => setTimeout(res, ms))

function isActive(charElement, pixel) {
    let color = charElement.children[pixel].style.backgroundColor
    if (color == "red") {
        return true
    }
}

function turnPixelOn(charElement, pixel, color) {
    charElement.children[pixel].style.backgroundColor = color;

}
function turnPixelOff(charElement, pixel) {
    charElement.children[pixel].style.backgroundColor = "black";

}

function setChar(charElement, char, color) {
    for (let i = 0; i < char.length; i++) {
        turnPixelOn(charElement, char[i], color)
    }
}

async function displayWrite(word, color, delay) {
    word = word.toUpperCase()
    for (i in word) {

        await timer(delay)
        
        let elem =
            `<div id="char${i}" class="char">
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            <div class="char-pixel"></div>
            </div>`

        chargroup.insertAdjacentHTML('beforeend', elem)
        if (word[i] === " ") {

        } else {
            setChar(chargroup.children[i], eval(`charDictionary.${word[i]}`), color)
            
        }

        
    }

}

chargroup = document.querySelector("#char-group")
displayWrite("abcdefghijklmnopqrstuvwxyz", "#ffff00", 100)



