'use client';

const ButtonCard = ({ texto }: { texto: string }) => {
  return (
    <button className="bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#8d8c8c] transition-colors cursor-pointer">
      {texto}
    </button>
  );
};

export default ButtonCard;