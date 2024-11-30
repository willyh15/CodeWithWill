export const fetchBackground = async (query: string = "abstract") => {
  const response = await fetch(`/api/pexels?query=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch background image");
  }
  const data = await response.json();
  return data.background;
};
