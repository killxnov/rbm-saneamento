"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react"; // ou framer-motion, dependendo do que você instalou
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // VALORES CORRIGIDOS: Menos extremistas para evitar buracos brancos na tela
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]), 
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]), 
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 0]), // Mantém as imagens perto do título!
    springConfig
  );

  return (
    <div
      ref={ref}
      // Altura ajustada para não sobrar espaço morto embaixo
      className="h-[180vh] md:h-[250vh] py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-16 mb-10 md:mb-16">
          {firstRow.map((product, idx) => (
            <ProductCard product={product} translate={translateX} key={`row1-${idx}`} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-16 space-x-10 md:space-x-16">
          {secondRow.map((product, idx) => (
            <ProductCard product={product} translate={translateXReverse} key={`row2-${idx}`} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-16">
          {thirdRow.map((product, idx) => (
            <ProductCard product={product} translate={translateX} key={`row3-${idx}`} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-tight">
        Soluções rápidas e <br /> <span className="text-blue-600">profissionais</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-slate-600 leading-relaxed">
        Especialista em reparos, manutenções e instalações com garantia de qualidade.
        Nós cuidamos da parte pesada para que você tenha tranquilidade no seu lar ou negócio.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-64 w-[18rem] md:h-80 md:w-[28rem] relative shrink-0 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/50"
    >
      <Link href={product.link} className="block w-full h-full group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 18rem, 28rem"
          className="object-cover object-center absolute inset-0 transition-transform duration-500 group-hover/product:scale-110"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 pointer-events-none"></div>
      <h2 className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};