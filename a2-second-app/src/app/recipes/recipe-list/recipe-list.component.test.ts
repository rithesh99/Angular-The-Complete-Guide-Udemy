import * as recipe_list_component from './recipe-list.component';
// @ponicode
describe('ngOnInit', () => {
  let inst: any;

  beforeEach(() => {
    inst = new recipe_list_component.RecipeListComponent();
  });

  test('0', () => {
    let result: any = inst.ngOnInit();
    expect(result).toMatchSnapshot();
  });
});
