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

    if (!session) {
    redirect("/login");
  }

 const res = await fetch(  `http://localhost:5000/bookings?email=${session.user.email}`, {
  cache: "no-store",
});
const data = await res.json();

  return <DashboardClient bookings={data} />;
};

export default Dashboard;