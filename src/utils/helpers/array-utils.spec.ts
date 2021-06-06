import { chunk, mergeByKey } from 'utils/helpers';

describe('chunk', () => {
  it('should split array into the one group by the size param', async () => {
    const result = chunk(['one', 'two', 'three'], 3);

    expect(result).toEqual([['one', 'two', 'three']]);
  });

  it('should split array into the two groups with the remainder on the last one', async () => {
    const result = chunk(['one', 'two', 'three'], 2);

    expect(result).toEqual([['one', 'two'], ['three']]);
  });
});

describe('mergeByKey', () => {
  it('should merge two arrays by the nested object key', async () => {
    const one = [
      {
        id: 'id',
        name: 'nameOne',
        description: 'description',
      },
    ];
    const two = [
      {
        id: 'id',
        name: 'nameTwo',
      },
    ];

    const result = mergeByKey(one, two, 'id');

    expect(result).toEqual([{ id: 'id', name: 'nameTwo', description: 'description' }]);
  });
});
