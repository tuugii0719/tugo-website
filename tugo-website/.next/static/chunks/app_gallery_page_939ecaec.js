(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/gallery/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ============================================================================
// PHOTO CATALOG — categorized from 2025 summer field work
// ============================================================================
//
// regions: north (Khuvsgul + taiga) · central (Orkhon, horses, monasteries,
// families) · south (Gobi)
// subjects help search: horses, family, food, landscape, ger, water, road
const photos = [
    // Central Mongolia
    {
        id: "DSC01558",
        region: "central",
        tags: [
            "landscape",
            "sky",
            "ger"
        ]
    },
    {
        id: "DSC01561",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC01632",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC01633",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC01684",
        region: "central",
        tags: [
            "river",
            "canyon",
            "Orkhon"
        ]
    },
    {
        id: "DSC01687",
        region: "central",
        tags: [
            "river",
            "Orkhon"
        ]
    },
    {
        id: "DSC01690",
        region: "central",
        tags: [
            "river",
            "Orkhon"
        ]
    },
    {
        id: "DSC01810",
        region: "central",
        tags: [
            "family",
            "food"
        ]
    },
    {
        id: "DSC01820",
        region: "central",
        tags: [
            "food",
            "khorkhog"
        ]
    },
    {
        id: "DSC01846",
        region: "central",
        tags: [
            "family"
        ]
    },
    {
        id: "DSC01847",
        region: "central",
        tags: [
            "family"
        ]
    },
    {
        id: "DSC01857",
        region: "central",
        tags: [
            "family"
        ]
    },
    {
        id: "DSC01861",
        region: "central",
        tags: [
            "family"
        ]
    },
    {
        id: "DSC02090",
        region: "central",
        tags: [
            "horses"
        ]
    },
    {
        id: "DSC02095",
        region: "central",
        tags: [
            "horses",
            "naadam"
        ]
    },
    {
        id: "DSC02098",
        region: "central",
        tags: [
            "horses",
            "naadam",
            "racing"
        ]
    },
    {
        id: "DSC02105",
        region: "central",
        tags: [
            "horses",
            "naadam"
        ]
    },
    {
        id: "DSC02111",
        region: "central",
        tags: [
            "horses"
        ]
    },
    {
        id: "DSC02132",
        region: "central",
        tags: [
            "horses"
        ]
    },
    {
        id: "DSC02138",
        region: "central",
        tags: [
            "horses"
        ]
    },
    {
        id: "DSC02365",
        region: "central",
        tags: [
            "horses",
            "herd"
        ]
    },
    // North / Khuvsgul
    {
        id: "DSC02424",
        region: "north",
        tags: [
            "ger",
            "landscape"
        ]
    },
    {
        id: "DSC02429",
        region: "north",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC02431",
        region: "north",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC02433",
        region: "north",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC02435",
        region: "north",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC02459",
        region: "north",
        tags: [
            "water",
            "Khuvsgul"
        ]
    },
    {
        id: "DSC02462",
        region: "north",
        tags: [
            "water",
            "Khuvsgul"
        ]
    },
    // Mixed / Gobi / Central
    {
        id: "DSC07959",
        region: "south",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08000",
        region: "south",
        tags: [
            "dunes",
            "Gobi",
            "footprints"
        ]
    },
    {
        id: "DSC08023",
        region: "south",
        tags: [
            "Gobi"
        ]
    },
    {
        id: "DSC08134",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08144",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08147",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08200",
        region: "central",
        tags: [
            "4x4",
            "road"
        ]
    },
    {
        id: "DSC08217",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08220",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08238",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08244",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08245 (1)",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08245",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08248",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08276",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08283",
        region: "central",
        tags: [
            "monastery",
            "Karakorum",
            "Erdene Zuu"
        ]
    },
    {
        id: "DSC08290",
        region: "central",
        tags: [
            "monastery"
        ]
    },
    {
        id: "DSC08312",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08315",
        region: "central",
        tags: [
            "landscape"
        ]
    },
    {
        id: "DSC08318",
        region: "central",
        tags: [
            "landscape"
        ]
    }
];
const filters = [
    {
        id: "all",
        label: "Everything",
        count: photos.length
    },
    {
        id: "north",
        label: "North · Khuvsgul",
        count: photos.filter((p)=>p.region === "north").length
    },
    {
        id: "central",
        label: "Central",
        count: photos.filter((p)=>p.region === "central").length
    },
    {
        id: "south",
        label: "South · Gobi",
        count: photos.filter((p)=>p.region === "south").length
    }
];
function GalleryPage() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const shown = filter === "all" ? photos : photos.filter((p)=>p.region === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950 text-sand-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-28 pb-10 md:pt-36 md:pb-14 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-4",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-4xl md:text-6xl text-white mb-5 leading-tight",
                                children: "From the road"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-300 max-w-xl mx-auto leading-relaxed",
                                children: "Shots from the 2025 summer — the ones that made me want to do this full-time. Everything here was taken on my trips."
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/page.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky top-20 z-30 bg-night-950/90 backdrop-blur-md border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-2",
                    children: filters.map((f)=>{
                        const active = filter === f.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(f.id),
                            className: "\n                  text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition\n                  ".concat(active ? "border-sand-300/60 bg-sand-400/10 text-sand-100" : "border-sand-800/50 text-sand-400 hover:border-sand-600/50 hover:text-sand-200", "\n                "),
                            children: [
                                f.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 text-sand-600",
                                    children: f.count
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.js",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, f.id, true, {
                            fileName: "[project]/app/gallery/page.js",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-10 md:py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1600px] mx-auto px-4 md:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:break-inside-avoid [&>*]:mb-3 md:[&>*]:mb-4",
                        children: shown.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setLightbox(i),
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: Math.min(i * 0.015, 0.3)
                                },
                                className: "relative w-full overflow-hidden rounded-lg group cursor-zoom-in block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/gallery/".concat(p.id, ".jpg"),
                                        alt: p.tags.join(", "),
                                        width: 1400,
                                        height: 0,
                                        sizes: "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
                                        className: "w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]",
                                        style: {
                                            height: "auto"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/page.js",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/page.js",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/gallery/page.js",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: lightbox !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setLightbox(null),
                    className: "fixed inset-0 z-[80] bg-night-950/95 flex items-center justify-center p-4 cursor-zoom-out",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.95
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: 0.95
                        },
                        transition: {
                            duration: 0.2
                        },
                        className: "relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/gallery/".concat(shown[lightbox].id, ".jpg"),
                                alt: "",
                                fill: true,
                                sizes: "90vw",
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setLightbox(null);
                                },
                                className: "absolute top-4 right-4 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm",
                                "aria-label": "Close",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            lightbox > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setLightbox(lightbox - 1);
                                },
                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm",
                                "aria-label": "Previous",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 195,
                                columnNumber: 17
                            }, this),
                            lightbox < shown.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setLightbox(lightbox + 1);
                                },
                                className: "absolute right-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm",
                                "aria-label": "Next",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 207,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-sand-500 text-xs bg-night-900/70 px-3 py-1.5 rounded-full backdrop-blur-sm",
                                children: [
                                    lightbox + 1,
                                    " / ",
                                    shown.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gallery/page.js",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/page.js",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-t border-sand-900/30 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-2xl md:text-3xl text-sand-100 mb-4",
                            children: "Want to make your own set?"
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/page.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-400 mb-8",
                            children: "Pick a tour and come out with us. Your camera roll is going to look different after."
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/page.js",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/tours",
                                    className: "inline-block bg-sand-400 hover:bg-sand-300 text-night-950 px-6 py-3 text-sm uppercase tracking-[0.15em] rounded-sm transition",
                                    children: "See the tours"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.js",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/book",
                                    className: "inline-block border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-200 px-6 py-3 text-sm uppercase tracking-[0.15em] rounded-sm transition",
                                    children: "Apply to join"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.js",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gallery/page.js",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gallery/page.js",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.js",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/page.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(GalleryPage, "Em+uaUDgxWjnr8eX7YTACk4/5es=");
_c = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_gallery_page_939ecaec.js.map