/*
// File: ads.js
const adSlots = {
     'ad-970x250': '7979200749',
     'ad-300x250': '9406916186',
     'ad-728x90': '5424355442'
 };
 
 function loadAdSenseScript() {
     const script = document.createElement('script');
     script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088xx";
     script.async = true;
     script.crossOrigin = "anonymous";
     document.head.appendChild(script);
 
     script.onload = insertAds;
 }
 
 function insertAds() {
     for (const [className, adSlot] of Object.entries(adSlots)) {
         const container = document.querySelector(`.${className}`);
         if (container) {
             const ins = document.createElement('ins');
             ins.className = 'adsbygoogle';
             ins.style.display = 'block';
             ins.setAttribute('data-ad-client', 'ca-pub-6556788076088846');
             ins.setAttribute('data-ad-slot', adSlot);
             ins.setAttribute('data-ad-format', 'auto');
             ins.setAttribute('data-full-width-responsive', 'true');
             
             container.appendChild(ins);
             (adsbygoogle = window.adsbygoogle || []).push({});
         }
     }
 }
 

 window.addEventListener('load', loadAdSenseScript);