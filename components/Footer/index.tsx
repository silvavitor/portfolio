import Image from "next/image";

import github from "@/public/images/icons/github.svg";
import linkedin from "@/public/images/icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="mt-16 h-24 space-x-2 flex items-center justify-center">
      {/* ENG | PT */}
      <a href="https://github.com/silvavitor" target="_blank">
        <Image src={github} alt="GitHub" className="min-w-min" />
      </a>
      <a href="https://www.linkedin.com/in/vitor-fernando-da-silva/" target="_blank">
        <Image src={linkedin} alt="LinkedIn" className="min-w-min" />
      </a>
    </div>
  );
}