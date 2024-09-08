import Content from "../components/Content"
import TitleBar from "../components/TitleBar"

const Main = () => {
  return (
    <div className="flex flex-col">
      <TitleBar/>
      <Content />
    </div>
  )
}

export default Main
