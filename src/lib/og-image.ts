import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const fontDir = join(process.cwd(), 'node_modules/@fontsource/ibm-plex-sans/files/');

const regularLatin = readFileSync(`${fontDir}ibm-plex-sans-latin-400-normal.woff`);
const regularCyrillic = readFileSync(`${fontDir}ibm-plex-sans-cyrillic-400-normal.woff`);
const boldLatin = readFileSync(`${fontDir}ibm-plex-sans-latin-700-normal.woff`);
const boldCyrillic = readFileSync(`${fontDir}ibm-plex-sans-cyrillic-700-normal.woff`);

// satori only uses the first font matching a given (name, weight, style) key — it does not
// merge glyph coverage across entries that share a key, so the Cyrillic subset needs its own
// name to be picked up by the loadAdditionalAsset fallback below rather than being shadowed
// by the Latin entry.
const fonts = [
  { name: 'IBM Plex Sans', data: regularLatin, weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: boldLatin, weight: 700 as const, style: 'normal' as const }
];

const cyrillicFallback = [
  { name: 'IBM Plex Sans Cyrillic', data: regularCyrillic, weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans Cyrillic', data: boldCyrillic, weight: 700 as const, style: 'normal' as const }
];

const WIDTH = 1200;
const HEIGHT = 630;

const COLOR = {
  bg: '#0e2233',
  line: '#6fe7e2',
  ink: '#f3f6f2',
  inkDim: '#a9bfc9',
  grid: '#1c3c5a'
};

interface OgContent {
  eyebrow: string;
  name: string;
  tagline: string;
  tags: string[];
  domain: string;
}

function el(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children } };
}

function buildTree(content: OgContent) {
  return el(
    'div',
    {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: COLOR.bg,
        backgroundImage: `linear-gradient(${COLOR.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLOR.grid} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        padding: '64px 72px',
        fontFamily: 'IBM Plex Sans'
      }
    },
    el(
      'div',
      { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
      el(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        el(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 6,
              border: `2px solid ${COLOR.line}`,
              color: COLOR.line,
              fontSize: 26,
              fontWeight: 700
            }
          },
          'AT'
        ),
        el(
          'div',
          { style: { display: 'flex', marginLeft: 20, fontSize: 24, fontWeight: 700, color: COLOR.ink } },
          content.name
        )
      ),
      el('div', { style: { display: 'flex', fontSize: 20, color: COLOR.inkDim } }, content.domain)
    ),
    el(
      'div',
      { style: { display: 'flex', flexDirection: 'column', maxWidth: 980 } },
      el(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 24,
            color: COLOR.line,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 20
          }
        },
        content.eyebrow
      ),
      el(
        'div',
        { style: { display: 'flex', fontSize: 52, fontWeight: 700, lineHeight: 1.2, color: COLOR.ink } },
        content.tagline
      )
    ),
    el(
      'div',
      { style: { display: 'flex', gap: 14 } },
      ...content.tags.map((tag) =>
        el(
          'div',
          {
            style: {
              display: 'flex',
              padding: '10px 18px',
              borderRadius: 4,
              border: `1px solid ${COLOR.grid}`,
              color: COLOR.inkDim,
              fontSize: 20
            }
          },
          tag
        )
      )
    )
  );
}

export async function renderOgImage(content: OgContent): Promise<Buffer> {
  const svg = await satori(buildTree(content) as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts,
    loadAdditionalAsset: async () => cyrillicFallback
  });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
  return resvg.render().asPng();
}
