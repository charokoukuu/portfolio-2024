interface Props {
  children?: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return (
    <div className="m-auto flex justify-center py-[3%]">
      <div className="flex h-[67px] w-[98%] items-center justify-center bg-[#006C84] text-center text-[25px] text-white lg:w-[956px]">
        {children}
      </div>
    </div>
  );
};
