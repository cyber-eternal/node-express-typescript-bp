import Iconv from 'iconv-lite';

export const convertToUTF8 = (data: any) => {
  if (typeof data === 'string') {
    const str = Iconv.encode(data, 'ISO-8859-1');
    return Iconv.decode(str, 'UTF-8');
  } else {
    const str = Iconv.encode(JSON.stringify(data), 'ISO-8859-1');
    return JSON.parse(Iconv.decode(str, 'UTF-8'));
  }
};
