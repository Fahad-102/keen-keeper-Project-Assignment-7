import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-950 text-white w-full h-1/2'>
            <div className='p-10 text-center space-y-4 pt-20'>
                <img className='w-100 h-auto mx-auto' src="/src/assets/images/logo-xl.png" alt="" />
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most. </p>
            </div>
            <div className='text-center '>
                <h4 className='mb-4'>Social Links</h4>
                <ul className='flex justify-center items-center gap-5 pb-20 '>
                    <li><img src="/src/assets/images/instagram.png" alt="" /></li>
                    <li><img src="/src/assets/images/facebook.png" alt="" /></li>
                    <li><img src="/src/assets/images/twitter.png" alt="" /></li>
                </ul>
            </div>
            <div className='flex justify-between items-end px-25 pb-2'>
                <div><h2>© 2026 KeenKeeper. All rights reserved.</h2></div>
                <div>
                    <ul className='flex gap-5'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li> Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;