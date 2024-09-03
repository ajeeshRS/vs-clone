import { poppins } from '@/utils/font';
import Integrations from './Integrations';
import LLMs from './LLMs';

export default function IntLLM() {
  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 sm:px-20 px-5`}
    >
      <Integrations />
      <LLMs />
    </div>
  );
}
