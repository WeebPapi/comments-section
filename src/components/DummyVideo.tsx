import React from "react"
import { DummyVideoProps } from "../interfaces/componentInterfaces"

const DummyVideo: React.FC<DummyVideoProps> = ({ src }) => {
  return (
    <div className="flex justify-center sm:p-8 p-10 border-b-2 border-b-neutral-100">
      <video className="sm:w-[720px] w-[340px]" src={src} controls></video>
    </div>
  )
}

export default DummyVideo
