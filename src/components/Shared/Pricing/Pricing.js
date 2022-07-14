import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Pricing = () => {
    return (
        <section className='container px-4 mx-auto py-10' data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="550">
            {/* Pricing Start */}
            <div className="text-4xl font-semibold text-primary flex justify-center mb-10">
                <div>
                    <h2 className="">RX Courier Pricing</h2>
                    <div className="border border-t-2 border-t-primary w-16 mt-3"></div>
                </div>
            </div>
            {/* Pricing end  */}


            <div className='flex justify-center'>
                
                <Tabs>
                    <TabList>
                        <Tab><h4 className='text-xl'>Inside Dhaka</h4></Tab>
                        <Tab><h4 className='text-xl'>Near Dhaka</h4></Tab>
                        <Tab><h4 className='text-xl'>Outside Dhaka</h4></Tab>
                    </TabList>


                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>

                </Tabs>

            </div>

        </section>
    );
};

export default Pricing;