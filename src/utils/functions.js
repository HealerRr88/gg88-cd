
export const randomString = (length, type = 0) => {
  let result = '';
  let characters = '';
  if (type === 0) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
  else if (type === 1) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }
  else if (type === 2) {
    characters = '0123456789';
  }
  else if (type === 3) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else if (type === 4) {
    characters = 'abcdefghijklmnopqrstuvwxyz';
  }
  else if (type === 5) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  }
  else if (type === 6) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  }

  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export const randomIntegers = (min, max, loop = 1) => {
  let array = [];
  while (array.length < loop) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min
    if (!array.find(x => x === number)) {
      array.push(number);
    }
  }
  return array;
}

export const randomInterger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getLinkByKey(links, key, isMobile, defaultLink = { pc: '#', mb: '#', all: '#' }) {
  if (!links || !key) return '#';

  const mbLink = links.find(item => item.key === key['mb']);
  const pcLink = links.find(item => item.key === key['pc']);
  const allLink = links.find(item => item.key === key['all']);

  if (isMobile && mbLink) {
    return mbLink.url;
  }
  else if (!isMobile && pcLink) {
    return pcLink.url;
  }
  else if (allLink) {
    return allLink.url;
  }
  else {
    if (isMobile) {
      return defaultLink['mb'];
    }
    else if (!isMobile) {
      return defaultLink['pc'];
    }
    else {
      return defaultLink['all'];
    }
  }
}