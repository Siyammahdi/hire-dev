import Image from 'next/image';
import React from 'react';
import Logo1 from "@/public/clients/logo1.png"
import Logo2 from "@/public/clients/logo2.png"
import Logo3 from "@/public/clients/logo3.png"
import Logo4 from "@/public/clients/logo4.png"
import Logo5 from "@/public/clients/logo5.png"

const Clients = () => {
    return (
        <div className='flex items-center w-2/5 gap-10 m-10'>
            <div>
                <Image src={Logo1} alt="logo1" height={100} width={100} />
            </div>
            <div>
                <Image src={Logo2} alt="logo2" height={100} width={100} />
            </div>
            <div>
                <Image src={Logo3} alt="logo3" height={100} width={100} />
            </div>
            <div>
                <Image src={Logo4} alt="logo4" height={100} width={100} />
            </div>
            <div>
                <Image src={Logo5} alt="logo5" height={100} width={100} />
            </div>
        </div>
    );
};

export default Clients;