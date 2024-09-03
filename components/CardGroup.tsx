import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import chatIcon from '../public/chatbot-images/chat-Icon.png';
import notionIcon from '../public/integration-icons/notion.svg';
import airtableIcon from '../public/integration-icons/airtable.svg';
import { poppins } from '@/utils/font';

export default function CardGroup() {
  return (
    <div
      className={`${poppins.className} w-full flex sm:flex-row flex-col items-center h-fit pt-24 sm:px-20 px-3`}
    >
      <div className="flex flex-col h-[100vh] sm:w-2/6 w-6/6 mx-1">
        <div className="h-[55%] w-full bg-gradient-to-b from-[#87B1F5] via-[#9055FD] to-[#4A1791] border-[.5px] border-[#4B3F6C] group flex flex-col justify-between p-10 text-white rounded-xl my-1">
          <div className="flex flex-col">
            <p className="font-medium text-4xl">
              Enterprise <br />
              solutions
            </p>
            <p className="text-lg py-5">
              We leverage our secure infrastructure and development platform to
              build and deploy high-ROI Al solutions for your organizations.
            </p>
          </div>
          <button className="flex items-center text-lg py-4 ">
            Learn more{' '}
            <ChevronRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
        <div className="h-[45%] w-full bg-[#110829] border-[.5px] border-[#4B3F6C] p-10 flex flex-col justify-center items-center text-white rounded-xl my-1">
          <p>18,403 acitve users </p>
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3 text-center">
            Report Generation
          </p>
        </div>
      </div>

      <div className="flex flex-col h-[100vh] sm:w-2/6 w-6/6 mx-1">
        <div className="h-[40%] w-full bg-[#130434] border-[.5px] border-[#4B3F6C] flex flex-col justify-center items-center p-10 rounded-xl my-1">
          <Image src={chatIcon} alt="chat-icon" className="w-16 h-16 my-3" />
          <p className=" bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3 z-2">
            High Volume Chatbot
          </p>
        </div>
        <div className="h-[60%] w-full bg-[#110829] border-[.5px] border-[#4B3F6C] p-10 flex flex-col justify-center items-center text-white rounded-xl my-1">
          <p className="text-md text-[#AAA2C2]">
            Craft Targeted and Engaging Messages Personalized outbound emails
            are key to connecting with your audience on a deeper level. By
            tailoring your messages to the specific needs, interests, and
            behaviors of each recipient, you increase the likelihood of
            engagement and conversion.{' '}
          </p>
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
            Personalized email outbound
          </p>
        </div>
      </div>

      <div className="flex flex-col h-[100vh] sm:w-2/6 w-6/6 mx-1">
        <div className="h-[70%] w-full bg-[#12062E] border-[.5px] border-[#4B3F6C] flex flex-col justify-between p-10 text-white rounded-xl my-1 group">
          <div className="flex flex-col">
            <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
              RFP and proposal generators
            </p>
            <p className="text-md text-[#AAA2C2] py-4">
              Streamline Your Proposal Process RFP (Request for Proposal) and
              proposal generators are tools designed to simplify the creation of
              detailed proposals and responses to RFPs. These generators save
              time, ensure consistency, and help you produce professional
              documents that clearly communicate your offerings.
            </p>
          </div>
          <button className="flex items-center text-lg py-4 ">
            Learn more{' '}
            <ChevronRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
        <div className="h-[30%] w-full bg-[#110829] border-[.5px] border-[#4B3F6C] p-10 flex flex-col justify-center items-start text-white rounded-xl my-1">
          <div className="flex py-3 items-center">
            <Image
              src={notionIcon}
              alt="notion-icon"
              className="w-8 h-8 bg-white rounded-xl p-1 mx-1"
            />
            <Image
              src={airtableIcon}
              alt="airtable-icon"
              className="w-8 h-8 bg-white rounded-xl p-1 mx-1"
            />
            <button className="bg-[#2F126C] p-2 text-md text-white rounded-lg mx-1">
              +64
            </button>
          </div>
          <p className="bg-gradient-to-r bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
            Knowledge search
          </p>
        </div>
      </div>
    </div>
  );
}
