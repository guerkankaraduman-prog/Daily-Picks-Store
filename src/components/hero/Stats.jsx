import CountUp from "react-countup";

import { motion } from "framer-motion";

import "../../styles/stats.css";

export default function Stats() {

  const stats = [
    {
      number: 25,
      suffix: "K+",
      label: "Happy Visitors",
    },

    {
      number: 12,
      suffix: "K+",
      label: "Products Viewed",
    },

    {
      number: 4.9,
      suffix: "★",
      label: "Average Rating",
      decimals: 1,
    },
  ];

  return (
    <section className="stats">

      <div className="stats-container">

        {stats.map((stat, index) => (

          <motion.div
            key={index}

            className="stat-card"

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.45,
              delay: index * 0.15,
            }}

            viewport={{
              once: true,
            }}
          >

            <h2 className="stat-number">

              <CountUp
                end={stat.number}

                duration={2.5}

                decimals={
                  stat.decimals || 0
                }
              />

              {stat.suffix}

            </h2>

            <p className="stat-label">
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
