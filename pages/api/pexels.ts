export default async function handler(req, res) {
  const API_URL = 'https://api.pexels.com/v1/search?query=abstract&per_page=1';
  const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

  try {
    const response = await fetch(API_URL, {
      headers: { Authorization: PEXELS_API_KEY },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API Error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: error.message || "Server Error" });
  }
}
