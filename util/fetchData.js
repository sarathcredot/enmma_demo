// Utility function to fetch data from the API

export async function fetchData(endpoint) {
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await res.json();
    return data;
  }
  