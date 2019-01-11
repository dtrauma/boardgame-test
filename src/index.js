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
import TestGame from './game';
import Board from './board';

const TestClient = Client({
  game: TestGame,
  board: Board,
  numPlayers: 3,
  multiplayer: { local: true }
});

const App = () => (
  <div style={{display: "flex"}}>
    {[0, 1, 2].map(id => <TestClient playerID={id.toString()} key={id} />)}
  </div>
);
render(<App/>, document.getElementById('root'));
