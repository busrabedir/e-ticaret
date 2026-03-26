import { MdReportGmailerrorred } from "react-icons/md";

const Error = () => {
  return (
    <div className="my-20 lg:my-30">
      <div className="flex flex-col gap-5 items-center justify-center">
        <MdReportGmailerrorred size={32} />
        <h1 className="text-2xl font-bold text-red-500">
          Üzgünüz bir sorun oluştu
        </h1>
      </div>
    </div>
  );
};

export default Error;
