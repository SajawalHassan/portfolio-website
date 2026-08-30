interface Props {
  text: string;
  description: string;
}

function ComputerProject(props: Props) {
  return (
    <div className=" h-[397px] bg-white border-[4px] border-black rounded-[30px] px-[18px] pb-[24px] pt-[17px] flex flex-col justify-between">
      <div>
        <h2 className="font-francois text-[32px]">{props.text}</h2>
        <p className="text-[12px] font-light leading-[112%]">
          {props.description}
        </p>
      </div>

      <div className="w-full min-h-[180px] bg-bg rounded-[36px]" />
    </div>
  );
}

export default ComputerProject;
