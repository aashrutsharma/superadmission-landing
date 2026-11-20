'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import './LineSidebar.css';

const FALLOFF_CURVES: Record<string, (p: number) => number> = {
  linear: p => p,
  smooth: p => p * p * (3 - 2 * p),
  sharp: p => p * p * p
};

export type LineSidebarItem = string | { id: string; label: string };

const DEFAULT_ITEMS: LineSidebarItem[] = [
  'Mission',
  'What we do',
  'In production',
  'Questions',
  'Writing',
  'Careers'
];

interface LineSidebarProps {
  items?: LineSidebarItem[];
  accentColor?: string;
  textColor?: string;
  markerColor?: string;
  showIndex?: boolean;
  showMarker?: boolean;
  proximityRadius?: number;
  maxShift?: number;
  falloff?: 'linear' | 'smooth' | 'sharp';
  markerLength?: number;
  markerGap?: number;
  tickScale?: number;
  scaleTick?: boolean;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  defaultActive?: number;
  activeIndex?: number;
  onItemClick?: (index: number, item: LineSidebarItem) => void;
  className?: string;
}

export default function LineSidebar({
  items = DEFAULT_ITEMS,
  accentColor = '#2563eb',
  textColor = '#71717a',
  markerColor = '#e4e4e7',
  showIndex = false,
  showMarker = true,
  proximityRadius = 80,
  maxShift = 14,
  falloff = 'smooth',
  markerLength = 26,
  markerGap = 6,
  tickScale = 0.45,
  scaleTick = true,
  itemGap = 16,
  fontSize = 0.85,
  smoothing = 90,
  defaultActive = 0,
  activeIndex: controlledActiveIndex,
  onItemClick,
  className = ''
}: LineSidebarProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const targetsRef = useRef<number[]>([]);
  const currentRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const activeRef = useRef(activeIndex);
  const smoothingRef = useRef(smoothing);

  useEffect(() => {
    if (controlledActiveIndex !== undefined && controlledActiveIndex !== activeIndex) {
      setActiveIndex(controlledActiveIndex);
    }
  }, [controlledActiveIndex, activeIndex]);

  activeRef.current = activeIndex;
  smoothingRef.current = smoothing;

  const runFrame = useCallback((now: number) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const itemsEl = itemRefs.current;
    for (let i = 0; i < itemsEl.length; i++) {
      const el = itemsEl[i];
      if (!el) continue;
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;
      el.style.setProperty('--effect', value.toFixed(4));
      if (!settled) moving = true;
    }

    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
    }

    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLUListElement>) => {
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const pointerY = e.clientY - rect.top;
      const ease = FALLOFF_CURVES[falloff] ?? FALLOFF_CURVES.linear;
      const itemsEl = itemRefs.current;
      for (let i = 0; i < itemsEl.length; i++) {
        const el = itemsEl[i];
        if (!el) continue;
        const center = el.offsetTop + el.offsetHeight / 2;
        const distance = Math.abs(pointerY - center);
        targetsRef.current[i] = ease(Math.max(0, 1 - distance / proximityRadius));
      }
      startLoop();
    },
    [falloff, proximityRadius, startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  const handleClick = useCallback(
    (index: number, item: LineSidebarItem) => {
      setActiveIndex(index);
      onItemClick?.(index, item);
    },
    [onItemClick]
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(
    () => () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    },
    []
  );

  return (
    <nav
      className={`line-sidebar${showMarker ? ' line-sidebar--markers' : ''}${scaleTick ? ' line-sidebar--scale-tick' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--accent-color': accentColor,
        '--text-color': textColor,
        '--marker-color': markerColor,
        '--marker-length': `${markerLength}px`,
        '--marker-gap': `${markerGap}px`,
        '--tick-scale': tickScale,
        '--max-shift': `${maxShift}px`,
        '--item-gap': `${itemGap}px`,
        '--font-size': `${fontSize}rem`,
        '--smoothing': `${smoothing}ms`
      } as React.CSSProperties}
    >
      <ul ref={listRef} className="line-sidebar__list" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        {items.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label;
          return (
            <li
              key={`${label}-${index}`}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              className="line-sidebar__item"
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => handleClick(index, item)}
            >
              {showMarker && <span className="line-sidebar__marker" aria-hidden="true" />}
              <span className="line-sidebar__label">
                {showIndex && <span className="line-sidebar__index">{String(index + 1).padStart(2, '0')}</span>}
                <span className="line-sidebar__text">{label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
