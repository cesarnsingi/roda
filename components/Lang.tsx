'use client';
import{createContext,useContext,useEffect,useState,type ReactNode}from'react';import{D,P}from'@/lib/pt';
type Lang='en'|'pt';const Ctx=createContext<{lang:Lang;setLang:(l:Lang)=>void}>(null as never);export const useLang=()=>useContext(Ctx);
/** Translates rendered English text to Portuguese from lib/pt.ts. Switching language remounts the tree (key), so English is restored for free. */
function Translator({lang}:{lang:Lang}){useEffect(()=>{if(lang==='en')return;const has=(k:string)=>Object.hasOwn(D,k);
const tn=(x:Node)=>{const s=x.nodeValue||'',t=s.trim();if(!t)return;let r=has(t)?D[t]:t;if(r===t)P.forEach(p=>{r=r.split(p[0]).join(p[1])});if(r!==t)x.nodeValue=s.replace(t,()=>r)};
const walk=(n:Node)=>{if(n.nodeType===3)return tn(n);if(n.nodeType!==1)return;const w=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);let x;while((x=w.nextNode()))tn(x);[n as Element,...(n as Element).querySelectorAll('[aria-label]')].forEach(e=>{const v=e.getAttribute('aria-label');if(v&&has(v))e.setAttribute('aria-label',D[v])})};
walk(document.body);const o=new MutationObserver(ms=>ms.forEach(m=>{m.addedNodes.forEach(walk);if(m.type==='characterData')tn(m.target)}));o.observe(document.body,{childList:true,subtree:true,characterData:true});return()=>o.disconnect()},[lang]);return null}
export function LangProvider({children}:{children:ReactNode}){const[lang,set]=useState<Lang>('en');
useEffect(()=>{let l:Lang=navigator.language.startsWith('pt')?'pt':'en';try{const s=localStorage.getItem('roda-lang');if(s==='pt'||s==='en')l=s}catch{}set(l)},[]);
useEffect(()=>{document.documentElement.lang=lang},[lang]);
const setLang=(l:Lang)=>{set(l);try{localStorage.setItem('roda-lang',l)}catch{}};
return<Ctx.Provider value={{lang,setLang}}><div key={lang}>{children}</div><Translator lang={lang}/></Ctx.Provider>}
export function LangSwitch(){const{lang,setLang}=useLang();return<div className="inline-flex rounded-full border border-white/20 p-0.5 text-xs font-bold" role="group" aria-label="Language">{(['en','pt']as const).map(l=><button key={l} onClick={()=>setLang(l)} aria-pressed={lang===l} className={`rounded-full px-2.5 py-1 ${lang===l?'bg-lime text-ink':'text-white/80'}`}>{l.toUpperCase()}</button>)}</div>}
