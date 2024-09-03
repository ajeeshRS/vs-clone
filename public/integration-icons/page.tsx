import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import HeroImage from "../public/HeroImage.png";
import hero2img1 from "../public/hero-2-section/hero2-img1.png";
import hero2img2 from "../public/hero-2-section/hero2-img2.png";
import { ChevronRight } from "lucide-react";

import driveIcon from "../public/integration-section/google-drive.svg";
import notionIcon from "../public/integration-section/notion.svg";
import oneDriveIcon from "../public/integration-section/ms-onedrive.svg";
import salesforceIcon from "../public/integration-section/salesforce.svg";
import hubspotIcon from "../public/integration-section/hubspot.png";
import airtableIcon from "../public/integration-section/airtable.svg";

import openaiIcon from "../public/llm-section/openai.svg";
import metaIcon from "../public/llm-section/meta-line-logo.svg";
import googleIcon from "../public/llm-section/google.svg";
import awsIcon from "../public/llm-section/aws.svg";
import hugginFaceIcon from "../public/llm-section/hugging-face-emoji.svg";

import repeatIcon from "../public/repeat.png";
import chatBotImg from "../public/chatbot-img.png";
import chatIcon from "../public/chat-Icon.png";

const poppins = Poppins({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
});

const hero2CardData = [
  {
    title: "Marketplace : pre-built use cases",
    content:
      " In today's fast-paced digital economy, businesses need to be agile, responsive, and ready to scale. A pre-built marketplace solution offers a powerful use case for companies looking to establish an online platform quickly without the extensive time and resource investment .",
  },
  {
    title: "Agents : execute complex tasks",
    content:
      "In the world of automation and AI, agents are specialized software entities designed to perform complex tasks autonomously. These intelligent agents are becoming indispensable in various industries, where they handle intricate processes, manage workflows, and make decisions with minimal human intervention.",
  },
  {
    title: "Search : use the optimal data retrieval method",
    content:
      "In the age of information overload, the ability to retrieve the right data efficiently is more critical than ever. Optimal data retrieval methods ensure that users can quickly and accurately access the information they need, whether from large databases, complex systems, or vast online resources.",
  },
];

const iconSet1 = [
  {
    link: driveIcon,
    text: "Google Drive",
  },
  {
    link: oneDriveIcon,
    text: "OneDrive",
  },
  {
    link: salesforceIcon,
    text: "SalesForce",
  },
  {
    link: hubspotIcon,
    text: "Hubspot",
  },
  {
    link: notionIcon,
    text: "Notion",
  },
  {
    link: airtableIcon,
    text: "Airtable",
  },
];

const iconSet2 = [
  {
    link: openaiIcon,
    text: "Open AI",
  },
  {
    link: hugginFaceIcon,
    text: "Huggingface",
  },
  {
    link: googleIcon,
    text: "Google",
  },
  {
    link: metaIcon,
    text: "LLAMA",
  },
  {
    link: awsIcon,
    text: "AWS",
  },
];

