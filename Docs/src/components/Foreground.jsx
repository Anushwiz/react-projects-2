import Card from "./Card";
import { useRef } from "react";
function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: true,
      bottomBar: {
        isShow: true,
        barTitle: "Download later",
        barColor: "blue",
      },
    },
    {
      id: 3,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: false,
        barTitle: "Download Nlater",
        barColor: "blue",
      },
    },
    {
      id: 4,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: true,
      bottomBar: {
        isShow: true,
        barTitle: "Download later",
        barColor: "blue",
      },
    },
    {
      id: 3,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: false,
        barTitle: "Download Nlater",
        barColor: "blue",
      },
    },
    {
      id: 4,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: true,
      bottomBar: {
        isShow: true,
        barTitle: "Download later",
        barColor: "blue",
      },
    },
    {
      id: 3,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: false,
        barTitle: "Download Nlater",
        barColor: "blue",
      },
    },
    {
      id: 4,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
    {
      id: 5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione.",
      fileSize: "1.0mb",
      close: false,
      bottomBar: {
        isShow: true,
        barTitle: "Download Now",
        barColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full p-8 flex gap-8 flex-wrap"
    >
      {data.map((item, index) => (
        <Card item={item} key={item.id} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
