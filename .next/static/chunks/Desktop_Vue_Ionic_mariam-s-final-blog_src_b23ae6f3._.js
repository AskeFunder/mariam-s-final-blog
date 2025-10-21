(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = ("TURBOPACK compile-time value", "2025-01-01") || '2025-09-28';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "gk1ei4nb"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/lib/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-client] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/lib/queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const COVER = '"coverUrl": coalesce(\n  coverMedia.asset->url,\n  body[_type=="image" && defined(useAsHero) && useAsHero==true][0].asset->url,\n  gallery[0].asset->url,\n  body[_type=="image"][0].asset->url\n)';
const ARTICLE_CARD = '{\n  _id,\n  title,\n  "slug": slug.current,\n  date,\n  category,\n  '.concat(COVER, ',\n  // legacy shape for components that read cover.asset.url\n  "cover": coverMedia{ asset->{ url, metadata{dimensions} } }\n}');
const ALL_HOME = '*[_type=="article"] | order(date desc) [0...30] '.concat(ARTICLE_CARD);
const BY_CATEGORY = '*[_type=="article" && category==$cat]\n  | order(date desc) [0...100] '.concat(ARTICLE_CARD);
const ARTICLE_BY_SLUG = '*[_type=="article" && slug.current==$slug][0]{\n  _id,\n  title,\n  date,\n  category,\n  '.concat(COVER, ",\n  coverMedia{ asset->{ _id, url, metadata{dimensions} } },\n  body[]{\n    ...,\n    asset->{ _id, url, metadata{dimensions} }\n  },\n  gallery[]{\n    ...,\n    asset->{ _id, url, metadata{dimensions} }\n  },\n  credits,\n  seo\n}");
const PORTFOLIO_GRID = '*[_type=="portfolioItem"] | order(date desc) {\n  _id,\n  title,\n  "slug": slug.current,\n  heroMedia{ asset->{ url, metadata{dimensions} } }\n}';
const PORTFOLIO_BY_SLUG = '*[_type=="portfolioItem" && slug.current==$slug][0]{\n  _id,\n  title,\n  date,\n  heroMedia{ asset->{ url, metadata{dimensions} } },\n  body[]{\n    ...,\n    asset->{ _id, url, metadata{dimensions} }\n  },\n  pressLinks,\n  tags,\n  seo\n}';
const ABOUT_PAGE = '*[_type=="page" && slug.current=="about"][0]{\n  title,\n  content[]\n}';
const SEARCH_ARTICLES = '*[_type=="article" && (title match $searchTerm || category match $searchTerm)] | order(date desc) [0...20] '.concat(ARTICLE_CARD);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/lib/queries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function SearchPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.get('q') || '';
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSearched, setHasSearched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPage.useEffect": ()=>{
            if (query.trim()) {
                performSearch(query.trim());
            }
        }
    }["SearchPage.useEffect"], [
        query
    ]);
    const performSearch = async (searchTerm)=>{
        setLoading(true);
        setHasSearched(true);
        try {
            const results = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEARCH_ARTICLES"], {
                searchTerm: "*".concat(searchTerm, "*")
            });
            setSearchResults(results || []);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-8 sm:px-16 md:px-24 lg:px-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-semibold text-foreground mb-4",
                            children: query ? 'Search results for "'.concat(query, '"') : 'Search'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted",
                            children: loading ? 'Searching...' : "".concat(searchResults.length, " results found")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                }, this),
                !query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted text-lg",
                        children: "Enter a search term to find articles"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                        lineNumber: 73,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                    lineNumber: 72,
                    columnNumber: 21
                }, this),
                !loading && hasSearched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: searchResults.map((article)=>{
                            var _article_cover_asset, _article_cover, _article_cover1;
                            var _article_cover_asset_url;
                            const img = (_article_cover_asset_url = (_article_cover = article.cover) === null || _article_cover === void 0 ? void 0 : (_article_cover_asset = _article_cover.asset) === null || _article_cover_asset === void 0 ? void 0 : _article_cover_asset.url) !== null && _article_cover_asset_url !== void 0 ? _article_cover_asset_url : (_article_cover1 = article.cover) === null || _article_cover1 === void 0 ? void 0 : _article_cover1.url;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/articles/".concat(article.slug),
                                className: "group block",
                                children: [
                                    img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[4/3] overflow-hidden rounded-lg mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: img,
                                            alt: article.title,
                                            fill: true,
                                            sizes: "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
                                            className: "object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 53
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-medium text-foreground leading-snug group-hover:text-muted transition-colors duration-200",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, article._id, true, {
                                fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                                lineNumber: 88,
                                columnNumber: 41
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                        lineNumber: 83,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted text-lg",
                            children: [
                                'No articles found for "',
                                query,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                            lineNumber: 113,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
                        lineNumber: 112,
                        columnNumber: 29
                    }, this)
                }, void 0, false)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/app/(site)/search/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(SearchPage, "O0HDZNpS/B5GM0O2fvqEwcf5fkg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SearchPage;
var _c;
__turbopack_context__.k.register(_c, "SearchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Vue_Ionic_mariam-s-final-blog_src_b23ae6f3._.js.map