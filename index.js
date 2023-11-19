var players = [{
    name: 'Isa',
    wins: 0,
    dues: 0,
    fails: 0,
    points: 0
}];

var tableEl = document.getElementById('tabelaJogadores')

function show() {
    tableEl.innerHTML = ''
    for(let i = 0; i < players.length; i++) {
    tableEl.innerHTML += `
        <tr>
            <td>${players[i].name}</td>
            <td>${players[i].wins}</td>
            <td>${players[i].dues}</td>
            <td>${players[i].fails}</td>
            <td>${players[i].points}</td>
            <td><button onClick='addWin(${i})'>Vitória</button></td>
            <td><button onClick='addDue(${i})'>Empate</button></td>
            <td><button onClick='addFail(${i})'>Derrota</button></td>
            <td><button onClick='clearPoints(${i})'>Zerar</button></td>
            <td><button onClick='removePlayer(players)'>Remover</button></td>
        </tr>
    `
    }
}

show()

function addWin(i) {
    if(players[i].wins > players[i].fails) {
        alert('O jogador não pode ter mais vitorias do que derrotas!')
    } else {
        players[i].wins++
        players[i].points = players[i].points + 10
        show()
    }
}

function addDue(i) {
    for(let i = 0; i < players.length; i++) {
        players[i].dues++
        players[i].points = players[i].points + 5
        show()
    }
}

function addFail(i) {
    players[i].fails++
    show()
}

function clearPoints(i) {
    players[i].wins = 0
    players[i].dues = 0
    players[i].fails = 0
    players[i].points = 0
    show()
}

function removePlayer(i) {
    players.splice(0, 1)
    show()
}

function newPlayer() {
    var player = document.getElementById('newName').value
    if(players.some(el => el.name === player)) {
        alert('Você não pode adicionar um jogador já existente!')
    } else {
        players.push({name: player, wins: 0, dues: 0, fails: 0, points: 0})
        show()
    }
}

function resetPlayers() {
    players.splice(0)
    show()
}