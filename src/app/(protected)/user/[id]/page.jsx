import Link from "next/link";
import { getUserById } from "@/services/users/api";

export const dynamic = "force-dynamic";

export default async function UserDetailPage({ params }) {
  const user = await getUserById(params.id);

  return (
    <div className="container mx-auto py-8">
      <Link
        href="/users"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Users
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Address</h2>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <div className="mt-3">
              <h2 className="text-xl font-semibold mb-2">Company</h2>
              <p>
                <strong>Name:</strong> {user.company.name}
              </p>
              <p>
                <strong>Catchphrase:</strong> {user.company.catchPhrase}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
