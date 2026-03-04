import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} style={style}>
      {children}
    </motion.div>
  )
}
