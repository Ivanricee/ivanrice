import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";

interface Props {
  items: { src: string; text: string }[];
}

export default function BadgeItems({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-2 caption opacity-70">
      {items.map((item) => {
        return (
          <div key={item.src} className="flex flex-wrap gap-2">
            <Badge color="dark">
              <div className="flex gap-2">
                <img src={item.src} width={18} className="object-contain" />
                <span className="text-base capitalize font-normal">
                  {item.text}
                </span>
              </div>
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
