import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from '../ThemeContext'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{
          fontWeight: 800, fontSize: '1.25rem',
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        }}>
          Naveen
        </a>

        <div className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href}
              style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.3s', letterSpacing: '0.3px' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >{link.name}</a>
          ))}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {theme === 'dark' ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <div className="nav-mobile-controls" style={{ display: 'none', gap: 8, alignItems: 'center' }}>
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 180 }}
            style={{ width: 36, height: 36, fontSize: '1rem' }}
          >
            {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </motion.button>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--accent-1)', fontSize: '1.5rem', cursor: 'pointer' }}>
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: 70, left: 0, right: 0,
              background: 'var(--mobile-menu-bg)', backdropFilter: 'blur(20px)',
              padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16,
              borderBottom: '1px solid var(--nav-border)',
            }}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', padding: '8px 0' }}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-controls { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
