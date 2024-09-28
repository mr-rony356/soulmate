import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b bg-[#1D2127] border-gray-700  my-4 px-4 py-6 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className=" w-[70%] md:w-full text-lg lg:text-xl ">{question}</h3>
        {isOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }} // Icon rotates when open
            transition={{ duration: 0.2 }}
          >
            <X className="text-[#C488D3]" size={25} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }} // No rotation when closed
            transition={{ duration: 0.3 }}
          >
            <Plus className="text-[#C488D3]" size={25} />
          </motion.div>
        )}
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FaqItem;
