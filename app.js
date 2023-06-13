const searchButton =()=>{
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value ;
    // console.log(searchValue);
    searchField.value ='';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => displaySearchFood(data.meals))
}

const displaySearchFood = Allmeals => {
    // console.log(Allmeals);
    const showResult = document.getElementById('show-result');
    // showResult.innerHTML = '';
    showResult.textContent = '';
    Allmeals.forEach(food=>{
        // console.log(food);
        const div = document.createElement('div')
        div.classList.add('firstCols')
        div.innerHTML ='';
        div.innerHTML =`
        <div onclick ="loadDetails('${food.idMeal}')" class="card">
        <img src="${food.strMealThumb }" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${food.strMeal}</h3>
          <h4> ${food.strArea} </h4>
          <h5>${food.strTags}</h5>
          <p class="card-text">${food.strInstructions.slice(0,250)}</p>
        </div>
      </div>
        `;
        showResult.appendChild(div)
    })
}

const loadDetails = FoodId =>{
    console.log(FoodId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${FoodId}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => displaysingleMeal(data.meals[0]))
}

const displaysingleMeal = singleFood =>{
  console.log(singleFood);
  const singleDetails = document.getElementById('details-result');
  const div = document.createElement('div');
  div.classList.add('card1')
  div.innerHTML = `
        <img src="${singleFood.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${singleFood.strMeal}</h5>
              <p class="card-text">${singleFood.strInstructions.slice(0,250)}</p>
                <a href="${singleFood.strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
  `;
  singleDetails.appendChild(div);
}