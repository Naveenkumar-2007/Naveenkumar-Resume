// High-quality SVG project thumbnails with detailed visuals

export const projectThumbnails = {
  datavision: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="dvbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#041a12"/><stop offset="50%" stop-color="#082218"/><stop offset="100%" stop-color="#061a20"/></linearGradient>
    <radialGradient id="dvglow" cx="50%" cy="45%"><stop offset="0%" stop-color="rgba(0,255,204,0.12)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
    <filter id="dvblur"><feGaussianBlur in="SourceGraphic" stdDeviation="2"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#dvbg)"/>
  <rect width="800" height="450" fill="url(#dvglow)"/>
  <!-- Dashboard frame -->
  <rect x="80" y="40" width="640" height="360" rx="12" fill="rgba(0,30,25,0.6)" stroke="rgba(0,255,204,0.15)" stroke-width="1"/>
  <!-- Sidebar -->
  <rect x="80" y="40" width="160" height="360" rx="12" fill="rgba(0,40,35,0.8)" stroke="rgba(0,255,204,0.08)" stroke-width="1"/>
  <rect x="95" y="65" width="130" height="10" rx="3" fill="rgba(0,255,204,0.15)"/>
  <rect x="95" y="90" width="100" height="6" rx="2" fill="rgba(0,255,204,0.08)"/>
  <rect x="95" y="110" width="120" height="6" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="95" y="130" width="90" height="6" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="95" y="160" width="130" height="8" rx="3" fill="rgba(0,255,204,0.12)"/>
  <rect x="95" y="180" width="110" height="6" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="95" y="200" width="80" height="6" rx="2" fill="rgba(0,255,204,0.06)"/>
  <!-- Main chart area -->
  <rect x="260" y="60" width="440" height="180" rx="8" fill="rgba(0,20,18,0.7)" stroke="rgba(0,255,204,0.06)" stroke-width="1"/>
  <!-- Bar chart -->
  <rect x="290" y="170" width="30" height="50" rx="3" fill="rgba(0,255,204,0.4)"/>
  <rect x="330" y="140" width="30" height="80" rx="3" fill="rgba(0,212,170,0.5)"/>
  <rect x="370" y="100" width="30" height="120" rx="3" fill="rgba(0,255,204,0.6)"/>
  <rect x="410" y="120" width="30" height="100" rx="3" fill="rgba(0,212,255,0.5)"/>
  <rect x="450" y="90" width="30" height="130" rx="3" fill="rgba(0,255,204,0.7)"/>
  <rect x="490" y="110" width="30" height="110" rx="3" fill="rgba(0,212,170,0.5)"/>
  <rect x="530" y="80" width="30" height="140" rx="3" fill="rgba(0,255,204,0.6)"/>
  <rect x="570" y="130" width="30" height="90" rx="3" fill="rgba(0,212,255,0.4)"/>
  <rect x="610" y="95" width="30" height="125" rx="3" fill="rgba(0,255,204,0.55)"/>
  <rect x="650" y="75" width="30" height="145" rx="3" fill="rgba(0,255,204,0.65)"/>
  <!-- Trend line -->
  <polyline points="305,160 345,130 385,90 425,110 465,80 505,100 545,70 585,120 625,85 665,65" fill="none" stroke="#ffb800" stroke-width="2.5" opacity="0.8"/>
  <!-- Metric cards -->
  <rect x="260" y="260" width="135" height="70" rx="8" fill="rgba(0,255,204,0.05)" stroke="rgba(0,255,204,0.12)" stroke-width="1"/>
  <text x="290" y="285" fill="#00ffcc" font-size="9" font-family="monospace" opacity="0.6">ACCURACY</text>
  <text x="290" y="312" fill="#00ffcc" font-size="22" font-family="sans-serif" font-weight="bold">94.5%</text>
  <rect x="410" y="260" width="135" height="70" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.12)" stroke-width="1"/>
  <text x="440" y="285" fill="#00d4ff" font-size="9" font-family="monospace" opacity="0.6">MODELS</text>
  <text x="440" y="312" fill="#00d4ff" font-size="22" font-family="sans-serif" font-weight="bold">50+</text>
  <rect x="560" y="260" width="135" height="70" rx="8" fill="rgba(255,184,0,0.05)" stroke="rgba(255,184,0,0.12)" stroke-width="1"/>
  <text x="590" y="285" fill="#ffb800" font-size="9" font-family="monospace" opacity="0.6">RAG CHAT</text>
  <text x="590" y="312" fill="#ffb800" font-size="22" font-family="sans-serif" font-weight="bold">LIVE</text>
  <!-- Neural net nodes -->
  <circle cx="120" cy="280" r="8" fill="rgba(0,255,204,0.3)"/>
  <circle cx="120" cy="310" r="8" fill="rgba(0,255,204,0.3)"/>
  <circle cx="120" cy="340" r="8" fill="rgba(0,255,204,0.3)"/>
  <circle cx="170" cy="295" r="10" fill="rgba(0,255,204,0.4)"/>
  <circle cx="170" cy="325" r="10" fill="rgba(0,255,204,0.4)"/>
  <circle cx="210" cy="310" r="12" fill="rgba(0,255,204,0.5)"/>
  <line x1="128" y1="280" x2="160" y2="295" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="128" y1="310" x2="160" y2="295" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="128" y1="310" x2="160" y2="325" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="128" y1="340" x2="160" y2="325" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="180" y1="295" x2="198" y2="310" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="180" y1="325" x2="198" y2="310" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <!-- Title -->
  <text x="400" y="430" text-anchor="middle" fill="#00ffcc" font-family="sans-serif" font-size="18" font-weight="bold" letter-spacing="3">DATAVISION AI</text>
