module.exports = [
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/.next-internal/server/app/(site)/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
const apiVersion = ("TURBOPACK compile-time value", "2025-01-01") || '2025-09-28';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "gk1ei4nb"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/lib/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-rsc] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: true
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/lib/queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/queries.ts
// Prefer explicit cover; otherwise fall back to a body image flagged as hero,
// then first gallery image, then first body image.
__turbopack_context__.s([
    "ABOUT_PAGE",
    ()=>ABOUT_PAGE,
    "ALL_HOME",
    ()=>ALL_HOME,
    "ARTICLE_BY_SLUG",
    ()=>ARTICLE_BY_SLUG,
    "ARTICLE_CARD",
    ()=>ARTICLE_CARD,
    "BY_CATEGORY",
    ()=>BY_CATEGORY,
    "PORTFOLIO_BY_SLUG",
    ()=>PORTFOLIO_BY_SLUG,
    "PORTFOLIO_GRID",
    ()=>PORTFOLIO_GRID
]);
const COVER = `"coverUrl": coalesce(
  coverMedia.asset->url,
  body[_type=="image" && defined(useAsHero) && useAsHero==true][0].asset->url,
  gallery[0].asset->url,
  body[_type=="image"][0].asset->url
)`;
const ARTICLE_CARD = `{
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  ${COVER},
  // legacy shape for components that read cover.asset.url
  "cover": coverMedia{ asset->{ url, metadata{dimensions} } }
}`;
const ALL_HOME = `*[_type=="article"] | order(date desc) [0...30] ${ARTICLE_CARD}`;
const BY_CATEGORY = `*[_type=="article" && category==$cat]
  | order(date desc) [0...100] ${ARTICLE_CARD}`;
const ARTICLE_BY_SLUG = `*[_type=="article" && slug.current==$slug][0]{
  _id,
  title,
  date,
  category,
  ${COVER},
  coverMedia{ asset->{ _id, url, metadata{dimensions} } },
  body[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  gallery[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  credits,
  seo
}`;
const PORTFOLIO_GRID = `*[_type=="portfolioItem"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  heroMedia{ asset->{ url, metadata{dimensions} } }
}`;
const PORTFOLIO_BY_SLUG = `*[_type=="portfolioItem" && slug.current==$slug][0]{
  _id,
  title,
  date,
  heroMedia{ asset->{ url, metadata{dimensions} } },
  body[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  pressLinks,
  tags,
  seo
}`;
const ABOUT_PAGE = `*[_type=="page" && slug.current=="about"][0]{
  title,
  content[]
}`;
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedLarge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
function FeaturedLarge({ article }) {
    const img = article.cover?.asset?.url ?? article.cover?.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/articles/${article.slug}`,
        className: "group block w-full bg-background rounded-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-10 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-3 group-hover:underline underline-offset-4",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "October 20, 2025"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Kate Mothes"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[3/4] w-full overflow-hidden rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: img,
                        alt: article.title,
                        fill: true,
                        sizes: "(min-width:1024px) 66vw, 100vw",
                        className: "object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Grid6Small
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
function Grid6Small({ items }) {
    // Define different aspect ratios for mosaic effect
    const aspectRatios = [
        'aspect-[4/3]',
        'aspect-[4/5]',
        'aspect-[3/2]',
        'aspect-[3/4]',
        'aspect-[5/4]',
        'aspect-[4/3]'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 bg-background",
        children: items.slice(0, 6).map((p, index)=>{
            const img = p.cover?.asset?.url ?? p.cover?.url;
            const aspectRatio = aspectRatios[index] || 'aspect-[4/3]';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/articles/${p.slug}`,
                className: "group block overflow-hidden rounded-lg transition hover:opacity-90",
                children: [
                    img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${aspectRatio} overflow-hidden rounded-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            alt: p.title,
                            fill: true,
                            sizes: "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
                            className: "object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
                            lineNumber: 36,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
                        lineNumber: 35,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-foreground leading-snug",
                            children: p.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
                            lineNumber: 46,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
                        lineNumber: 45,
                        columnNumber: 25
                    }, this)
                ]
            }, p._id, true, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
                lineNumber: 29,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$FeaturedLarge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeaturedLarge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$Grid6Small$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid6Small.tsx [app-rsc] (ecmascript)");
;
;
;
function FeatureSection({ items }) {
    if (!items || items.length === 0) return null;
    const [first, ...rest] = items;
    return(// 🧩 Two-column layout: large feature on the left, grid on the right
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "   flex flex-col lg:flex-row   items-start justify-between   gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32   px-0 py-4   max-w-none mx-auto relative   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:flex-[1.4] rounded-lg overflow-hidden bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$FeaturedLarge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    article: first
                }, void 0, false, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:flex-[1] rounded-lg overflow-hidden bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$Grid6Small$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    items: rest
                }, void 0, false, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this));
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
function CategoryGrid({ categoryTitle, exploreLink, exploreText, items }) {
    // Define different landscape aspect ratios for mosaic effect
    const landscapeRatios = [
        'aspect-[4/3]',
        'aspect-[3/2]',
        'aspect-[5/3]',
        'aspect-[4/3]'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-semibold text-foreground",
                        children: categoryTitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: exploreLink,
                        className: "text-foreground hover:text-muted transition-colors duration-200 text-sm md:text-base",
                        children: [
                            exploreText,
                            " →"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
                children: items.slice(0, 4).map((item, index)=>{
                    const img = item.cover?.asset?.url ?? item.cover?.url;
                    const aspectRatio = landscapeRatios[index] || 'aspect-[4/3]';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/articles/${item.slug}`,
                        className: "group block",
                        children: [
                            img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative ${aspectRatio} overflow-hidden rounded-lg mb-4`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: img,
                                    alt: item.title,
                                    fill: true,
                                    sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
                                    className: "object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                                    lineNumber: 61,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                                lineNumber: 60,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-muted transition-colors duration-200",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                                lineNumber: 70,
                                columnNumber: 29
                            }, this)
                        ]
                    }, item._id, true, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/lib/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/lib/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$FeatureSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/FeatureSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$CategoryGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/CategoryGrid.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function HomePage() {
    const posts = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_HOME"]);
    if (!posts || posts.length === 0) return null;
    // Split posts for different sections
    const [first, ...rest] = posts;
    // Ensure we have enough posts for the categories
    const categoryPosts1 = rest.slice(0, 4);
    const categoryPosts2 = rest.slice(4, 8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16 lg:space-y-20 py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$FeatureSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                items: posts
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            categoryPosts1.length >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$CategoryGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                categoryTitle: "A False Front",
                exploreLink: "/explore/trompe-loeil",
                exploreText: "Explore trompe l'oeil",
                items: categoryPosts1
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            categoryPosts2.length >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$CategoryGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                categoryTitle: "Street Art & Murals",
                exploreLink: "/explore/street-art",
                exploreText: "Explore street art",
                items: categoryPosts2
            }, void 0, false, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0aaaa9b1._.js.map