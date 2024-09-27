import { navMenu } from "../constants"

const Nav = () => {
  return (
    <div className="flex flex-col justify-center h-lvh p-14 py-28 pr-28 backdrop-blur-md bg-[rgba(25,255,255,0.1)] border-x-2 border-[rgba(255,255,255,0.18)]" >
        <ul className="">
            {navMenu.map((link, index) => (
                <li className=" text-xl flex py-14 selection:justify-center items-center " key={index}>
                    <a href="#home" className="flex gap-3 ">
                        <img 
                            src={link.imgurl}
                            alt="icon"
                            width={24}
                            height={24}
                        />
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Nav
