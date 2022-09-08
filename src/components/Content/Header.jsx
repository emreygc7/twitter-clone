import { TopTweetsIcon } from '../Icons'

const Header = () => {
  return (
    <header className=' flex justify-between items-center h-14 sticky top-0 pl-4 pr-4 backdrop-blur-3xl bg-white/70 z-10'>
        <a href="#top" className='font-bold text-xl'>Home</a>
        <div className='w-8 h-8 hover:bg-extralg cursor-pointer flex justify-center items-center rounded-full'>
          <TopTweetsIcon />
        </div>
    </header>
  )
}

export default Header