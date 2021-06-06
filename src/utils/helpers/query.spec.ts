import { getDayAndMonth, getKeyByValue } from 'utils/helpers';

describe('query', () => {
  describe('getDayAndMonth', () => {
    it('should get the day and month', () => {
      const mockDate = new Date(2021, 0, 1);

      expect(getDayAndMonth(mockDate)).toEqual('1 Jan');
    });
  });

  describe('getKeyByValue', () => {
    it('should get the key bby value', () => {
      const mockObject = {
        key: ['value'],
      };

      expect(getKeyByValue(mockObject, 'value')).toEqual('key');
    });
  });
});
