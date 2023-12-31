
import { useLoaderData, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const seaciceDetails = useLoaderData();
    const services = seaciceDetails.services



    const { id } = useParams();
    const intId = parseInt(id);
    const Service = services.find(service => service.id === intId)
    const {imageLinks, service_name,  title, service_image, background_colour, text_colour, service_price, service_details, service_include_products } = Service;
    const handleclick = () => {

    }
    return (
        <div>

            <div className="mx-auto container ">
                <div className="">
                    <div className="relative">
                        <button
                            style={{ backgroundColor: text_colour }} className="btn absolute z-10 bottom-9 left-9 border-none rounded-sm text-white normal-case" onClick={handleclick}>Price {service_price}
                        </button>

                        <div className="relative ">

                            <img className="h-screen w-full " src={service_image} alt="" />

                            <div className="absolute bottom-0 left-0 w-full h-28 flex items-center justify-center bg-black opacity-40">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-12 px-5 md:px-0">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-pink-500">{service_name}</h1>
                    <h1 className="text-4xl font-bold mb-8" style={{color:text_colour}}>{title}</h1>
                    <p className=''>{service_details}</p>
                </div>
                <div className='px-5 md:px-0'>
                    <h2 className='text-3xl font-bold'style={{color:text_colour}}>List of Equipment </h2>
                   <div className='flex justify-center'>
                   <div className='grid grid-cols-1 md:grid-cols-2 gap-7 my-10'>
                        {
                            service_include_products.map((element, inx) => <div className='p-5 shadow-xl text-2xl font-bold rounded-lg'style={{backgroundColor:background_colour}} key={inx}>{element}</div>)
                        }

                    </div>
                   </div>
                </div>

                <div>
                    <h2 className='text-3xl font-bold 'style={{color:text_colour}}>Decoration model </h2>
                 
                   <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-7  my-12 p-10 rounded-md mx-auto justify-center' style={{backgroundColor:background_colour}}>
       
           {
              imageLinks.map((img, inx) =>  <img className='w-56 h-56 rounded-lg border-2'style={{borderColor:text_colour}} key={inx} src={img}/>)
          }

       

    
                   </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;