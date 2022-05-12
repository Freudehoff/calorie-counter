const male = document.querySelector('#gender-male');
const female = document.querySelector('#gender-female');

const physicalParameters = document.querySelector('.inputs-group');

const age = physicalParameters.querySelector('#age');
const height = physicalParameters.querySelector('#height');
const weight = physicalParameters.querySelector('#weight');

const minimalActivity = document.querySelector('#activity-minimal');
const lowActivity = document.querySelector('#activity-low');
const mediumActivity = document.querySelector('#activity-medium');
const highActivity = document.querySelector('#activity-high');
const maximalActivity = document.querySelector('#activity-maximal');

const calculateButton = document.querySelector('.form__submit-button');
const clearButton = document.querySelector('.form__reset-button');

const counterForm = document.querySelector('.counter__form');
const counterResult = document.querySelector('.counter__result');

const maintenance = counterResult.querySelector('#calories-norm');
const loss = counterResult.querySelector('#calories-minimal');
const gain = counterResult.querySelector('#calories-maximal');

const activity = document.querySelectorAll('input[name="activity"]');

const weightMaintenanceMale = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5; // формула поддеражния веса для мужчин
const weightLossMale = weightMaintenanceMale - (weightMaintenanceMale * 0.15); // формула сброса веса для мужчин
const weightGainMale = weightMaintenanceMale + (weightMaintenanceMale * 0.15); // формула набора веса для мужчин

const weightMaintenanceFemale = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161; // формула поддеражния веса для женщин
const weightLossFemale = weightMaintenanceFemale - (weightMaintenanceFemale * 0.15); // формула сброса веса для женщин
const weightGainFemale = weightMaintenanceFemale + (weightMaintenanceFemale * 0.15); // формула набора веса для женщин

minimalActivity.value = 1.2; // коэффициенты активности
lowActivity.value = 1.375;
mediumActivity.value = 1.55;
highActivity.value = 1.725;
maximalActivity.value = 1.9;

physicalParameters.oninput = function(event) {
    
    if (age.value >  0 && height.value > 0 && weight.value > 0) {
        calculateButton.removeAttribute('disabled');
    } else {
        calculateButton.setAttribute('disabled', 'disabled');
    }

    const target = event.target;

    if (target.value > 0) {
        clearButton.removeAttribute('disabled');
    }
}

calculateButton.onclick = function(event) {
    event.preventDefault();
    counterResult.classList.remove('counter__result--hidden');
}

clearButton.onclick = function() {
    counterForm.reset();
    counterResult.classList.add('counter__result--hidden');
    this.setAttribute('disabled', 'disabled');
    calculateButton.setAttribute('disabled', 'disabled');
}

if (male.checked) {

}
