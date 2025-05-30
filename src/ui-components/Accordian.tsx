import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type AccordionItem = {
  title: string;
  content: Element;
};

const Accordion = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map(({item, index}: any) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 transition-all duration-200"
            onClick={() => toggleAccordion(index)}
          >
            {item?.title}
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 text-tertiary">
              <ul className="space-y-2">
                <li>
                  <input type="checkbox" /> In stock (79)
                </li>
                <li>
                  <input type="checkbox" /> Out of stock (52)
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
