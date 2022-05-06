import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRecipeComponent } from './recipe-recipe.component';

describe('RecipeRecipeComponent', () => {
  let component: RecipeRecipeComponent;
  let fixture: ComponentFixture<RecipeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
