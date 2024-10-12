import {titleMenu} from '../constants/index'

const TitleBar = () => {

  return (
    <div className="flex justify-between items-center min-h-14 flex-1 px-10 backdrop-blur-3xl bg-[rgba(25,255,255,0.1)]" >
      <div>
        <h1 className="text-2xl" >Weather</h1>
      </div>
      <div className='flex gap-3'>
        {titleMenu.map((icon, index) => (
          <div className='w-7' key={index} >
            <a href={icon.href}><img src={icon.imgurl} width={22} height={22} /></a>
          </div>
        ))}
        <div><p>UserName</p></div>
      </div>
    </div>
  )
}

export default TitleBar;
