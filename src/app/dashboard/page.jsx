 import { IoPersonSharp } from "react-icons/io5";
 import { BsFillClockFill } from "react-icons/bs";
 import { MdCalendarMonth } from "react-icons/md";
 export const metadata = {
  title: "Docappoint-Dashboard",
  description: "A doctor appointment website",
};

const Dashboard = async() => {
    const res=await fetch('http://localhost:5000/bookings')
    const data=await res.json();
    console.log(data);
    
    return (
        <div className=" p-3">
           

            <div>
                <p className="text-center pb-5 font-medium text-xl md:text-3xl ">Upcomming Appoinments</p>

                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center   gap-4">
                   {
                    data.map((booking)=>{return(
                        <div key={booking._id} className="space-y-4 bg-white p-8 shadow rounded-2xl">

                             <div>
                                <h3 className="text-xl font-medium">{booking.doctorName}</h3>
                                <p  className="text-[#0059BB]  font-medium">{booking.doctorSpeciality}</p>
                             </div>
                             <hr />
                             
                             <div className=" space-y-2">
                             <p className="flex items-center text-xl font-medium gap-1"><IoPersonSharp />Patient: {booking.patientName}</p>
                             <p className="flex items-center gap-1"><MdCalendarMonth />Date: {booking.appointmentDate}</p>
                             <p className="flex items-center gap-1"><BsFillClockFill />Time: {booking.appointmentTime}</p>
                             </div>
                            
                         
                            
                            
                            
                            
                            
                            </div>
                        
                    )
                       
                    })
                   }
                </div>
                
            </div>
         
        </div>
    );
};

export default Dashboard;






// appointmentDate
// : 
// "2026-06-19"
// appointmentTime
// : 
// "10:00 AM - 01:00 PM"
// doctorName
// : 
// "Dr. Mahmud Hasan"
// doctorSpeciality
// : 
// "Neurologist"
// gender
// : 
// "Female"
// patientName
// : 
// "Semo"
// phone
// : 
// "018787634"
// userEmail
// : 
// "semo@gmail.com"
// _id
// : 
// "6a2ec021c5042c24832859e8"