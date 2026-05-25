import { DEVICES, DEFAULT_LINKS } from "./config";

export function getLinkByKey(links, key, isMobile) {
  if (!links || !key) return '#';

  const mobilebLink = links.find(item => item.key === key && item.device === DEVICES.MOBILE);
  const desktopLink = links.find(item => item.key === key && item.device === DEVICES.DESKTOP);
  const allLink = links.find(item => item.key === key && item.device === DEVICES.ALL);

  const mobileDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === DEVICES.MOBILE);
  const desktopDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === DEVICES.DESKTOP);
  const allDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === DEVICES.ALL);

  if (isMobile && mobilebLink) {
    return mobilebLink.url;
  }
  else if (!isMobile && desktopLink) {
    return desktopLink.url;
  }
  else if (allLink) {
    return allLink.url;
  }
  // Trường hợp không get được link từ API thì sẽ lấy link mặc định từ DEFAULT_LINKS
  else {
    if (isMobile && mobileDefaultLink) {
      return mobileDefaultLink.url;
    }
    else if (!isMobile && desktopDefaultLink) {
      return desktopDefaultLink.url;
    }
    else if (allDefaultLink) {
      return allDefaultLink.url;
    }
    else {
      return '#';
    }
  }
}

export const randomInterger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const buildFileUrl = (baseUrl, path) => {
  const normalizedBaseUrl = String(baseUrl || "").replace(/\/+$/, "");
  const normalizedPath = String(path || "").replace(/^\/+/, "");
  return `${normalizedBaseUrl}/${normalizedPath}`;
};