function Background() {
  return (
    <div className="fixed w-screen h-full z-[2]">
      <div className="absolute top-[5%] text-zinc-500 w-full py-10 flex justify-center text-xl font-semibold">
        Document
      </div>
      <h1 className="absolute text-[13vw] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] leading-none tracking-tighter font-semibold text-yellow-500">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
