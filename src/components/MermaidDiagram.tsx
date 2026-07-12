import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    
    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(7)}`;
      mermaid.render(id, chart).then(({ svg }) => {
        if (isMounted && ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch((e) => {
        console.error("Mermaid rendering failed", e);
      });
    }
    
    return () => {
      isMounted = false;
    };
  }, [chart]);

  return <div ref={ref} className="mermaid flex justify-center py-6 overflow-x-auto w-full" />;
};
