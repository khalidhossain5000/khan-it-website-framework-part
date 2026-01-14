import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
    console.log(service,'this is service data')
    return (
        <div className='p-6 bg-[#FFFFFF] border border-[#E8EAED] shadow-sm rounded-[20px] hover:bg-[#f0f7ff] hover:border-primary transition-all duration-500'>
            <Image
            src={service?.icon}
            alt='services-icon'
            width={56}
            height={56}
            />
            <h2 className='mt-6 mb-3 text-xl md:text-2xl font-semibold'>{service.title}</h2>
            <p className='text-[16px] text-[#65758B] font-regular'>{service.description}</p>
        </div>
    );
};

export default ServicesCard;