import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  `
})

export class AppComponent {
  currentRecipe: string =  'Spaghetti';

  recipes: Recipe [] = [


  ];
}

class Recipe {
  constructor(public title: string, public ingredients: string, public steps: string){
  }
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
