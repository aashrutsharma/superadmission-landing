"use client";

import { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  label: string;
}

interface TOCProps {
  items: TOCItem[];
}

export default function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex items-center gap-2 text-sm py-1 transition-colors no-underline ${
                isActive
                  ? "text-blue-600 font-medium"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {isActive && (
                <span className="w-[3px] h-4 bg-blue-600 rounded-full flex-shrink-0" />
              )}
              {!isActive && <span className="w-[3px] flex-shrink-0" />}
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
