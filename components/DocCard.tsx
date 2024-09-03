import Image from 'next/image';
import pipelineImg from '../public/pipeline-img.png';
import { ArrowUpRight } from 'lucide-react';
import { poppins } from '@/utils/font';

export default function DocCard() {
  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 sm:px-20 px-3`}
    >
      <div className="w-full sm:h-60 h-fit rounded-xl border bg-[#140830] border-[#4B3F6C] flex sm:flex-row flex-col sm:justify-around justify-center items-center">
        <div className="flex flex-col sm:w-2/6 w-5/6 h-full items-start justify-center">
          <p className="bg-gradient-to-r bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl sm:py-3 py-6">
            VectorShift Docs
          </p>
          <p className="text-white text-sm">
            Unlock advanced features and detailed guides in our extensive
            documentation.
          </p>
          <div className="bg-gradient-to-b sm:w-2/4 w-fit sm:my-0 my-10 from-[#768AC0] to-[#3A1A6C] p-[1px] rounded-lg flex items-center justify-center sm:mt-5 mt-4 ">
            <p className="w-full h-full bg-[#12082C] pl-3 rounded-lg sm:py-0 py-2 sm:my-2 my-0 text-white flex text-sm  items-center justify-start font-medium ">
              Browse documentation <ArrowUpRight className="w-4 h-4 mx-1" />
            </p>
          </div>
        </div>
        <div className="h-full flex items-end sm:w-2/4 w-5/6">
          <div className="bg-gradient-to-b w-full from-[#768AC0] to-[#3A1A6C] p-[1px] rounded-t-xl  flex items-end justify-center">
            <Image
              src={pipelineImg}
              alt="pipeline-img"
              className="w-full rounded-t-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
