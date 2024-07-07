#!/usr/bin/env node

import gameStructure from '../src/index.js';
import brainCalcGame from '../src/games/brain-calc.js';

gameStructure('What is the result of the expression?', brainCalcGame);
