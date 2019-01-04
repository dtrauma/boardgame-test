import {
	Game,
	INVALID_MOVE
} from "boardgame.io/core";

function initState() {
	return {
		player: {
			money: 0,
			stacks: {
				input: [],
				output: Array.from("cccccccaaa"),
				buffer: [],
				active: []
			}
		},
		bays: [Array.from("ccccc"), Array.from("sssss")]
	}
}

const cardEffects = {
	a: () => {},
	c: (G, ctx) => {
		G.player.money++;
	}
}


const SimpleMinion = Game({
	name: "simpleminion",

	setup: initState,
	moves: {
		drawCard(G, ctx) {
			let s = G.player.stacks;
			if (!s.input.length) {
				if (!s.output.length) {
					return
				} else {
					s.input.push(...ctx.random.Shuffle(s.output.splice(0)));
				}
			}
			s.buffer.push(s.input.pop());
		},
		playCard(G, ctx) {
			let s = G.player.stacks;
			if (!s.buffer.length) {
				return INVALID_MOVE;
			}
			let card = s.buffer.pop();
			cardEffects[card](G, ctx, card);
			s.active.push(card);
		},
		endTurn(G, ctx) {
			let s = G.player.stacks;
			s.output.push(...s.buffer.splice(0), ...s.active.splice(0));
			ctx.events.endTurn();
		}
	},

	flow: {
		//movesPerTurn: 3,
		endPhase: false,
		// we provide our own move for this because onEndTurn doesn't use Immutable.js
		endTurn: false,

		endGameIf: (G, ctx) => {
			if (false) {
				return {
					winner: ctx.currentPlayer
				};
			}
		}

	}
});

export default SimpleMinion;
