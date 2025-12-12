import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Центр Перемога",
  description:
    "Навчально-духовний центр 'Перемога' - шлях до звільнення від залежностей, духовного зростання та пізнання Бога.",
  generator: "v0.dev",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7WDKZL7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W7WDKZL7');`,
          }}
        />

        {children}
        <Toaster />

        {/* Плаваюча кнопка телефону */}
        <div id="floating-phone-container"></div>

        <Script
          id="floating-phone-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function createFloatingButton() {
                  const container = document.getElementById('floating-phone-container');
                  if (!container) return;
                  
                  const button = document.createElement('button');
                  button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style="margin: auto;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
                  button.style.cssText = 'position: fixed; bottom: 24px; right: 24px; background: #3b82f6; color: white; border: none; border-radius: 50%; width: 56px; height: 56px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); cursor: pointer; z-index: 9999; transition: all 0.3s ease; animation: pulse 2s infinite; display: flex; align-items: center; justify-content: center;';
                  
                  const style = document.createElement('style');
                  style.textContent = '@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }';
                  document.head.appendChild(style);
                  
                  const dialog = document.createElement('div');
                  dialog.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: none; align-items: center; justify-content: center;';
                  dialog.innerHTML = '<div style="background: white; padding: 24px; border-radius: 12px; max-width: 400px; width: 90%;"><h3 style="text-align: center; margin-bottom: 20px; font-size: 20px; color: #1f2937;">Оберіть номер телефону</h3><div style="display: flex; flex-direction: column; gap: 12px;"><a href="tel:+380678154765" style="display: block; background: #3b82f6; color: white; padding: 16px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 18px; transition: background 0.3s;">📞 +380 67 815 47 65</a><a href="tel:+380681745680" style="display: block; background: #3b82f6; color: white; padding: 16px; border-radius: 8px; text-decoration: none; text-align: center; font-size: 18px; transition: background 0.3s;">📞 +380 68 174 56 80</a></div></div>';
                  
                  button.addEventListener('click', function() {
                    dialog.style.display = 'flex';
                  });
                  
                  dialog.addEventListener('click', function(e) {
                    if (e.target === dialog) {
                      dialog.style.display = 'none';
                    }
                  });
                  
                  button.addEventListener('mouseenter', function() {
                    button.style.transform = 'scale(1.1)';
                    button.style.background = '#2563eb';
                  });
                  
                  button.addEventListener('mouseleave', function() {
                    button.style.transform = 'scale(1)';
                    button.style.background = '#3b82f6';
                  });
                  
                  container.appendChild(button);
                  document.body.appendChild(dialog);
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', createFloatingButton);
                } else {
                  createFloatingButton();
                }
              })();
            `,
          }}
        />

        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '671893665904242');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=671893665904242&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
