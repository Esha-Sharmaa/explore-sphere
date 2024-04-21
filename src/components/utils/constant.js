const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const countryCode = "IN";
export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=${countryCode}&key=${apiKey}`;
export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_MAX_COUNT = 10;