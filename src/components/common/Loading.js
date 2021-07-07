import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
  let [loading] = useState(true);
  let [color] = useState("#ffffff");
  return (
    <div className="h-screen flex justify-center items-center">
      <BeatLoader color={color} loading={loading} size={20} />
    </div>
  )
}

export default Loading