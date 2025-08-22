import { API_USER_URL } from "@/lib/constant";
import { fetchAPI } from "@/lib/fetcher";

export async function getAllUsers() {
  return fetchAPI(`${API_USER_URL}`, "Failed to fetch users");
}

export async function getUserById(id) {
  return fetchAPI(
    `${API_USER_URL}/${id}`,
    `Failed to fetch user with id: ${id}`,
  );
}
