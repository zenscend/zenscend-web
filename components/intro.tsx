import { Logo } from "@/components/logo";

const introScript = `(function(){
var h=document.documentElement;
var done=function(){h.setAttribute('data-zs-intro','off')};
if(location.pathname!=='/')return;
try{
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return done();
if(sessionStorage.getItem('zs-intro'))return done();
sessionStorage.setItem('zs-intro','1');
}catch(e){return done()}
h.setAttribute('data-zs-intro','armed');
addEventListener('pointerdown',done,{once:true});
addEventListener('keydown',done,{once:true});
var t0=Date.now();
var start=function(){
if(h.getAttribute('data-zs-intro')!=='armed')return;
if(!document.getElementById('zs-intro')){
if(Date.now()-t0>5000)return done();
return requestAnimationFrame(start);
}
requestAnimationFrame(function(){
if(h.getAttribute('data-zs-intro')!=='armed')return;
h.setAttribute('data-zs-intro','play');
setTimeout(done,3000);
});
};
requestAnimationFrame(start);
})();`;

/**
 * Belongs in the root layout, not in the page.
 *
 * React never executes a <script> it renders on the client, and says so loudly, so
 * rendering one from a page component breaks the moment a client-side navigation
 * re-renders that page. The root layout is not re-rendered when navigating between
 * routes that share it, so the tag is written once into the document and left alone.
 *
 * Placed first in <body>, it runs before the overlay is even parsed — hence the
 * pathname check rather than looking for the element. The overlay is hidden by
 * default and this opts it in for exactly one run, clearing the flag when the intro
 * ends: a re-mount restarts CSS animations, so "playing" must never be the state the
 * document rests in.
 *
 * It arms the overlay immediately so the curtain is up in the first painted frame,
 * but holds every animation at frame zero until the overlay exists and has been
 * through a frame. Otherwise the clock starts when the styles apply and a slow first
 * paint eats the climb — the viewer's first sight of it is already at the top.
 */
export function IntroScript() {
  return <script dangerouslySetInnerHTML={{ __html: introScript }} />;
}

/**
 * First-load intro: a block climbs a staircase, becomes the orange Z at the top,
 * the wordmark wipes out to its right, and the lockup flies to the nav corner.
 *
 * The whole thing is CSS keyframes (see globals.css). The lockup is positioned at
 * the real nav logo's coordinates and animates *to* transform:none, so it lands on
 * it exactly rather than approximately.
 */
export function Intro() {
  return (
    <div id="zs-intro" className="intro" aria-hidden="true">
      <div className="intro-bg" />
      <div className="intro-lockup">
        <svg
          className="intro-stairs"
          viewBox="0 0 107.5 107.5"
          width="107.5"
          height="107.5"
        >
          <g stroke="#232323" strokeWidth="0.2">
            {[0, 21.5, 43, 64.5, 86, 107.5].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="107.5" />
            ))}
            <line x1="0" y1="107.4" x2="107.5" y2="107.4" />
          </g>
          <polyline
            points="0,107.5 0,86 21.5,86 21.5,64.5 43,64.5 43,43 64.5,43 64.5,21.5 86,21.5 86,0 107.5,0"
            fill="none"
            stroke="#5A5A5A"
            strokeWidth="0.3"
          />
        </svg>
        <div className="intro-block" />
        <div className="intro-logo-clip">
          <Logo className="intro-logo" markClassName="intro-mark" />
        </div>
      </div>
    </div>
  );
}
