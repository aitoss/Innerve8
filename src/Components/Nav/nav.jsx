import React from 'react';

const Nav = () => {

    const [nav, setNav] = React.useState(false);

    const toggleNav = () => {
        let preNav = nav;
        setNav(!preNav);
    }

    return (
        <> 
            {nav && (<div div className="navigtor bg-black h-screen w-screen">
                {/* // code for hiden navigator goes here */}
            </div>)}
            <div className="flex justify-center">
                <div className="w-screen max-w-[1540px] px-14 py-8 flex flex-row justify-between nav-inner">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="40" viewBox="0 0 19 40" fill="none">
                            <path d="M5.57422 0.655886V13.2C5.60196 13.5323 5.89044 14.0972 6.82248 13.6984C7.75451 13.2997 14.2566 9.37859 17.3911 7.4679C17.7239 7.30176 18.19 6.85316 17.3911 6.38795C16.5922 5.92274 9.84604 2.04044 6.57283 0.157446C6.23996 -0.0363921 5.57422 -0.208077 5.57422 0.655886Z" fill="#212121" />
                            <path d="M18.5728 26.7107C18.5728 28.5683 17.883 31.5379 17.2727 32.2578C14.3927 36.8714 9.16352 38.9672 7.48717 39.6391C7.3237 39.7046 7.194 39.7565 7.10356 39.796C6.03715 40.2612 5.68168 39.8237 5.59281 39.5468L5.57425 25.3699L0.514625 22.3908C-0.417411 21.9921 0.126277 21.5047 0.514625 21.3109C5.81281 18.1818 16.6089 11.824 17.4078 11.4252C18.2067 11.0265 18.5173 11.7021 18.5728 12.0898V26.7107Z" fill="#212121" />
                        </svg>
                        <h1 className="text-[#212121] text-4xl font-[400]">Innerve</h1>
                    </div>
                    <div className="btn flex items-center justify-center gap-3 border border-[#212121] rounded-full px-4 py-2 cursor-pointer" onClick={toggleNav}>
                        <h3 className="text-[#212121] text-xl font-[400]">Menu</h3>
                        <div className="w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full hover:rotate-45">↗</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
