import axios from "axios";

const KEY = "AIzaSyB_WTBeZDp1Coho-Cod6StBWAIS4bg08Wo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});
