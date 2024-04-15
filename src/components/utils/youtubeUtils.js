export const formatViewCount = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount.toString();
  } else if (viewCount < 1000000) {
    return Math.floor(viewCount / 1000) + "k";
  } else {
    return Math.floor(viewCount / 1000000) + "M";
  }
};
 export const formatDate = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const monthsDifference = Math.floor(daysDifference / 30);

  if (monthsDifference > 0) {
    return `${monthsDifference} month${monthsDifference !== 1 ? "s" : ""} ago`;
  } else {
    return `${daysDifference} day${daysDifference !== 1 ? "s" : ""} ago`;
  }
};

 