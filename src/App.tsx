import CommentsSection from "./components/CommentsSection"
import DummyVideo from "./components/DummyVideo"

function App() {
  const videoSrc =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  return (
    <>
      <DummyVideo src={videoSrc} />
      <CommentsSection />
    </>
  )
}

export default App