</svg>`)}`,

  stock: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="stbg" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0%" stop-color="#080d1e"/><stop offset="100%" stop-color="#0a1830"/></linearGradient>
    <linearGradient id="stgn" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="transparent"/><stop offset="100%" stop-color="rgba(0,255,204,0.08)"/></linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#stbg)"/>
  <!-- Grid -->
  <g stroke="rgba(0,212,255,0.06)" stroke-width="0.5">
    <line x1="100" y1="40" x2="100" y2="370"/><line x1="200" y1="40" x2="200" y2="370"/><line x1="300" y1="40" x2="300" y2="370"/>
    <line x1="400" y1="40" x2="400" y2="370"/><line x1="500" y1="40" x2="500" y2="370"/><line x1="600" y1="40" x2="600" y2="370"/>
    <line x1="700" y1="40" x2="700" y2="370"/>
    <line x1="60" y1="80" x2="750" y2="80"/><line x1="60" y1="150" x2="750" y2="150"/>
    <line x1="60" y1="220" x2="750" y2="220"/><line x1="60" y1="290" x2="750" y2="290"/><line x1="60" y1="360" x2="750" y2="360"/>
  </g>
  <!-- Price labels -->
  <text x="45" y="85" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace" text-anchor="end">250</text>
  <text x="45" y="155" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace" text-anchor="end">200</text>
  <text x="45" y="225" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace" text-anchor="end">150</text>
  <text x="45" y="295" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace" text-anchor="end">100</text>
  <!-- Candlesticks (detailed) -->
  <line x1="115" y1="200" x2="115" y2="310" stroke="#ff4455" stroke-width="1.5"/><rect x="108" y="230" width="14" height="50" fill="#ff4455" rx="1"/>
  <line x1="155" y1="220" x2="155" y2="320" stroke="#ff4455" stroke-width="1.5"/><rect x="148" y="250" width="14" height="40" fill="#ff4455" rx="1"/>
  <line x1="195" y1="180" x2="195" y2="290" stroke="#00ffcc" stroke-width="1.5"/><rect x="188" y="200" width="14" height="60" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="235" y1="150" x2="235" y2="260" stroke="#00ffcc" stroke-width="1.5"/><rect x="228" y="170" width="14" height="55" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="275" y1="175" x2="275" y2="250" stroke="#ff4455" stroke-width="1.5"/><rect x="268" y="195" width="14" height="30" fill="#ff4455" rx="1"/>
  <line x1="315" y1="120" x2="315" y2="230" stroke="#00ffcc" stroke-width="1.5"/><rect x="308" y="140" width="14" height="60" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="355" y1="100" x2="355" y2="200" stroke="#00ffcc" stroke-width="1.5"/><rect x="348" y="115" width="14" height="55" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="395" y1="125" x2="395" y2="200" stroke="#ff4455" stroke-width="1.5"/><rect x="388" y="140" width="14" height="35" fill="#ff4455" rx="1"/>
  <line x1="435" y1="90" x2="435" y2="190" stroke="#00ffcc" stroke-width="1.5"/><rect x="428" y="105" width="14" height="55" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="475" y1="80" x2="475" y2="160" stroke="#00ffcc" stroke-width="1.5"/><rect x="468" y="92" width="14" height="40" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="515" y1="95" x2="515" y2="175" stroke="#ff4455" stroke-width="1.5"/><rect x="508" y="110" width="14" height="35" fill="#ff4455" rx="1"/>
  <line x1="555" y1="75" x2="555" y2="155" stroke="#00ffcc" stroke-width="1.5"/><rect x="548" y="85" width="14" height="45" fill="#00ffcc" rx="1" opacity="0.85"/>
  <line x1="595" y1="85" x2="595" y2="140" stroke="#00ffcc" stroke-width="1.5"/><rect x="588" y="90" width="14" height="30" fill="#00ffcc" rx="1" opacity="0.85"/>
  <!-- Moving average lines -->
  <polyline points="115,270 155,280 195,240 235,210 275,220 315,180 355,155 395,165 435,130 475,115 515,140 555,110 595,105 635,95" fill="none" stroke="#ffb800" stroke-width="2" opacity="0.7"/>
  <polyline points="115,290 155,285 195,260 235,240 275,235 315,210 355,185 395,180 435,160 475,145 515,150 555,135 595,125 635,115" fill="none" stroke="#ff6b9d" stroke-width="1.5" opacity="0.5" stroke-dasharray="4,3"/>
  <!-- Prediction zone -->
  <rect x="630" y="50" width="120" height="320" fill="rgba(0,255,204,0.02)" stroke="rgba(0,255,204,0.1)" stroke-width="1" stroke-dasharray="6,4" rx="4"/>
  <polyline points="635,95 660,88 685,82 710,78 735,72" fill="none" stroke="#00ffcc" stroke-width="2" opacity="0.6" stroke-dasharray="5,3"/>
  <text x="690" y="45" text-anchor="middle" fill="rgba(0,255,204,0.4)" font-size="9" font-family="monospace">PREDICTED</text>
  <!-- Arrow up -->
  <polygon points="735,65 745,72 740,72 740,85 730,85 730,72 725,72" fill="#00ffcc" opacity="0.6"/>
  <!-- Stats -->
  <rect x="60" y="380" width="160" height="45" rx="6" fill="rgba(0,255,204,0.05)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <text x="80" y="398" fill="#00ffcc" font-size="8" font-family="monospace" opacity="0.5">ACCURACY</text>
  <text x="80" y="415" fill="#00ffcc" font-size="16" font-family="sans-serif" font-weight="bold">84.2%</text>
  <rect x="240" y="380" width="160" height="45" rx="6" fill="rgba(255,184,0,0.05)" stroke="rgba(255,184,0,0.1)" stroke-width="1"/>
  <text x="260" y="398" fill="#ffb800" font-size="8" font-family="monospace" opacity="0.5">MODEL</text>
  <text x="260" y="415" fill="#ffb800" font-size="16" font-family="sans-serif" font-weight="bold">LSTM</text>
  <text x="400" y="440" text-anchor="middle" fill="#00d4ff" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">AI STOCK PREDICTOR</text>
