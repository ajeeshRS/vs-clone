import { workFlowData } from '@/utils/data';
import { poppins } from '@/utils/font';

export default function WorkFlowCards() {
  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 sm:px-20 px-3`}
    >
      <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium sm:text-4xl text-3xl text-center">
        {' '}
        How it works
      </p>
      <div className="flex sm:flex-row flex-col items-center my-10">
        {workFlowData.map((step, i) => (
          <div key={i} className="sm:w-2/6 w-6/6 sm:mx-3 mx-0 sm:my-0 my-2 flex flex-col items-start sm:h-[45vh] h-[40vh] bg-[#12082C] border-[#353241] rounded-xl p-5">
            <div className="bg-gradient-to-b w-8 h-8 from-[#768AC0] to-[#3A1A6C] p-[1px] rounded-lg flex items-center justify-center mb-3">
              <p className="w-full h-full bg-[#12082C] rounded-lg my-2 text-[#BC7DFE] flex  items-center justify-center font-medium ">
                {i + 1}
              </p>
            </div>
            <p className="my-2 bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block whitespace-pre-wrap font-medium">
              {step.title}
            </p>
            <p className="my-2 text-[#AAA2C2] font-normal text-sm leading-6">
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
