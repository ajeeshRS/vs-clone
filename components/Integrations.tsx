import { integrations } from '@/utils/data';
import Image from 'next/image';

export default function Integrations() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block p-1 font-medium sm:text-4xl text-3xl text-center">
        {' '}
        Integrations and automations
      </p>
      <p className="text-[#E5DDFC] py-4 text-sm text-center">
        Live-sync, set up action based triggers (e.g., receive an email), and
        automate actions (e.g., send a slack message) across your tool stack
      </p>
      <div className="w-full sm:flex grid grid-cols-2 gap-3 items-center justify-center py-10">
        {integrations.map((integration, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center sm:mx-10 mx-3"
          >
            <Image
              src={integration.icon}
              alt={`${integration.text}-icon`}
              className="w-14 h-14 bg-white p-1 rounded-xl"
            />
            <p className="py-2 text-[#E5DDFC]">{integration.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
