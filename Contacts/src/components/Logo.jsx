function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="m-4 flex max-w-[30rem] flex-grow items-center justify-center gap-2 rounded-xl bg-zinc-50 p-2">
        <img src="./contact_png.png" alt="" className="h-[3rem]" />
        <div className="flex h-[4rem] items-center justify-center bg-zinc-100 text-[2.5rem] font-bold text-blue-900">
          Contact Base
        </div>
      </div>
    </div>
  );
}

export default Logo;
