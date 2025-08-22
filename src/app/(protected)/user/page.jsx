import Link from "next/link";
import { getAllUsers } from "@/services/users/api";

export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="border rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="mt-2">{user.email}</p>
            <p className="mt-1">{user.phone}</p>
            <Link
              href={`/users/${user.id}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
