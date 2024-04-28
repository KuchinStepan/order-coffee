let fieldset = document.querySelector('.beverage');
const addButton = document.querySelector('.add-button');

fieldset.id = 'fieldset1';
let fieldsetCount = 1;

function renumberFieldSets() {
    let i = 1;
    for (const fieldset of document.querySelectorAll('fieldset')) {
        fieldset.querySelector('h4').innerText = `Напиток №${i}`;
        fieldset.id = `fieldset${i}`;
        for (const checkbox of fieldset.querySelectorAll('.checkbox-field > input[type="radio"]')) {
            checkbox.name = `milk${i}`;
        }
        i++;
    }
}

function removeFieldset(fieldset) {
    if (fieldsetCount > 1) {
        fieldset.remove();
        fieldsetCount--;
        renumberFieldSets();
    }
    return false;
}

const removeButton = document.querySelector('.remove-button');
removeButton.onclick = function () { removeFieldset(fieldset); };

function addNewFieldset() {
    const form = document.querySelector('form');
    const newFieldset = fieldset.cloneNode(true);
    newFieldset.querySelector('h4').innerText = `Напиток №${++fieldsetCount}`;
    newFieldset.id = `fieldset${fieldsetCount}`;
    for (const checkbox of newFieldset.querySelectorAll('.checkbox-field > input[type="radio"]')) {
        checkbox.name = `milk${fieldsetCount}`;
    }
    newFieldset.querySelector('.remove-button').onclick = function () { removeFieldset(newFieldset); };

    form.insertBefore(newFieldset, addButton.parentNode);
}

addButton.onclick = addNewFieldset;

function getDeclension() {
    if (10 < fieldsetCount % 100 && fieldsetCount % 100 < 15) {
        return 'напитков';
    }
    if (fieldsetCount % 10 === 1) {
        return 'напиток';
    }
    if (2 <= fieldsetCount % 10 && fieldsetCount % 10 <= 4) {
        return 'напитка';
    }
    return 'напитков'
}


const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.submit-button');
submitButton.onclick = function () {
    modal.querySelector('.modal-window > p').innerText = `Вы заказали ${fieldsetCount} ${getDeclension()}`;
    modal.style.display = 'flex';
    return false;
}

const closeModalButton = document.querySelector('.close-button');
closeModalButton.onclick = function () {
    modal.style.display = 'none';
    return false;
}
