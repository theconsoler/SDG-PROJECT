document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
    loadFarmers();
});

function loadRecipes() {
    const recipes = [
        { title: "Quinoa Salad", description: "A healthy and fresh quinoa salad." },
        { title: "Vegetable Stir Fry", description: "Delicious stir-fried vegetables with tofu." }
    ];

    const recipeContainer = document.getElementById("recipes");
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.innerHTML = `<h3>${recipe.title}</h3><p>${recipe.description}</p>`;
        recipeContainer.appendChild(recipeDiv);
    });
}

function loadFarmers() {
    const farmers = [
        { name: "Green Valley Farms", produce: "Organic Vegetables" },
        { name: "Sunny Orchard", produce: "Fresh Fruits" }
    ];

    const farmersContainer = document.getElementById("farmers");
    farmers.forEach(farmer => {
        const farmerDiv = document.createElement("div");
        farmerDiv.innerHTML = `<h3>${farmer.name}</h3><p>Produces: ${farmer.produce}</p>`;
        farmersContainer.appendChild(farmerDiv);
    });
}

function searchLocalFood() {
    const query = document.getElementById("search-bar").value;
    alert(`Searching for local food sources: ${query}`);
}