</svg>`)}`,

  diabetes: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0a0d18"/>
  <rect width="800" height="450" fill="url(#dbg)" opacity="0.5"/>
  <defs><radialGradient id="dbg" cx="50%" cy="40%"><stop offset="0%" stop-color="rgba(255,80,100,0.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
  <!-- ECG monitor frame -->
  <rect x="60" y="30" width="680" height="250" rx="12" fill="rgba(15,20,35,0.8)" stroke="rgba(255,80,100,0.15)" stroke-width="1"/>
  <!-- ECG grid -->
  <g stroke="rgba(255,80,100,0.04)" stroke-width="0.5">
    <line x1="60" y1="80" x2="740" y2="80"/><line x1="60" y1="130" x2="740" y2="130"/>
    <line x1="60" y1="180" x2="740" y2="180"/><line x1="60" y1="230" x2="740" y2="230"/>
    <line x1="160" y1="30" x2="160" y2="280"/><line x1="260" y1="30" x2="260" y2="280"/>
    <line x1="360" y1="30" x2="360" y2="280"/><line x1="460" y1="30" x2="460" y2="280"/>
    <line x1="560" y1="30" x2="560" y2="280"/><line x1="660" y1="30" x2="660" y2="280"/>
  </g>
  <!-- Heart rate line -->
  <polyline points="80,160 120,160 145,160 160,80 175,220 190,140 210,160 280,160 310,160 325,75 340,225 355,135 375,160 440,160 470,160 485,82 500,218 515,140 535,160 600,160 630,160 645,78 660,222 675,138 690,160 730,160" fill="none" stroke="#ff4466" stroke-width="2.5" opacity="0.8"/>
  <!-- Glow on peaks -->
  <circle cx="160" cy="80" r="4" fill="#ff4466" opacity="0.6"/><circle cx="160" cy="80" r="12" fill="none" stroke="#ff4466" stroke-width="1" opacity="0.2"/>
  <circle cx="325" cy="75" r="4" fill="#ff4466" opacity="0.6"/><circle cx="325" cy="75" r="12" fill="none" stroke="#ff4466" stroke-width="1" opacity="0.2"/>
  <circle cx="485" cy="82" r="4" fill="#ff4466" opacity="0.6"/><circle cx="485" cy="82" r="12" fill="none" stroke="#ff4466" stroke-width="1" opacity="0.2"/>
  <circle cx="645" cy="78" r="4" fill="#ff4466" opacity="0.6"/><circle cx="645" cy="78" r="12" fill="none" stroke="#ff4466" stroke-width="1" opacity="0.2"/>
  <!-- BPM display -->
  <text x="690" y="60" fill="#ff4466" font-size="11" font-family="monospace" opacity="0.6">BPM</text>
  <text x="690" y="78" fill="#ff4466" font-size="20" font-family="monospace" font-weight="bold">72</text>
  <!-- Feature cards bottom -->
  <rect x="60" y="300" width="200" height="65" rx="8" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <text x="80" y="322" fill="#00ffcc" font-size="9" font-family="monospace" opacity="0.6">GLUCOSE LEVEL</text>
  <rect x="80" y="332" width="120" height="8" rx="3" fill="rgba(0,255,204,0.15)"/><rect x="80" y="332" width="75" height="8" rx="3" fill="rgba(0,255,204,0.4)"/>
  <text x="80" y="358" fill="#00ffcc" font-size="12" font-family="monospace">126 mg/dL</text>
  <rect x="280" y="300" width="200" height="65" rx="8" fill="rgba(255,184,0,0.04)" stroke="rgba(255,184,0,0.1)" stroke-width="1"/>
  <text x="300" y="322" fill="#ffb800" font-size="9" font-family="monospace" opacity="0.6">BMI INDEX</text>
  <rect x="300" y="332" width="120" height="8" rx="3" fill="rgba(255,184,0,0.15)"/><rect x="300" y="332" width="90" height="8" rx="3" fill="rgba(255,184,0,0.4)"/>
  <text x="300" y="358" fill="#ffb800" font-size="12" font-family="monospace">28.4</text>
  <rect x="500" y="300" width="240" height="65" rx="8" fill="rgba(255,80,100,0.04)" stroke="rgba(255,80,100,0.1)" stroke-width="1"/>
  <text x="520" y="322" fill="#ff4466" font-size="9" font-family="monospace" opacity="0.6">RISK PREDICTION</text>
  <text x="520" y="350" fill="#ff4466" font-size="20" font-family="sans-serif" font-weight="bold">87% Accuracy</text>
  <!-- Title -->
  <text x="400" y="415" text-anchor="middle" fill="#ff6b9d" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">DIABETES RISK PREDICTION</text>
  <text x="400" y="438" text-anchor="middle" fill="rgba(122,156,168,0.5)" font-size="11" font-family="monospace">RandomForest · Flask · ML Pipeline</text>
