import { useState, useEffect } from "react";
import logoImg from "../assets/Untitled (1).png"; 
import ecoImg from "../assets/Adobe Express - file (4).png";

const leafSVG = (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <circle cx="100" cy="100" r="95" fill="#d4edda" opacity="0.35"/>
    <ellipse cx="85" cy="120" rx="70" ry="75" fill="#7ec850" opacity="0.18" transform="rotate(-15 85 120)"/>
    <path d="M40 160 Q80 60 170 50 Q160 140 40 160Z" fill="#4a7b24" opacity="0.13"/>
  </svg>
);

const WindmillIcon = () => (
  <svg width="38" height="60" viewBox="0 0 38 60" fill="none">
    <rect x="17" y="20" width="4" height="38" rx="2" fill="#568730"/>
    <ellipse cx="19" cy="20" rx="3" ry="3" fill="#4a7b24"/>
    <path d="M19 17 L14 5 L19 10 L24 5 Z" fill="#7ec850" opacity="0.85"/>
    <path d="M22 19 L34 14 L29 19 L34 24 Z" fill="#7ec850" opacity="0.85"/>
    <path d="M16 21 L4 26 L9 21 L4 16 Z" fill="#7ec850" opacity="0.85"/>
  </svg>
);

const SolarIcon = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
    <rect x="2" y="10" width="56" height="28" rx="3" fill="#b8d4f0" stroke="#568730" strokeWidth="1.5"/>
    <line x1="20" y1="10" x2="20" y2="38" stroke="#568730" strokeWidth="1"/>
    <line x1="40" y1="10" x2="40" y2="38" stroke="#568730" strokeWidth="1"/>
    <line x1="2" y1="24" x2="58" y2="24" stroke="#568730" strokeWidth="1"/>
  </svg>
);

