import { useEffect } from 'react'
import db from '../../config/firebase'
import { collection, getDocs, orderBy, query} from "firebase/firestore";
import { useTweet } from '../../context/TweetContext';
import { Dots, LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../Icons';

const FeedList = () => {
    
    const {feedData, callFeed, setFeedData} = useTweet()

    const getFeedData = async () => {
        const colRef = collection(db, "feed")
        const q = query(colRef, orderBy("timestamp", "desc"))
        const snapshots = await getDocs(q, colRef)
        const docs = snapshots.docs.map(doc => doc.data())
        setFeedData(docs)
     }

    useEffect(() => {
        getFeedData()
    },[callFeed])
    
  return (
        <div className=' flex flex-col mt-2'>
            {
                feedData?.map(t => (
                    <div className='flex gap-2 w-full h-min border-b border-b-extralg pt-2 pb-3 hover:bg-x2lightgray transition-all cursor-pointer' key={t.timestamp.seconds}>
                        <div>
                            <img src={t.profilePicture} alt="" className='w-12 h-12 rounded-full ml-4'/>
                        </div>
                        <div className=' w-full flex flex-col gap-2 pl-3 pr-3 break-all '>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <a href='https://twitter.com/emreygc77' target="_blank" className='font-bold hover:underline'>{t.displayName}</a>
                                    <span className='opacity-70'>{t.username}</span>
                                    <span className='opacity-70'>{t.timestamp.toDate().toLocaleTimeString('tr-TR')}</span>
                                </div>
                                <div className='w-8 h-8 hover:bg-extralg cursor-pointer flex items-center justify-center rounded-full'>
                                    <Dots />
                                </div>
                            </div>
                            <span className='-mt-4'>{t.tweet}</span>
                            {t.tweetImage !== "noimg" ? (
                                    <img src={t.tweetImage} alt="" className='rounded-xl shadow-md' />
                                ): null }
                            <div className='flex  w-11/12 justify-between pr-10'>
                                <div className='w-8 h-8 fill-darkgray hover:bg-extralg hover:fill-blue flex justify-center items-center rounded-full cursor-pointer'>
                                    <ReplyIcon />
                                </div>
                                <div className='w-8 h-8 fill-darkgray hover:bg-extralg hover:fill-green flex justify-center items-center rounded-full cursor-pointer'>
                                    <RetweetIcon />
                                </div>
                                <div className='w-8 h-8 fill-darkgray hover:bg-extralg hover:fill-pink flex justify-center items-center rounded-full cursor-pointer'>
                                    <LikeIcon />
                                </div>
                                <div className='w-8 h-8 fill-darkgray hover:bg-extralg hover:fill-blue flex justify-center items-center rounded-full cursor-pointer'>
                                    <ShareIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default FeedList

