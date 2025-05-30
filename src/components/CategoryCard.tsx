'use client';
import Link from 'next/link';

type CategoryProps = {
  imageSrc: string;
  name: string;
  href: string;
};

export default function Category({ imageSrc, name, href }: CategoryProps) {
  return (
    <Link className="flex flex-col items-center text-center bg-white " href={href}>
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-28 md:h-48 object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-105"
      />
      <p className="text-[16px] text-tertiary">{name}</p>
    </Link>
  );
}
