import { convertToUTF8 } from './convertToUTF8';

describe('convertToUTF8', () => {
  let mockString: string;
  let mockResultString: string;
  let mockObj: object;
  let mockResultObj: object;

  beforeAll(() => {
    mockString = 'CWM-27-2021- PUBLIC HEALTH PEST CONTROL SERVICES IN AL AIN CITY NORTH REGION â LOT 6';
    mockResultString = 'CWM-27-2021- PUBLIC HEALTH PEST CONTROL SERVICES IN AL AIN CITY NORTH REGION – LOT 6';
    mockObj = {
      str: mockString,
    };
    mockResultObj = {
      str: mockResultString,
    };
  });

  it('should return string', async () => {
    const result = await convertToUTF8(mockString);
    expect(result).toEqual(mockResultString);
  });

  it('should return object', async () => {
    const result = await convertToUTF8(mockObj);
    expect(result).toEqual(mockResultObj);
  });
});
