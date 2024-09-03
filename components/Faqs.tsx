import { FAQs } from '@/utils/data';
import { poppins } from '@/utils/font';
import { useState } from 'react';

export default function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number | null) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-start pt-24 sm:px-20 px-3`}
    >
      <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-4xl text-center">
        FAQ
      </p>

      <div className="faq-container text-white w-full flex flex-col items-center py-10">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="faq-item sm:w-4/6 w-6/6 flex flex-col items-start mb-5 bg-[#140830] sm:p-8 p-4 rounded-2xl"
          >
            <div
              className="faq-question flex w-full justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center">
                <button className="faq-toggle-btn focus:outline-none">
                  {expandedIndex === index ? (
                    <div className="bg-gradient-to-b w-8 h-8 from-[#768AC0] to-[#3A1A6C] p-[2px] rounded-full flex items-center justify-center">
                      <p className="w-full h-full bg-[#12082C] rounded-full text-[#BC7DFE] flex items-center justify-center">
                        -
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-b w-8 h-8 from-[#768AC0] to-[#3A1A6C] p-[2px] rounded-full flex items-center justify-center">
                      <p className="w-full h-full bg-[#12082C] rounded-full text-[#BC7DFE] flex items-center justify-center">
                        +
                      </p>
                    </div>
                  )}
                </button>
                <p className="sm:px-5 px-2 sm:text-xl text-sm text-[#E5DDFC] font-medium">
                  {faq.question}
                </p>
              </div>
            </div>

            <p
              className={`${
                expandedIndex === index
                  ? 'opacity-100 sm:text-md text-sm translate-y-0 visible transition-all duration-500 ease-in-out mt-3 pl-12 text-[#E5DDFC] leading-7'
                  : 'opacity-0 sm:text-md text-sm translate-y-[-20px] pl-12 max-h-0 invisible transition-all duration-100 ease-in-out'
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
