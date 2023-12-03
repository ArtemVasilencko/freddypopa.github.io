const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGUxMjE5YTZhNmE1YTBlODc0MmZkYWRkNDc0ZWNhMCIsInN1YiI6IjY1NTM5YmZjNjdiNjEzNDVjZDMzYTk2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UBhOt8mGXfsvMBQpWS8SUa76JmqQ1Y4urOlYoP7BKR4`,
  },
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
