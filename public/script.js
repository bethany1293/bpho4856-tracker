//When the 'add recipe' button is clicked, display the modal form named 'addRecipeDialog' on-screen
document.getElementById('add-recipe-btn').addEventListener('click', function(){
    let addRecipeDialog = document.querySelector("#add-recipe-dialog"); //stores and selects the modal form to 'add a recipe'
    addRecipeDialog.showModal(); //displays the modal form named 'addRecipeDialog'
    localStorage["recipe-name"] =""; 
    localStorage["recipe-category"] = "";
    localStorage["ingredients"] ="";
    localStorage["method"] = "";
    localStorage["imgData"] = "";
    localStorage["baking-techniques"]="";
});

document.getElementById('cancel-btn').addEventListener('click', function(){
    let addRecipeDialog = document.querySelector("#add-recipe-dialog"); //stores and selects the modal form to 'add a recipe'
    addRecipeDialog.close(); // Closes the dialog
});

//This function is to delete  the template, already-existing recipes
$('.del-recipe').on('click', function(){
    if (confirm("Are you sure you want to delete this recipe?") == true) {
        let recipeDelete = $(this).attr("data-target");
        document.getElementById(recipeDelete).innerHTML = " ";
        document.getElementById(recipeDelete).remove();
    }
});

//This function is to delete  the dynamically generated new recipes
$(document).on('click', '.del-recipedyn', function(){
    if (confirm("Are you sure you want to delete this recipe?") == true) {
        let recipeDelete = $(this).attr("data-target");
        document.getElementById(recipeDelete).innerHTML = " ";
        document.getElementById(recipeDelete).remove();
    }
});

document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    let recipeName = document.querySelector('#recipe-name').value;
    let recipeCategory = document.querySelector('#recipe-category').value;
    let ingredients = document.querySelector('#ingredients').value;
    let method = document.querySelector('#method').value;
    let bakingTechniques = document.querySelector('#baking-techniques').value;
    localStorage["recipe-name"] = recipeName; 
    localStorage["recipe-category"] = recipeCategory;
    localStorage["ingredients"] = ingredients;
    localStorage["method"] = method;
    localStorage["baking-techniques"] = bakingTechniques;
    let modalName = recipeName.replace(" ", "-");
    modalName= modalName.substring(0,8);
    let recipeId = modalName + "-recipe";
    console.log(recipeId);
    let el= document.getElementById('recipes');
    let newrecipe = `<article id="`;
    newrecipe+= recipeId;
    newrecipe+=`" class="recent-recipes--card">
                                <img src="`
        newrecipe+= localStorage["imgData"];
        newrecipe+=`"/>
                                    <section class="recent-recipes--card-text">
                                    <p><a href="#" data-target="#`;
        newrecipe+= modalName;
        newrecipe+= `" data-toggle="modal">`;
        newrecipe+= localStorage["recipe-name"];
        newrecipe+= `</a></p> <button class="del-recipedyn" data-target="`;
        newrecipe+= recipeId;
        newrecipe+=`">Delete</button>

                                </section>

                                <div class="modal fade" id="`;
        newrecipe+= modalName;
        newrecipe+=`" style="z-index:9999999;"  role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">`;
        newrecipe+= localStorage["recipe-name"];
        newrecipe+=`</div>
                                            <div class="modal-body">
                                                <img src="`;
        newrecipe+=localStorage["imgData"];
        newrecipe+=`"/>
                                                <h2>Ingredients</h2>`;
        newrecipe+=localStorage["ingredients"];
        newrecipe+=`
                                                <h2>Method</h2>`;
        newrecipe+=localStorage["method"];
        newrecipe+=`                                                <h2>Category</h2>
                                                <p>`;
        newrecipe+=localStorage["recipe-category"];
        newrecipe+=`</p>
                                                <h2>Baking Techniques</h2>
                                                <p>`;
        newrecipe+=localStorage["baking-techniques"];
        newrecipe+=`</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>`;
    el.insertAdjacentHTML("afterbegin", newrecipe);
    let addRecipeDialog = document.querySelector("#add-recipe-dialog"); //stores and selects the modal form to 'add a recipe'
    addRecipeDialog.close(); // Closes the dialog
  }

  // Get the image input and destination elements
const imgInput = document.getElementById("img-input");
const imgDest = document.getElementById("img-dest");

// Add a 'change' event listener to the image input element
imgInput.addEventListener("change", function (event) {
  // Create a new FileReader instance
  var reader = new FileReader();

  // Get the first selected file from the input event (the image)
  var selectedFile = event.target.files[0];

  // Set up the FileReader's 'onloadend' event handler
  reader.onloadend = function (e) {
    // Get the base64 representation of the image from the event target result
    var base64 = e.target.result;
    
    // Log the base64 data to the console
    console.log(base64);
    
    // Store the base64 image data in localStorage with the key 'imgData'
    localStorage.setItem("imgData", base64);
    
    // Set the destination element's src attribute to the base64 data to display the uploaded image
    imgDest.src = base64;
  };

  // Read the uploaded image as a Data URL (Base64 encoded string)
  reader.readAsDataURL(selectedFile);
});

//Summernote function
$(document).ready(function() {
    $('#ingredients').summernote();
    $('#method').summernote();
  });

  $('#ingredients').summernote({
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]
  });

  $('#method').summernote({
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]
  });