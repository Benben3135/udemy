import React, { FC, useState } from 'react';
import {termsCategories} from "../../util/categories"

interface TermsNavBarProps {
    sendHref: (href: string) => void;
}

const TermsNavBar: FC<TermsNavBarProps> = ({ sendHref }) => {
    const [active, setActive] = useState<number | null>(0);

    const handleClick = (index: number, href: string) => {
        setActive(index);
        sendHref(href); // Assuming you want to send the href when a category is clicked
    };

    return (
        <div className='h-screen w-[16.7rem] border-r sticky'>
            <div className='gap-2 flex flex-col justify-center items-start mt-8'>
                {termsCategories.map((cat, index) => (
                    <div
                        onClick={() => handleClick(index, cat.href)} // Assuming each category object has a href property
                        key={index}
                        className={index === active ? 'w-full h-10 font-bold bg-black flex flex-col items-start justify-center p-4 text-white cursor-pointer' : 'cursor-pointer w-full h-10 font-bold flex flex-col items-start justify-center p-4 text-Udemygray-300'}
                    >
                        {cat.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TermsNavBar
