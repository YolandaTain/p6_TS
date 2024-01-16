"use strict";
// 1. Se define un tipo llamado Ranking, que es una tupla que contiene tres elementos: un número, una cadena de texto y un booleano. Esta tupla representará un registro en el ranking de un juego.
// 2. Se declaran varias variables: 
// - position: como un número, que almacenará la posición del jugador en el ranking.
// - playerName: como una cadena de texto, que contendrá el nombre del jugador.
// - finishedGame: como un booleano, indicando si el jugador ha finalizado el juego o no.
// - ranking: como una variable del tipo Ranking, que almacenará temporalmente la información de posición, nombre y estado del juego del jugador.
// - hallOfRanking: como un array de Ranking inicializado como vacío, que representará el conjunto de rankings de los jugadores.
let position;
let playerName;
let finishedGame;
var ranking;
// Representará el conjunto de rankings de los jugadores
var hallOfRanking = [];
// 3. Se crea un ranking para dos jugadores específicos:
// - Se asignan valores a position, playerName y finishedGame.
// - Se crea la tupla ranking con estos valores.
// - Se añade esta tupla al array hallOfRanking utilizando el método push().
position = 1;
playerName = "Juan";
finishedGame = true;
var jugador1 = [position, playerName, finishedGame];
position = 2;
playerName = "María";
finishedGame = false;
var jugador2 = [position, playerName, finishedGame];
hallOfRanking.push(jugador1, jugador2);
// 4. Se define una función llamada printRankings que recibe un array de Ranking como parámetro. Esta función no devuelve ningún valor (void). Su objetivo es imprimir en la consola cada ranking del array proporcionado.
function printRankings(valor1) {
    valor1.forEach(element => {
        console.log(element);
    });
}
// 5. Se invoca la función printRankings pasando como argumento el arreglo hallOfRanking, lo que dará como resultado en la consola de los rankings de los jugadores almacenados en dicho array.
printRankings(hallOfRanking);