</svg>`)}`,

  perplexity: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#060d1a"/>
  <defs><radialGradient id="pglow" cx="50%" cy="40%"><stop offset="0%" stop-color="rgba(0,212,255,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
  <rect width="800" height="450" fill="url(#pglow)"/>
  <!-- Search interface mock -->
  <rect x="120" y="50" width="560" height="45" rx="22" fill="rgba(0,30,50,0.6)" stroke="rgba(0,212,255,0.2)" stroke-width="1.5"/>
  <circle cx="155" cy="72" r="12" fill="none" stroke="rgba(0,212,255,0.4)" stroke-width="2"/>
  <line x1="163" y1="80" x2="172" y2="89" stroke="rgba(0,212,255,0.4)" stroke-width="2" stroke-linecap="round"/>
  <text x="185" y="78" fill="rgba(0,212,255,0.5)" font-size="14" font-family="sans-serif">What is retrieval augmented generation?</text>
  <!-- RAG visualization -->
  <!-- Central brain node -->
  <circle cx="400" cy="240" r="45" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.3)" stroke-width="2"/>
  <circle cx="400" cy="240" r="25" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.2)" stroke-width="1"/>
  <text x="400" y="244" text-anchor="middle" fill="#00d4ff" font-size="12" font-family="monospace" font-weight="bold">LLM</text>
  <!-- Document nodes -->
  <rect x="130" y="150" width="80" height="55" rx="8" fill="rgba(0,255,204,0.05)" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="145" y1="168" x2="195" y2="168" stroke="rgba(0,255,204,0.15)" stroke-width="1"/><line x1="145" y1="178" x2="185" y2="178" stroke="rgba(0,255,204,0.1)" stroke-width="1"/><line x1="145" y1="188" x2="190" y2="188" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <rect x="130" y="280" width="80" height="55" rx="8" fill="rgba(0,255,204,0.05)" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  <line x1="145" y1="298" x2="195" y2="298" stroke="rgba(0,255,204,0.15)" stroke-width="1"/><line x1="145" y1="308" x2="180" y2="308" stroke="rgba(0,255,204,0.1)" stroke-width="1"/><line x1="145" y1="318" x2="192" y2="318" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <rect x="590" y="150" width="80" height="55" rx="8" fill="rgba(255,184,0,0.05)" stroke="rgba(255,184,0,0.2)" stroke-width="1"/>
  <line x1="605" y1="168" x2="655" y2="168" stroke="rgba(255,184,0,0.15)" stroke-width="1"/><line x1="605" y1="178" x2="645" y2="178" stroke="rgba(255,184,0,0.1)" stroke-width="1"/><line x1="605" y1="188" x2="650" y2="188" stroke="rgba(255,184,0,0.1)" stroke-width="1"/>
  <rect x="590" y="280" width="80" height="55" rx="8" fill="rgba(255,184,0,0.05)" stroke="rgba(255,184,0,0.2)" stroke-width="1"/>
  <line x1="605" y1="298" x2="655" y2="298" stroke="rgba(255,184,0,0.15)" stroke-width="1"/><line x1="605" y1="308" x2="640" y2="308" stroke="rgba(255,184,0,0.1)" stroke-width="1"/>
  <!-- Connection beams -->
  <line x1="210" y1="177" x2="355" y2="230" stroke="rgba(0,255,204,0.25)" stroke-width="1.5"/><circle cx="210" cy="177" r="3" fill="#00ffcc" opacity="0.5"/>
  <line x1="210" y1="307" x2="355" y2="250" stroke="rgba(0,255,204,0.25)" stroke-width="1.5"/><circle cx="210" cy="307" r="3" fill="#00ffcc" opacity="0.5"/>
  <line x1="590" y1="177" x2="445" y2="230" stroke="rgba(255,184,0,0.25)" stroke-width="1.5"/><circle cx="590" cy="177" r="3" fill="#ffb800" opacity="0.5"/>
  <line x1="590" y1="307" x2="445" y2="250" stroke="rgba(255,184,0,0.25)" stroke-width="1.5"/><circle cx="590" cy="307" r="3" fill="#ffb800" opacity="0.5"/>
  <!-- Vector DB -->
  <ellipse cx="400" cy="370" rx="60" ry="25" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.15)" stroke-width="1"/>
  <ellipse cx="400" cy="362" rx="60" ry="25" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.15)" stroke-width="1"/>
  <text x="400" y="374" text-anchor="middle" fill="rgba(0,255,204,0.5)" font-size="10" font-family="monospace">FAISS Vector DB</text>
  <line x1="400" y1="285" x2="400" y2="340" stroke="rgba(0,255,204,0.15)" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="400" y="435" text-anchor="middle" fill="#00d4ff" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">PERPLEXITY AI CLONE</text>
