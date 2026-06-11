 
import Link from 'next/link';
const notfound = () => {
    return (
         <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex justify-center gap-4">
         <Link href={'/'} className='border-2 px-2 py-3 rounded-xl text-[#0059BB] hover:bg-amber-50'>Go Back to Home</Link>
        </div>

        
      </div>
    </div>
    );
};

export default notfound ;