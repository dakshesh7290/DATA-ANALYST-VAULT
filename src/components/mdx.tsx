import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import KnowledgeGraph from './KnowledgeGraph';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    KnowledgeGraph,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}