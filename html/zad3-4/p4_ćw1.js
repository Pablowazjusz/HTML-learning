document.getElementById('Button').addEventListener('click', fetchData);

function fetchData() {

    const apiUrl = 'https://cat-fact.herokuapp.com/facts';
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Błąd HTTP! Kod: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Błąd pobierania danych:', error);
    });
}

function displayData(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>Pobrane dane:</h2>';

    data.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = `${item.name}: ${item.value}`;
        resultContainer.appendChild(listItem);
    });
}