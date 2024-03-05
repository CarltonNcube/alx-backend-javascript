function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const apiResponse = "Data from API";
      resolve(apiResponse);
    }, 1000);
  });
}

export default getResponseFromAPI;
