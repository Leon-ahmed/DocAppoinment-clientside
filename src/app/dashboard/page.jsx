import DashboardClient from "@/components/DashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Docappoint-Dashboard",
  description: "A doctor appointment website",
};

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Safety check
  if (!session?.user?.email) {
    redirect("/login");
  }

  // Retrieve JWT token server-side via Better-Auth
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenData?.token;

  const res = await fetch(
    `http://localhost:5000/bookings?email=${encodeURIComponent(
      session.user.email
    )}`,
    {
      cache: "no-store",
      headers: {
        "Authorization": `Bearer ${token || ""}`
      }
    }
  );

  const data = await res.json();

  return <DashboardClient bookings={data} />;
};

export default Dashboard;