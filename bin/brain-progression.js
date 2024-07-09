#!/usr/bin/env node

import gameStructure from '../src/index.js';
import brainProgressionGame from '../src/games/brain-progression.js';

gameStructure('What number is missing in the progression?', brainProgressionGame);
