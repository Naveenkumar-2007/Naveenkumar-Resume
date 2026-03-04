import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────────────
   CINEMATIC INTRO — MATCHING REFERENCE EXACTLY
   
   Big round green headphones, slimmer segmented body,
   chair behind robot, large holographic screens,
   prominent chat bubbles, dense green particles,
   desk environment, left arm raised pointing.
   ───────────────────────────────────────────────────── */

const introData = [
  { label: 'NAME', value: 'Chapala Naveen Kumar', icon: '👤' },
  { label: 'ROLE', value: 'AI & Machine Learning Engineer', icon: '🤖' },
  { label: 'EDUCATION', value: 'B.Tech CSE (AI & ML) — SIMATS, Chennai', icon: '🎓' },
  { label: 'EXPERTISE', value: 'AutoML · RAG Systems · Deep Learning · NLP', icon: '⚡' },
  { label: 'STACK', value: 'Python · TensorFlow · FastAPI · Docker · LangChain', icon: '🛠️' },
  { label: 'PROJECTS', value: '10+ AI/ML Projects · 3+ Certifications', icon: '📊' },
  { label: 'MOTTO', value: '"From raw data to intelligent solutions."', icon: '💡' },
]

const bubblePos = [
  { x: -380, y: -130, side: 'left' },
  { x: 370, y: -100, side: 'right' },
  { x: -400, y: 10, side: 'left' },
  { x: 390, y: 40, side: 'right' },
  { x: -370, y: 150, side: 'left' },
  { x: 380, y: 170, side: 'right' },
  { x: 0, y: 300, side: 'center' },
]

const G = '#00ff88'
const G2 = '#00e87b'
const G3 = '#00cc66'
const GB = 'rgba(0,255,136,'

/* ── DENSE GREEN PARTICLES (150+) ── */
function Particles({ count = 160 }) {
  const ps = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 5 + 0.5,
      d: Math.random() * 16 + 5,
      dl: Math.random() * -12,
      o: Math.random() * 0.6 + 0.04,
      bl: Math.random() > 0.6,
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {ps.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20 - Math.random() * 20, 0, 15 + Math.random() * 15, 0],
            x: [0, 10, -8, 6, 0],
            opacity: [p.o, p.o * 2.5, p.o, p.o * 0.3, p.o],
            scale: [1, 1.5, 1, 0.6, 1],
          }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.dl, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: p.x + '%', top: p.y + '%',
            width: p.s, height: p.s, borderRadius: '50%',
            background: G,
            boxShadow: '0 0 ' + (p.s * 6) + 'px ' + GB + '0.5)',
            filter: p.bl ? 'blur(2px)' : 'none',
          }}
        />
      ))}
    </div>
  )
}

/* ── LARGE HOLOGRAPHIC BACKGROUND SCREENS ── */
function HoloScreens({ phase }) {
  if (phase < 1) return null
  const screens = [
    { left: '-2%', top: '3%', w: 260, h: 400, rot: -6 },
    { right: '-1%', top: '2%', w: 240, h: 380, rot: 5 },
    { left: '5%', bottom: '5%', w: 180, h: 130, rot: -3 },
    { right: '4%', bottom: '8%', w: 170, h: 120, rot: 4 },
    { left: '18%', top: '5%', w: 120, h: 180, rot: -2 },
    { right: '16%', top: '8%', w: 110, h: 160, rot: 3 },
  ]
  return (
    <>
      {screens.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0.03, 0.1, 0.03], scale: 1 }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
          style={{
            position: 'absolute', ...s,
            width: s.w, height: s.h,
            transform: 'rotate(' + s.rot + 'deg)',
            background: 'linear-gradient(180deg, ' + GB + '0.05) 0%, ' + GB + '0.012) 100%)',
            border: '1px solid ' + GB + '0.07)',
            borderRadius: 8, overflow: 'hidden',
            pointerEvents: 'none', zIndex: 0,
          }}
        >
          <div style={{ padding: 12 }}>
            {Array.from({ length: Math.floor(s.h / 16) }, (_, j) => (
              <motion.div
                key={j}
                animate={{ opacity: [0.06, 0.25, 0.06] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: j * 0.12 + i * 0.25 }}
                style={{
                  width: (25 + ((j * 21 + i * 13) % 65)) + '%',
                  height: 2, marginBottom: 5,
                  marginLeft: j % 3 === 0 ? 0 : j % 3 === 1 ? 10 : 20,
                  background: j % 5 === 0 ? '#00ffaa' : j % 5 === 3 ? '#22ddaa' : G,
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          {/* Chart bars for some screens */}
          {i < 2 && (
            <div style={{
              position: 'absolute', bottom: 15, left: 15, right: 15,
              display: 'flex', alignItems: 'flex-end', gap: 4, height: 40,
            }}>
              {Array.from({ length: 8 }, (_, b) => (
                <motion.div
                  key={b}
                  animate={{ height: [8 + b * 3, 15 + b * 4, 8 + b * 3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: b * 0.15 }}
                  style={{
                    flex: 1, background: G,
                    borderRadius: '2px 2px 0 0',
                    opacity: 0.15,
                  }}
                />
              ))}
            </div>
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 80%, ' + GB + '0.06) 0%, transparent 70%)',
          }} />
        </motion.div>
      ))}
    </>
  )
}

