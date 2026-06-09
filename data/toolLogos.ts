export type ToolLogoEntry = {
  src: string
  /** Optional second logo (e.g. Bolt + v0) */
  secondarySrc?: string
  secondaryLabel?: string
  /** Darken light logos on white tiles */
  darkFilter?: boolean
}

const CDN = 'https://cdn.simpleicons.org'

/** Maps toolchain tool display names to logo assets */
export const toolLogoMap: Record<string, ToolLogoEntry> = {
  Perplexity: { src: `${CDN}/perplexity/1FB8CD` },
  Claude: { src: `${CDN}/anthropic/CC9B7A` },
  'Figma Make': { src: '/tool-logos/figma-make.svg' },
  Figma: { src: `${CDN}/figma/F24E1E` },
  'Claude Design': { src: `${CDN}/anthropic/CC9B7A` },
  Bolt: { src: `${CDN}/stackblitz/1389FD` },
  'Bolt or v0.dev': {
    src: `${CDN}/stackblitz/1389FD`,
    secondarySrc: '/tool-logos/v0.svg',
    secondaryLabel: 'v0.dev',
  },
  Zapier: { src: `${CDN}/zapier/FF4A00` },
  n8n: { src: `${CDN}/n8n/EA4B71` },
  Make: { src: `${CDN}/make/6D00CC` },
  Airtable: { src: `${CDN}/airtable/18BFFF` },
  ManyChat: { src: '/tool-logos/manychat.svg' },
  'Relevance AI': { src: '/tool-logos/relevance-ai.svg' },
}

export function getToolLogo(toolName: string): ToolLogoEntry {
  return (
    toolLogoMap[toolName] ?? {
      src: '/tool-logos/default-tool.svg',
    }
  )
}
