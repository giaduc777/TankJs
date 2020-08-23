import resetButton from './resetButton';
import linear from './linear';
import random from './random';
import tryAgainButton from './tryAgainButton';
import fireButton from './fireButton';

document.querySelector('#reset-game').disabled = true;
document.querySelector('#try-again').disabled = true;
document.querySelector(".trigger").disabled = true;

linear();
random();

fireButton();
tryAgainButton();
resetButton();




