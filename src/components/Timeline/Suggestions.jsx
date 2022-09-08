

const Suggestions = () => {

    const users = [{
        img: "https://pbs.twimg.com/profile_images/1509903834151325697/1Ked07gR_400x400.jpg",
        displayName: "JavaScript",
        username: "@JavaScript"
    },{
        img: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
        displayName: "React",
        username: "@reactjs"
    },{
        img: "https://pbs.twimg.com/profile_images/1517183744636964875/_475wi5p_400x400.jpg",
        displayName: "Firebase",
        username: "@Firebase"
    }]

  return (
    <div className='w-80 h-min m-auto bg-x2lightgray rounded-xl mt-4 '>
        <h2 className='font-bold text-xl p-4'>Who to follow</h2>
    
         {
            users.map(({img, displayName, username})=>(

            <div key={username} className='flex h-20 pl-4 pr-4 hover:bg-extralg transition-all items-center gap-3 text-sm cursor-pointer'>
                <img src={img} alt="pp" className='w-12 h-12 rounded-full' />
                <div className='flex flex-col text-base '>
                    <a href='#' className='font-bold hover:underline'>{displayName}</a>
                    <span className='opacity-50'>{username}</span>
                </div>
                <button className='bg-black text-white rounded-full w-20 font-bold h-8 ml-auto hover:bg-hoverBlack transition-all'>Follow</button>
            </div>
            ))
         }
       
        <a href='#' className='h-12 flex items-center rounded-br-xl rounded-bl-xl pl-4 pr-4 cursor-pointer text-blue hover:bg-extralg'>Show More</a>
    </div>
  )
}

export default Suggestions

