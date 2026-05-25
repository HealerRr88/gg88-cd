const fetchJsonWithTimeout = async (url, header, timeoutMs = 5000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: header,
      signal: controller.signal,
    });

    if (!response.ok) {
      const httpError = new Error(`Request failed with status ${response.status}`);
      httpError.name = 'HttpError';
      httpError.status = response.status;
      throw httpError;
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
};

const isNetworkOrTimeoutError = (error) => {
  return error?.name === 'AbortError' || error instanceof TypeError;
};

export const get = async (url1, url2, header) => {
  try {
    return await fetchJsonWithTimeout(url1, header);
  } catch (primaryError) {
    if (!url2 || !isNetworkOrTimeoutError(primaryError)) {
      throw primaryError;
    }

    return await fetchJsonWithTimeout(url2, header);
  }
};