import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const base = import.meta.env.BASE_URL;

const GUIDES = [
  { prefix: `${base}js-antes-do-react/`, label: "JS antes do React" },
  { prefix: `${base}typescript/`, label: "TypeScript" },
  { prefix: `${base}essencial-css/`, label: "Essencial CSS" },
];

function normalize(pathname: string) {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export const onRequest = defineRouteMiddleware((context) => {
  const pathname = normalize(context.url.pathname);
  const guide = GUIDES.find((g) => pathname.startsWith(g.prefix));
  if (!guide) return;

  // deixa só o grupo do guia atual na sidebar
  context.locals.starlightRoute.sidebar =
    context.locals.starlightRoute.sidebar.filter(
      (item) =>
        typeof item !== "string" &&
        "label" in item &&
        item.label === guide.label
    );

  // muda o título e faz ele apontar pra home do guia atual
  // context.locals.starlightRoute.siteTitle = guide.label;
  // context.locals.starlightRoute.siteTitleHref = guide.prefix;
});
