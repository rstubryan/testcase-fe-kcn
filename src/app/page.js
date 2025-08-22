import LandingLayout from "@/components/templates/landing/landing-layout";

export default function LandingPage() {
  const links = [
    {
      title: "Task 1",
      path: "/blog",
      href: "/blog",
    },
    {
      title: "Task 2",
      path: "/user",
      href: "/user",
    },
    {
      title: "Task 3",
      path: "/product",
      href: "/product",
    },
    {
      title: "Task 4",
      path: "/register",
      href: "/register",
    },
    {
      title: "Task 5",
      path: "/gallery",
      href: "/gallery",
    },
  ];

  return (
    <LandingLayout
      links={links}
      title="Next.js Test-case Tasks for PT Mulya Kencana Metalindo"
      description="Click on any task to navigate to the respective page"
      footerText="Navigate to any page by clicking on the respective task card"
    />
  );
}
