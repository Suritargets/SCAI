"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MAIN_NAV = [
  { label: "SCAI", href: "/" },
  { label: "Members", href: "/lidmaatschap" },
  { label: "Training and Events", href: "/training" },
  { label: "Rules and Regulations", href: "/rules" },
  { label: "Newsroom", href: "/newsroom" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: "#1565C0", padding: "7px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Left: contact info */}
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="tel:+5978955707" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.78rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: "0.75rem" }}>📞</span> +5978955707
            </a>
            <a href="mailto:info@scai.sr" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.78rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: "0.75rem" }}>✉</span> info@scai.sr
            </a>
          </div>
          {/* Right: quick links + social */}
          <div className="hide-mobile" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {[
              { label: "Home", href: "/" },
              { label: "About us", href: "/over-ons" },
              { label: "Contact us", href: "/contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                color: "rgba(255,255,255,0.85)", fontSize: "0.75rem",
                textDecoration: "none", transition: "color 0.2s",
                fontWeight: pathname === l.href ? 700 : 400,
              }}>
                {l.label}
              </Link>
            ))}
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginLeft: 8 }}>
              <a href="https://www.facebook.com/SCAI.sr" target="_blank" rel="noreferrer" style={{
                width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: "0.7rem", textDecoration: "none",
              }}>f</a>
              <a href="https://www.linkedin.com/groups/4323800/" target="_blank" rel="noreferrer" style={{
                width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: "0.65rem", textDecoration: "none",
              }}>in</a>
              <a href="mailto:info@scai.sr" style={{
                width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: "0.7rem", textDecoration: "none",
              }}>✉</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div style={{
        background: scrolled ? "rgba(255,255,255,0.98)" : "white",
        borderBottom: "1px solid #E5EBF5",
        boxShadow: scrolled ? "0 2px 16px rgba(43,57,144,0.10)" : "0 1px 4px rgba(0,0,0,0.05)",
        transition: "all 0.3s",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="SCAI Logo" style={{ height: 40, width: "auto", objectFit: "contain" }} />
          </Link>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {MAIN_NAV.map(l => (
              <Link key={l.href} href={l.href} style={{
                color: pathname === l.href ? "#1565C0" : "#374151",
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: pathname === l.href ? 700 : 600,
                padding: "4px 0",
                position: "relative",
                transition: "color 0.2s",
                borderBottom: pathname === l.href ? "2px solid #1565C0" : "2px solid transparent",
              }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 22, height: 2, background: "#2B3990", margin: "5px 0", transition: "all 0.3s",
                transform: i === 0 && menuOpen ? "rotate(45deg) translate(5px, 5px)" :
                           i === 2 && menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid #E5EBF5", padding: "16px 32px" }}>
            {MAIN_NAV.map(l => (
              <div key={l.href} style={{ padding: "10px 0", borderBottom: "1px solid #F3F4F6" }}>
                <Link href={l.href} onClick={() => setMenuOpen(false)} style={{
                  color: "#374151", textDecoration: "none", fontSize: "0.85rem",
                  fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

    </header>
  );
}
