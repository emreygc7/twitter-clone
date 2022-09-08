import { SearchIcon } from '../Icons'

const Search = () => {
  return (
    <div className='flex items-center space-x-2 pl-2 w-80 m-auto bg-x2lightgray rounded-full h-11 mt-1 focus-within:bg-white focus-within:border focus-within:border-blue'>
        <SearchIcon />
        <input type="text" placeholder='Search Twitter' className='bg-transparent w-full h-full rounded-full focus:outline-none ' />
    </div>
  )
}

export default Search