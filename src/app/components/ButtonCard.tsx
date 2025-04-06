'use client';

import { useRouter } from 'next/navigation';

type ButtonCardProps = {
  texto: string;
  href?: string; 
};

const ButtonCard = ({ texto, href }: ButtonCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#8d8c8c] transition-colors cursor-pointer"
    >
      {texto}
    </button>
  );
};

export default ButtonCard;
