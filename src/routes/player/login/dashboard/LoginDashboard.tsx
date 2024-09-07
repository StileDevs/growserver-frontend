import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const formSchema = z.object({
  growId: z
    .string()
    .min(5, {
      message: "GrowID must be at least 5 characters."
    })
    .max(20, {
      message: "GrowID are too long."
    })
    .refine((v) => !/[!@#$%^&*(),.?":{}|<> ]/.test(v), {
      message: "GrowID are containing special characters."
    }),
  password: z.string().min(5, {
    message: "Password must contains at least 5 characters long."
  })
});
export function LoginDashboard({ state }: { state: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      growId: "",
      password: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/player/login/validate", {
        growId: data.growId,
        password: data.password
      });

      if (res.status !== 200) throw new Error("Failed to validate");

      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      window.location.href = `/player/growid/login/validate?token=${res.data.token}`;
    } catch (e) {
      alert("Failed to validate");
      console.error(e);
    }
  };

  useEffect(() => {
    if (state !== "login") setIsOpen(false);
  }, [state]);

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="sm:w-[20rem] lg:w-[22rem] w-64"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-content sm:w-[20rem] lg:w-[22rem] w-64 p-2 my-2 rounded-md flex justify-between items-center"
        >
          Login
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <AnimatePresence mode="wait">
          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="bg-primary-content p-6"
          >
            <motion.h1 variants={itemVariants} className="text-center font-bold text-xl mb-2">
              Login
            </motion.h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full max-w-xs"
                  {...register("growId")}
                />
                {errors.growId && <p>{errors.growId.message}</p>}
              </motion.div>
              <motion.div variants={itemVariants} className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </motion.div>
              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="text-white w-full bg-primary rounded-md p-2 cursor-pointer my-4"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
