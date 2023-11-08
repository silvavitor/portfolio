import Image from "next/image";

type ThumbProps = {
  selected: boolean
  imgSrc: string
  onClick: () => void
};

export default function Thumb({ selected, imgSrc, onClick }: ThumbProps) {
  return (
    <div
      className={`flex-0-33 min-w-0 pl-3 relative ${selected ? 'opacity-100' : 'opacity-60'}`}
    >
      <button
        onClick={onClick}
        className={`
          appearance-none 
          bg-transparent 
          touch-manipulation 
          no-underline 
          cursor-pointer
          border-0
          p-0
          m-0
          w-full
          transition
          ${selected ? 'opacity-100' : 'opacity-60'}`}
        type="button"
      >
        <Image
          className="block w-100 object-cover"
          height={175}
          width={175}
          src={`/images/${imgSrc}`}
          alt="Your alt text" />
      </button>
    </div>
  );
}