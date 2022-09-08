import { createContext, useContext, useState } from "react";

const tweetContext = createContext() 


const TweetContextProvider = ({ children }) => {

    const [text, setText] = useState("")
    const [postImage, setPostImage] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [callFeed, setCallFeed] = useState(false)
    const [feedData, setFeedData] = useState(null)

    const tweetData = {
        text,
        setText,
        postImage,
        setPostImage,
        imagePreview,
        setImagePreview,
        callFeed,
        setCallFeed,
        feedData, 
        setFeedData
    }

    return(
        <tweetContext.Provider value={tweetData}>
            {children}
        </tweetContext.Provider>
    )
} 

export const useTweet = () => {
    const context = useContext(tweetContext)
    return context; 
}

export default TweetContextProvider