let recipeCards = [];

function RecipeCard(name, image){
    this.recipeName = name;
    this.recipeImage = image;
}

//When the 'add recipe' button is clicked, display the modal form named 'addRecipeDialog' on-screen
document.getElementById('add-recipe-btn').addEventListener('click', function(){
    let addRecipeDialog = document.querySelector("#add-recipe-dialog"); //stores and selects the modal form to 'add a recipe'
    addRecipeDialog.showModal() //displays the modal form named 'addRecipeDialog'
});

//When the 'add a recipe log' button is clicked, display the modal form named 'addRecipeDialog' on-screen
document.getElementById('add-recipe-log-btn').addEventListener('click', function(){
    let addRecipeLogDialog = document.querySelector("#add-recipe-log-dialog"); //stores and selects the modal form to 'add a recipe log'
    addRecipeLogDialog.showModal() //displays the modal form named 'addRecipeLogDialog'
});