import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <ul>
    <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
  </ul>
  `
})

export class AppComponent {
  currentRecipe: string =  'Recipes';
  recipes: Recipe [] = [
    new Recipe('Spaghetti', ['Pasta', 'Olive Oil', 'Tomatoes', 'Garlic', 'Basil', 'Salt', 'Pepper', 'Parmesean'], ['Add tomatoes, garlic, salt and oil to saucepan.', 'Simmer until flavor develops', 'Salt water and bring to a boil', 'Add pasta to water and boil for 7-10 minutes. Test noodle at 7 minutes.', 'Strain pasta in a collander and return to pot.', 'Add sauce to pot and mix with pasta', 'Add fresh grated parmesean, and serve.']),
    new Recipe('Fettucini', ['Pasta', 'Olive Oil', 'Tomatoes', 'Garlic', 'Basil', 'Salt', 'Pepper', 'Parmesean'], ['Add tomatoes, garlic, salt and oil to saucepan.', 'Simmer until flavor develops', 'Salt water and bring to a boil', 'Add pasta to water and boil for 7-10 minutes. Test noodle at 7 minutes.', 'Strain pasta in a collander and return to pot.', 'Add sauce to pot and mix with pasta', 'Add fresh grated parmesean, and serve.'])

  ];

}

class Recipe {
  constructor(public title: string, public ingredients: string[], public steps: string[]){ }
}

// class Recipe {
//   constructor(public title: string, public ingredients: string, public instructions: string){
//   }
// }


// new Step('Add tomatoes, garlic, salt and oil to saucepan. Simmer until flavor develops'),
// new Step('Salt water and bring to a boil'),
// new Step('Add pasta to water and boil for 7-10 minutes. Test noodle at 7 minutes.'),
// new Step('Strain pasta in a collander and return to pot'),
// new Step('Add sauce to pot and mix with pasta'),
// new Step('Add fresh grated parmesean, and serve').
