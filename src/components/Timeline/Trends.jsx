import React from 'react'
import { Dots } from '../Icons'

const Trends = () => {
    const trends = [{
        category: "Politics", 
        title: "#kılıçdaroğluadayolmasın",
        tweets: "6,802"
    },{
        category: "Sports", 
        title: "#GSvGFK",
        tweets: "5,843"
    },{
        category: "Entertainment", 
        title: "Mesut",
        tweets: "8,952"
    },{
        category: "Entertainment", 
        title: "Cem Yılmaz",
        tweets: "9,824"
    }]
    
  return (
    <div className='w-80 h-min m-auto bg-x2lightgray rounded-xl mt-4 '>
        <h2 className='font-bold text-xl p-4'>Trends for you</h2>
        {
            trends.map(({category, title, tweets}) => (
                <React.Fragment key={title}>
                   
                   <div className='h-20 hover:bg-extralg flex pl-4 pr-4 cursor-pointer transition-all'>
                        <div className='flex flex-col '>
                            <span className='opacity-50 text-sm'>{category}, Trending</span>
                            <span className='font-bold'>{title}</span>
                            <span className='opacity-50 text-sm'>{tweets} Tweets</span>
                        </div>
                        <div className='w-8 h-8 hover:bg-lightgray/40 flex justify-center items-center cursor-pointer rounded-full ml-auto'>
                            <Dots />
                        </div>
                    </div>
                    
                </React.Fragment>
            ))
        }
        <a href='#' className='h-12 flex items-center rounded-br-xl rounded-bl-xl pl-4 pr-4 cursor-pointer text-blue hover:bg-extralg'>Show More</a>
    </div>
  )
}

export default Trends

