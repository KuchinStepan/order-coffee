
let fieldset = document.querySelector('.beverage');
fieldset.id = 'fieldset1';
let fieldsetCount = 1;

function addNewFieldset() {
    const newFieldset = fieldset.cloneNode(true);
    newFieldset.querySelector('h4').innerText = `Напиток №${++fieldsetCount}`;
    newFieldset.id = `fieldset${fieldsetCount}`;
    for (const checkbox of newFieldset.querySelectorAll('.checkbox-field > input[type="radio"]')) {
        checkbox.name = `milk${fieldsetCount}`;
    }
    fieldset.insertAdjacentElement('afterend', newFieldset);
    fieldset = newFieldset;
}


const addButton = document.querySelector('.add-button');
addButton.onclick = addNewFieldset;

