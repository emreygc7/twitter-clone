import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../config/firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useTweet } from '../../context/TweetContext'


const NewTweet = () => {

    const {text, setText, postImage, setPostImage, setImagePreview, callFeed, setCallFeed} = useTweet()
 
    let downloadURL = "noimg"; 

    const sendTweet = async () => { 
        try{
            if(postImage !== ""){
                const storage = getStorage();
                const metadata = {
                contentType: 'image/jpeg'
                };
                const storageRef = ref(storage, 'images/' + postImage.name);
                const uploadTask = await uploadBytesResumable(storageRef, postImage, metadata);
                downloadURL =  await getDownloadURL(uploadTask.metadata.ref)
                setPostImage("")
                }

            const doc = await addDoc(collection(db, "feed"), {
                profilePicture: "https://pbs.twimg.com/profile_images/1550167610024656901/P85nB_E2_400x400.jpg",
                displayName: "Emre Yağcı",
                username: "@emreygc77",
                tweet: text,
                timestamp: serverTimestamp(),
                tweetImage: downloadURL !== "noimg" ? downloadURL : "noimg"
            })
            setText("")
            downloadURL = "noimg";   
            setImagePreview("")
            setCallFeed(!callFeed)
        }catch(e){
            console.error(e)
        }
      }
  return (
    <button disabled={text === "" && postImage === "" } className={`w-20 h-9 rounded-full text-white mr-4 font-bold ${text === "" && postImage === "" ? "bg-blue/70" : "bg-blue"} `} onClick={sendTweet}>Tweet</button>
  )
}

export default NewTweet