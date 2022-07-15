import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Pricing = () => {
    return (
        <section className='container px-4 mx-auto py-10' data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="520">
            {/* Pricing Start */}
            <div className="text-4xl font-semibold text-primary flex justify-center mb-10">
                <div>
                    <h2 className="">RX Courier Pricing</h2>
                    <div className="border border-t-2 border-t-primary w-16 mt-3"></div>
                </div>
            </div>
            {/* Pricing end  */}


            <div>
                
                <Tabs>
                    <div className='flex justify-center'>
                        <TabList>
                            <Tab><h4 className='text-xl'>Inside Dhaka</h4></Tab>
                            <Tab><h4 className='text-xl'>Near Dhaka</h4></Tab>
                            <Tab><h4 className='text-xl'>Outside Dhaka</h4></Tab>
                        </TabList>
                    </div>
                    


                    <TabPanel>    
                        <div class="w-full mx-auto overflow-auto border rounded-md mt-10 text-gray-600 body-font">
                            <table class="table-auto w-full whitespace-no-wrap">
                                <tbody>
                                <tr>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳60</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1-2 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳75</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 2-3 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳90</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center ">
                                        <p className='font-semibold'>Up to 3-4 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳105</p>
                                    </td>
                                    <td class="px-4 py-3 text-center ">
                                        <p className='font-semibold'>Up to 4-5 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳120</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>


                    <TabPanel>    
                        <div class="w-full mx-auto overflow-auto border rounded-md mt-10 text-gray-600 body-font">
                            <table class="table-auto w-full whitespace-no-wrap">
                                <tbody>
                                <tr>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳100 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1-2 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳115 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 2-3 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳130 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center ">
                                        <p className='font-semibold'>Up to 3-4 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳145 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 text-center ">
                                        <p className='font-semibold'>Up to 4-5 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳160 + 1% COD</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>

                    
                    <TabPanel>    
                        <div class="w-full mx-auto overflow-auto border rounded-md mt-10 text-gray-600 body-font">
                            <table class="table-auto w-full whitespace-no-wrap">
                                <tbody>
                                <tr>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳130 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 1-2 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳160 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center">
                                        <p className='font-semibold'>Up to 2-3 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳190 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 border-r text-center ">
                                        <p className='font-semibold'>Up to 3-4 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳220 + 1% COD</p>
                                    </td>
                                    <td class="px-4 py-3 text-center ">
                                        <p className='font-semibold'>Up to 4-5 KG</p>
                                        <p className='text-3xl font-bold mt-3'>৳250 + 1% COD</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>


                </Tabs>

            </div>

            <div className='text-center my-10 bg-orange-50 py-4 px-4 rounded-lg shadow-lg'>
                <p className='mb-8 text-4xl font-bold'>Please Contact us for Enterprice Price Details</p>
                <button className='btn btn-primary md:text-xl px-10'>Estimated Delivery Charges</button>
            </div>

        </section>
    );
};

export default Pricing;