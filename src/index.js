/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';
import SimpleMinion from './game';
import Board from './board';

const App = Client({
  game: SimpleMinion,
  board: Board,
  ai: AI({
    enumerate: G => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    }
  })
});

render(<App/>, document.getElementById('root'));