</svg>`)}`,

  genai: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#08081e"/>
  <defs><radialGradient id="gglow" cx="50%" cy="45%"><stop offset="0%" stop-color="rgba(139,92,246,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
  <rect width="800" height="450" fill="url(#gglow)"/>
  <!-- Central brain -->
  <circle cx="400" cy="200" r="80" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" stroke-width="1.5"/>
  <circle cx="400" cy="200" r="50" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.15)" stroke-width="1"/>
  <circle cx="400" cy="200" r="20" fill="rgba(139,92,246,0.15)"/>
  <!-- Brain neural paths -->
  <path d="M370,175 Q350,160 340,180 Q330,200 350,210 Q370,220 380,200" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="1.5"/>
  <path d="M430,175 Q450,160 460,180 Q470,200 450,210 Q430,220 420,200" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="1.5"/>
  <path d="M390,170 Q400,150 410,170" fill="none" stroke="rgba(0,255,204,0.3)" stroke-width="1.5"/>
  <path d="M390,230 Q400,250 410,230" fill="none" stroke="rgba(0,255,204,0.3)" stroke-width="1.5"/>
  <!-- Agent nodes -->
  <circle cx="180" cy="120" r="30" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.2)" stroke-width="1.5"/>
  <text x="180" y="118" text-anchor="middle" fill="#00ffcc" font-size="8" font-family="monospace" opacity="0.7">RETRIEVAL</text>
  <text x="180" y="130" text-anchor="middle" fill="#00ffcc" font-size="8" font-family="monospace" opacity="0.7">AGENT</text>
  <circle cx="620" cy="120" r="30" fill="rgba(255,184,0,0.04)" stroke="rgba(255,184,0,0.2)" stroke-width="1.5"/>
  <text x="620" y="118" text-anchor="middle" fill="#ffb800" font-size="8" font-family="monospace" opacity="0.7">REASONING</text>
  <text x="620" y="130" text-anchor="middle" fill="#ffb800" font-size="8" font-family="monospace" opacity="0.7">AGENT</text>
  <circle cx="180" cy="290" r="30" fill="rgba(255,107,157,0.04)" stroke="rgba(255,107,157,0.2)" stroke-width="1.5"/>
  <text x="180" y="288" text-anchor="middle" fill="#ff6b9d" font-size="8" font-family="monospace" opacity="0.7">CODE</text>
  <text x="180" y="300" text-anchor="middle" fill="#ff6b9d" font-size="8" font-family="monospace" opacity="0.7">AGENT</text>
  <circle cx="620" cy="290" r="30" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.2)" stroke-width="1.5"/>
  <text x="620" y="288" text-anchor="middle" fill="#00d4ff" font-size="8" font-family="monospace" opacity="0.7">SUMMARY</text>
  <text x="620" y="300" text-anchor="middle" fill="#00d4ff" font-size="8" font-family="monospace" opacity="0.7">AGENT</text>
  <!-- Connections -->
  <line x1="210" y1="130" x2="320" y2="180" stroke="rgba(0,255,204,0.2)" stroke-width="1.5"/>
  <line x1="590" y1="130" x2="480" y2="180" stroke="rgba(255,184,0,0.2)" stroke-width="1.5"/>
  <line x1="210" y1="280" x2="320" y2="220" stroke="rgba(255,107,157,0.2)" stroke-width="1.5"/>
  <line x1="590" y1="280" x2="480" y2="220" stroke="rgba(0,212,255,0.2)" stroke-width="1.5"/>
  <!-- Data flow dots -->
  <circle cx="265" cy="155" r="3" fill="#00ffcc" opacity="0.5"/><circle cx="535" cy="155" r="3" fill="#ffb800" opacity="0.5"/>
  <circle cx="265" cy="250" r="3" fill="#ff6b9d" opacity="0.5"/><circle cx="535" cy="250" r="3" fill="#00d4ff" opacity="0.5"/>
  <!-- Workflow bar -->
  <rect x="200" y="360" width="400" height="35" rx="8" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.15)" stroke-width="1"/>
  <text x="220" y="383" fill="rgba(139,92,246,0.6)" font-size="10" font-family="monospace">INPUT → RETRIEVE → REASON → GENERATE → OUTPUT</text>
  <text x="400" y="430" text-anchor="middle" fill="#8b5cf6" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">GENAI INTELLIGENCE STUDIO</text>
</svg>`)}`,

  fakenews: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#100a04"/>
  <defs><radialGradient id="fglow" cx="50%" cy="40%"><stop offset="0%" stop-color="rgba(255,184,0,0.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
  <rect width="800" height="450" fill="url(#fglow)"/>
  <!-- Two articles side by side -->
  <!-- Real article -->
  <rect x="80" y="60" width="280" height="260" rx="12" fill="rgba(0,40,30,0.5)" stroke="rgba(0,255,204,0.15)" stroke-width="1.5"/>
  <rect x="100" y="80" width="240" height="12" rx="3" fill="rgba(0,255,204,0.15)"/>
  <rect x="100" y="100" width="200" height="8" rx="2" fill="rgba(0,255,204,0.08)"/>
  <rect x="100" y="115" width="220" height="8" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="100" y="130" width="190" height="8" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="100" y="145" width="230" height="8" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="100" y="165" width="240" height="8" rx="2" fill="rgba(0,255,204,0.05)"/>
  <rect x="100" y="180" width="200" height="8" rx="2" fill="rgba(0,255,204,0.05)"/>
  <rect x="100" y="195" width="220" height="8" rx="2" fill="rgba(0,255,204,0.05)"/>
  <!-- Verified badge -->
  <circle cx="220" cy="260" r="25" fill="rgba(0,255,204,0.08)" stroke="rgba(0,255,204,0.3)" stroke-width="2"/>
  <polyline points="208,260 217,270 235,250" fill="none" stroke="#00ffcc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="220" y="300" text-anchor="middle" fill="#00ffcc" font-size="12" font-family="monospace" font-weight="bold">VERIFIED</text>
  <!-- Fake article -->
  <rect x="440" y="60" width="280" height="260" rx="12" fill="rgba(40,15,15,0.5)" stroke="rgba(255,68,68,0.15)" stroke-width="1.5"/>
  <rect x="460" y="80" width="240" height="12" rx="3" fill="rgba(255,68,68,0.15)"/>
  <rect x="460" y="100" width="200" height="8" rx="2" fill="rgba(255,68,68,0.08)"/>
  <rect x="460" y="115" width="220" height="8" rx="2" fill="rgba(255,68,68,0.06)"/>
  <rect x="460" y="130" width="190" height="8" rx="2" fill="rgba(255,68,68,0.06)"/>
  <rect x="460" y="145" width="230" height="8" rx="2" fill="rgba(255,68,68,0.06)"/>
  <rect x="460" y="165" width="240" height="8" rx="2" fill="rgba(255,68,68,0.05)"/>
  <rect x="460" y="180" width="200" height="8" rx="2" fill="rgba(255,68,68,0.05)"/>
  <!-- X badge -->
  <circle cx="580" cy="260" r="25" fill="rgba(255,68,68,0.08)" stroke="rgba(255,68,68,0.3)" stroke-width="2"/>
  <line x1="568" y1="248" x2="592" y2="272" stroke="#ff4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="592" y1="248" x2="568" y2="272" stroke="#ff4444" stroke-width="3" stroke-linecap="round"/>
  <text x="580" y="300" text-anchor="middle" fill="#ff4444" font-size="12" font-family="monospace" font-weight="bold">FAKE</text>
  <!-- VS -->
  <text x="400" y="200" text-anchor="middle" fill="rgba(255,184,0,0.3)" font-size="28" font-family="sans-serif" font-weight="bold">VS</text>
  <!-- NLP pipeline -->
  <rect x="200" y="350" width="400" height="35" rx="8" fill="rgba(255,184,0,0.04)" stroke="rgba(255,184,0,0.12)" stroke-width="1"/>
  <text x="220" y="373" fill="rgba(255,184,0,0.5)" font-size="10" font-family="monospace">TEXT → TF-IDF → ML MODEL → CLASSIFY</text>
  <text x="400" y="425" text-anchor="middle" fill="#ffb800" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">FAKE NEWS DETECTION</text>
