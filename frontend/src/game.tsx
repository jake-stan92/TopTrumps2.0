'use client';

import {useState, useEffect} from 'react';
import { statTitles, footballPlayerData } from './playerData';


export default function Game() {
const [playerCards, setPlayerCards] = useState([]);
const [computerCards, setComputerCards] = useState([]);

// when the dom loads shuffle cards and split into two arrays of 5 cards each (playerCards and computerCards)
useEffect(() => {
    // shuffleAndSplitCards(footballPlayerData);
}, []);

function shuffleAndSplitCards(data: []) {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);

	    const player = [];
			const computer = [];

			for (let i = 0; i < shuffledData.length; i++) {
				if (i % 2 === 0) {
					player.push(shuffledData[i]);
				} else {
					computer.push(shuffledData[i]);
				}
			}
			setPlayerCards(player);
			setComputerCards(computer);
			}



//return jsx
    // show computerCards.length and playerCards.length (score)
    // Display first playerCard and stats (each stat is a button)

// handle compare ( when a stat is clicked compare this to the computers stat)
    // if player stat is higher, player wins and playerCards.push(computerCard, playerCard)
    // if computer stat is higher, computer wins and computerCards.push(playerCard, computerCard)
    // if equal, computerCards.push(playerCard, computerCard)

//display next playerCard and stats

// repeat until one player has all the cards
}