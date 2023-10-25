
import { useLoaderData, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const seaciceDetails = useLoaderData();
    const services = seaciceDetails.services
    console.log('al services', services)


    const { id } = useParams();
    const intId = parseInt(id);
    const Service = services.find(service => service.id === intId)
    const {imageLinks, service_name,  title, service_image, background_colour, text_colour, service_price, service_details, service_include_products } = Service;
    const handleclick = () => {

    }
    return (
        <div>

            <div className="mx-auto container">
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
                <div className="my-12">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-pink-500">{service_name}</h1>
                    <h1 className="text-4xl font-bold mb-8" style={{color:text_colour}}>{title}</h1>
                    <p>{service_details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime sed, ab veritatis aliquam consectetur deserunt ipsa officia repellat voluptatum quas nihil aut obcaecati mollitia aliquid voluptatem distinctio odio nam itaque laboriosam sit vel ea! Officiis rem quasi magni accusantium natus odit, rerum beatae, voluptatibus reiciendis quod debitis? Molestias enim harum, eaque natus explicabo nesciunt, vero obcaecati eveniet quo, fugiat iusto officia quidem numquam beatae! Aperiam distinctio, aliquam laborum mollitia dolores pariatur et maxime dolor! Iste at doloribus numquam esse, amet in voluptatum ratione fugit id ullam error asperiores incidunt voluptatibus aperiam aliquid earum assumenda accusamus soluta dolore quia suscipit.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold'style={{color:text_colour}}>List of Equipment </h2>
                   <div className='flex justify-center'>
                   <div className='grid grid-cols-2 gap-7'>
                        {
                            service_include_products.map((element, inx) => <div className='p-5 shadow-xl text-2xl font-bold'style={{backgroundColor:background_colour}} key={inx}>{element}</div>)
                        }

                    </div>
                   </div>
                </div>

                <div>
                    <h2 className='text-3xl font-bold 'style={{color:text_colour}}>Decoration model </h2>
                 
                   <div className='flex justify-center gap-7  my-12 p-10 rounded-md' style={{backgroundColor:background_colour}}>
       
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