interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: Props) => {
  return (
    <div className={'m-auto flex justify-center py-[3%] ' + className}>
      <div className="flex h-[67px] w-full items-center justify-center border-b-2 border-solid border-b-[#006C84] text-center text-5xl text-[#006C84] sm:w-[60vw]">
        {children}
      </div>
    </div>
  );
};
