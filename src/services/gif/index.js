import * as apiUrls from "../api_urls";
import { get } from "../api_helpers";

export default class GifService {

  async getAll() {
    try {
      return await get(
        apiUrls.GIFS_GET_ALL,
        apiUrls.GIFS_GET_ALL_WORKER,
        {
          'Content-Type': 'application/json',
        }
      );
    }
    catch (error) {
      throw error;
    }
  }

}