async function populateRestaurants() {
    const diningRequest = await fetch('/api/meals');
    const diningData = await diningRequest.json();

    diningData.data.forEach((restaurant) => {
        const appendItem = document.createElement('div');
        appendItem.classList.add('title', 'has-text-centered', 'is=parent', 'is-3');
        appendItem.innerHTML = `
        <article class="title is-child box has-background-light-dark ">
        <span class= "subtitle has-text-light has-text-weight-bold>
            ${restaurant.hall_name}</span>
        <br />
        <span class = "has-text-light">
            ${restaurant.hall_address.split(',')[0]}
        </span>
        <br/>
        <span class="has-text-light">
            ${restaurant.hall_address.split(',')[1]}
        </span>    
        </article `;
    targetBox.append(appendItem);

    });

}

async function getData() {
    console.log('data request');
    const diningRequest = await fetch('/api/meals');
    const diningData = await diningRequest.json();
    return diningData
}

async function setBasicData() {
    localStorage.setItem('abd' , 'zyx');
}

async function getBasicData () {
    const cat = localStorage.getItem('mycat');
}

async function windowActions () {
    console.log('loaded window');
    const data = await getData();
    console.table(data)
}

window.onload = windowActions; 
