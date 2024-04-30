import React, { useEffect, useState } from 'react'
import { data } from './Full_data'
import Movie from './Movie';
import Header from './Header';


function MoviesBody() {
    const [currentData, setcurrentData] = useState(data)
    useEffect(() => {


    }, [currentData])
    let SearchHAndler = (input) => {
        setcurrentData(currentData.filter((data) => (data.movietitle.toLocaleLowerCase().includes(input))))
    }
    let CategoryHandler = (category, categorytype) => {
        setcurrentData(data.filter((data) => (category == 'genres' ? data.moviegenres.includes(categorytype) : category == 'countries' ? data.moviecountries.includes(categorytype) : category == 'languages' ? data.movielanguages.includes(categorytype) : '')))



    }
    return (
        <>
            <Header onSearch={SearchHAndler} onCategory={CategoryHandler} />
            <div className=' grid grid-cols-1 sm:grid-cols-4  place-items-center gap-3'>

                {
                    currentData.map((movie) => (<Movie image={movie.moviemainphotos} name={movie.movietitle} languages={movie.movielanguages} genres={movie.moviegenres} key={movie.imdbmovieid} />))
                }



            </div>
        </>
    )
}

export default MoviesBody