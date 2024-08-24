function extractNumbers(str) {

    const matches = str.match(/\d+/g);

    if (!matches) {
        return [];
    }

    return matches.map(Number);
}

console.log(extractNumbers("a1fg5hj6")); 

// 2

function printFibonacciWithDelay(a = 0, b = 1) {
    if (a > 144) return;

    console.log(a);

   
    setTimeout(() => {
        printFibonacciWithDelay(b, a + b); 
    }, 1000);
}

printFibonacciWithDelay();

// 3

async function fetchAndPrintTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

    
        const data = await response.json();

        
        if (Array.isArray(data)) {
            data.forEach(item => {
                if (item.title) { 
                    console.log(item.title);
                } else {
                    console.log('Объект не содержит ключа title:', item);
                }
            });
        } else {
            console.log('Полученные данные не являются массивом.');
        }
    } catch (error) {
        
        console.error('Произошла ошибка:', error);
    }
}


fetchAndPrintTitles();

//  4


 const colorButtonsDiv = document.querySelector('#color-buttons');

 colorButtonsDiv.addEventListener('click', (event) => {
   
     if (event.target.tagName === 'BUTTON') {
         const color = event.target.getAttribute('data-color');
         document.body.style.backgroundColor = color;
     }
 });

//  5

 const block = document.getElementById('block');
 const button = document.getElementById('toggle-button');

 function toggleBlockVisibility() {
     if (block.classList.contains('hidden')) {
         block.classList.remove('hidden');
         button.textContent = 'Hide Block';
     } else {
         block.classList.add('hidden');
         button.textContent = 'Show Block';
     }
 }

 button.addEventListener('click', toggleBlockVisibility);

//  6
  const counterElement = document.getElementById('counter');

  let count = 0;

  const intervalId = setInterval(() => {
      count += 1;
      counterElement.textContent = count;

      if (count >= 100) {
          clearInterval(intervalId); 
      }
  }, 1); 

//   7
  
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) { 
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        
        const data = await response.json();
        
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
    }
}


const fetchButton = document.getElementById('fetch-button');

fetchButton.addEventListener('click', fetchData);

