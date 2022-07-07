import { Envelope, Facebook, GeoAlt, Linkedin, Telephone, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-20">
            <div className='bg-gray-100'>
                <div className="container py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10">
                        {/* Column 1 */}
                        <div className="lg:w-1/4 md:w-1/2 w-full pr-4 pb-8 md:pb-0">
                            <h1 className="mr-3 text-3xl font-bold text-orange-500 mb-3">RX Courier</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in fugit, incidunt repellendus magni fugiat, officia laudantium expedita obcaecati pariatur quibusdam perspiciatis enim nisi hic amet ipsam totam blanditiis repudiandae!</p>    
                        </div>

                        {/* Column 2  */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center">
                            
                            <nav className="list-none mb-10">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important Links</h2>
                                <li>
                                    <a href='/coverage' className="text-gray-600 hover:text-gray-800">Our Coverage</a>
                                </li>
                                <li>
                                    <a href='/services' className="text-gray-600 hover:text-gray-800">Services</a>
                                </li>
                                <li>
                                    <a href='/charges' className="text-gray-600 hover:text-gray-800">charges</a>
                                </li>
                                <li>
                                    <a href='/login' className="text-gray-600 hover:text-gray-800">Became A Merchant</a>
                                </li>
                            </nav>
                        </div>

                        {/* Column 3  */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ADDRESS</h2>
                            <nav className="list-none mb-10">
                                <li className='flex items-center justify-center md:justify-start'>
                                    <div className='bg-orange-200 p-2 rounded-full mr-2 my-1'>
                                        <GeoAlt className='text-2xl text-orange-500'></GeoAlt>
                                    </div>
                                    <p className="text-gray-600 hover:text-gray-800">Location: #House 454, #Rd 8, #Block C, Mirpur, Dhaka</p>
                                </li>
                                <li className='flex items-center justify-center md:justify-start'>
                                    <div className='bg-orange-200 p-2 rounded-full mr-2 my-1'>
                                        <Envelope className='text-2xl text-orange-500'></Envelope>
                                    </div>
                                    <p className="text-gray-600 hover:text-gray-800">Email: info@rxcourier.com</p>
                                </li>
                                <li className='flex items-center justify-center md:justify-start'>
                                    <div className='bg-orange-200 p-2 rounded-full mr-2 my-1'>
                                        <Telephone className='text-2xl text-orange-500'></Telephone>
                                    </div>
                                    <p className="text-gray-600 hover:text-gray-800">Phone: +8801961584280</p>
                                </li>
                            </nav>
                        </div>

                        {/* Column 4  */}
                        <div className="lg:w-1/4 md:w-1/2 w-full pl-4 mb-5">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
                            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                                <a href='#' className="text-gray-500 bg-orange-200 p-3 rounded-full">
                                    <Facebook className='text-2xl text-orange-500'></Facebook>
                                </a>
                                <a href='#' className="ml-3 text-gray-500 bg-orange-200 p-3 rounded-full">
                                    <Twitter className='text-2xl text-orange-500'></Twitter>
                                </a>
                                <a href='#' className="ml-3 text-gray-500 bg-orange-200 p-3 rounded-full">
                                    <Linkedin className='text-2xl text-orange-500'></Linkedin>
                                </a>
                                <a href='#' className="ml-3 text-gray-500 bg-orange-200 p-3 rounded-full">
                                    <Youtube className='text-2xl text-orange-500'></Youtube>
                                </a>
                            </span>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">SUBSCRIBE</h2>
                            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                    <input type="text" placeholder='Your Email' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-orange-200 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <button className="inline-flex text-white bg-orange-500 border-0 py-1 px-6 focus:outline-none hover:bg-orange-600 rounded">SUBMIT</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 border border-t-2">
                <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 RX Courier —
                </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Make Delivery Faster</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;