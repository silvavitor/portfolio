
import Image from "next/image";

import error from "@/public/images/icons/error.svg";

type LabelProps = {
  children: string,
}
export default function FormErrorLabel({ children }: LabelProps) {
  return (
    <div className="mt-1 flex w-full">
      <Image src={error} alt="icon" height={18} />
      <label className="ml-1 text-sm text-red-600">{children}</label>
    </div>
  );
}