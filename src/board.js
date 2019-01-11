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

import Die from './die';

class Board extends React.Component {
	static propTypes = {
		G: PropTypes.any.isRequired,
		ctx: PropTypes.any.isRequired,
		moves: PropTypes.any.isRequired,
		playerID: PropTypes.string,
		isActive: PropTypes.bool,
		isMultiplayer: PropTypes.bool,
	};

	onReroll = () => {
		this.props.moves.reroll();
	}

	render() {
		return (
			<div>
				<h1>Player {this.props.playerID}</h1>
				<div class="dice">{this.props.G.dice.map((val, i) => (
					<Die key={i} value={val} />))}
				</div>
				<button onClick={this.onReroll}>Reroll</button>
			</div>
		);
	}
}

export default Board;
