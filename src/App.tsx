import { useState } from "react"
import CommentsSection from "./components/CommentsSection"
import DummyVideo from "./components/DummyVideo"

function App() {
  const videoSrc =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  const [enableVirtualizer, setEnableVirtualizer] = useState(true)
  return (
    <>
      <DummyVideo src={videoSrc} />
      <button
        type="button"
        onClick={() => setEnableVirtualizer((prev) => !prev)}
      >
        Toggle
      </button>
      <CommentsSection enableVirtualizer={enableVirtualizer} />
    </>
  )
}

export default App
