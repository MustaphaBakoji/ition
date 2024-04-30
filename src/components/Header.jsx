import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft, BiSearch } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'



import { MdExpandMore } from 'react-icons/md'


function Header({ onSearch, onCategory }) {
    const [isMobile, setisMobile] = useState(true)
    const [menu, setmenu] = useState(false)
    window.addEventListener('resize', () => { setisMobile(window.innerWidth < 590) })
    useEffect(() => {

        setisMobile(window.innerWidth < 580)

    }, [])

    const [NavStatus, setNavStatus] = useState({ language: false, country: false, genre: false })
    let ChangeHandler = (e) => {

        onSearch(e.target.value)
    }
    const uniqueGenres = ["Action", "Adventure", "Fantasy", "Documentary", "Crime"];
    const uniqueCountries = [
        "Australia",
        "Canada",
        "Germany",
        "France",
        "United Kingdom",
        "Ireland",
        "India",
        "Norway",
        "United States"
    ];
    const uniqueLanguages = [
        "Hindi",
        "Malayalam",
        "Kannada",
        "Tamil",
        "English",
        "Japanese",
        "Chinese",
        "Spanish",
        "Korean",
        "Telugu"
    ];

    const [showMenu, setshowMenu] = useState(false)
    return <div>{!isMobile ? <div className='nav-bar w-full min-h-10 mb-2 flex flex-col  text-white justify-around items-center'>
        <div className='flex justify-around w-full'>
            <p>All</p>
            <p>language <button onClick={() => { setNavStatus({ language: true, country: false, genre: false }) }}><MdExpandMore className=' text-center ' /></button> <div className="flex" style={{ display: NavStatus.language ? 'block' : 'none' }}></div></p>
            <p>country <button onClick={() => { setNavStatus({ language: false, country: true, genre: false }) }}><MdExpandMore className=' text-center ' /></button> <div className="flex" style={{ display: NavStatus.country ? 'block' : 'none' }}></div></p>
            <p>genre <button onClick={() => { setNavStatus({ language: false, country: false, genre: true }) }}><MdExpandMore className=' text-center ' /></button><div className="flex" style={{ display: NavStatus.genre ? 'block' : 'none' }}></div></p>

            <div className="input-parent relative"> <input type="text" name="" id="" className=' bg-transparent border-white border-2 rounded' onChange={ChangeHandler} /><BiSearch className=' absolute top-1 right-2' /></div>
        </div>
        <div className=" ml-auto mr-auto flex w-[70%] justify-between font-thin text-sm text-orange-100">
            {NavStatus.language ? uniqueLanguages.map((lang, i) => (<p key={i} onClick={() => { onCategory('languages', lang) }}>{lang}</p>)) :
                NavStatus.genre ? uniqueGenres.map((gnr) => (<p onClick={() => { onCategory('genres', gnr) }}>{gnr}</p>)) :
                    NavStatus.country ? uniqueCountries.map((country, i) => (<p key={i} onClick={() => { onCategory('countries', country) }}>{country}</p>)) : ''}

        </div>
    </div> :
        <div >
            {!showMenu && <button onClick={() => { setshowMenu((prev) => (!prev)) }} className=' absolute right-4 text-orange-400'><BiMenuAltLeft /></button>}
            <div className='nav-bar w-full min-h-10 mb-2 flex  text-white justify-between items-center' style={{ display: !showMenu ? 'none' : 'block' }}>
                <div className="absolute" onClick={() => { setshowMenu((prev) => (!prev)) }}><CgClose /></div>
                <div className='flex  flex-col justify-around' >

                    <p >All</p>
                    <p>language <button onClick={() => { setNavStatus({ language: true, country: false, genre: false }) }}><MdExpandMore className=' text-center ' /></button> <div className="flex" style={{ display: NavStatus.language ? 'block' : 'none' }}></div></p>
                    <p>country <button onClick={() => { setNavStatus({ language: false, country: true, genre: false }) }}><MdExpandMore className=' text-center ' /></button> <div className="flex" style={{ display: NavStatus.country ? 'block' : 'none' }}></div></p>
                    <p>genre <button onClick={() => { setNavStatus({ language: false, country: false, genre: true }) }}><MdExpandMore className=' text-center ' /></button><div className="flex" style={{ display: NavStatus.genre ? 'block' : 'none' }}></div></p>

                    <div className="input-parent relative" > <input type="text" name="" id="" className=' bg-transparent border-white border-2 rounded' onChange={ChangeHandler} /><BiSearch className=' absolute top-1 right-24' /></div>
                </div>
                <div className=" ml-auto mr-auto grid grid-cols-2   font-thin text-sm text-orange-100">
                    {NavStatus.language ? uniqueLanguages.map((lang, i) => (<p key={i} onClick={() => { onCategory('languages', lang) }}>{lang}</p>)) :
                        NavStatus.genre ? uniqueGenres.map((gnr) => (<p onClick={() => { onCategory('genres', gnr) }}>{gnr}</p>)) :
                            NavStatus.country ? uniqueCountries.map((country, i) => (<p key={i} onClick={() => { onCategory('countries', country) }}>{country}</p>)) : ''}

                </div>
            </div>

        </div>

    }
    </div>
}

export default Header