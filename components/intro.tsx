import { Logo } from "@/components/logo";

// Runs during parse, before first paint, so a returning visitor never sees a frame
// of the intro. It flags the root rather than removing the overlay from the DOM:
// React puts a removed node straight back when it hydrates.
const skipScript = `(function(){
var h=document.documentElement;
var off=function(){h.setAttribute('data-zs-intro','off')};
try{
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return off();
if(sessionStorage.getItem('zs-intro'))return off();
sessionStorage.setItem('zs-intro','1');
}catch(e){return off()}
addEventListener('pointerdown',off,{once:true});
addEventListener('keydown',off,{once:true});
})();`;

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
    <>
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
      <script dangerouslySetInnerHTML={{ __html: skipScript }} />
    </>
  );
}
