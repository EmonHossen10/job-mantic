import React from 'react';
import img from "@/public/aiResumeBuilder.png";
import Image from 'next/image';

const AiResumeBuilder = () => {
    return (
        <div className='flex items-center justify-center  my-5'>
            <Image src={img} alt="AI Resume Builder" />
        </div>
    );
};

export default AiResumeBuilder;