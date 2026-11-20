'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import './LineSidebar.css';

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
  markerLength?: number;
  markerGap?: number;
  tickScale?: number;
  scaleTick?: boolean;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  proximityRadius?: number;
  maxShift?: number;
  defaultActive?: number;
  activeIndex?: number;
  onItemClick?: (index: number, item: LineSidebarItem) => void;
  className?: string;
}

export default function LineSidebar({
  items = DEFAULT_ITEMS,
  accentColor = '#9e790d',
  textColor = '#71717a',
  markerColor = '#e4e4e7',
  showIndex = false,
  showMarker = true,
  markerLength = 26,
  markerGap = 6,
  tickScale = 0.45,
  scaleTick = false,
  itemGap = 16,
  fontSize = 0.85,
  smoothing = 100,
  defaultActive = 0,
  activeIndex: controlledActiveIndex,
  onItemClick,
  className = ''
}: LineSidebarProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
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
      const target = activeRef.current === i ? 1 : 0;
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
      className={`line-sidebar${showMarker ? ' line-sidebar--markers' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--accent-color': accentColor,
        '--text-color': textColor,
        '--marker-color': markerColor,
        '--marker-length': `${markerLength}px`,
        '--marker-gap': `${markerGap}px`,
        '--tick-scale': tickScale,
        '--item-gap': `${itemGap}px`,
        '--font-size': `${fontSize}rem`,
        '--smoothing': `${smoothing}ms`
      } as React.CSSProperties}
    >
      <ul className="line-sidebar__list">
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
