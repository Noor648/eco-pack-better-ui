type CategoryProps = {
  imageSrc: string;
  name: string;
};

export default function Category({ imageSrc, name }: CategoryProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white ">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-105"
      />
      <p className="text-[16px] text-gray-600">{name}</p>
    </div>
  );
}
