'use client'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import Menu from '@/components/navbar/menu'

export default function RootLayout({ children }) {
  useEffect(() => {
  
    const frame = document.querySelector('.frame');
    
   
    const overlayPath = document.querySelector('.overlay__path');
    
  
    const menuWrap = document.querySelector('.menu-wrap');
    
 
    const menuItems = menuWrap.querySelectorAll('.menu__item');
    
  
    const openMenuCtrl = document.querySelector('button.button-menu');
    
  
    const closeMenuCtrls = menuWrap.querySelectorAll('.button-close');
    
  
    const title = {
        main: document.querySelector('.content__title-main'),
        sub: document.querySelector('.content__title-sub')
    };
    
    let isAnimating = false;
    
  
    const openMenu = ()  => {
        
        if ( isAnimating ) return;
        isAnimating = true;
        gsap.timeline({
                onComplete: () => isAnimating = false
            })
            .set(overlayPath, {
                attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
            })
            .to(overlayPath, { 
                duration: 0.8,
                ease: 'power4.in',
                attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
            }, 0)
            .to(overlayPath, { 
                duration: 0.3,
                ease: 'power2',
                attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
                onComplete: () => {
                    frame.classList.add('frame--menu-open');
                    menuWrap.classList.add('menu-wrap--open');
                }
            })
         
            .to([title.main, title.sub], { 
                duration: 0.8,
                ease: 'power3.in',
                y: -200,
                stagger: 0.05
            }, 0.2)
    
          
            .set(menuItems, { 
                opacity: 0
            })
            .set(overlayPath, { 
                attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
            })
            .to(overlayPath, { 
                duration: 0.3,
                ease: 'power2.in',
                attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
            })
            .to(overlayPath, { 
                duration: 0.8,
                ease: 'power4',
                attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
            })
          
            .to(menuItems, { 
                duration: 1.1,
                ease: 'power4',
                startAt: {y: 150},
                y: 0,
                opacity: 1,
                stagger: 0.05
            }, '>-=1.1');
    
    }
    
   
    const closeMenu = ()  => {
        
        if ( isAnimating ) return;
        isAnimating = true;
        gsap.timeline({
                onComplete: () => isAnimating = false
            })
            .set(overlayPath, {
                attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
            })
            .to(overlayPath, { 
                duration: 0.8,
                ease: 'power4.in',
                attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
            }, 0)
            .to(overlayPath, { 
                duration: 0.3,
                ease: 'power2',
                attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
                onComplete: () => {
                    frame.classList.remove('frame--menu-open');
                    menuWrap.classList.remove('menu-wrap--open');
                }
            })
           
            .set(overlayPath, { 
                attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
            })
            .to(overlayPath, { 
                duration: 0.3,
                ease: 'power2.in',
                attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
            })
            .to(overlayPath, { 
                duration: 0.8,
                ease: 'power4',
                attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
            })
           
            .to([title.main, title.sub], { 
                duration: 1.1,
                ease: 'power4',
                y: 0,
                stagger: -0.05
            }, '>-=1.1')
           
            .to(menuItems, { 
                duration: 0.8,
                ease: 'power2.in',
                y: 100,
                opacity: 0,
                stagger: -0.05
            }, 0)
    
    }
    
    
   
    openMenuCtrl.addEventListener('click', openMenu);
   
    closeMenuCtrls.forEach((closeMenuCtrl) => {
      closeMenuCtrl.addEventListener('click', closeMenu);
    });
    
      
        return () => {
          openMenuCtrl.removeEventListener('click', openMenu);
          closeMenuCtrls.forEach((closeMenuCtrl) => {
            closeMenuCtrl.removeEventListener('click', closeMenu);
          });

        };
      }, []);

  return (
    <html lang="en">
      <body className='loading'>
        <main>   
        <Navbar/>
        {children}
        <Menu/> 
        <svg className="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
  <path className="overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" style={{ fill: '#682781' }} />
</svg>

        </main>
        </body>
    </html>
  )
}
