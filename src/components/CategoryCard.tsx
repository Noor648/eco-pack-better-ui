'use client';
import { useRouter } from 'next/navigation';

type CategoryProps = {
  imageSrc: string;
  name: string;
  href: string;
};

export default function Category({ imageSrc, name, href }: CategoryProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center bg-white " onClick={() => router.push(href)}>
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-105"
      />
      <p className="text-[16px] text-gray-600">{name}</p>
    </div>
  );
}