</svg>`)}`,

  network: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#060812"/>
  <!-- Shield -->
  <path d="M400 60 L520 110 L520 240 L400 310 L280 240 L280 110 Z" fill="rgba(0,255,204,0.03)" stroke="rgba(0,255,204,0.2)" stroke-width="2"/>
  <path d="M400 80 L500 120 L500 225 L400 280 L300 225 L300 120 Z" fill="rgba(0,255,204,0.02)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <!-- Lock -->
  <rect x="375" y="175" width="50" height="40" rx="5" fill="rgba(0,255,204,0.08)" stroke="rgba(0,255,204,0.3)" stroke-width="1.5"/>
  <path d="M385 175 V160 C385 145 395 138 400 138 C405 138 415 145 415 160 V175" fill="none" stroke="rgba(0,255,204,0.3)" stroke-width="2"/>
  <circle cx="400" cy="195" r="4" fill="#00ffcc" opacity="0.6"/>
  <!-- Threat indicators -->
  <circle cx="160" cy="100" r="6" fill="#ff4444" opacity="0.5"/><circle cx="160" cy="100" r="12" fill="none" stroke="#ff4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
  <line x1="172" y1="100" x2="280" y2="150" stroke="#ff4444" stroke-width="1" opacity="0.3" stroke-dasharray="4,4"/>
  <circle cx="640" cy="110" r="6" fill="#ff4444" opacity="0.5"/><circle cx="640" cy="110" r="12" fill="none" stroke="#ff4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
  <line x1="628" y1="110" x2="520" y2="150" stroke="#ff4444" stroke-width="1" opacity="0.3" stroke-dasharray="4,4"/>
  <circle cx="150" cy="280" r="6" fill="#ff4444" opacity="0.5"/>
  <line x1="162" y1="275" x2="280" y2="220" stroke="#ff4444" stroke-width="1" opacity="0.3" stroke-dasharray="4,4"/>
  <!-- Safe connections -->
  <circle cx="650" cy="290" r="6" fill="#00ffcc" opacity="0.5"/>
  <line x1="638" y1="285" x2="520" y2="230" stroke="#00ffcc" stroke-width="1" opacity="0.3"/>
  <circle cx="400" cy="370" r="6" fill="#00ffcc" opacity="0.5"/>
  <line x1="400" y1="358" x2="400" y2="310" stroke="#00ffcc" stroke-width="1" opacity="0.3"/>
  <!-- Stats -->
  <rect x="80" y="340" width="180" height="50" rx="8" fill="rgba(255,68,68,0.04)" stroke="rgba(255,68,68,0.1)" stroke-width="1"/>
  <text x="100" y="362" fill="#ff4444" font-size="9" font-family="monospace" opacity="0.6">THREATS BLOCKED</text>
  <text x="100" y="382" fill="#ff4444" font-size="16" font-family="sans-serif" font-weight="bold">2,847</text>
  <rect x="540" y="340" width="180" height="50" rx="8" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <text x="560" y="362" fill="#00ffcc" font-size="9" font-family="monospace" opacity="0.6">ACCURACY</text>
  <text x="560" y="382" fill="#00ffcc" font-size="16" font-family="sans-serif" font-weight="bold">96.3%</text>
  <text x="400" y="430" text-anchor="middle" fill="#00ffcc" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">NETWORK SECURITY PREDICTOR</text>
