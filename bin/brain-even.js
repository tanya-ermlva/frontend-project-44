#!/usr/bin/env node

import gameStructure from '../src/index.js';
import brainEvenGame from '../src/games/brain-even.js';

gameStructure('Answer "yes" if the number is even, otherwise answer "no".', brainEvenGame);
