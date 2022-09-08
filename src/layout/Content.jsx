import Header from "../components/Content/Header"
import TweetBox from "../components/Content/TweetBox"
import FeedList from "../components/Content/FeedList"

const Content = () => {

  return (
    <div className='bg-green-400 flex-1 border-r border-l border-r-extralg border-l-extralg'>
        <Header />
        <TweetBox />
        <FeedList />
    </div>
  )
}

export default Content