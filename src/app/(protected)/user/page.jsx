import Link from "next/link";
import { getAllUsers } from "@/services/users/api";
import { Typography } from "@/components/atoms/typography/typography";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import UserLayout from "@/components/templates/user/user-layout";

export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <UserLayout isLoading={!users}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="border-b border-gray-200">
              <Typography size="h4" className="capitalize">
                {user.name}
              </Typography>
            </CardHeader>
            <CardContent className="mt-4 space-y-2">
              <Typography variant="secondary" size="sm">
                <span className="font-medium">@{user.username}</span>
              </Typography>
              <Typography
                variant="secondary"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {user.email}
              </Typography>
              <Typography
                variant="secondary"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {user.phone}
              </Typography>
            </CardContent>
            <CardFooter className="border-t border-gray-200 justify-end">
              <Link
                href={`/user/${user.id}`}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 flex items-center"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </UserLayout>
  );
}
