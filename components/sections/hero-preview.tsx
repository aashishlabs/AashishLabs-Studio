"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight, Check, Layers, LockKeyhole, MousePointer2 } from "lucide-react";
import styles from "./hero-preview.module.css";

const views = [
  { id: "website", label: "Website", caption: "A clear story. An obvious next step.", detail: "Turn first impressions into meaningful conversations." },
  { id: "product", label: "Product", caption: "Less friction. More flow.", detail: "Make everyday tasks feel simple and connected." },
  { id: "growth", label: "Growth", caption: "Every touchpoint, connected.", detail: "Build a path from discovery to enquiry and learning." },
] as const;

export function HeroPreview() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const surface = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 24 });
  const springY = useSpring(y, { stiffness: 160, damping: 24 });
  const view = views[selected];
  return (
    <div className={styles.stage}>
      <div className={styles.stageLabel}><span className="flex items-center gap-2"><Layers size={14} aria-hidden="true" /> FROM IDEA TO EXPERIENCE</span><span>01 — 03</span></div>
      <motion.div ref={surface} className={styles.browser} style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}
        onPointerMove={event => {
          if (reduced || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
          const bounds = surface.current?.getBoundingClientRect();
          if (!bounds) return;
          x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
          y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 5);
        }} onPointerLeave={() => { x.set(0); y.set(0); }}>
        <div className={styles.chrome} aria-hidden="true">
          <div className={styles.dots}><i /><i /><i /></div><span><LockKeyhole size={10} /> aashishlabs / experience</span><ArrowUpRight size={13} />
        </div>
        <div className={styles.switcher} role="group" aria-label="Choose a demo view">
          {views.map((item,index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls="experience-demo" onClick={() => setSelected(index)} className="focus-ring">{item.label}</button>)}
        </div>
        <div id="experience-demo" className={styles.canvas}>
          <div className={styles.demoHeader}><span><span className={styles.miniMark} /> Your next idea</span><span>EXPERIENCE STUDY</span></div>
          {view.id === "website" && <div className={styles.website}>
            <div><span className={styles.overline}>A BETTER FIRST IMPRESSION</span><p className={styles.demoTitle}>Make room<br />for what’s next<span>.</span></p><p className={styles.demoCopy}>A considered digital home for an ambitious idea.</p><span className={styles.mockCta}>Let’s build something <ArrowUpRight size={13} /></span></div>
            <div className={styles.composition} aria-hidden="true"><div className={styles.orbit} /><div className={styles.tileBack} /><div className={styles.tileFront}><Layers size={32} strokeWidth={1} /><span>Clarity<br />by design.</span><i /></div><span className={styles.smallTag}><Check size={11} /> Thoughtfully connected</span></div>
          </div>}
          {view.id === "product" && <div className={styles.product}>
            <div className={styles.productHeading}><p className={styles.demoTitle}>A little more<br />headspace<span>.</span></p><span className={styles.overline}>PROJECT WORKSPACE</span></div>
            <div className={styles.board}>{[{name:"Discover",task:"Map the opportunity",tag:"Direction"},{name:"In progress",task:"Shape the experience",tag:"Design"},{name:"Ready",task:"Review the prototype",tag:"Feedback"}].map((column,index) => <div key={column.name}><p className={styles.columnLabel}><i />{column.name}</p><div className={styles.taskCard}><span>0{index+1}</span><strong>{column.task}</strong><small>{column.tag}</small></div></div>)}</div>
          </div>}
          {view.id === "growth" && <div className={styles.growth}><span className={styles.overline}>DESIGNED TO KEEP LEARNING</span><p className={styles.demoTitle}>A journey.<br />Not a dead end<span>.</span></p><div className={styles.journey}>{["Discover","Explore","Enquire"].map((label,index)=><div key={label}><span>0{index+1}</span><strong>{label}</strong><ArrowUpRight size={15} aria-hidden="true" /></div>)}</div><p className={styles.feedback}><span aria-hidden="true">↳</span> Learn from behaviour. Refine the experience.</p></div>}
        </div>
        <div className={styles.browserFooter}><span><span /> Interactive concept</span><span>Designed &amp; built by AashishLabs</span></div>
      </motion.div>
      <div className={styles.annotation}><MousePointer2 size={15} aria-hidden="true" /><p><strong>{view.caption}</strong><span>{view.detail}</span></p></div>
    </div>
  );
}
