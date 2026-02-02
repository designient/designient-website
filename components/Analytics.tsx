'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Google Analytics 4
const GA_MEASUREMENT_ID = 'G-VWWEQP3QKD'

// Meta (Facebook) Pixel
const META_PIXEL_ID = '986454198201554'

export function Analytics() {
    const [shouldLoad, setShouldLoad] = useState(false)

    useEffect(() => {
        // Delay loading scripts until user interacts or after 5 seconds
        const events = ['scroll', 'click', 'touchstart', 'keydown']
        let hasInteracted = false

        const loadScripts = () => {
            if (!hasInteracted) {
                hasInteracted = true
                setShouldLoad(true)
                // Remove all event listeners
                events.forEach(event => {
                    window.removeEventListener(event, loadScripts, { passive: true } as EventListenerOptions)
                })
            }
        }

        // Add interaction listeners
        events.forEach(event => {
            window.addEventListener(event, loadScripts, { passive: true })
        })

        // Fallback: load after 5 seconds if no interaction
        const timeout = setTimeout(loadScripts, 5000)

        return () => {
            clearTimeout(timeout)
            events.forEach(event => {
                window.removeEventListener(event, loadScripts, { passive: true } as EventListenerOptions)
            })
        }
    }, [])

    if (!shouldLoad) {
        return null
    }

    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>

            {/* Meta (Facebook) Pixel */}
            <Script id="meta-pixel" strategy="lazyOnload">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    alt=""
                    src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    )
}
