"use client";

import { AnimatePresence } from "framer-motion"
import {usePathname} from "next/navigation"
import Stairs from "@/components/ui/Stairs";
import { motion } from "framer-motion";


const StairTransition = () => {
  const pathname = usePathname();
  return (
    <> 
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs/>
        </div>
        <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" initial={{opacity: 0}} animate={{opacity: 0, transition: {delay: 1, duration: 0.5, ease: "easeInOut"}}} exit={{opacity: 0}}/>

      </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition