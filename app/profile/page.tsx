"use client";
import {useState} from "react";

export default function Profile(){
  const [compact,setCompact]=useState(false);
  const [motion,setMotion]=useState(true);
  return <main>
    <header className="nav">
      <a className="brand" href="/"><span className="brand-mark">V</span><span>VST<span>bet</span></span></a>
      <nav><a className="nav-link" href="/sports">Sports</a><a className="nav-link" href="/casino">Casino</a><a className="nav-link" href="/dashboard">Dashboard</a><a className="nav-link active" href="/profile">Profile</a></nav>
      <div className="nav-actions"><a className="ghost" href="/dashboard">Back to dashboard</a></div>
    </header>
    <section className="section">
      <div className="eyebrow"><i/> ACCOUNT · DEMO PROFILE</div>
      <h1 className="page-title">Your profile.</h1>
      <p className="lead">Personalize this promotional experience. These settings are local demo preferences and do not affect real accounts or transactions.</p>
      <div className="profile-card">
        <div className="profile-row"><div><b>Display name</b><span>Shown across your demo profile</span></div><strong>VST Member</strong></div>
        <div className="profile-row"><div><b>Experience mode</b><span>All points and activity are simulated</span></div><strong>Demo</strong></div>
        <div className="profile-row"><div><b>Compact interface</b><span>Reduce spacing across cards</span></div><button className="toggle" onClick={()=>setCompact(!compact)} aria-label="Toggle compact interface"><i style={{transform:compact?"translateX(16px)":"translateX(0)"}}/></button></div>
        <div className="profile-row"><div><b>Motion effects</b><span>Enable subtle interface animation</span></div><button className="toggle" onClick={()=>setMotion(!motion)} aria-label="Toggle motion effects"><i style={{transform:motion?"translateX(16px)":"translateX(0)"}}/></button></div>
      </div>
      <div className="notice"><b>Demo only</b><span>No deposits, withdrawals, payment methods, or real-money wagers are available. Your VST points have no cash value.</span></div>
    </section>
  </main>;
}