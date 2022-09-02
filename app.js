// https://www.omnicalculator.com/finance/residual-income

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const residualincomeRadio = document.getElementById('residualincomeRadio');
const equitycapitalRadio = document.getElementById('equitycapitalRadio');
const costofequityRadio = document.getElementById('costofequityRadio');
const netincomeRadio = document.getElementById('netincomeRadio');

let residualincome;
let equitycapital = v1;
let costofequity = v2;
let netincome = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

residualincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity capital';
  variable2.textContent = 'Cost of equity';
  variable3.textContent = 'Net income';
  equitycapital = v1;
  costofequity = v2;
  netincome = v3;
  result.textContent = '';
});

equitycapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Residual income';
  variable2.textContent = 'Cost of equity';
  variable3.textContent = 'Net income';
  residualincome = v1;
  costofequity = v2;
  netincome = v3;
  result.textContent = '';
});

costofequityRadio.addEventListener('click', function() {
  variable1.textContent = 'Residual income';
  variable2.textContent = 'Equity capital';
  variable3.textContent = 'Net income';
  residualincome = v1;
  equitycapital = v2;
  netincome = v3;
  result.textContent = '';
});

netincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Residual income';
  variable2.textContent = 'Equity capital';
  variable3.textContent = 'Cost of equity';
  residualincome = v1;
  equitycapital = v2;
  costofequity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(residualincomeRadio.checked)
    result.textContent = `Residual income = ${computeresidualincome().toFixed(2)}`;

  else if(equitycapitalRadio.checked)
    result.textContent = `Equity capital = ${computeequitycapital().toFixed(2)}`;

  else if(costofequityRadio.checked)
    result.textContent = `Cost of equity = ${computecostofequity().toFixed(2)}`;

  else if(netincomeRadio.checked)
    result.textContent = `Net income = ${computenetincome().toFixed(2)}`;
})

// calculation

function computeresidualincome() {
  return Number(netincome.value) - (Number(equitycapital.value) * (Number(costofequity.value) / 100));
}

function computeequitycapital() {
  return (Number(netincome.value) - Number(residualincome.value)) / (Number(costofequity.value) / 100);
}

function computecostofequity() {
  return ((Number(netincome.value) - Number(residualincome.value)) / Number(equitycapital.value)) * 100;
}

function computenetincome() {
  return Number(residualincome.value) + (Number(equitycapital.value) * (Number(costofequity.value) / 100));
}