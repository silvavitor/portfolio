import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ButtonProps = {
  small?: Boolean
  icon?: StaticImport | string
  children: string
  submit?: boolean
}

export default function Button({ small = false, icon = '', children, submit = false }: ButtonProps) {
  const hasIcon = icon !== '';
  return (
    <button className={`group bg-neutral-100 text-black border border-black font-bold rounded-md drop-shadow-md hover:drop-shadow-xl hover:bg-black hover:text-neutral-100 transition duration-200 
      ${small
        ? 'px-4 py-2 text-xs'
        : 'px-6 py-2 md:px-8 md:py-3 '}`}
      type={submit ? 'submit' : 'button'}
    >
      <div className="flex items-center justify-center ">
        {hasIcon && (<Image src={icon} alt="icon" height={18} className="mr-1 group-hover:invert" />)}
        {children}
      </div>
    </button>
  );
}