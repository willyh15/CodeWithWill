export const fetchBackground = async (query: string) => {
  const API_URL = "https://api.pexels.com/v1/search";
  const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

  const url = new URL(API_URL);
  url.searchParams.append("query", query);
  url.searchParams.append("per_page", "1");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: PEXELS_API_KEY as string,
    },
  });

  if (!response.ok) {
    throw new Error(`Pexels API Error: ${response.statusText}`);
  }

  return await response.json();
};
