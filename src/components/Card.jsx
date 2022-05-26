import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import DesktopDivider from './DesktopDivider';
import MobileDivider from './MobileDivider';

export default function Card({ adviceData, isLoading, handleClick }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 600);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <div className="md:w-[36rem] md:shadow-2xl shadow-xl max-w-[36rem]  flex flex-col justify-between px-[1.625rem] relative bg-dark-grayish-blue rounded-[1rem] text-center">
      <div className="pb-8 pt-10">
        <p className="uppercase text-xs font-extrabold tracking-[2.88px] text-neon-green pb-5">
          Advice #{adviceData.id || ''}
        </p>
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <PuffLoader color="hsl(150, 100%, 66%)" loading={isLoading} />
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-[24px] md:text-[28px] leading-snug font-extrabold text-light-cyan"
          >
            &ldquo;{adviceData.advice}&rdquo;
          </motion.p>
        )}
      </div>

      <div className="flex justify-center pb-[4rem]">
        {isDesktop ? <DesktopDivider /> : <MobileDivider />}
      </div>
      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="w-16 cursor-pointer h-16 rounded-full absolute left-0 right-0 mx-auto -bottom-[32px] bg-neon-green flex items-center justify-center"
      >
        <span className="text-dark-blue">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </motion.button>
    </div>
  );
}
