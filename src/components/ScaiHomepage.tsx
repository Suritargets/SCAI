"use client";

import { useState, useEffect } from "react";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Over Ons", href: "#about" },
  { label: "Lidmaatschap", href: "#membership" },
  { label: "Committees", href: "#committees" },
  { label: "Newsroom", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "2007", label: "Opgericht" },
  { value: "IFAC", label: "Associate Lid" },
  { value: "ICAC", label: "Volledig Lid" },
  { value: "ISA", label: "Standaarden" },
];

const NEWS = [
  {
    date: "Oktober 2021",
    category: "Internationaal",
    title: "IPSASB verwelkomt IFAC Aanbevelingen",
    excerpt: "Het International Public Sector Accounting Standards Board heeft de IFAC-publicatie verwelkomd met 22 beleidsaanbevelingen voor de G20.",
  },
  {
    date: "Oktober 2018",
    category: "Wetgeving",
    title: "Wet SCAI aangenomen door DNA",
    excerpt: "In de Parlementaire vergadering van 2 oktober 2018 is de Wet op het Suriname Chartered Accountants Institute (SB 2018 no 92) aangenomen.",
  },
  {
    date: "2024",
    category: "Opleiding",
    title: "CA-Opleiding 2024 Promotie",
    excerpt: "SCAI feliciteert de nieuwe lichting Chartered Accountants die hun opleiding succesvol hebben afgerond.",
  },
];

const MANDATES = [
  { icon: "📋", title: "Register", desc: "Bijhouden van een register van leden" },
  { icon: "🪪", title: "Licenties", desc: "Uitreiken van audit- en CA-licenties" },
  { icon: "📚", title: "CPD", desc: "Vaststellen van permanente educatievereisten" },
  { icon: "⚖️", title: "Standaarden", desc: "Adoptie van accountancy- en auditstandaarden" },
  { icon: "🤝", title: "Ethiek", desc: "Vaststellen van ethische vereisten" },
  { icon: "🔍", title: "Kwaliteit", desc: "Verplicht kwaliteitsborgingssysteem" },
];

