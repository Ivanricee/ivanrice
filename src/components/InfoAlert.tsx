/*import pkg from "react-icons/hi";
const { HiInformationCircle } = pkg;*/
import { Alert } from "flowbite-react";

export default function InfoAlert({ caption }: { caption: string }) {
  return (
    <div className="h-full w.full flex justify-center items-center opacity-70">
      <Alert color="info">
        <span className="font-semibold text-xl">Info alert!</span>
        <p className="text-lg caption">{caption}</p>
      </Alert>
    </div>
  );
}