</svg>`)}`,

  cifar: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#080d22"/>
  <!-- Image grid 4x3 -->
  <g>
    <rect x="100" y="40" width="75" height="75" rx="6" fill="rgba(0,255,204,0.1)" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
    <rect x="185" y="40" width="75" height="75" rx="6" fill="rgba(255,107,53,0.1)" stroke="rgba(255,107,53,0.2)" stroke-width="1"/>
    <rect x="270" y="40" width="75" height="75" rx="6" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.2)" stroke-width="1"/>
    <rect x="355" y="40" width="75" height="75" rx="6" fill="rgba(255,184,0,0.1)" stroke="rgba(255,184,0,0.2)" stroke-width="1"/>
    <rect x="100" y="125" width="75" height="75" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" stroke-width="1"/>
    <rect x="185" y="125" width="75" height="75" rx="6" fill="rgba(255,107,157,0.1)" stroke="rgba(255,107,157,0.2)" stroke-width="1"/>
    <rect x="270" y="125" width="75" height="75" rx="6" fill="rgba(0,255,204,0.1)" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
    <rect x="355" y="125" width="75" height="75" rx="6" fill="rgba(255,68,68,0.1)" stroke="rgba(255,68,68,0.2)" stroke-width="1"/>
    <rect x="100" y="210" width="75" height="75" rx="6" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.2)" stroke-width="1"/>
    <rect x="185" y="210" width="75" height="75" rx="6" fill="rgba(255,184,0,0.1)" stroke="rgba(255,184,0,0.2)" stroke-width="1"/>
    <rect x="270" y="210" width="75" height="75" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" stroke-width="1"/>
    <rect x="355" y="210" width="75" height="75" rx="6" fill="rgba(0,255,204,0.1)" stroke="rgba(0,255,204,0.2)" stroke-width="1"/>
  </g>
  <!-- Labels -->
  <text x="137" y="85" text-anchor="middle" fill="rgba(0,255,204,0.5)" font-size="9" font-family="monospace">airplane</text>
  <text x="222" y="85" text-anchor="middle" fill="rgba(255,107,53,0.5)" font-size="9" font-family="monospace">car</text>
  <text x="307" y="85" text-anchor="middle" fill="rgba(0,212,255,0.5)" font-size="9" font-family="monospace">bird</text>
  <text x="392" y="85" text-anchor="middle" fill="rgba(255,184,0,0.5)" font-size="9" font-family="monospace">cat</text>
  <text x="137" y="170" text-anchor="middle" fill="rgba(139,92,246,0.5)" font-size="9" font-family="monospace">deer</text>
  <text x="222" y="170" text-anchor="middle" fill="rgba(255,107,157,0.5)" font-size="9" font-family="monospace">dog</text>
  <text x="307" y="170" text-anchor="middle" fill="rgba(0,255,204,0.5)" font-size="9" font-family="monospace">frog</text>
  <text x="392" y="170" text-anchor="middle" fill="rgba(255,68,68,0.5)" font-size="9" font-family="monospace">horse</text>
  <!-- Arrow to CNN -->
  <line x1="450" y1="160" x2="490" y2="160" stroke="rgba(0,255,204,0.3)" stroke-width="2"/>
  <polygon points="490,155 500,160 490,165" fill="rgba(0,255,204,0.3)"/>
  <!-- CNN layers -->
  <rect x="510" y="60" width="60" height="200" rx="6" fill="rgba(0,255,204,0.04)" stroke="rgba(0,255,204,0.15)" stroke-width="1"/>
  <text x="540" y="165" text-anchor="middle" fill="rgba(0,255,204,0.4)" font-size="9" font-family="monospace" transform="rotate(-90,540,165)">CONV2D</text>
  <rect x="580" y="80" width="50" height="160" rx="6" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.15)" stroke-width="1"/>
  <text x="605" y="165" text-anchor="middle" fill="rgba(0,212,255,0.4)" font-size="9" font-family="monospace" transform="rotate(-90,605,165)">POOL</text>
  <rect x="640" y="100" width="40" height="120" rx="6" fill="rgba(255,184,0,0.04)" stroke="rgba(255,184,0,0.15)" stroke-width="1"/>
  <text x="660" y="165" text-anchor="middle" fill="rgba(255,184,0,0.4)" font-size="9" font-family="monospace" transform="rotate(-90,660,165)">FC</text>
  <rect x="690" y="130" width="30" height="60" rx="6" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.2)" stroke-width="1"/>
  <text x="705" y="165" text-anchor="middle" fill="rgba(139,92,246,0.5)" font-size="9" font-family="monospace" transform="rotate(-90,705,165)">OUT</text>
  <!-- Accuracy -->
  <rect x="200" y="320" width="400" height="55" rx="10" fill="rgba(0,255,204,0.03)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <text x="400" y="345" text-anchor="middle" fill="rgba(0,255,204,0.6)" font-size="10" font-family="monospace">10 CLASSES · DATA AUGMENTATION · BATCH NORMALIZATION</text>
  <text x="400" y="365" text-anchor="middle" fill="#00ffcc" font-size="14" font-family="monospace" font-weight="bold">TEST ACCURACY: 92.1%</text>
  <text x="400" y="425" text-anchor="middle" fill="#00d4ff" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">CIFAR-10 IMAGE CLASSIFIER</text>
</svg>`)}`,

  weather: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#061218"/>
  <!-- Sky gradient -->
  <rect x="0" y="0" width="800" height="250" fill="url(#wsky)" opacity="0.5"/>
  <defs><linearGradient id="wsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(0,40,70,0.4)"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs>
  <!-- Sun -->
  <circle cx="600" cy="80" r="40" fill="rgba(255,184,0,0.08)" stroke="rgba(255,184,0,0.25)" stroke-width="2"/>
  <circle cx="600" cy="80" r="25" fill="rgba(255,184,0,0.15)"/>
  <circle cx="600" cy="80" r="15" fill="rgba(255,184,0,0.25)"/>
  <!-- Sun rays -->
  <line x1="600" y1="25" x2="600" y2="15" stroke="rgba(255,184,0,0.3)" stroke-width="2" stroke-linecap="round"/>
  <line x1="600" y1="135" x2="600" y2="145" stroke="rgba(255,184,0,0.3)" stroke-width="2" stroke-linecap="round"/>
  <line x1="545" y1="80" x2="535" y2="80" stroke="rgba(255,184,0,0.3)" stroke-width="2" stroke-linecap="round"/>
  <line x1="655" y1="80" x2="665" y2="80" stroke="rgba(255,184,0,0.3)" stroke-width="2" stroke-linecap="round"/>
  <!-- Cloud -->
  <ellipse cx="280" cy="90" rx="80" ry="40" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" stroke-width="1.5"/>
  <ellipse cx="340" cy="80" rx="55" ry="35" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" stroke-width="1.5"/>
  <ellipse cx="220" cy="85" rx="50" ry="30" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" stroke-width="1.5"/>
  <!-- Rain drops -->
  <line x1="230" y1="125" x2="225" y2="150" stroke="rgba(0,212,255,0.25)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="260" y1="130" x2="255" y2="155" stroke="rgba(0,212,255,0.25)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="290" y1="128" x2="285" y2="153" stroke="rgba(0,212,255,0.25)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="320" y1="125" x2="315" y2="150" stroke="rgba(0,212,255,0.25)" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Temperature chart -->
  <rect x="80" y="180" width="640" height="200" rx="10" fill="rgba(8,20,28,0.6)" stroke="rgba(0,212,255,0.08)" stroke-width="1"/>
  <!-- Grid -->
  <g stroke="rgba(0,212,255,0.04)" stroke-width="0.5">
    <line x1="80" y1="220" x2="720" y2="220"/><line x1="80" y1="260" x2="720" y2="260"/>
    <line x1="80" y1="300" x2="720" y2="300"/><line x1="80" y1="340" x2="720" y2="340"/>
  </g>
  <!-- Temperature line -->
  <polyline points="120,310 180,290 240,260 300,240 360,220 420,230 480,250 540,270 600,300 660,320" fill="none" stroke="#ffb800" stroke-width="2.5"/>
  <polyline points="120,310 180,290 240,260 300,240 360,220 420,230 480,250 540,270 600,300 660,320" fill="url(#tfill)" stroke="none"/>
  <defs><linearGradient id="tfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,184,0,0.15)"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs>
  <!-- Prediction line -->
  <polyline points="540,270 600,265 660,255 700,248" fill="none" stroke="#00ffcc" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Dot markers -->
  <circle cx="120" cy="310" r="4" fill="#ffb800"/><circle cx="240" cy="260" r="4" fill="#ffb800"/><circle cx="360" cy="220" r="4" fill="#ffb800"/>
  <circle cx="480" cy="250" r="4" fill="#ffb800"/><circle cx="600" cy="300" r="4" fill="#ffb800"/>
  <!-- Day labels -->
  <text x="120" y="370" text-anchor="middle" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace">MON</text>
  <text x="240" y="370" text-anchor="middle" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace">WED</text>
  <text x="360" y="370" text-anchor="middle" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace">FRI</text>
  <text x="480" y="370" text-anchor="middle" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace">SUN</text>
  <text x="600" y="370" text-anchor="middle" fill="rgba(0,212,255,0.3)" font-size="9" font-family="monospace">TUE</text>
  <text x="400" y="425" text-anchor="middle" fill="#00d4ff" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">WEATHER PREDICTION SYSTEM</text>
