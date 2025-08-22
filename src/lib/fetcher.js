export async function fetchAPI(url, errorMessage) {
  const res = await fetch(url, { next: { revalidate: false } });

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return res.json();
}