/* ── GREEN VOLUMETRIC LIGHT ── */
function GreenLight({ phase, activeIndex }) {
  if (phase < 2) return null
  const I = phase >= 3 ? 1.3 : 0.5
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {/* Central ambient */}
      <motion.div
        animate={{ opacity: [0.05 * I, 0.15 * I, 0.05 * I] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute', top: '8%', left: '15%', width: '70%', height: '65%',
          background: 'radial-gradient(ellipse at 50% 55%, ' + GB + '0.14) 0%, ' + GB + '0.04) 35%, transparent 65%)',
          filter: 'blur(35px)',
        }}
      />
      {/* Left sweep */}
      <motion.div
        animate={{
          opacity: [0.04 * I, 0.16 * I, 0.04 * I],
          rotate: phase >= 3 ? [-6, -22, -6] : [-3, -8, -3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '28%', left: '45%',
          width: 550, height: 750,
          background: 'linear-gradient(180deg, ' + GB + '0.18) 0%, ' + GB + '0.05) 18%, ' + GB + '0.015) 38%, transparent 56%)',
          transformOrigin: 'top center', filter: 'blur(25px)',
          borderRadius: '0 0 40% 40%',
        }}
      />
      {/* Right sweep */}
      <motion.div
        animate={{
          opacity: [0.03 * I, 0.14 * I, 0.03 * I],
          rotate: phase >= 3 ? [6, 22, 6] : [3, 8, 3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute', top: '28%', left: '45%',
          width: 520, height: 720,
          background: 'linear-gradient(180deg, ' + GB + '0.16) 0%, ' + GB + '0.04) 18%, ' + GB + '0.012) 38%, transparent 56%)',
          transformOrigin: 'top center', filter: 'blur(22px)',
          borderRadius: '0 0 40% 40%',
        }}
      />
      {/* Wide cone */}
      <motion.div
        animate={{ opacity: [0.015 * I, 0.05 * I, 0.015 * I] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{
          position: 'absolute', top: '22%', left: '18%', width: '64%', height: '58%',
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 28%, ' + GB + '0.04) 43%, ' + GB + '0.05) 50%, ' + GB + '0.04) 57%, transparent 72%)',
          filter: 'blur(28px)',
        }}
      />
      {/* Tendrils to data items */}
      {phase >= 3 && introData.map((_, i) => {
        if (i > activeIndex) return null
        const pos = bubblePos[i]
        const isAct = i === activeIndex
        const ang = Math.atan2(pos.y, pos.x) * (180 / Math.PI)
        const dist = Math.sqrt(pos.x * pos.x + pos.y * pos.y)
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: isAct ? [0.1, 0.35, 0.1] : 0.03, scaleX: 1 }}
            transition={{ duration: isAct ? 1.5 : 0.5, repeat: isAct ? Infinity : 0 }}
            style={{
              position: 'absolute', top: '40%', left: '50%',
              width: dist + 30, height: 2,
              transformOrigin: 'left center',
              transform: 'rotate(' + ang + 'deg)',
              background: 'linear-gradient(90deg, ' + GB + '0.3), ' + GB + '0.06), transparent)',
              filter: 'blur(2px)',
            }}
          />
        )
      })}
    </div>
  )
}

/* ── DESK + CHAIR ── */
function DeskAndChair({ phase }) {
  return (
    <>
      {/* ═══ CHAIR (behind robot) ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.7 : 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        style={{
          position: 'absolute', top: '28%', left: '50%', transform: 'translateX(-50%)',
          zIndex: 1, pointerEvents: 'none',
        }}
      >
        {/* Chair back */}
        <div style={{
          width: 200, height: 220, margin: '0 auto',
          background: 'linear-gradient(180deg, rgba(0,40,22,0.7) 0%, rgba(0,30,16,0.85) 50%, rgba(0,22,12,0.6) 100%)',
          borderRadius: '30px 30px 8px 8px',
          border: '1.5px solid ' + GB + '0.08)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 ' + GB + '0.06)',
          position: 'relative',
        }}>
          {/* Chair stitching lines */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute', top: 30 + i * 60, left: 20, right: 20, height: 1,
              background: GB + '0.06)',
            }} />
          ))}
          {/* Chair top glow */}
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: '30%',
              background: 'radial-gradient(ellipse at 50% 0%, ' + GB + '0.06) 0%, transparent 80%)',
              borderRadius: '30px 30px 0 0',
            }}
          />
        </div>
        {/* Chair sides (armrests peeking) */}
        {[-1, 1].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', top: 140,
            [s === -1 ? 'left' : 'right']: -25,
            width: 30, height: 80,
            background: 'linear-gradient(180deg, rgba(0,35,18,0.5), rgba(0,25,14,0.3))',
            borderRadius: s === -1 ? '10px 0 0 10px' : '0 10px 10px 0',
            border: '1px solid ' + GB + '0.05)',
          }} />
        ))}
      </motion.div>

      {/* ═══ DESK SURFACE ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,18,10,0.5) 25%, rgba(0,14,8,0.85) 55%, rgba(0,10,5,0.95) 100%)',
          pointerEvents: 'none', zIndex: 2,
        }}
      >
        {/* Desk edge */}
        <div style={{
          position: 'absolute', top: '32%', left: '10%', right: '10%', height: 2,
          background: 'linear-gradient(90deg, transparent, ' + GB + '0.15), ' + GB + '0.25), ' + GB + '0.15), transparent)',
          boxShadow: '0 0 15px ' + GB + '0.08)',
        }} />
        {/* Desk reflection */}
        <motion.div
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: 'absolute', top: '32%', left: '20%', right: '20%', height: '55%',
            background: 'radial-gradient(ellipse at 50% 0%, ' + GB + '0.08) 0%, transparent 70%)',
            filter: 'blur(12px)',
          }}
        />
        {/* Perspective grid on desk */}
        <div style={{
          position: 'absolute', top: '34%', left: '8%', right: '8%', bottom: 0,
          backgroundImage: 'linear-gradient(' + GB + '0.012) 1px, transparent 1px), linear-gradient(90deg, ' + GB + '0.012) 1px, transparent 1px)',
          backgroundSize: '35px 35px',
          perspective: 600, transform: 'rotateX(55deg)',
          transformOrigin: 'top center', opacity: 0.6,
        }} />
      </motion.div>
    </>
  )
}

