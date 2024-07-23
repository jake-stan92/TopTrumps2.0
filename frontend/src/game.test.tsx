import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import game from "./App.jsx";
import shuffleAndSplitCards from "./game.tsx";


// // is there 5 playerCards and 5 computerCards?
//     test('correctly shuffles and assigns cards to player and computer', () => {
//         // Mock your data (similar to footballPlayerData[1])
//         const {playerCards, computerCards} = shuffleAndSplitCards();
//         expect(playerCards.length).toBe(5);
//         expect(computerCards.length).toBe(5);
//     });