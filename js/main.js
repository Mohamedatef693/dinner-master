var recipesArray = [
  {
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    rating: "4.8",
    reviews: "356",
    image: "assets/images.jpg",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    tags: ["Easy", "Seafood"],
    ingredients: [
      "400g large shrimp, peeled and deveined",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a pan. Sauté garlic for 1 minute.",
      "Add shrimp, cook until pink on both sides (about 3 minutes). Remove shrimp.",
      "Pour in white wine, simmer for 2 minutes. Stir in remaining butter.",
      "Toss the pasta and shrimp back into the sauce. Add pasta water if dry.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "110g",
      sod: "600mg",
    },
    tips: [
      "Don't overcook shrimp - they cook very quickly and can become rubbery.",
      "Use good quality dry white wine (like Pinot Grigio) for the best depth of flavor.",
      "Always reserve some pasta water before draining; it helps emulsify the butter sauce.",
      "Pat the shrimp completely dry with paper towels before cooking to get a better sear.",
    ],
  },
  {
    title: "Honey Garlic Salmon",
    description: "Perfectly seared salmon coated in a sweet garlic sauce",
    rating: "4.9",
    reviews: "187",
    image: "assets/salmon.jpg",
    prep: "15 min",
    cook: "10 min",
    servings: "3 people",
    tags: ["Medium", "Seafood"],
    ingredients: [
      "3 salmon fillets (6oz each)",
      "4 cloves garlic, minced",
      "3 tablespoons honey",
      "1 tablespoon soy sauce",
      "1 tablespoon fresh lemon juice",
      "1 tablespoon olive oil",
    ],
    instructions: [
      "Pat salmon fillets dry and season both sides with salt and pepper.",
      "Heat olive oil in a skillet over medium-high heat. Sear salmon for 4 minutes.",
      "Flip salmon, add minced garlic to the pan and sauté for 30 seconds.",
      "Add honey, soy sauce, and lemon juice. Simmer until sauce thickens into a glaze.",
      "Spoon the sauce over the salmon fillets consistently before serving.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "42g",
      carbs: "22g",
      fat: "20g",
      fiber: "60g",
      sod: "500mg",
    },
    tips: [
      "Leaving the skin on while cooking helps hold the salmon fillet together perfectly.",
      "Fresh lemon juice is crucial to break and balance the heavy sweetness of the honey.",
      "Do not move the salmon during the first 4 minutes to achieve that beautiful golden crust.",
      "Spoon the pan glaze over the salmon continuously in the final minute for maximum flavor absorption.",
    ],
  },
  {
    title: "Creamy Chicken Pasta",
    description: "Tender chicken breasts cooked in rich white cream sauce",
    rating: "4.7",
    reviews: "210",
    image: "assets/chicken.jpg",
    prep: "20 min",
    cook: "20 min",
    servings: "4 people",
    tags: ["Easy", "Chicken"],
    ingredients: [
      "500g chicken breast, cubed",
      "400g penne pasta",
      "2 cups heavy cream",
      "1 cup parmesan cheese, grated",
      "1 cup sliced mushrooms",
      "2 tablespoons butter",
      "Italian seasoning",
    ],
    instructions: [
      "Boil penne pasta in salted water until al dente, then drain.",
      "Melt butter in a large pan, add chicken cubes, season with Italian spices, and cook until golden.",
      "Add sliced mushrooms to the pan and sauté for 3-4 minutes until soft.",
      "Pour in heavy cream and bring to a low simmer for 5 minutes.",
      "Stir in parmesan cheese until melted, then toss in the cooked penne pasta.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "48g",
      carbs: "58g",
      fat: "28g",
      fiber: "40g",
      sod: "200mg",
    },
    tips: [
      "Sautéing the mushrooms in chicken drippings gives them incredible, deep flavor.",
      "If the Alfredo sauce gets too thick, gently thin it out with a splash of warm milk or pasta water.",
      "Grate your own Parmesan from a block; pre-shredded cheese contains anti-caking agents and won't melt smoothly.",
      "Let the chicken sit at room temp for 10 mins before cooking so it stays tender and juicy inside.",
    ],
  },
  {
    title: "Beef Street Tacos",
    description:
      "Juicy flank steak with fresh cilantro and onions in corn tortillas",
    rating: "4.6",
    reviews: "142",
    image: "assets/tacos.jpg",
    prep: "30 min",
    cook: "10 min",
    servings: "4 people",
    tags: ["Hard", "Beef"],
    ingredients: [
      "600g flank steak, finely diced",
      "12 small corn tortillas",
      "1 medium white onion, finely chopped",
      "1/2 cup fresh cilantro, chopped",
      "2 limes, cut into wedges",
      "1 tablespoon cumin and chili powder mix",
      "1 tablespoon vegetable oil",
    ],
    instructions: [
      "Marinate the diced beef with cumin, chili powder, salt, pepper, and lime juice for 20 minutes.",
      "Heat vegetable oil in a cast-iron skillet over high heat until smoking.",
      "Add beef in a single layer and sear without moving for 3 minutes to get a nice crust.",
      "Stir and cook for another 2-3 minutes until completely browned.",
      "Warm tortillas, load with beef, and top with raw onion, cilantro, and fresh lime squeeze.",
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "34g",
      carbs: "28g",
      fat: "14g",
      fiber: "20g",
      sod: "100mg",
    },
    tips: [
      "Drain excess fat from beef for healthier tacos.",
      "Warm shells in oven for better texture.",
      "Prepare all toppings before cooking beef.",
      "Use ground turkey for a lighter option.",
    ],
  },
];

