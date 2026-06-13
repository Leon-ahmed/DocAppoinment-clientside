import doctor from "../../../../public/doctor.json";
import DoctorClient from "../../../components/DoctorClient";



export const generateMetadata=async({params})=>{
 const {id}= await params;
     const data=doctor.find(
        (item)=> Number(item.id)===Number(id))

return {title:data.name,
       description:data.description,
    }




}








export default async function Page({ params }) {
    const{id}=await params;
  const data = doctor.find(
    (item) => Number(item.id) === Number(id)
  );

  return <DoctorClient data={data} />;
}