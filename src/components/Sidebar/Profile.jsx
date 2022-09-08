import { Dots } from '../Icons'

const Profile = () => {
  return (
    <div className='mt-auto h-16 flex items-center justify-start p-2 gap-3 rounded-full mb-2 cursor-pointer hover:bg-extralg transition-all '>
        <img src="https://pbs.twimg.com/profile_images/1550167610024656901/P85nB_E2_400x400.jpg" alt="" className='w-10 h-10 rounded-full' />
        <div className='flex flex-col'>
            <span>Emre Yağcı</span>
            <span className='opacity-50'>@emreygc77</span>
        </div>
        <div className='ml-auto pr-1'>
          <Dots />
        </div>
    </div>
  )
}

export default Profile