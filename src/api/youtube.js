import axios from "axios";

const KEY = "AIzaSyB2mTzd0KzIb9Rj7TpjQ6IexBjeTV9k82c";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});
