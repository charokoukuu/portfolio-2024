export const addEllipsis = (str: string): string => {
  const strLimit = 64;
  return str.length > strLimit ? str.substring(0, strLimit) + '...' : str;
};

export const ISOStringToLocaleString = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);

  return `${year}年${month}月`;
};

export const categorizeTag = (tag: string) => {
  const webAppTags = [
    'webApp',
    'React',
    '機械学習',
    'MQTT',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'Firebase',
  ];
  const electronicsTags = [
    'arduino',
    'IoT',
    'DCモーター',
    'ステッピングモーター',
    '電子工作',
    'M5',
    'SDL',
    'Python',
    'Raspberry Pi',
  ];

  let isWebApp = false;
  let isElectronics = false;

  if (
    webAppTags.some((webTag) =>
      tag.toLowerCase().includes(webTag.toLowerCase())
    )
  ) {
    isWebApp = true;
  }

  if (
    electronicsTags.some((elecTag) =>
      tag.toLowerCase().includes(elecTag.toLowerCase())
    )
  ) {
    isElectronics = true;
  }

  if (isWebApp && isElectronics) {
    return {
      name: 'Hybrid',
      color: '#DB1F01',
    };
  } else if (isWebApp) {
    return {
      name: 'Software',
      color: '#006C84',
    };
  } else if (isElectronics) {
    return {
      name: 'Hardware',
      color: '#ADD950',
    };
  } else {
    return null;
  }
};

export const internCardColor = (index: number) => {
  const colors = [
    '#B1ECFF',
    '#FFF0BC',
    '#FFD5DF',
  ];
  return colors[index % colors.length];
}