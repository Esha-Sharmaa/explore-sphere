const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&key=${apiKey}`;
