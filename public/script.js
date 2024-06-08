let recipeCards = [];

function RecipeCard(name, image){
    this.recipeName = name;
    this.recipeImage = image;
}

//Selects the dialog element which is a form to 'add a recipe' and stores it as a variable
let addRecipeDialog = document.querySelector("dialog");


//When the 'add a recipe' button is clicked, show the modal form named 'addRecipeDialog'
document.getElementById('add-recipe-btn').addEventListener('click', function(){
    addRecipeDialog.showModal()
});