import React from 'react'
import { CDN_URL } from '../utils/constants';

const Mindcards = (data) => {
    console.log(data?.data);
    // const {mindData} = cards;
    // console.log(mindData);
    // const{
    //     id,
    //     imageId,
    // } = mindData;
  return (
    <div className=' items-center'>
        <img
                className="rounded-3xl bg-transparent size-32 m-3 cursor-pointer"
                alt="res-logo"
                src={CDN_URL + data?.data}
              />
              {/* <h4>{data}</h4> */}
    </div>
  );
};

export default Mindcards;