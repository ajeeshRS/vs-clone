'use client';
import {
  FileTextIcon,
  FolderOpenIcon,
  LayoutTemplateIcon,
  Table,
  Video,
  Volume2Icon,
} from 'lucide-react';
import Image from 'next/image';
import repeatIcon from '../public/repeat.png';

import chatBotImg from '../public/chatbot-images/chatbot-img.png';
import chatIcon from '../public/chatbot-images/chat-Icon.png';
import notionIcon from '../public/integration-icons/notion.svg';
import airtableIcon from '../public/integration-icons/airtable.svg';

import workflowIcon from '../public/workflow-images/workflow-icon.png';
import outboundImg from '../public/workflow-images/outbound-img.png';
import copyImg from '../public/workflow-images/copy-img.png';
import summaryImg from '../public/workflow-images/summary-img.png';
import analyticsImg from '../public/workflow-images/analytics-img.png';
import { useState } from 'react';
import { qna, workflows } from '@/utils/data';
import { poppins } from '@/utils/font';



export default function AiOverviewSection() {
  const [activeWorkFlow, setActiveWorkFlow] = useState<string>('Outbound');

  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 sm:px-20 px-3`}
    >
      <div className="w-full flex flex-col items-center">
        <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium sm:text-4xl text-3xl text-center sm:px-0 px-10">
          {' '}
          Leverage AI throughout your
          <br />
          company and products{' '}
        </p>

        <div className="w-full flex sm:flex-row flex-col sm:h-[80vh] h-fit justify-around items-center sm:px-20 px-3 sm:py-0 py-10">
          <div className="sm:w-2/6 w-5/6 flex flex-col sm:items-start items-center">
            <Image
              src={repeatIcon}
              alt="repeat-icon"
              className="w-16 h-16 my-3"
            />
            <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
              Assistants
            </p>
            <p className="text-[#B7B0CA] py-2 text-sm sm:text-start text-center">
              Integrate natural language search and live-sync databases such as
              Notion and Airtable to automate information retrieval.
            </p>
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
          </div>
          <div className="sm:w-3/6 w-6/6 flex flex-col sm:py-0 py-10">
            {qna.map((data, i) => (
              <div key={i} className="flex flex-col w-full items-start">
                <p className="text-white my-3 font-medium sm:text-lg text-sm">
                  {data.q}
                </p>
                <div className="w-full flex flex-col items-start bg-[#140831] border border-[#4B3F6C] rounded-xl sm:p-3 p-2">
                  <div className="w-full flex items-center">
                    <Image
                      src={notionIcon}
                      alt="notion-icon"
                      className="w-6 h-6 bg-white p-1 rounded-lg"
                    />
                    <p className="sm:mx-2 mx-1 text-white sm:text-[14px] text-xs">
                      20230329-Product-Contract-Acme.pdf
                    </p>
                  </div>
                  <p className="text-white sm:text-sm text-xs py-4 font-normal">
                    {data.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:h-[80vh] h-fit justify-around items-center sm:px-20 px-3">
          <div className="sm:w-2/6 w-5/6 flex flex-col sm:items-start items-center">
            <Image src={chatIcon} alt="chat-icon" className="w-16 h-16 my-3" />
            <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
              Chatbot
            </p>
            <p className="text-[#B7B0CA] py-2 text-sm sm:text-start text-center">
              Prototype, customize, and deploy a customer facing chatbot in
              minutes. Use cases including customer support, onboarding flow,
              lead collection, and white-glove advisory.
            </p>
          </div>
          <div className="sm:w-3/6 w-5/6 flex justify-center items-center sm:py-0 py-4 ">
            <Image src={chatBotImg} alt="chat-bot-img" className="rounded-xl" />
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:h-[80vh] h-fit justify-around items-center sm:px-20 px-3 sm:py-0 py-10">
          <div className="sm:w-2/6 w-5/6 flex flex-col sm:items-start items-center">
            <Image
              src={workflowIcon}
              alt="repeat-icon"
              className="w-16 h-16 my-3"
            />
            <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
              Workflow Automation
            </p>
            <p className="text-[#B7B0CA] py-2 text-sm sm:text-start text-center">
              Automate the creation of marketing copy, personalized outbound
              emails, call summaries, and graphics at scale.
            </p>
          </div>
          <div className="sm:w-3/6 w-5/6 flex flex-col justify-center items-center sm:py-0 py-4  ">
            <div className="w-full flex justify-center">
              {workflows.map((data, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWorkFlow(data.workflow)}
                  className={`sm:mx-8 mx-3 sm:text-md text-sm ${
                    activeWorkFlow === data.workflow
                      ? 'bg-[#BC7DFE] text-[#430C89] sm:p-2 p-1 rounded-full'
                      : 'text-white'
                  }`}
                >
                  {data.workflow}
                </button>
              ))}
            </div>
            <div className="my-10 w-full h-full">
              {activeWorkFlow === 'Outbound' && (
                <Image src={outboundImg} alt="outbound-img" />
              )}
              {activeWorkFlow === 'Copy' && (
                <Image src={copyImg} alt="copy-img" />
              )}
              {activeWorkFlow === 'Summaries' && (
                <Image src={summaryImg} alt="summary-img" />
              )}
              {activeWorkFlow === 'Analytics' && (
                <Image src={analyticsImg} alt="analytics-img" />
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col h-fit items-center sm:px-20 px-3">
          <div className="w-full flex justify-center items-center">
            <div className="sm:w-1/6 w-2/6 h-24 sm:my-0 my-3 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <LayoutTemplateIcon className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">websites</p>
            </div>
          </div>
          <div className="flex items-center w-full justify-around sm:my-0 my-2 ">
            <div className="sm:w-1/6 w-2/6 h-24 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <FolderOpenIcon className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">Document</p>
            </div>
            <div className="sm:w-1/6 w-2/6 h-24 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <Table className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">Tables</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src={workflowIcon}
              alt="repeat-icon"
              className="w-16 h-16 my-3"
            />
            <p className="sm:w-2/6 w-full bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium sm:text-2xl text-xl py-3 text-center">
              Leverage AI across <br />
              data of all formats{' '}
            </p>
            <p className="text-[#B7B0CA] py-2 text-sm sm:w-2/6 w-5/6 text-center">
              Summarize and answer questions about documents, videos, audio
              files, and websites. Analyze and compare documents seamlessly.
            </p>
          </div>
          <div className="flex items-center w-full justify-around sm:my-0 my-2">
            <div className="sm:w-1/6 w-2/6 h-24 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <Volume2Icon className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">Audio</p>
            </div>
            <div className="sm:w-1/6 w-2/6 h-24 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <FileTextIcon className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">PDFs</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="sm:w-1/6 w-2/6 h-24 sm:my-0 my-3 rounded-xl bg-[#12082C] border-[#353241] p-4  border flex flex-col justify-between items-start">
              <Video className="w-6 h-6 text-[#BC7DFE]" />
              <p className="text-[#E4D8FF]">Videos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
