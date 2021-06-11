import React from 'react';
import Beginners from'./../../assets/beginners.jpg'
import Corporate from'./../../assets/corporate.jpg'
import Meditation from'./../../assets/meditation.jpg'
const Card = ({...otherProps}) => {
    return (
        <div className="flex flex-row flex-wrap py-14 justify-center">
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <div className="bg-white">
                <div>
                    <img src={Meditation} alt=""  className="w-full"/>
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                            Meditation
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Class Time 6am-8pm
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5" >
                <div className="bg-white">
                <div>
                    <img src={Beginners} alt="" className="w-full" />
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none"> 
                            <span className="font-bold text-base">
                                Yoga For Beginners
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Class Time 12pm-4pm
                            </span >
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5" >
            <div className="bg-white">
            <div>
                    <img src={Corporate} alt=""  className="w-full"/>
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Corporate Yoga
                            </span>
                        </li>
                        <li className="list-none" >
                            <span className="font-bold text-base">
                                Class Time 6am-8pm
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Card;