import Sidebar from "@/components/Sidebar";

 

const layout = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
  <aside className="w-full p-10 md:max-w-55 md:h-screen md:sticky md:top-0   bg-[#F8F9FF] ">
    <Sidebar />
  </aside>

  <main className="flex-1 p-4 bg-[#F8F9FF]">
    {children}
  </main>
</div>
    );
};

export default layout;