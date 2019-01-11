import React from 'react';
import PropTypes from 'prop-types';
import './die.css';

export class Die extends React.Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		attr: PropTypes.any
	};
	static defaultProps = {
		attr: {}
	}

	renderValue() {
		return this.props.value;
	}

	render() {
		const { className, ...other } = this.props.attr;
		return <div {...other} className={className+" die"}>{this.renderValue()}</div>
	}
}

export class Die6 extends Die {
	renderValue() {
		return <div class="die6">{[...Array(9).keys()].map(i =>
			<div key={i} class="die6-inner">{Die6.DICE_DOTS[this.props.value].indexOf(i)>-1?"•":" "}</div>
		)}</div>
	}
}
/* 0 1 2
 * 3 4 5
 * 6 7 8
 */
Die6.DICE_DOTS = [
	[],
	[4],
	[0, 8],
	[0, 4, 8],
	[0, 2, 6, 8],
	[0, 2, 6, 8, 4],
	[0, 3, 6, 2, 5, 8]
]


export default Die;
