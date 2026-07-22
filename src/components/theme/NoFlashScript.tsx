"use client";

const NO_FLASH_SCRIPT = `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`;

export default function NoFlashScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }}
    />
  );
}
