import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { FaGreaterThan } from 'react-icons/fa6'
import { MdMore, MdTextIncrease } from 'react-icons/md'


function Movie(
    //    gitgit 
    {
        image, name, languages, genres, description, country, id,

    }
) {

    const [languagesStatus, setlanguagesStatus] = useState(false)
    return (


        <div className='text-orange-400  movie-card rounded w-[16rem] min-h-[19rem] sm:w-[15rem] sm:min-h-[19rem]  grid grid-cols-1  place-items-center border-[1px] border-orange-400 '>
            <img src={image} alt=" " className='mt-2 w-[15rem] h-[14rem] sm:w-[13rem] sm:h-[13] rounded' />
            <p>{name}</p>
            <div className="languages flex text-orange-400  text-[0.55rem] font-thin"> <p>{languages[0]}|</p>
                {

                    <div style={{ display: languagesStatus ? 'flex' : "none" }} className='flex flex-row justify-around mr-[2px]  overflow-x-hidden'>{
                        languages.slice(1, languages.length < 6 ? languages.length + 1 : 6).map((language, n) => (<p key={n} className='mr-[2px]'>{language}|</p>))
                    }</div>}

                <button onClick={() => { setlanguagesStatus((prv) => (!prv)) }}>  <BiShow /></button>


            </div>

            <p className=' text-[0.7rem]'>
                {genres.map((genre, n) => (<span> {genre}</span>))}
            </p>
            <button className=' h-[2.5rem] w-[8rem] rounded bg-orange-400 text-white mb-2'>
                watch now
            </button>
        </div>
    )
}

export default Movie