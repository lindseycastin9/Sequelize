async function getData() {
    const endpoint = '/api/dining/'; 
    const request = await fetch(endpoint);
    const result = await request.json();
  

    const meals = [];
    meals.push(result.data);
  
    const finalMeals = meals[0]; 
    console.table(finalMeals);
    const target = document.querySelector('#finalTable');
    
    finalMeals.forEach((index) => {
      const id = index.hall_id;
      const name = index.hall_name;
      const location = index.hall_address;
  
      const appendItem = document.createElement('tr');
      appendItem .innerHTML = `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;
      target.append(appendItem);
      console.log('ID: ' + id + ', Name: ' + name + ', Location: ' + location);
    }); 
  }
  
  async function windowActions() {
    getData();
  }
    
  window.onload = windowActions; 