</svg>`)}`,

  article: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#060e10"/>
  <!-- Article document -->
  <rect x="80" y="40" width="340" height="340" rx="12" fill="rgba(0,30,25,0.5)" stroke="rgba(0,255,204,0.1)" stroke-width="1"/>
  <!-- Title area -->
  <rect x="100" y="60" width="260" height="14" rx="3" fill="rgba(0,255,204,0.12)"/>
  <rect x="100" y="82" width="200" height="10" rx="2" fill="rgba(0,255,204,0.06)"/>
  <!-- Article lines -->
  <rect x="100" y="110" width="300" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="124" width="280" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="138" width="290" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="152" width="260" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="166" width="300" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="180" width="240" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
  <rect x="100" y="200" width="300" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
  <rect x="100" y="214" width="270" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
  <rect x="100" y="228" width="290" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
  <rect x="100" y="242" width="250" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
  <rect x="100" y="256" width="280" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
  <!-- Highlight marks on key sentences -->
  <rect x="98" y="136" width="294" height="10" fill="rgba(0,255,204,0.06)" rx="2"/>
  <rect x="98" y="164" width="304" height="10" fill="rgba(255,184,0,0.06)" rx="2"/>
  <rect x="98" y="198" width="304" height="10" fill="rgba(0,212,255,0.06)" rx="2"/>
  <!-- Arrow -->
  <line x1="440" y1="200" x2="480" y2="200" stroke="rgba(0,255,204,0.3)" stroke-width="2"/>
  <polygon points="480,195 490,200 480,205" fill="rgba(0,255,204,0.3)"/>
  <!-- Summary output -->
  <rect x="500" y="40" width="220" height="160" rx="12" fill="rgba(0,30,25,0.5)" stroke="rgba(0,255,204,0.15)" stroke-width="1"/>
  <text x="520" y="65" fill="#00ffcc" font-size="10" font-family="monospace" font-weight="bold" opacity="0.7">SUMMARY</text>
  <rect x="520" y="80" width="180" height="6" rx="2" fill="rgba(0,255,204,0.1)"/>
  <rect x="520" y="94" width="160" height="6" rx="2" fill="rgba(0,255,204,0.08)"/>
  <rect x="520" y="108" width="170" height="6" rx="2" fill="rgba(0,255,204,0.08)"/>
  <rect x="520" y="122" width="140" height="6" rx="2" fill="rgba(0,255,204,0.06)"/>
  <rect x="520" y="145" width="80" height="14" rx="4" fill="rgba(0,255,204,0.1)"/>
  <text x="560" y="156" text-anchor="middle" fill="#00ffcc" font-size="8" font-family="monospace" opacity="0.6">75% shorter</text>
  <!-- Sentiment output -->
  <rect x="500" y="220" width="220" height="160" rx="12" fill="rgba(0,30,25,0.5)" stroke="rgba(255,184,0,0.15)" stroke-width="1"/>
  <text x="520" y="245" fill="#ffb800" font-size="10" font-family="monospace" font-weight="bold" opacity="0.7">SENTIMENT</text>
  <!-- Sentiment bars -->
  <text x="520" y="275" fill="rgba(0,255,204,0.5)" font-size="9" font-family="monospace">Positive</text>
  <rect x="520" y="280" width="180" height="10" rx="3" fill="rgba(0,255,204,0.08)"/><rect x="520" y="280" width="130" height="10" rx="3" fill="rgba(0,255,204,0.25)"/>
  <text x="520" y="308" fill="rgba(255,184,0,0.5)" font-size="9" font-family="monospace">Neutral</text>
  <rect x="520" y="313" width="180" height="10" rx="3" fill="rgba(255,184,0,0.08)"/><rect x="520" y="313" width="80" height="10" rx="3" fill="rgba(255,184,0,0.25)"/>
  <text x="520" y="341" fill="rgba(255,68,68,0.5)" font-size="9" font-family="monospace">Negative</text>
  <rect x="520" y="346" width="180" height="10" rx="3" fill="rgba(255,68,68,0.08)"/><rect x="520" y="346" width="40" height="10" rx="3" fill="rgba(255,68,68,0.25)"/>
  <text x="400" y="425" text-anchor="middle" fill="#00ffcc" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="2">ARTICLE ANALYZER</text>
</svg>`)}`,
}
