import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  LocationIcon,
  PollIcon,
  RemoveIcon,
  ScheduleIcon,
} from "../Icons";
import NewTweet from "./NewTweet";
import { useTweet } from "../../context/TweetContext";

const TweetBox = () => {
    const {text, setText, setPostImage, imagePreview ,setImagePreview } = useTweet()

    const changeText = (e) => {
        setText(e.target.value)
    }

    const changeImage = (e) => { 
        setPostImage(e.target.files[0])
        const preview = URL.createObjectURL(e.target.files[0])
        setImagePreview(preview)
    }

    const removeImage = () => {
        setImagePreview("")
        setPostImage("")
    }

  return (
    <div className="border-b border-b-extralg">
      <div className="flex flex-col mt-3">
        <div className="flex ">
          <img src="https://pbs.twimg.com/profile_images/1550167610024656901/P85nB_E2_400x400.jpg" alt="" className="w-12 h-12 rounded-full ml-4" />
          <textarea name="" id="" cols="8" rows="8" placeholder="What's happening?" className="w-full h-14 overflow-hidden outline-none resize-none pl-4 placeholder:text-xl" maxLength={200} onChange={changeText} value={text}></textarea>
        </div>
          {
            imagePreview && 
            <div className="flex items-center relative">
              <div className="w-8 h-8 ml-20 mt-2  bg-black/90 hover:bg-black/70 flex justify-center items-center rounded-full self-start cursor-pointer absolute" onClick={removeImage}>
                <RemoveIcon />
              </div>
              <div className="flex justify-center w-full">
                <img src={imagePreview} alt="" className="w-4/5 h-auto rounded-xl " />
              </div>
            </div>
          }
        <div className="flex justify-between ml-16  h-12 items-center  ">
          <div className="flex">
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer ">
                <label htmlFor="file" className="cursor-pointer">
                    <ImageIcon />
                </label>
                <input type="file" name="" id="file" className="hidden" accept="image/gif,image/jpeg,image/jpg,image/png" onChange={changeImage} />
            </div>
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer">
                <GifIcon />
            </div>
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer">
                <PollIcon />
            </div>
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer">
                <EmojiIcon />
            </div>
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer">
                <ScheduleIcon />
            </div>
            <div className="w-9 h-9 hover:bg-x2lightgray flex items-center justify-center rounded-full cursor-pointer">
                <LocationIcon />
            </div>
          </div>
          <NewTweet />
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
