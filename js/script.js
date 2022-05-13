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

const minimalActivityIndex = 1.2; // коэффициенты активности
const lowActivityIndex = 1.375;
const mediumActivityIndex = 1.55;
const highActivityIndex = 1.725;
const maximalActivityIndex = 1.9;

physicalParameters.oninput = function(event) {

    const weightMaintenanceMale = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5; // формула поддеражния веса для мужчин
    const weightMaintenanceFemale = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161; // формула поддеражния веса для женщин
    
    if (age.value >  0 && height.value > 0 && weight.value > 0) {
        calculateButton.removeAttribute('disabled');
    } else {
        calculateButton.setAttribute('disabled', 'disabled');
    }

    const target = event.target;

    if (target.value > 0) {
        clearButton.removeAttribute('disabled');
    }

    calculateButton.onclick = function(event) {
        event.preventDefault();
        counterResult.classList.remove('counter__result--hidden');

        if (minimalActivity.checked) {
            var weightMaintenance = weightMaintenanceMale * minimalActivityIndex;
            if (female.checked) {
                weightMaintenance = weightMaintenanceFemale * minimalActivityIndex;
            }
        }
        if (lowActivity.checked) {
            var weightMaintenance = weightMaintenanceMale * lowActivityIndex;
            if (female.checked) {
                weightMaintenance = weightMaintenanceFemale * lowActivityIndex;
            }
        }
        if (mediumActivity.checked) {
            var weightMaintenance = weightMaintenanceMale * mediumActivityIndex;
            if (female.checked) {
                weightMaintenance = weightMaintenanceFemale * mediumActivityIndex;
            }
        }
        if (highActivity.checked) {
            var weightMaintenance = weightMaintenanceMale * highActivityIndex;
            if (female.checked) {
                weightMaintenance = weightMaintenanceFemale * highActivityIndex;
            }
        }
        if (maximalActivity.checked) {
            var weightMaintenance = weightMaintenanceMale * maximalActivityIndex;
            if (female.checked) {
                weightMaintenance = weightMaintenanceFemale * maximalActivityIndex;
            }
        }

        const weightLoss = weightMaintenance - (weightMaintenance * 0.15);
        const weightGain = weightMaintenance + (weightMaintenance * 0.15);
        maintenance.textContent = weightMaintenance.toFixed(2);
        loss.textContent = weightLoss.toFixed(2);
        gain.textContent = weightGain.toFixed(2);
    }
}

clearButton.onclick = function() {
    counterForm.reset();
    counterResult.classList.add('counter__result--hidden');
    this.setAttribute('disabled', 'disabled');
    calculateButton.setAttribute('disabled', 'disabled');
}