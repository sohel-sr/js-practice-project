// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // HIDE RESULT
  document.getElementById('result').style.display = 'none';

  // SHOW LOADER
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResult, 1000);

  e.preventDefault();
});


// Calculate Results
function calculateResult(){
  // console.log('calculading...');

// UI VARIABLES
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');

const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

// COMPUTE MONTHLY PAYMENT
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest) / (x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

  // SHOW RESULT
  document.getElementById('result').style.display = 'block';

  // HIDE LODER
  document.getElementById('loading').style.display = 'none';
}else{
  showError('Please check your number');
}
}

// SHOW ERROR
function showError(error){

  // SHOW RESULT
  document.getElementById('result').style.display = 'none';

  // HIDE LODER
  document.getElementById('loading').style.display = 'none';

  // CREATE DIV
  const errorDiv = document.createElement('div');

  // get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')


  // ADD CLASS
  errorDiv.className = 'alert alert-danger';

  // CREATE TEXT NOTE AND APPEND TO DIV
  errorDiv.appendChild(document.createTextNode(error));

  // INSERT ERROR ABOVE HEADING
  card.insertBefore(errorDiv, heading);

  // CLEAR ERROR AFTER 3 SECONDS
  setTimeout(clearError, 3000);

}

// CLEAR ERROR
function clearError(){
  document.querySelector('.alert').remove();
}
