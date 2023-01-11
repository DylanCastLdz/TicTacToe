function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(user) {
    let tiro
    if (user == 1) {
        tiro = "Piedra 🪨"
    } else if (user == 2) {
        tiro = "Papel 📜"
    } else if (user == 3) {
        tiro = "Tijera ✂️"
    } else {
        tiro = "ERROR!! ⚠️ Opción inválida"
    }
    return tiro
}

function duelo(p1, p2) {
    let winner
    if (p1 == p2) {
        winner = 0
    } else if ((p1 == 1 && p2 == 3) || (p1 == 2 && p2 == 1) || (p1 == 3 && p2 == 2)) {
        winner = 1
    } else {
        winner = 2
    }
    return winner
}

let player
let pc
let contador
let wins = 0
let fails = 0

while (wins < 3 && fails < 3) {
    player = prompt("Escribe para elegir: 1 = Piedra 🪨, 2 = Papel 📜, 3 = Tijera ✂️")
    pc = randomNum(1,3)
    alert("Elegiste: " + eleccion(player))
    alert("El PC eligió: " + eleccion(pc))

    contador = duelo(player,pc)

    if (contador == 0) {
        alert("EMPATE! 😮")
    } else if (contador == 1) {
        alert("TU GANAS 🎖️🎉👏")
        wins = wins + 1
    } else {
        alert("Tu pierdes 😭🍅💀")
        fails = fails + 1
    }
}

alert("MARCADOR: Player: " + wins + " || PC: " + fails)