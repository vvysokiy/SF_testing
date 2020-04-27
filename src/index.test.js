import { sum, cropText } from './index';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  it('adds 2 + 2 to equal 4', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});

const testStr = 'Сделал множество открытий в области геометрии, предвосхитил многие идеи математического анализа. Заложил основы механики, гидростатики, был автором ряда важных изобретений. С именем Архимеда связаны многие математические понятия.';

describe('cropText', () => {
  it('testStr', () => {
    const result = cropText(testStr);
    expect(result).toBe('Сделал множество открытий в...');
  });

  it('testStr 10 .', () => {
    const result = cropText(testStr, 10, '.');
    expect(result).toBe('Сделал мн.');
  });
});