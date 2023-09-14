import Image from "next/image";

function SidebarRow({src,Icon,title}) {

  return (
        <div className="flex items-center space-x-s p-4 hover:bg-gray-300 rounded-xl cursor-pointer">
            {src && (
                <Image loader={() => src} src={src} width={30} height={30} layout="fixed"/>
            )}
            {Icon && <Icon className="h-8 w-8 text-blue-500"/>}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
  )
}

export default SidebarRow
