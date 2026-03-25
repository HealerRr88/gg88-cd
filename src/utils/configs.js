export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1234/api';

export const LINK_DEVICES = {
  all: 0,
  pc: 1,
  mb: 2,
}

export const LINK_KEYS = {
  TRANG_CHU: {
    pc: 'trang-chu-pc',
    mb: 'trang-chu-mb',
    all: 'trang-chu',
  },
  TAI_APP_IOS: {
    pc: 'tai-app-ios-pc',
    mb: 'tai-app-ios-mb',
    all: 'tai-app-ios',
  },
  TAI_APP_ANDROID: {
    pc: 'tai-app-android-pc',
    mb: 'tai-app-android-mb',
    all: 'tai-app-android',
  },

  PRE_KEY: {
    pc: 'link-pc-',
    mb: 'link-mb-',
    all: 'link-',
  },
};

export const DEFAULT_LINKS = {
  TRANG_CHU: {
    pc: '#',
    mb: '#',
    all: '#',
  },
  TAI_APP_IOS: {
    pc: 'https://gg8853.com/cocos/download/9fb7b0_sn.ipa?1766641747000',
    mb: 'https://gg8853.com/cocos/download/9fb7b0_sn.ipa?1766641747000',
    all: 'https://gg8853.com/cocos/download/9fb7b0_sn.ipa?1766641747000',
  },
  TAI_APP_ANDROID: {
    pc: 'https://gg8853.com/cocos/download/9fb7b0_sn.apk?1766664997000',
    mb: 'https://gg8853.com/cocos/download/9fb7b0_sn.apk?1766664997000',
    all: 'https://gg8853.com/cocos/download/9fb7b0_sn.apk?1766664997000',
  },
  // 6 link dự phòng
  LINKS: [
    {
      pc: 'https://gg8817.com/',
      mb: 'https://gg8817.com/',
      all: 'https://gg8817.com/',
    },
    {
      pc: 'https://gg8809.com/',
      mb: 'https://gg8809.com/',
      all: 'https://gg8809.com/',
    },
    {
      pc: 'https://gg8824.com/',
      mb: 'https://gg8824.com/',
      all: 'https://gg8824.com/',
    },
    {
      pc: 'https://gg8826.com/',
      mb: 'https://gg8826.com/',
      all: 'https://gg8826.com/',
    },
    {
      pc: 'https://gg8830.com/',
      mb: 'https://gg8830.com/',
      all: 'https://gg8830.com/',
    },
    {
      pc: 'https://gg8832.com/',
      mb: 'https://gg8832.com/',
      all: 'https://gg8832.com/',
    },
  ],
}