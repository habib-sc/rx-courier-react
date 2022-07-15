import React from 'react';
import { Envelope, GeoAlt, Telephone } from 'react-bootstrap-icons';
import contactUsImage from '../../assets/images/contact-us.png';

const Contact = () => {
    return (
        <div className='container px-4 mx-auto py-10' data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="1100">
             {/* Contact title Start */}
             <div className="text-4xl font-semibold text-primary flex justify-center mb-10">
                <div>
                    <h2 className="">Contact Us</h2>
                    <div className="border border-t-2 border-t-primary w-16 mt-3"></div>
                </div>
            </div>
            {/* Contact title end  */}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                    <div>
                        <img src={contactUsImage} alt="Contact Us" />
                    </div>
                    <div>
                        <ul className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <li className='flex items-center justify-center md:justify-start'>
                                <div className='bg-orange-50 shadow-lg p-2 rounded-full mr-2 my-1'>
                                    <GeoAlt className='text-2xl text-orange-500'></GeoAlt>
                                </div>
                                <p className="text-gray-600 hover:text-gray-800">Location: #House 454, #Rd 8, #Block C, Mirpur, Dhaka</p>
                            </li>
                            <li className='flex items-center justify-center md:justify-start'>
                                <div className='bg-orange-50 shadow-lg p-2 rounded-full mr-2 my-1'>
                                    <Envelope className='text-2xl text-orange-500'></Envelope>
                                </div>
                                <p className="text-gray-600 hover:text-gray-800">Email: info@rxcourier.com</p>
                            </li>
                            <li className='flex items-center justify-center md:justify-start'>
                                <div className='bg-orange-50 shadow-lg p-2 rounded-full mr-2 my-1'>
                                    <Telephone className='text-2xl text-orange-500'></Telephone>
                                </div>
                                <p className="text-gray-600 hover:text-gray-800">Phone: +8801961584280</p>
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h3 className='text-3xl font-semibold text-center'>Send Us A Message</h3>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-primary" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-primary" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea class="textarea textarea-primary" placeholder="Your Message"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Contact;