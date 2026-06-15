import DashLink from "../components/DashLink";


const Sidebar = () => {
    return (
       <div className="flex flex-col  w-11/12 mx-auto text-center gap-3 bg-[#ceddfd] rounded-xl p-4 md:p-2 ">
         <DashLink href={'/dashboard'}  >
            My Bookings
        </DashLink>
         <DashLink href={'/dashboard/profile'}  >
            My Profile
        </DashLink>
       </div>
    );
};

export default Sidebar;