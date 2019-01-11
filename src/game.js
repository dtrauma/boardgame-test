import {
	Game,
	INVALID_MOVE
} from "boardgame.io/core";


const DICE = Array.from(Array(6)).map((_, i) => i);

function initState() {
	return {
		dice: []
	}
}
const TestGame = Game({
	name: "TestGame",

	setup: initState,
	moves: {
		reroll(G, ctx) {
			G.dice = DICE.map(_ => ctx.random.Die());
		}
	},

	flow: {
		onTurnBegin(G, ctx) {
			G.dice = DICE.map(_ => ctx.random.Die());
		}
	}
});

export default TestGame;
