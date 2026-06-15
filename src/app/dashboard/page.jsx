import DashboardClient from "@/components/DashboardClient";

export const metadata = {
  title: "Docappoint-Dashboard",
  description: "A doctor appointment website",
};

const Dashboard = async () => {
 const res = await fetch("http://localhost:5000/bookings", {
  cache: "no-store",
});
const data = await res.json();

  return <DashboardClient bookings={data} />;
};

export default Dashboard;