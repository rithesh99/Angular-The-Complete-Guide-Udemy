import * as server_component from './server.component';
// @ponicode
describe('getBackgroundColor', () => {
  let inst: any;

  beforeEach(() => {
    inst = new server_component.ServerComponent();
  });

  test('0', () => {
    let result: any = inst.getBackgroundColor();
    expect(result).toMatchSnapshot();
  });
});
