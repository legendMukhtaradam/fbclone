import {ChatAltIcon,ShareIcon,ThumbUpIcon } from "@heroicons/react/outline"
function Post({name,message,email,postImage,image,timestamp}) {

  return (
    <div  className="flex flex-col ">

      <div className="p-10 bg-white mt-10 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
                <img className="rounded-full" src={image} width={40} height={40} alt="" />
                <div>
                  <p className="font-medium">{name}</p>

                  {timestamp ? (
                    <p className="text-sx text-gray-400">
                      {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                  ):(
                    <p className="text-xs text-gray-400">Loading...</p>
                  )}
                </div>
            </div>

            <p className="pt-4">{message}</p>
      </div>



      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
            <img src={postImage} style={{ objectFit: 'cover', width: '100%', height: '100%', layout:'fill' }} alt='' />

        </div>
      )}
        {/* Footer for Post */}
        <div className="flex justify-between items-center rounded-t-2xl bg-white shadow-md text-gray-400 border-t">

            <div className="inputIcon rounded-none rounded-bl-2xl">
                <ThumbUpIcon className="h-4"/>
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none">
                 <ChatAltIcon className="h-4"/>
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none rounded-br-2xl">
                <ShareIcon className="h-4"/>
                <p className="text-xs sm:text-base">Like</p>
            </div>
        </div>
    </div>
  )
}

export default Post
