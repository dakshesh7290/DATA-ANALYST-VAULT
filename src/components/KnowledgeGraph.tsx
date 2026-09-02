'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(
  () => import('react-force-graph-2d'),
  { ssr: false }
);

type GraphNode = {
  id: string;
  title: string;
  url: string;
  x?: number;
  y?: number;
};

type GraphLink = {
  source: string | GraphNode;
  target: string | GraphNode;
};

type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};

export default function KnowledgeGraph() {
  const graphRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<GraphData>({
    nodes: [],
    links: [],
  });

  const [dimensions, setDimensions] = useState({
    width: 900,
    height: 600,
  });

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    fetch('/graph.json')
      .then((response) => response.json())
      .then((graphData: GraphData) => setData(graphData))
      .catch((error) => {
        console.error('Failed to load graph data:', error);
      });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) return;

      setDimensions({
        width: entry.contentRect.width,
        height: 600,
      });
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!graphRef.current) return;

    graphRef.current.d3Force('charge')?.strength(-120);
    graphRef.current.d3Force('link')?.distance(70);
  }, [data]);

  const connectedNodes = new Set<string>();

  if (hoveredNode) {
    data.links.forEach((link) => {
      const source =
        typeof link.source === 'string'
          ? link.source
          : link.source.id;

      const target =
        typeof link.target === 'string'
          ? link.target
          : link.target.id;

      if (source === hoveredNode) connectedNodes.add(target);
      if (target === hoveredNode) connectedNodes.add(source);
    });
  }

  return (
    <section className="my-12">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Knowledge Graph
        </h2>

        <p className="mt-2 text-sm text-fd-muted-foreground">
          Explore how the notes in this vault connect to one another.
          Drag nodes, zoom, pan, or click a node to open the note.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl border bg-fd-card"
        style={{ height: '600px' }}
      >
        {data.nodes.length > 0 && (
          <ForceGraph2D
            ref={graphRef}
            width={dimensions.width}
            height={dimensions.height}
            graphData={data as any}
            backgroundColor="transparent"
            nodeRelSize={5}
            nodeVal={(node: any) =>
              node.id === '/docs' ? 2.5 : 1.5
            }
            linkColor={() => 'rgba(128, 128, 128, 0.35)'}
            linkWidth={(link: any) => {
              if (!hoveredNode) return 1;

              const source =
                typeof link.source === 'string'
                  ? link.source
                  : link.source.id;

              const target =
                typeof link.target === 'string'
                  ? link.target
                  : link.target.id;

              return source === hoveredNode || target === hoveredNode
                ? 2
                : 0.5;
            }}
            nodeColor={(node: any) => {
              if (!hoveredNode) {
                return node.id === '/docs'
                  ? '#ffffff'
                  : '#888888';
              }

              if (
                node.id === hoveredNode ||
                connectedNodes.has(node.id)
              ) {
                return '#ffffff';
              }

              return '#444444';
            }}
            nodeCanvasObject={(
              node: any,
              ctx: CanvasRenderingContext2D,
              globalScale: number
            ) => {
              const label = node.title;
              const fontSize = Math.max(9 / globalScale, 2);

              ctx.font = `${fontSize}px Inter, sans-serif`;

              const isHovered = node.id === hoveredNode;
              const isConnected = connectedNodes.has(node.id);

              ctx.beginPath();

              ctx.arc(
                node.x ?? 0,
                node.y ?? 0,
                node.id === '/docs'
                  ? 5
                  : isHovered
                    ? 4
                    : 3,
                0,
                2 * Math.PI
              );

              ctx.fillStyle =
                node.id === '/docs'
                  ? '#ffffff'
                  : isHovered || isConnected
                    ? '#ffffff'
                    : '#777777';

              ctx.fill();

              if (isHovered || globalScale > 1.8) {
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#ffffff';

                ctx.fillText(
                  label,
                  node.x ?? 0,
                  (node.y ?? 0) + 10 / globalScale
                );
              }
            }}
            nodePointerAreaPaint={(
              node: any,
              color: string,
              ctx: CanvasRenderingContext2D
            ) => {
              ctx.fillStyle = color;

              ctx.beginPath();

              ctx.arc(
                node.x ?? 0,
                node.y ?? 0,
                8,
                0,
                2 * Math.PI
              );

              ctx.fill();
            }}
            onNodeHover={(node: any | null) => {
              setHoveredNode(node?.id ?? null);

              if (containerRef.current) {
                containerRef.current.style.cursor = node
                  ? 'pointer'
                  : 'default';
              }
            }}
            onNodeClick={(node: any) => {
              window.location.href = node.url;
            }}
          />
        )}

        {data.nodes.length === 0 && (
          <div className="flex h-full items-center justify-center text-sm text-fd-muted-foreground">
            Loading knowledge graph...
          </div>
        )}
      </div>

      <div className="mt-3 text-xs text-fd-muted-foreground">
        {data.nodes.length} notes · {data.links.length} connections
      </div>
    </section>
  );
}