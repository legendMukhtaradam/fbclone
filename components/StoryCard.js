import Image from "next/image"
function StoryCard({name,src,profile}) {
  return (
    <div className="reletive h-14 w-14 md:h-20 md:w-20
        lg:h-56 lg:w-32  cursor-pointer overflow-x p-3 transition duration-200 
        transform ease-in hover:scale-105 hover:animation-pulse ">
        <Image
            className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-100" 
            loader={()=>src} src={profile}
            width={50}
            height={50}
            layout="fixed"
            objectFit="cover"
        />
        <Image
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl "
            loader={()=>src} src={src}
            layout="fill"
        />
    </div>
  )
}
{/* <Image loader={() => src} src={src} width={30} height={30} layout="fixed"/> */}


export default StoryCard
