import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          className="loader"

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <motion.h1
            className="loader-logo"

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            DAILY
            <span>PICKS</span>

          </motion.h1>

        </motion.div>
      )}

    </AnimatePresence>
  );
}
