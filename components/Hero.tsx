'use client';
import{useEffect,useState}from'react';import{ArrowRight}from'lucide-react';import{SERVICES}from'@/lib/data';
export function Hero({onApp}:{onApp:()=>void}){const[i,setI]=useState(0),[paused,setP]=useState(false);
useEffect(()=>{if(paused||matchMedia('(prefers-reduced-motion:reduce)').matches)return;const t=setInterval(()=>setI(x=>(x+1)%SERVICES.length),3000);return()=>clearInterval(t)},[paused]);
const s=SERVICES[i];return<section id="top" className="bg-ink text-white"><div className="mx-auto max-w-6xl px-5 pb-16 pt-14 text-center md:pt-24"><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime">We bring the service station to you</p>
<h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">The all-in-one app for<br/><span key={s.id} className="rise inline-block text-lime" aria-live="polite">{s.word}</span></h1>
<div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3" role="tablist" aria-label="Services">{SERVICES.map((x,k)=><button key={x.id} role="tab" aria-selected={k===i} onClick={()=>{setI(k);setP(true)}} className={`flex w-24 flex-col items-center gap-2 rounded-2xl border p-3 text-xs font-semibold transition ${k===i?'border-lime bg-lime text-ink':'border-white/15 bg-white/5 hover:bg-white/10'}`}><x.icon size={26}/>{x.name}</button>)}</div>
<div className="mt-10 flex flex-wrap justify-center gap-3"><a href="#book" className="btn">Book a service<ArrowRight size={16}/></a><button className="btn btn-g" onClick={onApp}>Get the app</button></div></div></section>}
