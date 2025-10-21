module.exports = [
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/.next-internal/server/app/(site)/portfolio/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
    ()=>PORTFOLIO_GRID,
    "SEARCH_ARTICLES",
    ()=>SEARCH_ARTICLES
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
const SEARCH_ARTICLES = `*[_type=="article" && (title match $searchTerm || category match $searchTerm)] | order(date desc) [0...20] ${ARTICLE_CARD}`;
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/Grid4x4.tsx
__turbopack_context__.s([
    "default",
    ()=>Grid4x4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
function Grid4x4({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-4 md:grid-cols-4",
        children: items?.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/portfolio/${it.slug}`,
                className: "group block overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                "aria-label": it.title,
                children: [
                    it.hero?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square w-full overflow-hidden md:aspect-[4/3]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: it.hero.url,
                            alt: it.title,
                            fill: true,
                            sizes: "(min-width:768px) 25vw, 50vw",
                            className: "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
                            priority: false
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 md:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium",
                            children: it.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, it._id, true, {
                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/portfolio/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/lib/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/lib/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$Grid4x4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/components/Grid4x4.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function Portfolio() {
    const items = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PORTFOLIO_GRID"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$components$2f$Grid4x4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        items: items
    }, void 0, false, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/portfolio/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/portfolio/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/portfolio/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bbd0d886._.js.map