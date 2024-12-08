import Image from "next/image";

export default function Custom404() {
  return (
    <div className="relative h-full w-full p-4">
      <h1 className="invisible">404 - Page Not found</h1>
      <Image
        src="/images/404.svg"
        alt="404 - Page Not found"
        width={613}
        height={487}
        className="absolute left-1/2 top-1/2 !h-[88%] !w-[95%] -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
}
