import React from 'react';
import { GeoAltFill } from 'react-bootstrap-icons';

const HubInDhaka = (props) => {
    const hub = props.hub;
    return (
        <div class="collapse rounded-lg" data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400">
            <input type="checkbox" class="peer" /> 
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-orange-100 peer-checked:text-secondary-content h-[60px] rounded-lg flex justify-between items-center">
                <div>
                    {hub?.hubName}
                </div>
                <div>
                    <GeoAltFill></GeoAltFill>
                </div>
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-orange-100 peer-checked:text-secondary-content -mt-[5px]"> 
                <p>{hub?.address}</p>
            </div>
        </div>
    );
};

export default HubInDhaka;