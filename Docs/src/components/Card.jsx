/* eslint-disable react/prop-types */
import { FaRegFileLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ item, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[35px] text-zinc-100 p-6 overflow-hidden"
    >
      <FaRegFileLines />
      <p className="mt-4 text-sm leading-tight font-semibold">{item.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between mb-4 px-8">
          <h5>{item.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-100 text-zinc-900 flex items-center justify-center rounded-full">
            {item.close ? <IoClose /> : <IoMdDownload size="1em" />}
          </span>
        </div>
        {item.bottomBar.isShow && (
          <div
            className={`bottomTag w-full ${
              item.bottomBar.barColor === "green"
                ? "bg-green-500"
                : "bg-blue-500"
            } py-5 flex justify-center items-center text-zinc-900`}
          >
            <h3 className="font-semibold">{item.bottomBar.barTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
