import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
   
    return (
        <div className='p-6 bg-[#FFFFFF] border border-[#E8EAED] shadow-sm rounded-[20px] hover:bg-[#f0f7ff] hover:border-primary transition-all duration-500 text-center md:text-left'>
            <Image
            src={service?.icon}
            alt='services-icon'
            width={56}
            height={56}
            className='mx-auto md:mx-0'
            />
            <h2 className='text-text-primary mt-6 mb-3 text-xl md:text-2xl font-semibold'>{service.title}</h2>
            <p className=' text-sm md:text-[16px] text-[#65758B] font-regular'>{service.description}</p>
        </div>
    );
};

export default ServicesCard;