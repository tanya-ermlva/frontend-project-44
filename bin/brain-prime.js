#!/usr/bin/env node

import gameStructure from '../src/index.js';
import brainPrimeGame from '../src/games/brain-prime.js';

gameStructure('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrimeGame);
