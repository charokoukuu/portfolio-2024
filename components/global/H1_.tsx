interface Props {
  children?: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return (
    <div className="mx-auto mb-5 w-[98%] bg-[#006C84] px-3 py-5 sm:w-[956px]">
      <div className="m-auto w-full text-center text-xl text-white sm:text-2xl">
        {children}
      </div>
    </div>
  );
};
