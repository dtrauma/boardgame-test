/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './board.css';

class Board extends React.Component {
	static propTypes = {
		G: PropTypes.any.isRequired,
		ctx: PropTypes.any.isRequired,
		moves: PropTypes.any.isRequired,
		playerID: PropTypes.string,
		isActive: PropTypes.bool,
		isMultiplayer: PropTypes.bool,
	};

	onClick = id => {
		if (this.isActive(id)) {
			this.props.moves.playCard(id);
		}
	};

	isActive(id) {
		return true;
	}

	render() {
		const stacks = [];
		for (let [name, st] of Object.entries(this.props.G.player.stacks)) {
			stacks.push(<h2>{name}</h2>)
			stacks.push(<div>{st}</div>);
		}


		let winner = null;
		if (this.props.ctx.gameover) {
			winner =
				this.props.ctx.gameover.winner !== undefined ? ( <
					div id = "winner" > Winner: {
						this.props.ctx.gameover.winner
					} < /div>
				) : ( <
					div id = "winner" > Draw! < /div>
				);
		}

		return (
			<div>
				<div class="stacks">{stacks}</div>
				<div>{winner}</div>
			</div>
		);
	}
}

export default Board;
