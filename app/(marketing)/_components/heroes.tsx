import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex felx-col items-center justify-center max-w-5xl">
      <div className="relative w-[300px] h-[300px] sm:w-[350] sm:h-[350px] md:h-[400px] md:w-[400]">
        <Image
          src="/documents.png"
          fill
          alt="Documents"
          className="object-contain"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden md:block">
        <Image
          src="/reading.png"
          fill
          className="object-contain"
          alt="Reading"
        />
      </div>
    </div>
  );
};
