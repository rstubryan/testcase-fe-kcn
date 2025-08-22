import { getUserById } from "@/services/users/api";
import { Typography } from "@/components/atoms/typography/typography";
import { Card, CardHeader, CardContent } from "@/components/atoms/card/card";
import UserDetailLayout from "@/components/templates/user/user-detail-layout";

export const dynamic = "force-dynamic";

export default async function UserDetailPage({ params }) {
  const user = await getUserById(params.id);

  return (
    <UserDetailLayout isLoading={!user}>
      <Card>
        <CardHeader className="border-b border-gray-200">
          <Typography size="h1" className="capitalize">
            {user.name}
          </Typography>
        </CardHeader>
        <CardContent className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Typography size="h3" className="mb-4">
                Contact Information
              </Typography>
              <div className="space-y-3">
                <div>
                  <Typography variant="secondary" size="sm">
                    Username
                  </Typography>
                  <Typography className="font-medium">
                    @{user.username}
                  </Typography>
                </div>
                <div>
                  <Typography variant="secondary" size="sm">
                    Email
                  </Typography>
                  <Typography className="font-medium">{user.email}</Typography>
                </div>
                <div>
                  <Typography variant="secondary" size="sm">
                    Phone
                  </Typography>
                  <Typography className="font-medium">{user.phone}</Typography>
                </div>
                <div>
                  <Typography variant="secondary" size="sm">
                    Website
                  </Typography>
                  <Typography className="font-medium">
                    {user.website}
                  </Typography>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Typography size="h3" className="mb-4">
                  Address
                </Typography>
                <div className="space-y-2">
                  <Typography>
                    {user.address.street}, {user.address.suite}
                  </Typography>
                  <Typography>
                    {user.address.city}, {user.address.zipcode}
                  </Typography>
                </div>
              </div>

              <div>
                <Typography size="h3" className="mb-4">
                  Company
                </Typography>
                <div className="space-y-3">
                  <div>
                    <Typography variant="secondary" size="sm">
                      Name
                    </Typography>
                    <Typography className="font-medium">
                      {user.company.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="secondary" size="sm">
                      Catchphrase
                    </Typography>
                    <Typography className="font-medium">
                      {user.company.catchPhrase}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </UserDetailLayout>
  );
}
