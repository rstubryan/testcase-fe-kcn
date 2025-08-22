import ContainerLayout from "../container/container-layout";
import RegisterForm from "@/components/organisms/register-form/register-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/atoms/card/card";

export default function RegisterLayout() {
  return (
    <ContainerLayout>
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </ContainerLayout>
  );
}
