import exported_os from '../index';
import * as os from 'os';

it('arch works', () => {
  expect(exported_os.arch()).toBe(os.arch());
});

it('release works', () => {
  expect(exported_os.release()).toBe(os.release());
});
it('type works', () => {
  expect(exported_os.type()).toBe(os.type());
});