/* ── THE ROBOT ── */
function Robot({ phase }) {
  const glow = phase >= 2

  return (
    <motion.div
      initial={{ scale: 0, y: 60, opacity: 0 }}
      animate={{ scale: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 60, opacity: phase >= 1 ? 1 : 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 50, duration: 2.5 }}
      style={{
        position: 'relative', width: 360, height: 500,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Ambient robot glow */}
      <motion.div
        animate={{ opacity: glow ? [0.12, 0.35, 0.12] : 0, scale: glow ? [1, 1.06, 1] : 0.8 }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{
          position: 'absolute', top: -100, left: -100, width: 560, height: 680,
          borderRadius: '50%',
          background: 'radial-gradient(circle, ' + GB + '0.15) 0%, ' + GB + '0.04) 35%, transparent 65%)',
          pointerEvents: 'none', filter: 'blur(20px)',
        }}
      />

      {/* ════════════ HEADPHONE BAND (thick, prominent) ════════════ */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase >= 1 ? 1 : 0 }}
        transition={{ delay: 0.4, type: 'spring', damping: 14 }}
        style={{
          position: 'absolute', top: 4, left: 35, width: 290, height: 90,
          border: '8px solid #1a2820',
          borderBottom: 'none', borderRadius: '130px 130px 0 0',
          zIndex: 0,
          boxShadow: '0 -4px 25px rgba(0,0,0,0.4), 0 0 30px ' + GB + '0.05)',
        }}
      >
        {/* Green LED on band */}
        <motion.div
          animate={{ opacity: glow ? [0.25, 0.85, 0.25] : 0.05 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute', top: -2, left: '20%', right: '20%', height: 3,
            background: 'linear-gradient(90deg, transparent, ' + G + ', transparent)',
            borderRadius: 3,
            boxShadow: glow ? '0 0 12px ' + G + ', 0 0 25px ' + GB + '0.3)' : 'none',
          }}
        />
        {/* Band segments */}
        {[30, 50, 70].map(p => (
          <div key={p} style={{
            position: 'absolute', top: 0, left: p + '%', width: 2, height: '100%',
            background: GB + '0.04)',
          }} />
        ))}
      </motion.div>

      {/* ════════════ BIG ROUND HEADPHONE CUPS ════════════ */}
      {[-1, 1].map((side, idx) => (
        <motion.div
          key={'hp' + idx}
          initial={{ opacity: 0, x: side * -30 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : side * -30 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          <motion.div
            animate={{
              boxShadow: glow
                ? [
                    '0 0 20px ' + GB + '0.3), 0 0 50px ' + GB + '0.15)',
                    '0 0 40px ' + GB + '0.55), 0 0 80px ' + GB + '0.25)',
                    '0 0 20px ' + GB + '0.3), 0 0 50px ' + GB + '0.15)',
                  ]
                : '0 0 5px ' + GB + '0.05)',
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.3 }}
            style={{
              position: 'absolute', top: 25,
              [side === -1 ? 'left' : 'right']: 6,
              width: 56, height: 72, borderRadius: 20,
              background: 'linear-gradient(180deg, #2a3830, #1a2820, #0f1815)',
              border: '3px solid ' + GB + '0.2)',
              zIndex: 3,
            }}
          >
            {/* Big green ring */}
            <motion.div
              animate={{ opacity: glow ? [0.3, 1, 0.3] : 0.08 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
              style={{
                position: 'absolute', top: 10, left: 7, right: 7, bottom: 10,
                borderRadius: 14,
                border: '3px solid ' + G,
                background: 'radial-gradient(circle, ' + GB + '0.12) 0%, transparent 70%)',
                boxShadow: glow ? 'inset 0 0 15px ' + GB + '0.15), 0 0 12px ' + GB + '0.2)' : 'none',
              }}
            />
            {/* Inner ring detail */}
            <motion.div
              animate={{ opacity: glow ? [0.15, 0.5, 0.15] : 0.05 }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 + idx * 0.2 }}
              style={{
                position: 'absolute', top: 18, left: 14, right: 14, bottom: 18,
                borderRadius: 10,
                border: '1.5px solid ' + GB + '0.2)',
              }}
            />
            {/* LED dots on cup */}
            {[0, 1, 2, 3].map(j => (
              <motion.div
                key={j}
                animate={{ opacity: glow ? [0.1, 0.6, 0.1] : 0.03 }}
                transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.15 + idx * 0.1 }}
                style={{
                  position: 'absolute', bottom: 7, left: 10 + j * 10,
                  width: 3, height: 3, borderRadius: '50%',
                  background: G,
                  boxShadow: glow ? '0 0 4px ' + G : 'none',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* ════════════ HEAD ════════════ */}
      <motion.div
        initial={{ rotateX: 90, scale: 0.5 }}
        animate={{ rotateX: phase >= 1 ? 0 : 90, scale: phase >= 1 ? 1 : 0.5 }}
        transition={{ delay: 0.2, type: 'spring', damping: 15 }}
        style={{
          position: 'absolute', top: 16, left: 55, width: 250, height: 155,
          background: 'linear-gradient(165deg, #f2f0ea 0%, #e2dfd8 25%, #cdc9c0 50%, #b8b3ab 80%, #a5a098 100%)',
          borderRadius: '45px 45px 35px 35px',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 22px 65px rgba(0,0,0,0.5), 0 8px 30px rgba(0,0,0,0.3), inset 0 3px 0 rgba(255,255,255,0.6), inset 0 -3px 0 rgba(0,0,0,0.05)'
            + (glow ? ', 0 0 50px ' + GB + '0.08), 0 0 100px ' + GB + '0.04)' : ''),
          overflow: 'hidden', zIndex: 2,
        }}
      >
        {/* Head shine */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', width: '42%', height: '30%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent)',
          borderRadius: '0 0 50% 50%',
        }} />
        {/* Green trim on head */}
        <motion.div
          animate={{ opacity: glow ? [0.15, 0.5, 0.15] : 0.03 }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: 3,
            background: G, borderRadius: 3,
            boxShadow: glow ? '0 0 10px ' + G : 'none',
          }}
        />

        {/* Dark visor / face */}
        <div style={{
          position: 'absolute', top: 20, left: 20, right: 20, bottom: 24,
          background: 'linear-gradient(180deg, #050c08 0%, #030907 60%, #040b09 100%)',
          borderRadius: 25,
          border: '2px solid ' + GB + '0.05)',
          boxShadow: 'inset 0 5px 30px rgba(0,0,0,0.7), inset 0 -2px 12px ' + GB + '0.02)',
        }}>
          {/* ═══ TWO GREEN EYES (large, bright) ═══ */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 44, paddingTop: 20 }}>
            {[0, 1].map(eyeIdx => (
              <motion.div
                key={eyeIdx}
                animate={{
                  boxShadow: glow
                    ? [
                        '0 0 25px ' + G + ', 0 0 55px ' + GB + '0.5), 0 0 100px ' + GB + '0.2)',
                        '0 0 45px ' + G + ', 0 0 90px ' + GB + '0.7), 0 0 150px ' + GB + '0.35)',
                        '0 0 25px ' + G + ', 0 0 55px ' + GB + '0.5), 0 0 100px ' + GB + '0.2)',
                      ]
                    : '0 0 5px ' + GB + '0.08)',
                  background: glow ? [G, '#33ffaa', G] : '#0a2818',
                }}
                transition={{ duration: 2, repeat: Infinity, delay: eyeIdx * 0.12 }}
                style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: '#0a2818',
                  border: '2.5px solid ' + GB + '0.3)',
                }}
              >
                {glow && (
                  <motion.div
                    animate={{ scale: [0.7, 0.4, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: eyeIdx * 0.12 }}
                    style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: '#003820', margin: '13px auto 0',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* SMILE (curved) */}
          <motion.div
            animate={{
              width: glow ? [22, 60, 22] : 22,
              opacity: glow ? [0.35, 1, 0.35] : 0.12,
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              margin: '10px auto 0', height: 8,
              background: G, borderRadius: '0 0 14px 14px',
              boxShadow: glow ? '0 0 18px ' + GB + '0.5)' : 'none',
            }}
          />
        </div>
      </motion.div>

      {/* ════════════ NECK (segmented, dark joints) ════════════ */}
      <div style={{
        position: 'absolute', top: 168, left: '50%', transform: 'translateX(-50%)',
        width: 50, height: 28, zIndex: 1,
      }}>
        {/* Dark rings */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 50 - i * 4, height: 6, margin: '0 auto 2px',
            background: 'linear-gradient(180deg, #2a3228 0%, #1a2420 50%, #0f1815 100%)',
            borderRadius: 4,
            border: '1px solid ' + GB + '0.06)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}>
            <motion.div
              animate={{ opacity: glow ? [0.1, 0.4, 0.1] : 0.03 }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              style={{
                width: '60%', height: 2, margin: '1px auto 0',
                background: G, borderRadius: 1,
              }}
            />
          </div>
        ))}
      </div>

      {/* ════════════ BODY (slimmer, segmented) ════════════ */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: phase >= 1 ? 1 : 0 }}
        transition={{ delay: 0.4, type: 'spring', damping: 14 }}
        style={{
          position: 'absolute', top: 194, left: 62, width: 236, height: 160,
          background: 'linear-gradient(175deg, #edebe5 0%, #ddd8d0 30%, #c5bfb8 60%, #b0aaa2 100%)',
          borderRadius: '20px 20px 32px 32px',
          border: '2px solid rgba(255,255,255,0.1)',
          boxShadow: '0 18px 50px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.4)',
          transformOrigin: 'top', zIndex: 1, overflow: 'hidden',
        }}
      >
        {/* Body highlight */}
        <div style={{
          position: 'absolute', top: 0, left: '14%', width: '34%', height: '16%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent)',
          borderRadius: '0 0 50% 50%',
        }} />

        {/* Dark segment bands */}
        {[0, 1].map(i => (
          <div key={i} style={{
            position: 'absolute', top: i === 0 ? 0 : 'auto', bottom: i === 1 ? 0 : 'auto',
            left: 0, right: 0, height: 8,
            background: 'linear-gradient(180deg, #2a3228, #1a2420)',
            borderTop: '1px solid ' + GB + '0.06)',
            borderBottom: '1px solid ' + GB + '0.06)',
          }}>
            <motion.div
              animate={{ opacity: glow ? [0.08, 0.3, 0.08] : 0.02 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              style={{
                width: '60%', height: 2, margin: '2px auto 0',
                background: G, borderRadius: 1,
              }}
            />
          </div>
        ))}

        {/* ═══ GREEN V SHIELD ═══ */}
        <motion.div
          animate={{
            boxShadow: phase >= 2
              ? ['0 0 18px ' + GB + '0.25)', '0 0 40px ' + GB + '0.5)', '0 0 18px ' + GB + '0.25)']
              : '0 0 5px ' + GB + '0.08)',
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ width: 48, height: 48, margin: '18px auto 0' }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: '8px 8px 24px 24px',
            background: 'linear-gradient(180deg, ' + G + ', ' + G3 + ', #009944)',
            boxShadow: '0 4px 18px ' + GB + '0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2.5px solid ' + GB + '0.4)',
          }}>
            <span style={{
              fontSize: 22, fontWeight: 900, color: '#fff',
              textShadow: '0 1px 5px rgba(0,0,0,0.3), 0 0 12px ' + GB + '0.5)',
            }}>V</span>
          </div>
        </motion.div>

        {/* LED strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 12 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              animate={{
                opacity: phase >= 2 ? [0.12, 0.55, 0.12] : 0.05,
                background: phase >= 2 ? [G, '#22ffaa', G] : '#0a2818',
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
              style={{ width: 26, height: 3.5, background: '#0a2818', borderRadius: 2 }}
            />
          ))}
        </div>

        {/* Dot LEDs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 35, marginTop: 12 }}>
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: glow ? [0.15, 0.6, 0.15] : 0.06 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
              style={{
                width: 6, height: 6, borderRadius: '50%', background: G,
                boxShadow: glow ? '0 0 8px ' + G : 'none',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ════════════ SHOULDER JOINTS (dark, segmented) ════════════ */}
      {[-1, 1].map((side, idx) => (
        <motion.div
          key={'sh' + idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.5 }}
          transition={{ delay: 0.5 }}
          style={{
            position: 'absolute', top: 202,
            [side === -1 ? 'left' : 'right']: 38,
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2a3228, #1a2420)',
            border: '2.5px solid ' + GB + '0.12)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <motion.div
            animate={{ opacity: glow ? [0.25, 0.85, 0.25] : 0.08 }}
            transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.3 }}
            style={{
              width: 10, height: 10, borderRadius: '50%',
              background: G, boxShadow: glow ? '0 0 8px ' + G : 'none',
            }}
          />
        </motion.div>
      ))}

      {/* ════════════ LEFT ARM (raised, pointing) ════════════ */}
      <motion.div
        initial={{ rotate: 45, opacity: 0 }}
        animate={{
          rotate: phase >= 2 ? [-40, -55, -40] : 45,
          opacity: phase >= 1 ? 1 : 0,
        }}
        transition={phase >= 2
          ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          : { delay: 0.55, type: 'spring', damping: 12 }}
        style={{
          position: 'absolute', top: 218, left: 10,
          width: 36, height: 120,
          transformOrigin: 'top center', zIndex: 0,
        }}
      >
        {/* Upper arm */}
        <div style={{
          width: 32, height: 55,
          background: 'linear-gradient(180deg, #d5d0c8, #b8b3ab, #a0998f)',
          borderRadius: '10px 10px 6px 6px',
          boxShadow: '0 5px 18px rgba(0,0,0,0.15), inset 1px 0 0 rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
        }}>
          {/* Dark elbow band */}
          <div style={{
            position: 'absolute', bottom: 0, left: -1, right: -1, height: 8,
            background: 'linear-gradient(180deg, #2a3228, #1a2420)',
            borderRadius: 4,
            border: '1px solid ' + GB + '0.06)',
          }}>
            <motion.div
              animate={{ opacity: glow ? [0.1, 0.4, 0.1] : 0.03 }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ width: '50%', height: 2, margin: '2px auto 0', background: G, borderRadius: 1 }}
            />
          </div>
          {/* LED */}
          <motion.div
            animate={{ opacity: glow ? [0.2, 0.7, 0.2] : 0.05 }}
            transition={{ duration: 1.3, repeat: Infinity }}
            style={{
              position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
              width: 8, height: 8, borderRadius: '50%',
              background: G, boxShadow: glow ? '0 0 8px ' + G : 'none',
            }}
          />
        </div>
        {/* Forearm */}
        <div style={{
          width: 28, height: 40, margin: '2px auto 0',
          background: 'linear-gradient(180deg, #ccc8c0, #b0aaa2)',
          borderRadius: 8,
          boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: -1, right: -1, height: 6,
            background: 'linear-gradient(180deg, #2a3228, #1a2420)',
            borderRadius: 4,
            border: '1px solid ' + GB + '0.05)',
          }} />
        </div>
        {/* Hand (pointing) */}
        <motion.div
          animate={{ rotate: phase >= 2 ? [0, 12, 0] : 0 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 30, height: 24, margin: '0 auto',
            background: 'linear-gradient(180deg, #ddd8d0, #c0bab2)',
            borderRadius: '6px 6px 12px 12px',
            position: 'relative',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
          }}
        >
          {/* Pointing finger */}
          <motion.div
            animate={{ scaleX: phase >= 2 ? [1, 1.12, 1] : 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: 'absolute', top: 3, right: -16, width: 20, height: 8,
              background: 'linear-gradient(90deg, #d0cbc3, #bbb5ad)',
              borderRadius: 5,
            }}
          >
            <motion.div
              animate={{ opacity: glow ? [0.2, 0.7, 0.2] : 0.08 }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                position: 'absolute', top: 2, right: 1,
                width: 3, height: 3, borderRadius: '50%',
                background: G, boxShadow: glow ? '0 0 4px ' + G : 'none',
              }}
            />
          </motion.div>
          {/* Curled fingers */}
          {[0, 1, 2].map(f => (
            <div key={f} style={{
              position: 'absolute', bottom: -5, left: 3 + f * 8, width: 6, height: 10,
              background: '#c5bfb8', borderRadius: '0 0 4px 4px',
            }} />
          ))}
          {/* Knuckle dots */}
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center', paddingTop: 4 }}>
            {[0, 1, 2].map(d => (
              <motion.div
                key={d}
                animate={{ opacity: glow ? [0.15, 0.5, 0.15] : 0.04 }}
                transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.1 }}
                style={{ width: 3, height: 3, borderRadius: '50%', background: G }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ════════════ RIGHT ARM (on keyboard, fingers typing) ════════════ */}
      <motion.div
        initial={{ rotate: -45, opacity: 0 }}
        animate={{
          rotate: phase >= 2 ? [20, 15, 20] : -45,
          opacity: phase >= 1 ? 1 : 0,
        }}
        transition={phase >= 2
          ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          : { delay: 0.55, type: 'spring', damping: 12 }}
        style={{
          position: 'absolute', top: 218, right: 10,
          width: 36, height: 120,
          transformOrigin: 'top center', zIndex: 0,
        }}
      >
        {/* Upper arm */}
        <div style={{
          width: 32, height: 55,
          background: 'linear-gradient(180deg, #d5d0c8, #b8b3ab, #a0998f)',
          borderRadius: '10px 10px 6px 6px',
          boxShadow: '0 5px 18px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', bottom: 0, left: -1, right: -1, height: 8,
            background: 'linear-gradient(180deg, #2a3228, #1a2420)',
            borderRadius: 4,
            border: '1px solid ' + GB + '0.06)',
          }}>
            <motion.div
              animate={{ opacity: glow ? [0.1, 0.4, 0.1] : 0.03 }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.15 }}
              style={{ width: '50%', height: 2, margin: '2px auto 0', background: G, borderRadius: 1 }}
            />
          </div>
          <motion.div
            animate={{ opacity: glow ? [0.2, 0.7, 0.2] : 0.05 }}
            transition={{ duration: 1.3, repeat: Infinity, delay: 0.2 }}
            style={{
              position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
              width: 8, height: 8, borderRadius: '50%',
              background: G, boxShadow: glow ? '0 0 8px ' + G : 'none',
            }}
          />
        </div>
        {/* Forearm */}
        <div style={{
          width: 28, height: 40, margin: '2px auto 0',
          background: 'linear-gradient(180deg, #ccc8c0, #b0aaa2)',
          borderRadius: 8,
          boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: -1, right: -1, height: 6,
            background: 'linear-gradient(180deg, #2a3228, #1a2420)',
            borderRadius: 4,
            border: '1px solid ' + GB + '0.05)',
          }} />
        </div>
        {/* Hand (flat, typing) */}
        <div style={{
          width: 32, height: 18, margin: '0 auto',
          background: 'linear-gradient(180deg, #ddd8d0, #c0bab2)',
          borderRadius: 10, position: 'relative',
          boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
        }}>
          {/* Typing fingers */}
          {[0, 1, 2, 3, 4].map(f => (
            <motion.div
              key={f}
              animate={{ y: phase >= 2 ? [0, -3, 0] : 0 }}
              transition={{ duration: 0.35, repeat: Infinity, delay: f * 0.1 + Math.random() * 0.3, repeatDelay: 0.9 }}
              style={{
                position: 'absolute', bottom: -6, left: 2 + f * 6, width: 5, height: 10,
                background: '#c0bab2', borderRadius: '0 0 3px 3px',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ════════════ LAPTOP (larger) ════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.4 }}
        transition={{ delay: 0.7, duration: 0.8, type: 'spring', damping: 15 }}
        style={{
          position: 'absolute', bottom: 35, left: '50%', transform: 'translateX(-50%)',
          zIndex: 4,
        }}
      >
        <div style={{
          width: 155, height: 95, margin: '0 auto',
          background: 'linear-gradient(180deg, #060e0a 0%, #040a07 100%)',
          borderRadius: '8px 8px 0 0',
          border: '2px solid ' + GB + '0.16)',
          boxShadow: '0 0 30px ' + GB + '0.06)',
          overflow: 'hidden', position: 'relative',
        }}>
          <div style={{ padding: '10px 14px' }}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <motion.div
                key={i}
                animate={{ opacity: phase >= 2 ? [0.08, 0.4, 0.08] : 0.04 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.18 }}
                style={{
                  width: (25 + ((i * 17) % 60)) + '%',
                  height: 2.5, marginBottom: 4.5,
                  marginLeft: i % 2 === 0 ? 0 : i % 3 === 0 ? 20 : 10,
                  background: i === 1 || i === 5 ? '#ffaa00' : G,
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          <motion.div
            animate={{ opacity: phase >= 2 ? [0.02, 0.1, 0.02] : 0 }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 80%, ' + GB + '0.1) 0%, transparent 60%)',
            }}
          />
        </div>
        <div style={{
          width: 180, height: 8, margin: '0 auto',
          background: 'linear-gradient(180deg, #7a7a75, #5a5a55)',
          borderRadius: '0 0 6px 6px',
          boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
        }} />
      </motion.div>

      {/* ════════════ COFFEE CUP (larger) ════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.9 : 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ position: 'absolute', bottom: 36, right: -20, zIndex: 5 }}
      >
        {/* Cup body */}
        <div style={{
          width: 28, height: 30,
          background: 'linear-gradient(180deg, #f0ede8, #c5a882)',
          borderRadius: '3px 3px 8px 8px', position: 'relative',
          boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        }}>
          <div style={{
            position: 'absolute', top: 4, left: 3, right: 3, height: 7,
            background: '#3a1a08', borderRadius: 2,
          }} />
        </div>
        {/* Saucer */}
        <div style={{
          position: 'absolute', bottom: -4, left: -5, width: 38, height: 6,
          background: 'linear-gradient(180deg, #ddd8d0, #b5b0a8)',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }} />
        {/* Handle */}
        <div style={{
          position: 'absolute', top: 8, right: -8, width: 8, height: 14,
          border: '2.5px solid #c5a882', borderLeft: 'none', borderRadius: '0 6px 6px 0',
        }} />
        {/* Steam */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ y: [0, -16, 0], opacity: [0.04, 0.2, 0.04] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
            style={{
              position: 'absolute', top: -12 - i * 6, left: 5 + i * 6,
              width: 7, height: 7,
              background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)',
              borderRadius: '50%',
            }}
          />
        ))}
      </motion.div>

      {/* ════════════ DOCUMENTS ════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.55 : 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        style={{ position: 'absolute', bottom: 36, left: -10, zIndex: 3 }}
      >
        {[0, 1].map(i => (
          <div key={i} style={{
            width: 36, height: 48, marginLeft: i * 8, marginTop: i * -40,
            background: 'linear-gradient(180deg, rgba(240,240,235,' + (0.5 - i * 0.15) + '), rgba(220,220,215,' + (0.35 - i * 0.1) + '))',
            borderRadius: 3, transform: 'rotate(' + (i * 9 - 5) + 'deg)', position: 'relative',
          }}>
            {[0, 1, 2, 3].map(j => (
              <div key={j} style={{
                width: '55%', height: 1.5, margin: '4px auto 0',
                background: GB + '0.18)', borderRadius: 1,
              }} />
            ))}
          </div>
        ))}
      </motion.div>

      {/* ════════════ CHAT BUBBLES (near left hand) ════════════ */}
      <AnimatePresence>
        {phase >= 2 && [0, 1].map(i => (
          <motion.div
            key={'cb' + i}
            initial={{ opacity: 0, x: -40, scale: 0.5 }}
            animate={{
              opacity: [0.35, 0.75, 0.35],
              x: 0, scale: 1,
              y: [0, -6, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.8 }}
            style={{
              position: 'absolute',
              top: 200 + i * 60,
              left: -80,
              zIndex: 6,
            }}
          >
            <div style={{
              padding: '10px 16px',
              background: 'linear-gradient(135deg, ' + GB + '0.1), ' + GB + '0.04))',
              border: '1.5px solid ' + GB + '0.3)',
              borderRadius: '14px 14px 14px 4px',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: '0 0 25px ' + GB + '0.08)',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: GB + '0.12)',
                border: '1.5px solid ' + GB + '0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11,
              }}>👤</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div style={{ width: 55, height: 3, background: G, borderRadius: 1.5, opacity: 0.6 }} />
                <div style={{ width: 40, height: 3, background: G, borderRadius: 1.5, opacity: 0.3 }} />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── DATA BUBBLE ── */
function DataBubble({ item, index, activeIndex, position }) {
  const isActive = activeIndex === index
  const isShown = activeIndex > index
  const isHidden = activeIndex < index
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, x: position.x * 0.3, y: position.y * 0.5 }}
      animate={{
        opacity: isHidden ? 0 : isActive ? 1 : 0.45,
        scale: isHidden ? 0.3 : isActive ? 1 : 0.84,
        x: isHidden ? position.x * 0.3 : position.x,
        y: isHidden ? position.y * 0.5 : position.y,
      }}
      transition={{
        duration: 0.8, ease: [0.25, 0.8, 0.25, 1],
        scale: { type: 'spring', damping: 15, stiffness: 100 },
      }}
      style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: position.side === 'center' ? 380 : 310,
        pointerEvents: 'none', zIndex: isActive ? 10 : 5,
      }}
    >
      <motion.div
        animate={{
          boxShadow: isActive
            ? ['0 0 25px ' + GB + '0.2), 0 0 55px ' + GB + '0.08)', '0 0 45px ' + GB + '0.35), 0 0 90px ' + GB + '0.12)', '0 0 25px ' + GB + '0.2), 0 0 55px ' + GB + '0.08)']
            : isShown ? '0 0 10px ' + GB + '0.04)' : 'none',
          y: isActive ? [0, -5, 0] : 0,
        }}
        transition={{ duration: isActive ? 2.5 : 0.5, repeat: isActive ? Infinity : 0 }}
        style={{
          padding: '14px 18px',
          background: isActive
            ? 'linear-gradient(135deg, rgba(0,20,10,0.9), rgba(0,15,8,0.92), rgba(0,10,5,0.88))'
            : 'rgba(0,12,6,0.5)',
          border: '1.5px solid ' + (isActive ? GB + '0.4)' : isShown ? GB + '0.1)' : 'transparent'),
          borderRadius: position.side === 'left' ? '14px 14px 14px 4px' : position.side === 'right' ? '14px 14px 4px 14px' : '14px',
          backdropFilter: 'blur(20px)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ left: '-60%', opacity: 0 }}
              animate={{ left: '160%', opacity: [0, 0.7, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                position: 'absolute', top: 0, bottom: 0, width: '50%',
                background: 'linear-gradient(90deg, transparent, ' + GB + '0.18), ' + GB + '0.06), transparent)',
                pointerEvents: 'none', filter: 'blur(4px)',
              }}
            />
          )}
        </AnimatePresence>
        <motion.div
          animate={{
            opacity: isActive ? [0.5, 1, 0.5] : isShown ? 0.15 : 0,
            boxShadow: isActive ? '0 0 10px ' + G : 'none',
          }}
          transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
          style={{
            position: 'absolute', left: 0, top: 6, bottom: 6,
            width: 3, background: G, borderRadius: 3,
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
          <motion.div
            animate={{
              scale: isActive ? [1, 1.12, 1] : 1,
              boxShadow: isActive ? '0 0 12px ' + GB + '0.35)' : 'none',
            }}
            transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
            style={{
              width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
              background: isActive ? 'linear-gradient(135deg, ' + GB + '0.14), ' + GB + '0.04))' : GB + '0.03)',
              border: '1.5px solid ' + (isActive ? GB + '0.35)' : GB + '0.05)'),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}
          >
            {item.icon}
          </motion.div>
          <div style={{ flex: 1 }}>
            <motion.div
              animate={{
                color: isActive || isShown ? G : '#333',
                textShadow: isActive ? '0 0 12px ' + GB + '0.6)' : 'none',
              }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.56rem', fontWeight: 700,
                letterSpacing: 3, textTransform: 'uppercase', marginBottom: 3,
              }}
            >{item.label}</motion.div>
            <motion.div
              initial={{ filter: 'blur(8px)' }}
              animate={{
                filter: !isHidden ? 'blur(0px)' : 'blur(8px)',
                color: isActive ? '#e8e8e8' : isShown ? '#777' : '#444',
              }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: position.side === 'center' ? '0.92rem' : '0.82rem',
                fontWeight: 500, lineHeight: 1.5,
              }}
            >{item.value}</motion.div>
          </div>
          {isActive && (
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                width: 8, height: 8, borderRadius: '50%',
                background: G, boxShadow: '0 0 12px ' + G, flexShrink: 0,
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ═══════════════════ MAIN ═══════════════════ */
export default function CinematicIntro({ onComplete }) {
  const [phase, setPhase] = useState(0)
  const [si, setSi] = useState(-1)
  const [exiting, setExiting] = useState(false)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    const t = []
    t.push(setTimeout(() => setPhase(1), 700))
    t.push(setTimeout(() => setPhase(2), 3000))
    t.push(setTimeout(() => { setPhase(3); setSi(0) }, 4800))
    return () => t.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase < 3 || si < 0) return
    if (si < introData.length - 1) {
      timerRef.current = setTimeout(() => setSi(p => p + 1), 1200)
    } else {
      timerRef.current = setTimeout(() => exit(), 2800)
    }
    return () => clearTimeout(timerRef.current)
  }, [si, phase])

  const exit = useCallback(() => {
    setPhase(4); setExiting(true)
    setTimeout(() => { setVisible(false); onComplete?.() }, 1500)
  }, [onComplete])

  const skip = () => { clearTimeout(timerRef.current); exit() }
  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 1.4 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'linear-gradient(180deg, #020a05 0%, #030c07 30%, #020804 60%, #010503 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Particles />
        <HoloScreens phase={phase} />

        {/* Scan line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, ' + GB + '0.05), transparent)',
            pointerEvents: 'none', zIndex: 15,
          }}
        />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(' + GB + '0.008) 1px, transparent 1px), linear-gradient(90deg, ' + GB + '0.008) 1px, transparent 1px)',
          backgroundSize: '50px 50px', pointerEvents: 'none',
        }} />

        {/* Ambient glows */}
        <div style={{
          position: 'absolute', top: '0%', left: '-12%',
          width: '55%', height: '65%',
          background: 'radial-gradient(ellipse, ' + GB + '0.05) 0%, transparent 65%)',
          pointerEvents: 'none', filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', top: '5%', right: '-12%',
          width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, ' + GB + '0.04) 0%, transparent 65%)',
          pointerEvents: 'none', filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '0%', left: '15%', width: '70%', height: '35%',
          background: 'radial-gradient(ellipse, ' + GB + '0.06) 0%, transparent 60%)',
          pointerEvents: 'none', filter: 'blur(45px)',
        }} />

        {/* Corner brackets */}
        {[[0,0],[1,0],[0,1],[1,1]].map(([cx,cy], i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: phase >= 1 ? 0.35 : 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              position: 'absolute',
              [cy === 0 ? 'top' : 'bottom']: 18,
              [cx === 0 ? 'left' : 'right']: 18,
              width: 40, height: 40,
              borderTop: cy === 0 ? '2px solid ' + GB + '0.15)' : 'none',
              borderBottom: cy === 1 ? '2px solid ' + GB + '0.15)' : 'none',
              borderLeft: cx === 0 ? '2px solid ' + GB + '0.15)' : 'none',
              borderRight: cx === 1 ? '2px solid ' + GB + '0.15)' : 'none',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Top HUD */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : -10 }}
          style={{
            position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem', color: GB + '0.35)',
            letterSpacing: 4, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8,
          }}
        >
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: G }}
          />
          <span>NAVBOT ONLINE</span>
          {phase >= 2 && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{' — SCANNING'}</motion.span>}
          {phase >= 3 && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{' — PROJECTING'}</motion.span>}
        </motion.div>

        {/* Desk + Chair */}
        <DeskAndChair phase={phase} />

        {/* ═══ SCENE ═══ */}
        <div style={{
          position: 'relative', width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <GreenLight phase={phase} activeIndex={si} />

          <div style={{ position: 'relative', zIndex: 3 }}>
            <Robot phase={phase} />
          </div>

          {phase >= 3 && introData.map((item, i) => (
            <DataBubble key={i} item={item} index={i} activeIndex={si} position={bubblePos[i]} />
          ))}

          {phase >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }}
              style={{
                position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: 8,
              }}
            >
              {introData.map((_, i) => (
                <motion.div key={i}
                  animate={{
                    background: si >= i ? G : 'rgba(255,255,255,0.06)',
                    boxShadow: si === i ? '0 0 10px ' + G : 'none',
                    scale: si === i ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* SKIP */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 0.5 : 0 }}
          whileHover={{ opacity: 1, scale: 1.05, borderColor: GB + '0.5)', boxShadow: '0 0 20px ' + GB + '0.12)' }}
          onClick={skip}
          style={{
            position: 'absolute', bottom: 28, right: 28,
            padding: '10px 26px',
            background: 'rgba(0,18,8,0.5)',
            border: '1px solid ' + GB + '0.18)',
            borderRadius: 10, color: G,
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: 2, cursor: 'pointer',
            backdropFilter: 'blur(12px)', transition: 'all 0.3s',
          }}
        >SKIP ▸</motion.button>

        <div style={{
          position: 'absolute', bottom: 28, left: 28,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.48rem', color: GB + '0.06)', letterSpacing: 2,
        }}>NAVBOT v3.0</div>
      </motion.div>
    </AnimatePresence>
  )
}
