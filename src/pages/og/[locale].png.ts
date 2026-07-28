import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOgImage } from '../../lib/og-image';
import { getDictionary, type Locale } from '../../i18n/utils';

export const getStaticPaths: GetStaticPaths = () => [{ params: { locale: 'en' } }, { params: { locale: 'ua' } }];

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  const png = await renderOgImage({
    eyebrow: `${dict.hero.eyebrow} · ${dict.hero.role}`,
    name: dict.hero.name,
    tagline: dict.hero.tagline,
    tags: dict.skills.groups[0].items.slice(0, 4),
    domain: 'anton-portfolio-ten.vercel.app'
  });

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' }
  });
};
