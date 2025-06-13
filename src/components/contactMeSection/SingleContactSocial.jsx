
const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-[#fb9718] text-[#fb9718] rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;