import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon,VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import {db} from "../firebase";
import "firebase/storage"
import {addDoc,setDoc,collection,serverTimestamp,doc} from "firebase/firestore";
import {uploadString,getDownloadURL,ref ,getStorage} from "firebase/storage";


function InputBox() {    
    const {data:session} = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost,setImageToPost] = useState(null)

    const sendPost = async (e) =>{
        e.preventDefault();

        if(!inputRef.current.value) return;

        
        await addDoc(collection(db,'posts'),({
            message:inputRef.current.value,
            name:session.user.name,
            email:session.user.email,
            image:session.user.image,
            timestamp:serverTimestamp() | null
        })).then(docum => {
            if(imageToPost) {
                const storage = getStorage();
                const storageRef = ref(storage, `posts/${docum.id}`);
                uploadString(storageRef, imageToPost, 'data_url').then(snapshot => {
                  getDownloadURL(snapshot.ref).then(URL => {
                    setDoc(
                      doc(db, 'posts', docum.id),
                      { postImage: URL },
                      { merge: true }
                    );
                    console.log('File available at ', URL);
                  });
                  removeImage();
                });
            }
        });
        inputRef.current.value = "";
    }

    const  addImageToPost = (e) =>{
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) =>{
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () =>{
        setImageToPost(null)
    }

    return <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center "> 
            <img
                className="rounded-full "
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
            />
            <form className="flex flex-1"> 
                <input
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text"
                    ref={inputRef}
                    placeholder={`What on your mind, ${session.user.name }?`} 
                />
                <button hidden type="submit" onClick={sendPost}>Subit</button>
            </form>

            {imageToPost &&
                <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 
                    hover:scale-105 cursor-pointer
                ">  
                    <img className="h-10 object-contain" src={imageToPost} alt="" />
                    <p className="text-sx text-red-500 text-center">Remove</p>
                </div>
            }
        </div>


        <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500 "/>
                <p className="text-xs sm:tetx-sm xl:text-base">Live Video</p>
            </div>
            <div onClick={()=>filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="h-7 text-green-400"/>
                <p className="text-xs sm:tetx-sm xl:text-base">Video/Photo</p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300 "/>
                <p className="text-xs sm:tetx-sm xl:text-base">Feeling/Activity</p>
            </div>
        </div>
  </div>
}

export default InputBox



