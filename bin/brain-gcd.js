#!/usr/bin/env node

import gameStructure from '../src/index.js';
import brainGcdGame from '../src/games/brain-gcd.js';

gameStructure('Find the greatest common divisor of given numbers.', brainGcdGame);

