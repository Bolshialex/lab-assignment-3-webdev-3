const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');

const fNameError = document.getElementById('fNameError');
const lNameError = document.getElementById('lNameError');
const emailError = document.getElementById('emailError');
const phoneNumberError = document.getElementById('telError');
const question1Error = document.getElementById('question1Error');
const question2Error = document.getElementById('question2Error');
const question3Error = document.getElementById('question3Error');
const question4Error = document.getElementById('question4Error');

const form = document.getElementById('form-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

const showError = (spanId, message) => {

}

const validateInputs = () => {
    const fNameValue = fName.value;
    const lNameValue = lName.value;
    const emailValue = email.value;
    const phoneValue = phoneNumber.value;
    const question1Value = question1.value;
    const question2Value = question2.value;
    const question3Value = question3.value;
    const question4Value = question4.value;
    
    //Checks fName for nums, empty and special chars
    if(fNameValue === ''){
        fNameError.innerHTML = '*Please enter a name';
        isError('fName');
        
    }
    else if(hasSpecialChar(fNameValue)){
        console.log(hasSpecialChar(fNameValue));
        fNameError.innerHTML = '*Please do not use special characters';
        isError('fName');
    }
    else if(hasNum(fNameValue)){
        
        fNameError.innerHTML = '*Please do not use numbers';
        isError('fName');
    }
    else{
        fNameError.innerHTML = '';
        isNotError('fName');
    }

    //Checks lName for nums, empty and special chars
    if(lNameValue === ''){
        lNameError.innerHTML = '*Please enter a name';
        isError('lName');
    }
    else if(hasSpecialChar(lNameValue)){
        console.log(hasSpecialChar(lNameValue));
        lNameError.innerHTML = '*Please do not use special characters';
        isError('lName');
    }
    else if(hasNum(lNameValue)){
        
        lNameError.innerHTML = '*Please do not use numbers';
        isError('lName');
    }
    else{
        lNameError.innerHTML = '';
        isNotError('lName');
    }
    
    //Email
    if(emailValue === ''){
        emailError.innerHTML = '*Please enter an email';
        isError('email');
    }
    else if(!validateEmail(emailValue)){
        emailError.innerHTML = '*Invalid email format';
        isError('email');
    }
    else{
        emailError.innerHTML = '';
        isNotError('email');
    }

    //Checks phoneNumber for empty, special char or letters
    if(phoneValue === ''){
        phoneNumberError.innerHTML = '*Please enter a phone number';
        isError('phoneNumber');
    }
    else if(hasSpecialChar(phoneValue)){
        console.log(hasSpecialChar(phoneValue));
        phoneNumberError.innerHTML = '*Please do not use special characters';
        isError('phoneNumber');
    }
    else if(isNaN(phoneValue)){
        phoneNumberError.innerHTML = '*Please do not use letters';
        isError('phoneNumber');
    }
    else{
        phoneNumberError.innerHTML = '';
        isNotError('phoneNumber');
    }

    //Checks if question 2 3 are empty
    if(question2Value === ''){
        question2Error.innerHTML = '*Please give an answer';
        isError('question2');
    }
    else{
        question2Error.innerHTML = '';
        isNotError('question2');
    }
    if(question3Value === ''){
        question3Error.innerHTML = '*Please give an answer';
        isError('question3');
    }
    else{
        question3Error.innerHTML = '';
        isNotError('question3');
    }

    //Checks if question 1 4 selection has been changed

    if(question1Value === ''){
        question1Error.innerHTML = '*Please make a selection';
        isError('question1');
    }
    else{
        question1Error.innerHTML = '';
        isNotError('question1');
    }
    console.log(question1Value);
    if(question4Value === ''){
        question4Error.innerHTML = '*Please make a selection';
        isError('question4');
    }
    else{
        question4Error.innerHTML = '';
        isNotError('question4');
    }
}

//This checks for special chars
function hasSpecialChar(element){
    let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    return specialChars.test(element);
}

//This checks for nums 
function hasNum(element){
    return /[0-9]/.test(element);
}

//This checks for email formatting
function validateEmail(email){
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//makes it easier to change the border color to red for error
function isError(id){
    document.getElementById(id).classList.remove('success');
    document.getElementById(id).classList.add('error');
}
//This changes the border color to green for good
function isNotError(id){
    document.getElementById(id).classList.remove('error');
    document.getElementById(id).classList.add('success');
}