const MEMBERS = [
  { firstName: "Susan", name: "Trott", title: "CA", title2: "RA", gender: "F", organization: "Exlent Accountancy & Finance Services N.V.", scaiNo: "SCAI 20-001", regDate: "21.02.2020" },
  { firstName: "Jasna", name: "Kortram", title: "CA", title2: "RA", gender: "F", organization: "ZANDAKA", scaiNo: "SCAI 20-002", regDate: "21.02.2020" },
  { firstName: "Robin", name: "Ferrier", title: "CA", title2: "RA", gender: "M", organization: "BDO Suriname", scaiNo: "SCAI 20-003", regDate: "21.02.2020" },
  { firstName: "Michael", name: "Lutchman", title: "CA", title2: "RA", gender: "M", organization: "Lutchman & Co.", scaiNo: "SCAI 20-004", regDate: "21.02.2020" },
  { firstName: "Wendel", name: "Achthoven", title: "CA", title2: "RA", gender: "M", organization: "BDO Suriname", scaiNo: "SCAI 20-005", regDate: "21.02.2020" },
  { firstName: "Michel", name: "Brahim", title: "CA", title2: "RA", gender: "M", organization: "Brahim & Partners Accountants N.V.", scaiNo: "SCAI 20-006", regDate: "21.02.2020" },
  { firstName: "Werner", name: "Sheoratan", title: "CA", title2: "RA", gender: "M", organization: "Sheoratan Register Accountants N.V.", scaiNo: "SCAI 20-008", regDate: "21.02.2020" },
  { firstName: "Marguerite", name: "Chehin - Tjong A Hung", title: "CA", title2: "RA", gender: "F", organization: "Tjong A Hung Accountants N.V.", scaiNo: "SCAI 20-009", regDate: "21.02.2020" },
  { firstName: "Gerry", name: "Liauw Kie Fa", title: "CA", title2: "RA", gender: "M", organization: "Assuria Verzekeringen", scaiNo: "SCAI 20-010", regDate: "21.02.2020" },
  { firstName: "Cyril", name: "Soeri", title: "CA", title2: "MA, RA, CISA, CIS LI, CEH", gender: "M", organization: "SOKA Accounting Services N.V.", scaiNo: "SCAI 20-011", regDate: "21.02.2020" },
  { firstName: "Keshwar", name: "Baldewpersad Tewarie", title: "CA", title2: "RA", gender: "M", organization: "T&H Groep Accountants & Belasting Adviseurs", scaiNo: "SCAI 20-012", regDate: "21.02.2020" },
  { firstName: "Nico", name: "Veerman", title: "CA", title2: "RA", gender: "M", organization: "BDO Suriname", scaiNo: "SCAI 20-013", regDate: "21.02.2020" },
  { firstName: "Derick", name: "Keyzer, de", title: "CA", title2: "AA", gender: "M", organization: "Lutchman & Co.", scaiNo: "SCAI 20-014", regDate: "21.02.2020" },
  { firstName: "Romeo", name: "Burgos", title: "CA", title2: "RA", gender: "M", organization: "Crowe Burgos Accountants N.V.", scaiNo: "SCAI 20-015", regDate: "21.02.2020" },
  { firstName: "Chantal", name: "Kenswil", title: "CA", title2: "RA", gender: "F", organization: "Kenswil Accountants", scaiNo: "SCAI 20-016", regDate: "21.02.2020" },
  { firstName: "Derek", name: "Emanuels", title: "CA", title2: "RA", gender: "M", organization: "EMA Accountants N.V.", scaiNo: "SCAI 20-017", regDate: "21.02.2020" },
  { firstName: "Ashwin", name: "Doerga", title: "CA", title2: "RA", gender: "M", organization: "Grant Thornton Suriname", scaiNo: "SCAI 20-018", regDate: "21.02.2020" },
  { firstName: "Daniëlla", name: "Ritfeld", title: "CA", title2: "AA", gender: "F", organization: "Centrale Landsaccountantsdienst CLAD", scaiNo: "SCAI 20-019", regDate: "21.02.2020" },
  { firstName: "Charmaine", name: "Felter", title: "CA", title2: "AA", gender: "F", organization: "Centrale Landsaccountantsdienst CLAD", scaiNo: "SCAI 20-020", regDate: "21.02.2020" },
  { firstName: "Robert", name: "Sobhie", title: "CA", title2: "AA", gender: "M", organization: "Sobhie Accountants & Belasting Adviseurs", scaiNo: "SCAI 20-021", regDate: "21.02.2020" },
  { firstName: "Ricardo", name: "Sobhie", title: "CA", title2: "AA", gender: "M", organization: "Sobhie Accountants & Belasting Adviseurs", scaiNo: "SCAI 20-022", regDate: "21.02.2020" },
  { firstName: "Samantha", name: "Huur", title: "CA", title2: "RA", gender: "F", organization: "Exlent Accountancy & Finance Services N.V.", scaiNo: "SCAI 20-023", regDate: "21.02.2020" },
  { firstName: "Christine", name: "Amatali", title: "CA", title2: "RA", gender: "F", organization: "Amatali Consulting", scaiNo: "SCAI 20-024", regDate: "21.02.2020" },
  { firstName: "Kirtie", name: "Algoe", title: "CA", title2: "RA, ACCA", gender: "F", organization: "Algoe Accountants & Advisory", scaiNo: "SCAI 21-001", regDate: "01.10.2021" },
  { firstName: "Priscilla", name: "Herkul", title: "CA", title2: "AA", gender: "F", organization: "IJssel Accountants N.V.", scaiNo: "SCAI 21-003", regDate: "01.10.2021" },
  { firstName: "Glenn", name: "Chandansingh", title: "CA", title2: "AA", gender: "M", organization: "IJssel Accountants N.V.", scaiNo: "SCAI 21-005", regDate: "01.10.2021" },
  { firstName: "Maureen", name: "Voorn", title: "CA", title2: "AA", gender: "F", organization: "Centrale Landsaccountantsdienst CLAD", scaiNo: "SCAI 21-006", regDate: "01.10.2021" },
  { firstName: "Ajay", name: "Mohanlal", title: "CA", title2: "RA", gender: "M", organization: "ICS Accountancy & Risk Consultancy", scaiNo: "SCAI 21-002", regDate: "01.10.2021" },
  { firstName: "Tjandermohan", name: "Ramdajal", title: "CA", title2: "AA", gender: "M", organization: "", scaiNo: "SCAI 21-004", regDate: "01.10.2021" },
  { firstName: "Rachel", name: "Draaijer - Chin A Joe", title: "CA", title2: "CFE, FCCA", gender: "F", organization: "Shyamnarain Associates", scaiNo: "SCAI 21-007", regDate: "01.11.2021" },
  { firstName: "Marc", name: "Lie-Kwie", title: "CA", title2: "RA", gender: "M", organization: "Maxarah N.V.", scaiNo: "SCAI 21-008", regDate: "01.11.2021" },
  { firstName: "Reggy", name: "Resida", title: "CA", title2: "AA", gender: "F", organization: "Ministerie van Financiën & Planning", scaiNo: "SCAI 22-009", regDate: "21.09.2022" },
  { firstName: "Navin", name: "Gangaram Panday", title: "CA", title2: "CPA/CFE", gender: "F", organization: "Reliant Corporate Finance & Accountancy (RCFA)", scaiNo: "SCAI 21-035", regDate: "21.09.2022" },
  { firstName: "Guillaume", name: "Vliet", title: "CA", title2: "RA", gender: "M", organization: "VLIET Accountants & Consultants", scaiNo: "SCAI 23-001", regDate: "30.08.2023" },
  { firstName: "Madhavi", name: "Gangaram Panday", title: "CA", title2: "CPA", gender: "F", organization: "Reliant Corporate Finance & Accountancy (RCFA)", scaiNo: "SCAI 23-002", regDate: "16.10.2023" },
  { firstName: "Joy", name: "Maikoe", title: "CA", title2: "RA", gender: "M", organization: "MAIKOE x MAIKOE N.V.", scaiNo: "SCAI 24-001", regDate: "22.02.2024" },
  { firstName: "Anita", name: "Kowlesar", title: "CA", title2: "AA", gender: "F", organization: "Hakrinbank N.V.", scaiNo: "SCAI 24-002", regDate: "22.02.2024" },
  { firstName: "Susan", name: "Calor", title: "CA", title2: "AA", gender: "F", organization: "Centrale Landsaccountantsdienst CLAD", scaiNo: "SCAI 24-003", regDate: "22.02.2024" },
  { firstName: "Geeta", name: "Nandelal", title: "CA", title2: "AA", gender: "F", organization: "Ministerie van Financiën & Planning", scaiNo: "SCAI 24-004", regDate: "22.02.2024" },
  { firstName: "Danisha", name: "Algoe", title: "CA", title2: "AA", gender: "F", organization: "EMA Accountants N.V.", scaiNo: "SCAI 24-005", regDate: "22.02.2024" },
  { firstName: "Priya", name: "Sheonarain", title: "CA", title2: "AA", gender: "F", organization: "Shyamnarain Associates", scaiNo: "SCAI 24-006", regDate: "22.02.2024" },
  { firstName: "Giselle", name: "Amsterdam", title: "CA", title2: "AA, ACCA", gender: "F", organization: "Centrale Landsaccountantsdienst CLAD", scaiNo: "SCAI 25-001", regDate: "14.10.2025" },
  { firstName: "Nivedita", name: "Mattai", title: "CA", title2: "AA", gender: "F", organization: "Sobhie Accountants & Belasting Adviseurs", scaiNo: "SCAI 25-002", regDate: "14.10.2025" },
  { firstName: "Anouschka", name: "Hoost", title: "CA", title2: "ACCA", gender: "F", organization: "Crowe Burgos Accountants N.V.", scaiNo: "SCAI 25-003", regDate: "14.10.2025" },
  { firstName: "Warda", name: "Karijomenawi", title: "CA", title2: "AA", gender: "F", organization: "WK Accountancy & Consultancy", scaiNo: "SCAI 25-004", regDate: "14.10.2025" },
  { firstName: "Rowelyn", name: "Bautista", title: "CA", title2: "CPA, MBA, FCCA", gender: "F", organization: "SABI Business Group", scaiNo: "SCAI 25-009", regDate: "14.10.2025" },
  { firstName: "Ranjni", name: "Jalimsing", title: "CA", title2: "AA", gender: "F", organization: "BDO Suriname", scaiNo: "SCAI 25-010", regDate: "14.10.2025" },
  { firstName: "Winston", name: "Limon", title: "CA", title2: "RA", gender: "M", organization: "Grant Thornton Suriname", scaiNo: "SCAI 26-001", regDate: "08.01.2026" },
  { firstName: "Keoma", name: "Jungerman", title: "CA", title2: "ACCA", gender: "M", organization: "Keoma Jungerman Consulting N.V.", scaiNo: "SCAI 26-002", regDate: "23.01.2026" },
  { firstName: "Angelique", name: "Webers", title: "CA", title2: "RA", gender: "F", organization: "Webers Accountants- en Adviesbureau", scaiNo: "SCAI 26-003", regDate: "23.01.2026" },
];

