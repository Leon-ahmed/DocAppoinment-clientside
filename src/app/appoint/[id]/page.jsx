 

const page =async ({params}) => {
    const {id}=await params;
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default page;