const qnaSet1 = [
  {
    q: "When was this contract started?",
    a: "The contract started on January 1, 2023.",
  },
  {
    q: "When was this contract last modified?",
    a: "The contract was last modified by John D. on June 13, 2023. The modifications were done on page 3,4 and 16.",
  },
  {
    q: "What's the contract ceiling?",
    a: "The contract ceiling is USD$1,000,000.",
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#5A00E8] via-slate-900 to-gray-900  flex min-h-screen flex-col items-center justify-between py-16 ">
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-center pt-24 px-44`}
      >
        <p className="text-[#E2EAFF] font-medium text-5xl py-1">The No-Code</p>
        <p className="text-[#88A9FF] font-medium text-5xl py-1">
          AI automations platform
        </p>
        <p className="text-[#C2D2FF] text-center py-4 text-lg">
          An integrated framework of no-code, low-code, and out of the box
          <br /> generative AI solutions to build AI search engines, assistants,
          <br /> chatbots, and automations.{" "}
        </p>
        <div className="w-full flex items-center justify-center text-white py-4">
          <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] px-5 py-2 text-[15px] rounded-full mx-2">
            Get started
          </button>
          <button className="px-5 py-2 text-[15px] rounded-full mx-2 hover:underline duration-300 ease-in-out">
            Book a demo{" "}
          </button>{" "}
        </div>
        <Image className="py-10" src={HeroImage} alt="hero-img" />
      </div>
      {/* section 2 */}
      <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-center pt-24`}
      >
        <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-4xl text-center">
          An ecosystem to build, deploy, <br />
          and manage AI applications
        </p>
        <div className="w-full flex justify-center items-center px-8 py-20">
          <Image
            src={hero2img1}
            alt="hero-2-img-1"
            className="rounded-xl h-[90vh] w-2/5 object-cover mx-6"
          />
          <Image
            src={hero2img2}
            alt="hero-2-img-1"
            className="rounded-xl h-[90vh] w-2/5 object-cover mx-6"
          />
        </div>
        <div className="w-full flex px-8 justify-center">
          {/* cards */}
          {hero2CardData.map((card, i) => (
            <div
              key={i}
              className="h-[55vh] w-2/6  hover:shadow-md hover:shadow-violet-800 transition-shadow duration-200 ease-in-out  bg-[#0F0922] bg-opacity-40 flex flex-col mx-5 rounded-xl text-white items-start justify-between p-10 group"
            >
              <p className="text-2xl bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium">
                {card.title}
              </p>
              <p className="text-[#E5DDFC] text-md py-2 leading-5">
                {card.content}
              </p>
              <button className="flex items-center text-lg py-4 ">
                Learn more{" "}
                <ChevronRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* section 3 */}
      <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 px-20`}
      >
        <div className="w-full flex flex-col items-center">
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block  font-medium text-4xl ">
            Integrations and automations
          </p>
          <p className="text-[#E5DDFC] py-4 text-sm">
            Live-sync, set up action based triggers (e.g., receive an email),
            and automate actions (e.g., send a slack message) across your tool
            stack
          </p>
          <div className="w-full flex items-center justify-center py-10">
            {iconSet1.map((icon, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center mx-10"
              >
                <Image
                  src={icon.link}
                  alt={`${icon.text}-icon`}
                  className="w-14 h-14 bg-white p-1 rounded-xl"
                />
                <p className="py-2 text-[#E5DDFC]">{icon.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center my-10">
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block  font-medium text-4xl ">
            Large language models
          </p>
          <p className="text-[#E5DDFC] py-4 text-sm">
            Access the latest models through the VectorShift platform
          </p>
          <div className="w-full flex items-center justify-center py-10">
            {iconSet2.map((icon, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center mx-10"
              >
                <Image
                  src={icon.link}
                  alt={`${icon.text}-icon`}
                  className="w-14 h-14 bg-white p-1 rounded-xl"
                />
                <p className="py-2 text-[#E5DDFC]">{icon.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 px-20`}
      >
        <div className="w-full flex flex-col items-center">
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block text-center font-medium text-4xl ">
            Leverage AI throughout your
            <br />
            company and products{" "}
          </p>

          <div className="w-full flex h-[80vh] justify-around items-center px-20">
            <div className="w-2/6 flex flex-col items-start">
              <Image
                src={repeatIcon}
                alt="repeat-icon"
                className="w-16 h-16 my-3"
              />
              <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
                Assistants
              </p>
              <p className="text-[#B7B0CA] py-2 text-sm">
                Integrate natural language search and live-sync databases such
                as Notion and Airtable to automate information retrieval.
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
            <div className="w-3/6 flex flex-col">
              {qnaSet1.map((data, i) => (
                <div  key={i} className="flex flex-col w-full items-start">
                  <p className="text-white my-3 font-medium">{data.q}</p>
                  <div className="w-full flex flex-col items-start bg-[#140831] border border-[#4B3F6C] rounded-xl p-3">
                    <div className="w-full flex items-center">
                      <Image
                        src={notionIcon}
                        alt="notion-icon"
                        className="w-6 h-6 bg-white p-1 rounded-lg"
                      />
                      <p className="mx-2 text-white">
                        20230329-Product-Contract-Acme.pdf
                      </p>
                    </div>
                    <p className="text-white text-sm py-4 font-normal">
                      {data.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex h-[80vh] justify-around items-center px-20">
            <div className="w-2/6 flex flex-col items-start">
              <Image
                src={chatIcon}
                alt="repeat-icon"
                className="w-16 h-16 my-3"
              />
              <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-2xl py-3">
                Chatbot
              </p>
              <p className="text-[#B7B0CA] py-2 text-sm">
                Prototype, customize, and deploy a customer facing chatbot in
                minutes. Use cases including customer support, onboarding flow,
                lead collection, and white-glove advisory.
              </p>
            </div>
            <div className="w-3/6 flex justify-center items-center ">
              <Image src={chatBotImg} alt="chat-bot-img" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