function generateRandomRecipe() {
  var activeTabBtn = document.querySelector("#nav-tab .nav-link.active");
  var activeTabId = activeTabBtn ? activeTabBtn.id : "nav-home-tab";
  var randomIndex = Math.floor(Math.random() * recipesArray.length);
  var currentRecipe = recipesArray[randomIndex];
  var prepNum = parseInt(currentRecipe.prep) || 0;
  var cookNum = parseInt(currentRecipe.cook) || 0;
  var totalTime = prepNum + cookNum;
  var alertHTML = "";
  if (totalTime >= 35) {
    alertHTML = `
      <div class="d-flex align-items-center p-3 rounded-3 my-3" style="background-color: #fff1f1; border-left: 4px solid #dc3545;">
        <i class="fas fa-exclamation-triangle text-danger me-3 fs-5"></i>
        <div>
          <div class="fw-bold text-danger" style="font-size: 14px;">Extended Preparation Time</div>
          <div class="text-danger small" style="font-size: 13px; opacity: 0.9;">This recipe requires more than 35 minutes to prepare. Plan accordingly!</div>
        </div>
      </div>
    `;
  }

  var ingredientsHTML = "";
  for (var i = 0; i < currentRecipe.ingredients.length; i++) {
    ingredientsHTML += `
      <li class="d-flex align-items-center g-2"> 
        <div class="icon-circ" style="width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; color: white;">${i + 1}</div> 
        <span>${currentRecipe.ingredients[i]}</span>
      </li>
    `;
  }

  var instructionsHTML = "";
  for (var j = 0; j < currentRecipe.instructions.length; j++) {
    instructionsHTML += `
      <li class="d-flex align-items-center g-2"> 
        <div class="icon-circ" style="width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; color: white;">${j + 1}</div> 
        <span>${currentRecipe.instructions[j]}</span>
      </li>
    `;
  }

  var tipsHTML = "";
  for (var k = 0; k < currentRecipe.tips.length; k++) {
    tipsHTML += `
      <div class="d-flex align-items-center p-3 rounded-3 mb-3" style="background-color: #fff9ec; border-left: 5px solid #e29000;">
        <i class="fas fa-check-circle text-warning me-3 fs-5" style="color: #e29000 !important;"></i>
        <span class="text-dark" style="font-size: 15px; font-weight: 500;">${currentRecipe.tips[k]}</span>
      </div>
    `;
  }

  var box = `
      <div class="col-12 col-lg-5 p-0 position-relative img">
        <img src="${currentRecipe.image}" alt="${currentRecipe.title}" class="w-100 h-100 imgs" />

        <span class="position-absolute top-0 start-0 m-3 bg-white px-2 py-1 rounded-pill shadow-sm small fw-bold">
          <i class="fas fa-star text-warning"></i> ${currentRecipe.rating}
          <span class="text-muted fw-normal">(${currentRecipe.reviews} reviews)</span>
        </span>

        <div class="position-absolute bottom-0 start-0 end-0 m-3 bg-white rounded-3 p-3 shadow-sm d-flex justify-content-around text-center">
          <div>
            <i class="fas fa-clock text-warning mb-1"></i>
            <div class="small text-muted">Prep Time</div>
            <div class="fw-bold small">${currentRecipe.prep}</div>
          </div>
          <div class="border-start"></div>
          <div>
            <i class="fas fa-fire text-danger mb-1"></i>
            <div class="small text-muted">Cook Time</div>
            <div class="fw-bold small">${currentRecipe.cook}</div>
          </div>
          <div class="border-start"></div>
          <div>
            <i class="fas fa-users text-primary mb-1"></i>
            <div class="small text-muted">Servings</div>
            <div class="fw-bold small">${currentRecipe.servings}</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7 position-static">
        <div class="title d-flex justify-content-between align-items-center">
          <div class="pt-2">
            <span class="px-2 py-1 rounded-pill shadow-sm small fw-bold span-tit">${currentRecipe.tags[0]}</span>
            <span class="px-2 py-1 rounded-pill shadow-sm small fw-bold span-tit-2">${currentRecipe.tags[1]}</span>
            <h3 class="mb- mt-2 fw-bold fs-1">${currentRecipe.title}</h3>
            <p class="text-muted mb-1">${currentRecipe.description}</p>
            
           
            ${alertHTML}
            
          </div>
          <div class="d-flex gap-2">
            <div class="icon-norm d-flex align-items-center justify-content-center">
              <i class="fas fa-bookmark fs-20"></i>
            </div>
            <div class="icon-norm d-flex align-items-center justify-content-center">
              <i class="fas fa-share-nodes fs-20"></i>
            </div>
          </div>
        </div>

        <nav class="mt-3">
          <div class="nav nav-tabs gap-3" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fas fa-list-check me-2"></i> Ingredients</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-book-open me-2"></i> Instructions</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fas fa-chart-pie me-2"></i> Nutrition</button>
            <button class="nav-link" id="nav-Chef-tab" data-bs-toggle="tab" data-bs-target="#nav-Chef" type="button" role="tab" aria-controls="nav-Chef" aria-selected="false"><i class="fas fa-lightbulb me-2"></i> Chef's Tips</button>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">

          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
           <div class="p-2">
             <ul class="p-4 d-flex flex-column gap-3 rounded-3" style="background-color: #fff9ec; list-style: none;">
               ${ingredientsHTML}
            </ul>
           </div>
          </div>

          <div class="tab-pane fade pb-5" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            <ul class="p-4 d-flex flex-column gap-3" style="list-style: none;">
               ${instructionsHTML}
            </ul>
          </div>

          
        <div class="tab-pane h-100 fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                  <div class="container">
        <div
          class="row data bg-white mt-5 rounded-3 shadow-sm"
          style="border-top: 1px solid var(--bg-color)"
        ></div>
        <div class="container-fluid">
          <div class="row pb-5 pt-4 g-4 px">
            <div class="col-6">
              <div
                class="bg-calories p-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <span
                  ><i class="fas fa-fire text-orange me-2"></i> Calories</span
                >
                <span class="fw-bold fs-20"
                  >${currentRecipe.nutrition.calories}</span
                >
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-protein p-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <span
                  ><i class="fas fa-dumbbell text-blue me-2"></i> Protein</span
                >
                <span class="fw-bold fs-20"
                  >${currentRecipe.nutrition.protein}</span
                >
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-carbs p-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <span
                  ><i class="fas fa-wheat-awn text-yellow me-2"></i>
                  Carbohydrates</span
                >
                <span class="fw-bold fs-20"
                  >${currentRecipe.nutrition.carbs}</span
                >
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-fat p-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <span><i class="fas fa-droplet text-red me-2"></i> Fat</span>
                <span class="fw-bold fs-20"
                  >${currentRecipe.nutrition.fat}</span
                >
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-light p-3 rounded-4 d-flex justify-content-between align-items-center"
                style="background-color: #f4fbf7 !important"
              >
                <div class="d-flex align-items-center">
                  <span
                    class="p-2 rounded-3 me-2"
                    style="
                      background-color: #e1f7eb;
                      color: #10b981;
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <i class="fas fa-seedling fs-5"></i>
                  </span>
                  <span class="text-secondary fw-semibold">Fiber</span>
                </div>
                <span class="fw-bold fs-4 text-dark"
                  >${currentRecipe.nutrition.fiber}</span
                >
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-light p-3 rounded-4 d-flex justify-content-between align-items-center"
                style="background-color: #fdf5f7 !important"
              >
                <div class="d-flex align-items-center">
                  <span
                    class="p-2 rounded-3 me-2"
                    style="
                      background-color: #fce3ec;
                      color: #db2777;
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <i class="fas fa-cube fs-5"></i>
                  </span>
                  <span class="text-secondary fw-semibold">Sodium</span>
                </div>
                <span class="fw-bold fs-4 text-dark"
                  >${currentRecipe.nutrition.sod}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
        
 </div>

          <div class="tab-pane fade" id="nav-Chef" role="tabpanel" aria-labelledby="nav-Chef-tab" tabindex="0">
            <div class="d-flex flex-column gap-1 pt-3">
               ${tipsHTML}
            </div>
          </div>

        </div>

        <hr>

        <div class="text-center text-lg-start btn-try pb-4 pt-3">
          <button id="randomBtn" class="shadow-sm" onclick="generateRandomRecipe()">
            <i class="fas fa-rotate-right me-2"></i> Try Another Recipe
          </button>
        </div>

      </div>
  `;

  document.querySelector(".data").innerHTML = box;
  var tabToActivate = document.getElementById(activeTabId);
  if (tabToActivate) {
    var tabInstance = new bootstrap.Tab(tabToActivate);
    tabInstance.show();
  }
}
generateRandomRecipe();
