function Card() {
  return (
    <div className="absolute left-[882px] top-[122px] 
                   w-[393px] h-[91px]
                   text-[64px] leading-[77px]
                   font-extrabold italic
                   text-[rgba(30,144,4,0.61)]
                   border border-[#E0F2DD]
                   shadow-[12px_3px_5px_rgba(172,80,49,0.25)]">
      {title}
    </div>
  );
}

export default Card;