import * as shopping_edit_component from './shopping-edit.component';
// @ponicode
describe('onAddRecipe', () => {
  let inst: any;

  beforeEach(() => {
    inst = new shopping_edit_component.ShoppingEditComponent();
  });

  test('0', () => {
    let result: any = inst.onAddRecipe('Jean-Philippe', { value: '' });
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    let result: any = inst.onAddRecipe('Anas', { value: '' });
    expect(result).toMatchSnapshot();
  });

  test('2', () => {
    let result: any = inst.onAddRecipe('Michael', { value: '' });
    expect(result).toMatchSnapshot();
  });

  test('3', () => {
    let result: any = inst.onAddRecipe('Pierre Edouard', { value: '' });
    expect(result).toMatchSnapshot();
  });

  test('4', () => {
    let result: any = inst.onAddRecipe('Edmond', { value: '' });
    expect(result).toMatchSnapshot();
  });

  test('5', () => {
    let result: any = inst.onAddRecipe('', { value: '' });
    expect(result).toMatchSnapshot();
  });
});
