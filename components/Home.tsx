'use client';
import{useState}from'react';import{Navbar}from'./Navbar';import{Hero}from'./Hero';import{Services}from'./Services';import{Booking}from'./Booking';import{AppModal,AppSection,Business,Faq,Footer,Reviews}from'./Sections';
export function Home(){const[o,setO]=useState(false),app=()=>setO(true);return<><Navbar onApp={app}/><main><Hero onApp={app}/><Services/><Booking/><Faq/><AppSection onApp={app}/><Reviews/><Business/></main><Footer onApp={app}/><AppModal open={o} onClose={()=>setO(false)}/></>}
