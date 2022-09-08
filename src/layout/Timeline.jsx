import Search from '../components/Timeline/Search'
import Trends from '../components/Timeline/Trends'
import Suggestions from '../components/Timeline/Suggestions'
import Footer from '../components/Timeline/Footer'

const Timeline = () => {
  return (
    <div className='w-87 h-screen sticky top-0'>
        <Search />
        <Trends />
        <Suggestions />
        <Footer />
    </div>
  )
}

export default Timeline