type ButtonProps = {
  dark?: Boolean,
  children: any
}

export default function Button({ dark = false, children }: ButtonProps) {
  return (
    <button className={`px-8 py-3 font-bold rounded-md drop-shadow-md hover:drop-shadow-xl hover:opacity-80 hover:scale-[1.02] transition duration-300 
      ${dark
        ? 'bg-black text-neutral-100'
        : 'bg-neutral-100 text-black border border-black'}`}
    >
      {children}
    </button>
  );
}