// SCAI Brand colors from logo
const C = {
  lightBlue: "#00AEEF",
  darkBlue: "#2B3990",
  midBlue: "#0075BE",
  bg: "#f8fafd",
  bgAlt: "#eef4fb",
  text: "#111827",
  textMuted: "#4B5563",
  white: "#ffffff",
};

export default function SCAIWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [memberSearch, setMemberSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease both; }
        .slide-in { animation: slideIn 0.5s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 6px 0;
          position: relative;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #00AEEF; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #00AEEF;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .btn-primary {
          background: linear-gradient(135deg, #00AEEF, #0075BE);
          color: white;
          border: none;
          padding: 13px 30px;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 3px;
          box-shadow: 0 2px 12px rgba(0,174,239,0.25);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,174,239,0.35); }
        .btn-dark {
          background: linear-gradient(135deg, #2B3990, #1a2460);
          color: white;
          border: none;
          padding: 13px 30px;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 3px;
        }
        .btn-dark:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(43,57,144,0.35); }
        .btn-outline {
          background: transparent;
          color: #00AEEF;
          border: 2px solid #00AEEF;
          padding: 11px 28px;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 3px;
        }
        .btn-outline:hover { background: #00AEEF; color: white; }
        .btn-outline-white {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.5);
          padding: 11px 28px;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 3px;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.15); border-color: white; }
        .card {
          background: white;
          border-radius: 8px;
          border: 1px solid #E5EBF5;
          padding: 32px;
          transition: box-shadow 0.3s, transform 0.3s;
          box-shadow: 0 1px 4px rgba(43,57,144,0.06);
        }
        .card:hover { box-shadow: 0 8px 32px rgba(43,57,144,0.12); transform: translateY(-3px); }
        .news-card {
          background: white;
          border-radius: 8px;
          border: 1px solid #E5EBF5;
          border-left: 4px solid #00AEEF;
          padding: 28px 32px;
          transition: box-shadow 0.3s, transform 0.2s;
          cursor: pointer;
        }
        .news-card:hover { box-shadow: 0 4px 20px rgba(43,57,144,0.10); transform: translateX(4px); }
        .container { max-width: 1160px; margin: 0 auto; padding: 0 32px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 900px) {
          .grid-2 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr 1fr; }
          .grid-4 { grid-template-columns: 1fr 1fr; }
          .hide-mobile { display: none !important; }
          .hero-title { font-size: 2.6rem !important; }
          .hero-sub { font-size: 0.95rem !important; }
        }
        @media (max-width: 600px) {
          .grid-3 { grid-template-columns: 1fr; }
          .container { padding: 0 16px; }
          section { padding: 52px 0 !important; }
        }
        .tag {
          display: inline-block;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 4px 12px;
          background: #EBF5FD;
          color: #0075BE;
          border-radius: 2px;
        }
        .tag-dark {
          display: inline-block;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 4px 12px;
          background: rgba(0,174,239,0.15);
          color: #00AEEF;
          border-radius: 2px;
        }
        .accent-line { width: 44px; height: 3px; background: linear-gradient(90deg, #00AEEF, #2B3990); border-radius: 2px; margin: 16px 0 24px; }
        .accent-line-center { margin: 16px auto 24px; }
        input, textarea {
          width: 100%;
          border: 1.5px solid #D1D5DB;
          padding: 11px 14px;
          font-size: 0.92rem;
          background: white;
          outline: none;
          border-radius: 4px;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        input:focus, textarea:focus { border-color: #00AEEF; box-shadow: 0 0 0 3px rgba(0,174,239,0.12); }
        label {
          display: block;
          font-size: 0.73rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-weight: 600;
          color: #6B7280;
          margin-bottom: 6px;
        }
        section { padding: 80px 0; }
        .hero-gradient {
          background: linear-gradient(145deg, #0d1f5c 0%, #2B3990 40%, #0075BE 75%, #00AEEF 100%);
        }
        .glass-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
        }
        .mandate-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        footer a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: #00AEEF; }
        .stat-border { border-right: 1px solid rgba(255,255,255,0.12); }
        @media (max-width: 600px) { .stat-border { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); } }
        .modal-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0,0,0,0.55); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.2s ease;
          padding: 24px;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-box {
          background: white; border-radius: 14px; width: 100%; max-width: 900px;
          max-height: 85vh; display: flex; flex-direction: column;
          box-shadow: 0 24px 80px rgba(0,0,0,0.25);
          animation: modalSlide 0.3s ease;
        }
        @keyframes modalSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .modal-header {
          padding: 28px 32px 20px; border-bottom: 1px solid #E5EBF5;
          display: flex; justify-content: space-between; align-items: center;
        }
        .modal-body { overflow-y: auto; padding: 0; flex: 1; }
        .modal-close {
          width: 36px; height: 36px; border-radius: 8px; border: 1px solid #E5EBF5;
          background: white; cursor: pointer; display: flex; align-items: center;
          justify-content: center; font-size: 1.1rem; color: #6B7280; transition: all 0.2s;
        }
        .modal-close:hover { background: #f3f4f6; color: #111; }
        .member-row {
          display: grid; grid-template-columns: 1fr 1fr 100px;
          padding: 16px 32px; border-bottom: 1px solid #f3f4f6;
          transition: background 0.15s; cursor: default;
        }
        .member-row:hover { background: #f8fafd; }
        .search-input {
          width: 100%; border: 1.5px solid #E5EBF5; border-radius: 8px;
          padding: 10px 14px 10px 38px; font-size: 0.9rem; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; background: #f8fafd;
        }
        .search-input:focus { border-color: #00AEEF; box-shadow: 0 0 0 3px rgba(0,174,239,0.1); background: white; }
        @media (max-width: 600px) {
          .member-row { grid-template-columns: 1fr; gap: 4px; }
          .modal-header { padding: 20px 16px 16px; }
          .member-row { padding: 14px 16px; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid #E5EBF5" : "1px solid transparent",
        transition: "all 0.3s",
        boxShadow: scrolled ? "0 2px 20px rgba(43,57,144,0.08)" : "none",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          {/* REAL LOGO */}
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => scrollTo("#home")}>
            <img
              src={"/logo.png"}
              alt="SCAI Logo"
              style={{ height: 38, width: "auto", objectFit: "contain" }}
            />
          </div>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <span key={l.href} className="nav-link" onClick={() => scrollTo(l.href)}>{l.label}</span>
            ))}
          </nav>

          <button className="btn-primary hide-mobile" onClick={() => scrollTo("#membership")}>Word Lid</button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
            className="show-mobile">
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
          <div style={{ background: "white", borderTop: "1px solid #E5EBF5", padding: "20px 32px" }}>
            {NAV_LINKS.map(l => (
              <div key={l.href} style={{ padding: "11px 0", borderBottom: "1px solid #F3F4F6" }}>
                <span className="nav-link" onClick={() => scrollTo(l.href)}>{l.label}</span>
              </div>
            ))}
            <button className="btn-primary" style={{ marginTop: 20, width: "100%" }} onClick={() => scrollTo("#membership")}>Word Lid</button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="hero-gradient" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: 70,
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", top: "18%", right: "12%", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-60px", width: 300, height: 300, borderRadius: "50%", background: "rgba(0,174,239,0.06)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "80px 32px" }}>
          {/* Logo in hero */}
          <div className="fade-up" style={{ marginBottom: 40 }}>
            <img
              src={"/logo.png"}
              alt="SCAI"
              style={{ height: 56, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div style={{ maxWidth: 660 }}>
            <div className="fade-up d1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
                Suriname Chartered Accountants Institute
              </span>
            </div>

            <h1 className="fade-up d2 hero-title" style={{
              fontSize: "3.8rem", fontWeight: 700, color: "white",
              lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              De autoriteit in<br />
              <span style={{ color: "#00AEEF" }}>accountancy</span><br />
              in Suriname
            </h1>

            <p className="fade-up d3 hero-sub" style={{
              color: "rgba(255,255,255,0.75)", fontSize: "1.05rem",
              lineHeight: 1.75, marginBottom: 44, maxWidth: 520, fontWeight: 300,
            }}>
              SCAI beschermt het accountantsberoep en verbetert de kwaliteit van de
              professie in overeenstemming met internationale standaarden.
            </p>

            <div className="fade-up d4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("#about")}>Meer Over SCAI</button>
              <button className="btn-outline-white" onClick={() => scrollTo("#membership")}>Word Lid</button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "24px 0",
        }}>
          <div className="container">
            <div className="grid-4">
              {STATS.map((s, i) => (
                <div key={i} className={i < 3 ? "stat-border" : ""} style={{ textAlign: "center", padding: "0 20px" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#00AEEF", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVER ONS ── */}
      <section id="about" style={{ background: C.bg }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <span className="tag">Over SCAI</span>
              <div className="accent-line" />
              <h2 style={{ fontSize: "2.1rem", fontWeight: 700, lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.02em" }}>
                Een instituut van <span style={{ color: "#2B3990" }}>publiek belang</span>
              </h2>
              <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: 18, fontSize: "0.95rem" }}>
                Het Suriname Chartered Accountants Institute (SCAI) is een publiekrechtelijke organisatie
                die tot doel heeft het publieke belang te dienen door de accountancyprofessie te bevorderen
                in overeenstemming met internationale standaarden en beste praktijken.
              </p>
              <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>
                Sinds de oprichting in 2007 heeft SCAI zich ingezet via professionele relaties met de
                NBA (Nederland), als associate lid van de ICAC, en werkt aan volledig IFAC-lidmaatschap.
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                <button className="btn-primary" onClick={() => scrollTo("#contact")}>Contact Opnemen</button>
                <button className="btn-outline" onClick={() => scrollTo("#membership")}>Lidmaatschap</button>
              </div>
            </div>

            {/* Mandates panel */}
            <div style={{
              background: "linear-gradient(145deg, #2B3990, #0075BE)",
              borderRadius: 12, padding: "40px 36px", position: "relative", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(43,57,144,0.25)",
            }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(0,174,239,0.1)" }} />
              <h3 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
                Onze Mandaten
              </h3>
              <div className="mandate-grid">
                {MANDATES.map((m, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.08)", borderRadius: 8,
                    padding: "16px", border: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <div style={{ fontSize: "1.3rem", marginBottom: 8 }}>{m.icon}</div>
                    <div style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{m.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIDMAATSCHAP ── */}
      <section id="membership" style={{ background: C.bgAlt }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 52px" }}>
            <span className="tag">Lidmaatschap</span>
            <div className="accent-line accent-line-center" />
            <h2 style={{ fontSize: "2.1rem", fontWeight: 700, lineHeight: 1.2, marginBottom: 14, letterSpacing: "-0.02em" }}>
              Word actief lid van SCAI
            </h2>
            <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 20 }}>
              Lidmaatschap is verplicht voor alle professionele accountants die in het openbaar
              praktijk willen uitoefenen in Suriname.
            </p>
            <button className="btn-primary" onClick={() => setMembersOpen(true)}>Bekijk Ledenlijst</button>
          </div>

          <div className="grid-3">
            {[
              {
                icon: "🎓", title: "Toelatingsvereisten",
                items: ["Accountancygraad van erkende universiteit", "Geslaagd voor CA-programma examens", "Drie jaar praktijkervaring", "Lokale educatieprogramma voltooid"],
              },
              {
                icon: "🏆", title: "Voordelen Lidmaatschap", featured: true,
                items: ["Wettelijke erkenning als CA", "Toegang tot CPD-programma's", "Netwerk met professionals", "Internationale standaarden toegang"],
              },
              {
                icon: "📜", title: "CPD Vereisten",
                items: ["Jaarlijkse monitoring van output", "Bewaar bewijsstukken bijhouden", "Periodieke verklaring indienen", "Leerplannen met reflecties"],
              },
            ].map((c, i) => (
              <div key={i} style={{
                background: c.featured ? "linear-gradient(145deg, #2B3990, #00AEEF)" : "white",
                borderRadius: 10,
                border: c.featured ? "none" : "1px solid #E5EBF5",
                padding: "36px 28px",
                boxShadow: c.featured ? "0 16px 48px rgba(43,57,144,0.25)" : "0 2px 12px rgba(43,57,144,0.06)",
                position: "relative",
                transform: c.featured ? "scale(1.04)" : "none",
                transition: "all 0.3s",
              }}>
                {c.featured && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#00AEEF", color: "white", fontSize: "0.62rem",
                    fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "4px 18px", borderRadius: 20,
                    boxShadow: "0 2px 10px rgba(0,174,239,0.4)",
                  }}>
                    Meest Gevraagd
                  </div>
                )}
                <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 20, color: c.featured ? "white" : "#2B3990" }}>{c.title}</h3>
                <ul style={{ listStyle: "none" }}>
                  {c.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11, fontSize: "0.875rem", color: c.featured ? "rgba(255,255,255,0.85)" : C.textMuted, lineHeight: 1.5 }}>
                      <span style={{ color: c.featured ? "#00AEEF" : "#00AEEF", fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("#contact")}
                  style={{
                    marginTop: 24, width: "100%", padding: "12px",
                    background: c.featured ? "rgba(255,255,255,0.2)" : "transparent",
                    color: c.featured ? "white" : "#00AEEF",
                    border: c.featured ? "1px solid rgba(255,255,255,0.4)" : "2px solid #00AEEF",
                    borderRadius: 4, fontWeight: 700, fontSize: "0.75rem",
                    letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                    transition: "all 0.25s",
                  }}>
                  Meer Informatie
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITTEES ── */}
      <section id="committees" style={{ background: C.bg }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 52px" }}>
            <span className="tag">Governance</span>
            <div className="accent-line accent-line-center" />
            <h2 style={{ fontSize: "2.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Bestuur & Commissies</h2>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {[
              { icon: "🏛️", title: "Executive Board", desc: "Het bestuur van SCAI is verantwoordelijk voor de strategische richting en het beleid van het instituut.", tags: ["Voorzitter", "Secretaris", "Penningmeester", "Bestuursleden"] },
              { icon: "⚖️", title: "Technische Commissie", desc: "Adviseert over de adoptie van internationale accountancy- en auditstandaarden en bewaakt de implementatie.", tags: ["Standaarden", "IFRS Implementatie", "ISA Adoptie", "Kwaliteitsborging"] },
              { icon: "📖", title: "Educatiecommissie", desc: "Verantwoordelijk voor het ontwikkelen en monitoren van CPD-vereisten en het CA-opleidingsprogramma.", tags: ["CPD Programma", "CA-Opleiding", "Toetsing", "Accreditatie"] },
              { icon: "🔨", title: "Tuchtcommissie", desc: "Behandelt klachten en onderzoekt disciplinaire kwesties in samenwerking met het Ministerie van Justitie.", tags: ["Onderzoek", "Disciplinaire Procedures", "Handhaving", "Beroepsrecht"] },
            ].map((c, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #EBF5FD, #D6EEFF)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2B3990", marginBottom: 8 }}>{c.title}</h3>
                    <p style={{ color: C.textMuted, fontSize: "0.875rem", lineHeight: 1.65, marginBottom: 14 }}>{c.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.tags.map((t, j) => (
                        <span key={j} style={{ background: "#EBF5FD", color: "#0075BE", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 2 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS BANNER ── */}
      <section style={{ background: "linear-gradient(135deg, #2B3990, #00AEEF)", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>Internationaal Erkend</p>
              <h3 style={{ color: "white", fontSize: "1.45rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Partner van wereldwijde standaarden</h3>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {["IFAC Associate", "ICAC Volledig Lid", "NBA Partner", "ISA Standaarden"].map((p, i) => (
                <div key={i} style={{ padding: "10px 20px", background: "rgba(255,255,255,0.12)", borderRadius: 6, color: "white", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em", border: "1px solid rgba(255,255,255,0.2)" }}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSROOM ── */}
      <section id="news" style={{ background: C.bgAlt }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 20 }}>
            <div>
              <span className="tag">Nieuws</span>
              <div className="accent-line" />
              <h2 style={{ fontSize: "2.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Laatste Berichten</h2>
            </div>
            <button className="btn-outline">Alle Nieuws</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {NEWS.map((n, i) => (
              <div key={i} className="news-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                      <span className="tag">{n.category}</span>
                      <span style={{ color: "#9CA3AF", fontSize: "0.78rem", fontWeight: 500 }}>{n.date}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: C.text }}>{n.title}</h3>
                    <p style={{ color: C.textMuted, lineHeight: 1.65, fontSize: "0.875rem" }}>{n.excerpt}</p>
                  </div>
                  <div style={{ width: 38, height: 38, border: "2px solid #00AEEF", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#00AEEF", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: C.bg }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <div>
              <span className="tag">Contact</span>
              <div className="accent-line" />
              <h2 style={{ fontSize: "2.1rem", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.02em" }}>Neem contact op</h2>
              <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 36 }}>
                Wilt u meer informatie over het SCAI lidmaatschap of heeft u andere vragen?
                Neem gerust contact met ons op.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {[
                  { icon: "📍", label: "Adres", value: "Tapanahonystraat 2\nParamaribo, Suriname" },
                  { icon: "📞", label: "Telefoon", value: "+597 895 5935 / +597 895 5707\n+597 421 466" },
                  { icon: "✉️", label: "Email", value: "info@scai.sr" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #EBF5FD, #D6EEFF)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", fontWeight: 700, marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontSize: "0.9rem", color: C.text, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2B3990", marginBottom: 24 }}>Stuur Een Bericht</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div className="grid-2" style={{ gap: 14 }}>
                  <div><label>Voornaam</label><input type="text" placeholder="Jan" /></div>
                  <div><label>Achternaam</label><input type="text" placeholder="Doe" /></div>
                </div>
                <div><label>E-mailadres</label><input type="email" placeholder="jan@bedrijf.sr" /></div>
                <div><label>Onderwerp</label><input type="text" placeholder="Lidmaatschap informatie" /></div>
                <div><label>Bericht</label><textarea rows={4} placeholder="Uw bericht..." style={{ resize: "vertical" }} /></div>
                <button className="btn-primary" style={{ padding: "14px" }}>Verzenden</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERS MODAL ── */}
      {membersOpen && (
        <div className="modal-overlay" onClick={() => setMembersOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#2B3990", marginBottom: 4 }}>Geregistreerde Leden</h2>
                <p style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>{MEMBERS.length} leden geregistreerd bij SCAI</p>
              </div>
              <button className="modal-close" onClick={() => setMembersOpen(false)}>✕</button>
            </div>
            <div style={{ padding: "16px 32px 0" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", fontSize: "0.95rem" }}>🔍</span>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Zoek op naam of organisatie..."
                  value={memberSearch}
                  onChange={e => setMemberSearch(e.target.value)}
                />
              </div>
            </div>
            <div style={{ padding: "12px 32px 8px", display: "grid", gridTemplateColumns: "1fr 1fr 100px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF" }}>
              <span>Naam</span>
              <span>Organisatie</span>
              <span>SCAI Nr.</span>
            </div>
            <div className="modal-body">
              {MEMBERS
                .filter(m => {
                  if (!memberSearch) return true;
                  const q = memberSearch.toLowerCase();
                  return `${m.firstName} ${m.name}`.toLowerCase().includes(q) || m.organization.toLowerCase().includes(q);
                })
                .map((m, i) => (
                  <div key={i} className="member-row">
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "#111827" }}>
                        {m.firstName} {m.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: 2 }}>
                        {m.title} · {m.title2}
                      </div>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#4B5563", display: "flex", alignItems: "center" }}>
                      {m.organization || "—"}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#0075BE", fontWeight: 600, display: "flex", alignItems: "center" }}>
                      {m.scaiNo}
                    </div>
                  </div>
                ))}
              {MEMBERS.filter(m => {
                if (!memberSearch) return true;
                const q = memberSearch.toLowerCase();
                return `${m.firstName} ${m.name}`.toLowerCase().includes(q) || m.organization.toLowerCase().includes(q);
              }).length === 0 && (
                <div style={{ padding: "40px 32px", textAlign: "center", color: "#9CA3AF" }}>
                  Geen leden gevonden voor &ldquo;{memberSearch}&rdquo;
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0d1640", padding: "56px 0 28px" }}>
        <div className="container">
          <div className="grid-4" style={{ marginBottom: 44, gap: 36 }}>
            <div>
              <img src={"/logo.png"} alt="SCAI" style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: 16 }} />
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                De autoriteit in Suriname die het accountantsberoep beschermt en de kwaliteit verbetert.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Navigatie</h4>
              {NAV_LINKS.map(l => (
                <div key={l.href} style={{ marginBottom: 9 }}>
                  <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }} style={{ fontSize: "0.875rem" }}>{l.label}</a>
                </div>
              ))}
            </div>
            <div>
              <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Contact</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75 }}>
                Tapanahonystraat 2<br />
                Paramaribo, Suriname<br /><br />
                <a href="tel:+5978955707">+597 895 5707</a><br />
                <a href="mailto:info@scai.sr" style={{ color: "#00AEEF" }}>info@scai.sr</a>
              </p>
            </div>
            <div>
              <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Word Lid</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 20 }}>
                Wilt u lid worden van SCAI? Neem contact op voor meer informatie.
              </p>
              <button className="btn-primary" onClick={() => scrollTo("#contact")} style={{ fontSize: "0.7rem", padding: "10px 20px" }}>Word Lid</button>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
              © {new Date().getFullYear()} SCAI — Suriname Chartered Accountants Institute. Alle rechten voorbehouden.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Beleid", "Disclaimer", "Wet SCAI"].map(l => (
                <a key={l} href="#" style={{ fontSize: "0.78rem" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
