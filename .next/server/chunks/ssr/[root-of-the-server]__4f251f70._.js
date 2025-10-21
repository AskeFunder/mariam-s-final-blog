module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/article.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/sanity/schemaTypes/article.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string',
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            type: 'datetime',
            initialValue: ()=>new Date().toISOString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Brief',
                        value: 'brief'
                    },
                    {
                        title: 'Notes on art',
                        value: 'notes-on-art'
                    }
                ],
                layout: 'radio'
            },
            validation: (r)=>r.required()
        }),
        // Optional: cover used for cards/hero fallback
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverMedia',
            title: 'Cover media',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text'
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'caption',
                    type: 'string',
                    title: 'Caption'
                })
            ]
        }),
        // Main rich content (text + images in any order)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                // Text blocks
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'block',
                    styles: [
                        {
                            title: 'Normal',
                            value: 'normal'
                        },
                        {
                            title: 'H2',
                            value: 'h2'
                        },
                        {
                            title: 'H3',
                            value: 'h3'
                        },
                        {
                            title: 'Quote',
                            value: 'blockquote'
                        }
                    ],
                    lists: [
                        {
                            title: 'Bullet',
                            value: 'bullet'
                        },
                        {
                            title: 'Numbered',
                            value: 'number'
                        }
                    ],
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                                        name: 'href',
                                        type: 'url',
                                        validation: (r)=>r.required()
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                                        name: 'newTab',
                                        type: 'boolean',
                                        initialValue: true
                                    })
                                ]
                            }
                        ]
                    }
                }),
                // Image blocks with layout/align controls
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'caption',
                            type: 'string',
                            title: 'Caption'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'layout',
                            type: 'string',
                            title: 'Layout',
                            options: {
                                list: [
                                    {
                                        title: 'Small',
                                        value: 's'
                                    },
                                    {
                                        title: 'Medium',
                                        value: 'm'
                                    },
                                    {
                                        title: 'Wide',
                                        value: 'l'
                                    },
                                    {
                                        title: 'Full-bleed',
                                        value: 'full'
                                    }
                                ],
                                layout: 'radio'
                            },
                            initialValue: 'm'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'align',
                            type: 'string',
                            title: 'Align (optional)',
                            options: {
                                list: [
                                    {
                                        title: 'Center',
                                        value: 'center'
                                    },
                                    {
                                        title: 'Left (wrap text)',
                                        value: 'left'
                                    },
                                    {
                                        title: 'Right (wrap text)',
                                        value: 'right'
                                    }
                                ],
                                layout: 'radio'
                            },
                            initialValue: 'center'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'useAsHero',
                            type: 'boolean',
                            title: 'Use as hero',
                            description: 'If checked, this image can be used as the page hero.'
                        })
                    ]
                })
            ]
        }),
        // Optional extras
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'caption',
                            type: 'string',
                            title: 'Caption'
                        })
                    ]
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'file'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'credits',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            type: 'seo'
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'coverMedia',
            subtitle: 'category'
        },
        prepare ({ title, media, subtitle }) {
            return {
                title,
                media,
                subtitle
            };
        }
    }
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/portfolioItem.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string',
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            type: 'date'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'heroMedia',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'pressLinks',
            type: 'array',
            of: [
                {
                    type: 'url'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            type: 'seo'
        })
    ]
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/page.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string',
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        })
    ]
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/siteSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'siteTitle',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'socialLinks',
            type: 'array',
            of: [
                {
                    type: 'url'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'defaultOG',
            type: 'image'
        })
    ]
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/seo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'ogImage',
            type: 'image'
        })
    ]
});
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/sanity/schemaTypes/index.ts
__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$article$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/article.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$portfolioItem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/portfolioItem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$page$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/page.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$siteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/siteSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/seo.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$article$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$portfolioItem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$page$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$siteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$seo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    ]
};
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/structure.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "structure",
    ()=>structure
]);
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
}),
"[project]/Desktop/Vue/Ionic/mariam-s-final-blog/sanity.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/sanity/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/node_modules/sanity/lib/_chunks-es/pane.mjs [app-ssr] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Vue/Ionic/mariam-s-final-blog/src/sanity/structure.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$structure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Vue$2f$Ionic$2f$mariam$2d$s$2d$final$2d$blog$2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f251f70._.js.map