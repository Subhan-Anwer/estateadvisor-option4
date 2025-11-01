"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const ViewAllPropertiesButton = () => {
  return (
    <div className="text-center mt-12">
      <Link href={"/properties"}>
        <motion.button
          className="bg-[#d1a925] text-black font-semibold px-8 py-4 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] cursor-pointer hover:shadow-lg hover:shadow-[#d4af37]/25"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => console.log("hover started!")}
        >
          View All Properties
        </motion.button>
      </Link>
    </div>
  );
}

export default ViewAllPropertiesButton
