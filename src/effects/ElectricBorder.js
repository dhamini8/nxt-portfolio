import { useEffect, useId, useLayoutEffect, useRef, memo } from 'react';

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder = memo(({ children, color = '#5227FF', speed = 1, chaos = 1, thickness = 2, className, style }) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);

  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;

    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));

    const dyAnim = svg.querySelector('feOffset > animate[attributeName="dy"]');
    if (dyAnim) {
      dyAnim.setAttribute('values', `${height}; 0`);
    }

    const baseDur = 6;
    const dur = Math.max(0.001, baseDur / (speed || 1));
    if (dyAnim) {
      dyAnim.setAttribute('dur', `${dur}s`);
    }

    const disp = svg.querySelector('feDisplacementMap');
    if (disp) disp.setAttribute('scale', String(8 * (chaos || 1)));

    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute('x', '-50%');
      filterEl.setAttribute('y', '-50%');
      filterEl.setAttribute('width', '200%');
      filterEl.setAttribute('height', '200%');
    }

    requestAnimationFrame(() => {
      if (dyAnim && typeof dyAnim.beginElement === 'function') {
        try {
          dyAnim.beginElement();
        } catch {
          console.warn('ElectricBorder: beginElement failed');
        }
      }
    });
  };

  useEffect(() => {
    updateAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, chaos]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inheritRadius = {
    borderRadius: style?.borderRadius ?? 'inherit'
  };

  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color,
    willChange: 'filter',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  };

  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: hexToRgba(color, 0.4),
    filter: `blur(${0.3 + thickness * 0.15}px)`,
    opacity: 0.3,
    pointerEvents: 'none',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  };

  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color,
    filter: `blur(${1 + thickness * 0.3}px)`,
    opacity: 0.3,
    pointerEvents: 'none',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  };

  const bgGlowStyle = {
    ...inheritRadius,
    transform: 'scale(1.05) translateZ(0)',
    filter: 'blur(20px)',
    opacity: 0.2,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.6)}, transparent, ${color})`,
    backfaceVisibility: 'hidden'
  };

  return (
    <div ref={rootRef} className={'relative isolate ' + (className ?? '')} style={{ ...style, willChange: 'transform' }}>
      <svg
        ref={svgRef}
        className="fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%" primitiveUnits="userSpaceOnUse">
            <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise" seed="1" />
            <feOffset in="noise" dx="0" dy="0" result="offsetNoise">
              <animate attributeName="dy" values="100; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feDisplacementMap
              in="SourceGraphic"
              in2="offsetNoise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 pointer-events-none" style={inheritRadius}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      <div className="relative" style={inheritRadius}>
        {children}
      </div>
    </div>
  );
});

export default memo(ElectricBorder);