export default function EcoTracker() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{fontFamily:"'Georgia', serif", minHeight:"100vh", background:"#f4fbe8", overflowX:"hidden"}}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Crete+Round:ital@0;1&family=Electrolize&family=Contrail+One&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { overflow-x: hidden; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLeaf {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50%      { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes spinBlade {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
          @keyframes floatSlow {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(238,127,42,0.45); }
          50%      { box-shadow: 0 0 0 14px rgba(238,127,42,0); }
        }
        @keyframes sunPulse {
          0%,100% { filter: drop-shadow(0 0 8px #ffe066); }
          50%      { filter: drop-shadow(0 0 22px #ffb700); }
        }
        @keyframes slideIn {
          from { opacity:0; transform: translateX(40px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes bgMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-link {
          color: #10490a;
          text-decoration: none;
          font-family: 'Contrail One', sans-serif;
          font-size: 18px;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover { color: #EE7F2A; }

        .cta-btn {
          background: #EE7F2A;
          color: #fff;
          font-family: 'Archivo Black', sans-serif;
          font-size: 20px;
          border: none;
          border-radius: 8px;
          padding: 14px 38px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(238,127,42,0.35);
          animation: glowPulse 2.2s infinite;
          transition: transform 0.18s, background 0.18s;
          letter-spacing: 0.5px;
        }
        .cta-btn:hover {
          background: #d96a13;
          transform: scale(1.06) translateY(-2px);
        }

        .feature-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 4px 24px rgba(86,135,48,0.10);
          border: 1.5px solid #d4edba;
          transition: transform 0.22s, box-shadow 0.22s;
          flex: 1;
          min-width: 200px;
        }
        .feature-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 12px 36px rgba(86,135,48,0.18);
        }

        .stat-num {
          font-family: 'Archivo Black', sans-serif;
          font-size: 42px;
          color: #4a7b24;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Electrolize', sans-serif;
          color: #1D5211;
          font-size: 15px;
          margin-top: 6px;
        }

        .blade-group {
          transform-origin: 19px 20px;
          animation: spinBlade 5s linear infinite;
        }

        .sun-icon { animation: sunPulse 2.8s ease-in-out infinite; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: scrolled ? "rgba(244,251,232,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(86,135,48,0.10)" : "none",
        transition: "all 0.35s",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 48px", height:"72px"
      }}>
        {/* Logo */}
        <div style={{display:"flex", alignItems:"center", gap:10}}>
  <img 
  src={logoImg}
  alt="Logo"
  style={{
    width: 150,
    height: 200,
    objectFit: "contain",
    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))"
  }}
/>

          <span style={{fontFamily:"'Archivo Black',sans-serif", fontSize:26, color:"#568730", letterSpacing:"-0.5px"}}>
            EcoTracker
          </span>
        </div>

        {/* Desktop links */}
        <div style={{display:"flex", gap:36, alignItems:"center"}}>
        <a className="nav-link" style={{color:"#10490a", fontWeight:700}}>Login</a>
          
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight:"100vh",
        display:"flex", alignItems:"center",
        padding:"0 48px",
        paddingTop:"72px",
        position:"relative",
        overflow:"hidden",
        background:"linear-gradient(135deg, #f4fbe8 0%, #e8f5d0 55%, #d4edba 100%)",
        backgroundSize:"200% 200%",
        animation:"bgMove 12s ease infinite"
      }}>

        {/* Decorative blobs */}
        <div style={{
          position:"absolute", top:"-80px", right:"-80px",
          width:500, height:500,
          background:"radial-gradient(circle, rgba(126,200,80,0.18) 0%, transparent 70%)",
          pointerEvents:"none"
        }}/>
        <div style={{
          position:"absolute", bottom:"-60px", left:"35%",
          width:380, height:380,
          background:"radial-gradient(circle, rgba(238,127,42,0.08) 0%, transparent 70%)",
          pointerEvents:"none"
        }}/>

        {/* Left: Illustration area */}
        <div style={{
          flex:"0 0 480px", position:"relative", height:460,
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp 0.9s ease both" : "none"
        }}>
          <img 
  src={ecoImg}
  alt="Eco Illustration"
  style={{
    position: "absolute",
    top: 10,
    left: 0,
    width: 420,
    height: 420,
    objectFit: "contain",
    zIndex: 1,
    borderRadius: "20px",
    boxShadow: "0 25px 70px rgba(0,0,0,0.2)"
  }}
/>

          

          

          {/* Windmills */}
          <div style={{
  position:"absolute",
  bottom:40,
  left:260,
  zIndex:3,
  display:"flex",
  gap:16,
  opacity:0.8,
  transform:"scale(0.8)"
}}>
           {[0,1,2].map(i=>(
  <div 
    key={i} 
    style={{
      transform:`scale(${0.7+i*0.12})`,
      animation:"floatSlow 4s ease-in-out infinite"
    }}
  >
                <svg width="38" height="60" viewBox="0 0 38 60" fill="none">
                  <rect x="17" y="20" width="4" height="38" rx="2" fill="#A0740C"/>
                  <ellipse cx="19" cy="20" rx="3" ry="3" fill="#AD7E0B"/>
                  <g className="blade-group" style={{animationDuration:`${4+i*0.7}s`}}>
                    <path d="M19 17 L14 5 L19 10 L24 5 Z" fill="#FFC844" opacity="0.9"/>
                    <path d="M22 19 L34 14 L29 19 L34 24 Z" fill="#FFC844" opacity="0.9"/>
                    <path d="M16 21 L4 26 L9 21 L4 16 Z" fill="#FFC844" opacity="0.9"/>
                  </g>
                </svg>
              </div>
            ))}
          </div>

        
        </div>

        {/* Right: Text content */}
        <div style={{
          flex:1, paddingLeft:70,
          opacity: visible ? 1 : 0,
          animation: visible ? "slideIn 0.95s 0.2s ease both" : "none"
        }}>
          <div style={{
            display:"inline-block",
            background:"rgba(86,135,48,0.10)",
            borderRadius:40, padding:"6px 20px", marginBottom:18
          }}>
            <span style={{
              fontFamily:"'Electrolize', sans-serif",
              fontSize:14, color:"#4a7b24", letterSpacing:"1.5px", textTransform:"uppercase"
            }}>
              🌿 Sustainability Platform
            </span>
          </div>

          <h1 style={{
            fontFamily:"'Crete Round', serif",
            fontWeight:400,
            fontSize:"clamp(44px,5.5vw,88px)",
            lineHeight:1.08,
            color:"#15411B",
            marginBottom:20,
            maxWidth:680
          }}>
            Reduce Your<br/>
            <span style={{color:"#568730"}}>Carbon</span> Footprint
          </h1>

          <p style={{
            fontFamily:"'Electrolize', sans-serif",
            fontSize:"clamp(17px,2vw,24px)",
            color:"#1D5211",
            marginBottom:40,
            maxWidth:540,
            lineHeight:1.6
          }}>
            Take control of your emissions and live sustainably.<br/>
            Track, reduce, and offset your environmental impact.
          </p>

          {/* CTA Card */}
          <div style={{
            display:"inline-flex",
            flexDirection:"column",
            alignItems:"center",
            gap:16,
            background:"rgba(74,123,36,0.92)",
            borderRadius:24,
            padding:"28px 48px",
            boxShadow:"inset 0 4px 8px rgba(0,0,0,0.18), 0 8px 32px rgba(74,123,36,0.22)"
          }}>
            <p style={{
              fontFamily:"'Crete Round', serif",
              fontStyle:"italic",
              fontSize:20,
              color:"#e8f5d0",
              marginBottom:4,
              letterSpacing:"0.3px"
            }}>
              Help Us in making a difference
            </p>
            <button className="cta-btn" style={{fontSize:20, padding:"14px 44px"}}>
              Sign up Now →
            </button>
          </div>
        </div>
      </section>


 

      {/* FOOTER */}
      <footer style={{
        background:"#15411B", color:"#d4edba",
        padding:"32px 64px",
        display:"flex", justifyContent:"space-between", alignItems:"center"
      }}>
        <span style={{fontFamily:"'Archivo Black',sans-serif", fontSize:20, color:"#7ec850"}}>
          EcoTracker
        </span>
        <span style={{fontFamily:"'Electrolize',sans-serif", fontSize:13, opacity:0.65}}>
          © 2026 EcoTracker. Building a greener tomorrow.
        </span>
        <div style={{display:"flex", gap:20}}>
          {["Privacy","Terms","Contact"].map(l=>(
            <a key={l} className="nav-link" style={{color:"#d4edba", fontSize:14}}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
