import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class= "jumbotron">Recipe Box</h1>
  <div class= "container">

    <div [class]="checkVegan(currentRecipe)" *ngFor="let currentRecipe of recipes">
    <button (click)="editRecipe(currentRecipe.title)">Edit {{currentRecipe.title}} Recipe! </button>
      <h2>{{currentRecipe.title}}</h2>
      <h3>Ingredients</h3>
      <ul>
        <li *ngFor="let ingredient of currentRecipe.ingredients">{{ingredient}}</li>
      </ul>
      <h3>Instructions</h3>
      <ul>
        <li *ngFor="let step of currentRecipe.steps">{{step}}</li>
      </ul>
    </div>
<!--    <h2>Create a new deally</h2>
    <form>
      <input type="text" id="title" placeholder="enter title of recipe">
      <div class="form-group" id="ingredients">
        <div class="row">
          <input type="text" name="ingredients" placeholder="enter ingredient"><button type="button" name="button" (click)="addField('ingredients')">+</button>
        </div>
      </div>
      <div class="form-group" id="steps">
        <div class="row">
          <input type="text" name="steps" placeholder="enter instruction step"><button type="button" name="button" (click)="addField('steps')">+</button>
        </div>
      </div>
    </form>
  </div>-->
  `
})

export class AppComponent {
  currentRecipe: string =  'Recipes';
  recipes: Recipe [] = [
    new Recipe('Spaghetti', false,['Pasta', 'Olive Oil', 'Tomatoes', 'Garlic', 'Basil', 'Salt', 'Pepper', 'Parmesean'], ['Add tomatoes, garlic, salt and oil to saucepan.', 'Simmer until flavor develops', 'Salt water and bring to a boil', 'Add pasta to water and boil for 7-10 minutes. Test noodle at 7 minutes.', 'Strain pasta in a collander and return to pot.', 'Add sauce to pot and mix with pasta', 'Add fresh grated parmesean, and serve.']),
    new Recipe('Enchiladas', true, ['Corn Tortillas', 'Green Chiles', 'Tomatillos', 'Garlic', 'Cilantro', 'Salt', 'Pepper', 'Vegan Cheese', 'Imitation Beef', 'Onions'], ['Add Tomatillos, oil and seasoning to a pan an bring to a boil.', 'Simmer until flavor develops', 'Salt water and bring to a boil', 'Brown ground beef and onions', 'Add sauce and tortillas to baking sheet.', 'Add cheese amd bake for 20 min at 350 degrees F', 'Add fresh cilantro, and serve.'])
  ];

  editRecipe(title) {
    alert(`You are ready to EDIT ${title}`);
  }

  checkVegan(currentRecipe){
    if (currentRecipe.isVegan) {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  }

  // addField(fieldType){
  //   $(`#${fieldType}`).append(`<div class="row">
  //     <input type="text" name="${fieldType}" placeholder="enter additional"><button type="button" name="button" (click)="addField('${fieldType}')">+</button>
  //   </div>`);
  // }

}

class Recipe {
  constructor(public title: string, public isVegan: boolean, public ingredients: string[], public steps: string[]){ }
}
