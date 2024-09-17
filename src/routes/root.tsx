import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const RootRoute = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col min-h-screen gap-y-96 overflow-hidden rounded-sm">
      <Navbar />

      <motion.div
        className="max-w-4xl mt-64 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
          GrowServer
        </motion.h1>
        <motion.p className="mb-8" variants={itemVariants}>
          A Growtopia private server using NodeJS & Written with Typescript
        </motion.p>
        <motion.div variants={itemVariants}>
          <a href="#about">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <section id="about" className="py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            About Our Platform
          </motion.h2>
          <motion.p className="text-lg mb-8" variants={itemVariants}>
            Our innovative web design platform combines the power of cutting-edge technology with
            intuitive design tools, allowing you to create stunning, animated websites with ease.
            Whether you're a seasoned developer or a design enthusiast, our platform provides the
            perfect balance of flexibility and simplicity to bring your web visions to life.
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            With a focus on performance, responsiveness, and user experience, we empower you to
            build websites that not only look great but also deliver exceptional results. Join
            thousands of satisfied users who have transformed their online presence with our
            revolutionary platform.
          </motion.p>
        </motion.div>
      </section>
      <section id="about" className="py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            About Our Platform
          </motion.h2>
          <motion.p className="text-lg mb-8" variants={itemVariants}>
            Our innovative web design platform combines the power of cutting-edge technology with
            intuitive design tools, allowing you to create stunning, animated websites with ease.
            Whether you're a seasoned developer or a design enthusiast, our platform provides the
            perfect balance of flexibility and simplicity to bring your web visions to life.
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            With a focus on performance, responsiveness, and user experience, we empower you to
            build websites that not only look great but also deliver exceptional results. Join
            thousands of satisfied users who have transformed their online presence with our
            revolutionary platform.
          </motion.p>
        </motion.div>
      </section>
      <section id="about" className="py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            About Our Platform
          </motion.h2>
          <motion.p className="text-lg mb-8" variants={itemVariants}>
            Our innovative web design platform combines the power of cutting-edge technology with
            intuitive design tools, allowing you to create stunning, animated websites with ease.
            Whether you're a seasoned developer or a design enthusiast, our platform provides the
            perfect balance of flexibility and simplicity to bring your web visions to life.
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            With a focus on performance, responsiveness, and user experience, we empower you to
            build websites that not only look great but also deliver exceptional results. Join
            thousands of satisfied users who have transformed their online presence with our
            revolutionary platform.
          </motion.p>
        </motion.div>
      </section>
      <Footer></Footer>
    </div>
  );
};
