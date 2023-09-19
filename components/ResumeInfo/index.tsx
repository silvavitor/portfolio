interface ResumeInfoProps {
  title: string;
  local: string;
  date: string;
}

export default function ResumeInfo({ title, local, date }: ResumeInfoProps) {
  return (
    <>
      <span className="font-bold mt-6">{title}</span>
      <span className="text-sm">{local}</span>
      <span className="text-sm text-neutral-400">{date}</span>
    </>
  );
}