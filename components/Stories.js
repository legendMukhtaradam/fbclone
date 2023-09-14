import StoryCard from "./StoryCard"
const stories =[
    {
        name:"Mukhtar",
        src:"https://i.ibb.co/WnzTXFh/IMG-9334.jpg",
        profile: "https://i.ibb.co/WnzTXFh/IMG-9334.jpg"
    },
    {
        name:"Lagend",
        src:"https://i.ibb.co/8Xn1CnZ/IMG-20220505-091650.jpg",
        profile: "https://i.ibb.co/8Xn1CnZ/IMG-20220505-091650.jpg"
    },
    {
        name:"Daga",
        src:"https://i.ibb.co/58016NX/IMG-20220513-145105.jpg",
        profile: "https://i.ibb.co/58016NX/IMG-20220513-145105.jpg"
    },
    {
        name:"KB Gombe",
        src:"https://i.ibb.co/9y5M4bs/IMG-20221210-121309-235.jpg",
        profile: "https://i.ibb.co/9y5M4bs/IMG-20221210-121309-235.jpg"
    },
    {
        name:"See Me",
        src:"https://i.ibb.co/mBtd556/IMG-20210702-181101-446-2.jpg",
        profile: "https://i.ibb.co/XCz6xTd/IMG-20221210-121237-503.jpg"
    },

]
function Stories() {
  return <div className="flex justify-center space-x-3 mx-auto">
    {stories.map((story) =>(
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
    ))}

  </div>
}

export default Stories
