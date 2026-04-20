(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/tours/kit.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Departures",
    ()=>Departures,
    "GerEtiquette",
    ()=>GerEtiquette,
    "IncludedBring",
    ()=>IncludedBring,
    "Itinerary",
    ()=>Itinerary,
    "Kicker",
    ()=>Kicker,
    "Prologue",
    ()=>Prologue,
    "PullQuote",
    ()=>PullQuote,
    "SectionHead",
    ()=>SectionHead,
    "Signature",
    ()=>Signature,
    "TourCTA",
    ()=>TourCTA,
    "TourFAQ",
    ()=>TourFAQ,
    "TourHero",
    ()=>TourHero,
    "VitalsStrip",
    ()=>VitalsStrip,
    "accentTextMap",
    ()=>accentTextMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const accentTextMap = {
    sky: "text-sky-400",
    rose: "text-rose-400",
    teal: "text-teal-400",
    emerald: "text-emerald-400",
    red: "text-red-400",
    indigo: "text-indigo-400",
    lime: "text-lime-400",
    orange: "text-orange-400",
    amber: "text-amber-400",
    violet: "text-violet-400"
};
const accentButtonMap = {
    sky: "bg-sky-500 hover:bg-sky-400 text-night-950",
    rose: "bg-rose-500 hover:bg-rose-400 text-night-950",
    teal: "bg-teal-500 hover:bg-teal-400 text-night-950",
    emerald: "bg-emerald-500 hover:bg-emerald-400 text-night-950",
    red: "bg-red-500 hover:bg-red-400 text-white",
    indigo: "bg-indigo-500 hover:bg-indigo-400 text-white",
    lime: "bg-lime-500 hover:bg-lime-400 text-night-950",
    orange: "bg-orange-500 hover:bg-orange-400 text-night-950",
    amber: "bg-amber-500 hover:bg-amber-400 text-night-950",
    violet: "bg-violet-500 hover:bg-violet-400 text-white"
};
const ctaBoxMap = {
    sky: "border-sky-800/30 from-sky-900/25",
    rose: "border-rose-800/30 from-rose-900/25",
    teal: "border-teal-800/30 from-teal-900/25",
    emerald: "border-emerald-800/30 from-emerald-900/25",
    red: "border-red-800/30 from-red-900/25",
    indigo: "border-indigo-800/30 from-indigo-900/25",
    lime: "border-lime-800/30 from-lime-900/25",
    orange: "border-orange-800/30 from-orange-900/25",
    amber: "border-amber-800/30 from-amber-900/25",
    violet: "border-violet-800/30 from-violet-900/25"
};
const includedCardMap = {
    sky: "border-sky-800/30 bg-sky-900/10",
    rose: "border-rose-800/30 bg-rose-900/10",
    teal: "border-teal-800/30 bg-teal-900/10",
    emerald: "border-emerald-800/30 bg-emerald-900/10",
    red: "border-red-800/30 bg-red-900/10",
    indigo: "border-indigo-800/30 bg-indigo-900/10",
    lime: "border-lime-800/30 bg-lime-900/10",
    orange: "border-orange-800/30 bg-orange-900/10",
    amber: "border-amber-800/30 bg-amber-900/10",
    violet: "border-violet-800/30 bg-violet-900/10"
};
const nodeColorMap = {
    sky: "bg-sky-500/20 border-sky-400/40 text-sky-200",
    rose: "bg-rose-500/20 border-rose-400/40 text-rose-200",
    teal: "bg-teal-500/20 border-teal-400/40 text-teal-200",
    emerald: "bg-emerald-500/20 border-emerald-400/40 text-emerald-200",
    red: "bg-red-500/20 border-red-400/40 text-red-200",
    indigo: "bg-indigo-500/20 border-indigo-400/40 text-indigo-200",
    lime: "bg-lime-500/20 border-lime-400/40 text-lime-200",
    orange: "bg-orange-500/20 border-orange-400/40 text-orange-200",
    amber: "bg-amber-500/20 border-amber-400/40 text-amber-200",
    violet: "bg-violet-500/20 border-violet-400/40 text-violet-200"
};
const trailGradientMap = {
    sky: "from-sky-500/30 via-sky-700/20 to-transparent",
    rose: "from-rose-500/30 via-rose-700/20 to-transparent",
    teal: "from-teal-500/30 via-teal-700/20 to-transparent",
    emerald: "from-emerald-500/30 via-emerald-700/20 to-transparent",
    red: "from-red-500/30 via-red-700/20 to-transparent",
    indigo: "from-indigo-500/30 via-indigo-700/20 to-transparent",
    lime: "from-lime-500/30 via-lime-700/20 to-transparent",
    orange: "from-orange-500/30 via-orange-700/20 to-transparent",
    amber: "from-amber-500/30 via-amber-700/20 to-transparent",
    violet: "from-violet-500/30 via-violet-700/20 to-transparent"
};
function Kicker(param) {
    let { children, accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "".concat(accentTextMap[accent], " text-[11px] tracking-[0.3em] uppercase mb-3"),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c = Kicker;
function SectionHead(param) {
    let { kicker, title, center = false, accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: center ? "text-center mb-10 md:mb-14" : "mb-8 md:mb-12",
        children: [
            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                accent: accent,
                children: kicker
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 102,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-3xl md:text-5xl text-sand-100 leading-tight",
                dangerouslySetInnerHTML: {
                    __html: title
                }
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c1 = SectionHead;
function Signature() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 180 50",
        className: "h-10 w-auto text-sand-300",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 6 12 L 22 12 M 14 12 L 14 36"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 28 20 C 28 34, 38 36, 40 24 M 40 20 L 40 36"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 56 20 C 46 20, 46 32, 54 32 C 60 32, 60 20, 56 20 M 60 20 L 60 40 C 60 46, 50 46, 48 42"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 68 20 L 68 36 M 68 14 L 68 15"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 78 34 Q 100 8, 150 28 Q 165 32, 174 22",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c2 = Signature;
function TourHero(param) {
    let { image, kicker, meta = [], title, subtitle, accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[86vh] min-h-[580px] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: "",
                fill: true,
                priority: true,
                className: "object-cover",
                sizes: "100vw"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-night-950/50 via-transparent to-night-950"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-end pb-14 md:pb-20 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tours",
                                className: "inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-5 hover:text-sand-100 transition-colors",
                                children: "← 2026 Season"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "".concat(accentTextMap[accent].replace("text-", "text-").replace("-400", "-300"), " text-[11px] tracking-[0.3em] uppercase"),
                                        children: kicker
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/kit.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    meta.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sand-700",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sand-400 text-[11px] tracking-[0.3em] uppercase",
                                                    children: m
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6 max-w-3xl",
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.7,
                    y: [
                        0,
                        6,
                        0
                    ]
                },
                transition: {
                    delay: 1.5,
                    y: {
                        repeat: Infinity,
                        duration: 2.5
                    }
                },
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-500 text-xs tracking-[0.3em] uppercase",
                children: "Scroll ↓"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c3 = TourHero;
function VitalsStrip(param) {
    let { items } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-y border-sand-900/30 bg-night-900/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm",
            children: items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1",
                            children: x.l
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-100 font-display",
                            children: x.v
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, x.l, true, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c4 = VitalsStrip;
function Prologue(param) {
    let { kicker = "A letter from Tugi", title, paragraphs, accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    margin: "-60px"
                },
                transition: {
                    duration: 0.7
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        accent: accent,
                        children: kicker
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl md:text-5xl text-sand-100 leading-tight mb-8",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 text-sand-300 text-lg leading-relaxed",
                        children: paragraphs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                dangerouslySetInnerHTML: {
                                    __html: p
                                }
                            }, i, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 211,
                                columnNumber: 39
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Signature, {}, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-500 text-sm italic",
                                children: "— Tugi"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 199,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c5 = Prologue;
function Itinerary(param) {
    let { kicker = "Itinerary", title = "Day by day.", days, acts, accent = "sky" } = param;
    // If acts provided, group visually. Each day has .act (index into acts).
    const showGroups = Array.isArray(acts) && acts.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: kicker,
                    title: title,
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-3 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b ".concat(trailGradientMap[accent])
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5 md:space-y-7",
                            children: days.map((day, idx)=>{
                                const dayAccent = showGroups && day.act !== undefined ? acts[day.act].accent : accent;
                                const showActHead = showGroups && (idx === 0 || days[idx - 1].act !== day.act);
                                const act = showGroups && day.act !== undefined ? acts[day.act] : null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        showActHead && act && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.4
                                            },
                                            className: "ml-10 md:ml-16 mb-2 ".concat(idx === 0 ? "mt-0" : "mt-6"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] tracking-[0.3em] uppercase ".concat(accentTextMap[act.accent].replace("-400", "-300")),
                                                children: act.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/kit.jsx",
                                                lineNumber: 253,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 246,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -12
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true,
                                                margin: "-40px"
                                            },
                                            transition: {
                                                duration: 0.35,
                                                delay: idx * 0.02
                                            },
                                            className: "relative pl-10 md:pl-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center font-display text-[10px] md:text-xs ".concat(nodeColorMap[dayAccent]),
                                                    children: day.n
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-lg md:text-xl text-sand-100 mb-1",
                                                    children: day.t
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sand-400 text-base leading-relaxed",
                                                    children: day.d
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, day.n, true, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 233,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c6 = Itinerary;
function PullQuote(param) {
    let { quote, attribution, accent = "sky" } = param;
    const borderMap = {
        sky: "border-sky-400/50",
        rose: "border-rose-400/50",
        teal: "border-teal-400/50",
        emerald: "border-emerald-400/50",
        red: "border-red-400/50",
        indigo: "border-indigo-400/50",
        lime: "border-lime-400/50",
        orange: "border-orange-400/50",
        amber: "border-amber-400/50",
        violet: "border-violet-400/50"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].blockquote, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        className: "max-w-3xl mx-auto py-10 md:py-14 border-l-2 ".concat(borderMap[accent], " pl-6 md:pl-8"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-2xl md:text-3xl text-sand-100 italic leading-snug",
                children: [
                    "“",
                    quote,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            attribution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-4 text-sand-500 text-sm",
                children: attribution
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 309,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c7 = PullQuote;
function IncludedBring(param) {
    let { priceLabel, included, bring, accent = "sky", note } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: "Practicals",
                    title: "What’s included, what to bring.",
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border p-6 md:p-8 ".concat(includedCardMap[accent]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-sand-100 mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: accentTextMap[accent],
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        "Included in ",
                                        priceLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sand-300 text-sm leading-relaxed",
                                    children: included.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "".concat(accentTextMap[accent], " mt-0.5"),
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: i
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-sand-100 mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sand-400",
                                            children: "◇"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this),
                                        "You bring"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sand-300 text-sm leading-relaxed",
                                    children: bring.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sand-500 mt-0.5",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: i
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 pt-5 border-t border-sand-800/40 text-sand-500 text-xs italic",
                                    dangerouslySetInnerHTML: {
                                        __html: note
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 321,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
_c8 = IncludedBring;
function TourFAQ(param) {
    let { items, kicker = "Before you apply", title = "Answers to the usual questions.", accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: kicker,
                    title: title,
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: items.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "group border border-sand-800/40 rounded-xl bg-night-900/30 open:bg-night-900/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: f.q
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sand-600 text-xl leading-none group-open:rotate-45 transition-transform",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-5 pb-5 text-sand-400 text-base leading-relaxed",
                                    dangerouslySetInnerHTML: {
                                        __html: f.a
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, f.q, true, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 368,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_c9 = TourFAQ;
function TourCTA(param) {
    let { title, subtitle, emailSubject, accent = "sky" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "relative overflow-hidden rounded-3xl border ".concat(ctaBoxMap[accent], " bg-gradient-to-br via-night-900/60 to-night-900/80 p-8 md:p-12"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            accent: accent,
                            children: "Come with me"
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-3xl md:text-4xl text-sand-100 mb-4",
                            dangerouslySetInnerHTML: {
                                __html: title
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-300 text-lg mb-8 max-w-xl leading-relaxed",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/book",
                                    className: "inline-flex items-center justify-center ".concat(accentButtonMap[accent], " px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition"),
                                    children: "Reserve a Spot"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:Tuugii7019@gmail.com?subject=".concat(encodeURIComponent(emailSubject || "Tour inquiry")),
                                    className: "inline-flex items-center justify-center border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-7 py-3.5 text-xs uppercase tracking-[0.15em] rounded-sm transition",
                                    children: "Ask a question"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tours",
                        className: "text-sand-500 hover:text-sand-300 text-[11px] tracking-[0.3em] uppercase transition-colors",
                        children: "← All tours"
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 396,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_c10 = TourCTA;
function GerEtiquette() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-sand-800/40 bg-night-900/40 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sand-500 text-[10px] tracking-[0.25em] uppercase mb-3",
                children: "Your first ger visit"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 text-sand-300 text-sm leading-relaxed",
                children: [
                    "Enter right foot first, move clockwise inside.",
                    "Never touch the two central columns — they hold the sky up.",
                    "Receive food and drink with the right hand.",
                    "Don't step on the threshold; don't whistle indoors.",
                    "Accept the bowl of milk tea — a sip is enough."
                ].map((rule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-600",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: rule
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this)
                        ]
                    }, rule, true, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 439,
        columnNumber: 5
    }, this);
}
_c11 = GerEtiquette;
function Departures(param) {
    let { list, accent = "sky" } = param;
    const borderMap = {
        sky: "border-sky-800/30 bg-sky-900/10",
        teal: "border-teal-800/30 bg-teal-900/10",
        indigo: "border-indigo-800/30 bg-indigo-900/10",
        red: "border-red-800/30 bg-red-900/10",
        amber: "border-amber-800/30 bg-amber-900/10",
        lime: "border-lime-800/30 bg-lime-900/10",
        orange: "border-orange-800/30 bg-orange-900/10",
        emerald: "border-emerald-800/30 bg-emerald-900/10",
        rose: "border-rose-800/30 bg-rose-900/10",
        violet: "border-violet-800/30 bg-violet-900/10"
    };
    const textMap = {
        sky: "text-sky-300",
        teal: "text-teal-300",
        indigo: "text-indigo-300",
        red: "text-red-300",
        amber: "text-amber-300",
        lime: "text-lime-300",
        orange: "text-orange-300",
        emerald: "text-emerald-300",
        rose: "text-rose-300",
        violet: "text-violet-300"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b border-sand-900/30 bg-night-900/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-".concat(Math.min(list.length, 3)),
                style: {
                    gridTemplateColumns: "repeat(".concat(Math.min(list.length, 3), ", minmax(0, 1fr))")
                },
                children: list.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border ".concat(borderMap[accent], " rounded-xl p-5 flex items-center gap-3 flex-wrap"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "".concat(textMap[accent], " text-xs tracking-[0.2em] uppercase font-semibold"),
                                children: d.label
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 494,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-700",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-100 font-display text-lg",
                                children: d.dates
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 498,
                                columnNumber: 15
                            }, this),
                            d.days && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sand-700",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/kit.jsx",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sand-400 text-sm",
                                        children: [
                                            d.days,
                                            " days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/kit.jsx",
                                        lineNumber: 502,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 493,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 491,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/kit.jsx",
            lineNumber: 490,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_c12 = Departures;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Kicker");
__turbopack_context__.k.register(_c1, "SectionHead");
__turbopack_context__.k.register(_c2, "Signature");
__turbopack_context__.k.register(_c3, "TourHero");
__turbopack_context__.k.register(_c4, "VitalsStrip");
__turbopack_context__.k.register(_c5, "Prologue");
__turbopack_context__.k.register(_c6, "Itinerary");
__turbopack_context__.k.register(_c7, "PullQuote");
__turbopack_context__.k.register(_c8, "IncludedBring");
__turbopack_context__.k.register(_c9, "TourFAQ");
__turbopack_context__.k.register(_c10, "TourCTA");
__turbopack_context__.k.register(_c11, "GerEtiquette");
__turbopack_context__.k.register(_c12, "Departures");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tours/altai-tavan-bogd/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AltaiTavanBogdPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tours/kit.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const G = "/images/gallery";
const ACCENT = "indigo";
// A decorative SVG of western peaks — simple silhouette
function PeaksBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute bottom-0 left-0 right-0 w-full h-48 text-indigo-500/10",
        viewBox: "0 0 1200 200",
        preserveAspectRatio: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 200 L 80 120 L 160 60 L 260 140 L 360 40 L 460 110 L 580 20 L 680 100 L 800 60 L 920 140 L 1040 70 L 1200 130 L 1200 200 Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M340 60 L 360 40 L 380 65",
                stroke: "white",
                strokeWidth: "1",
                opacity: "0.3",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M560 38 L 580 20 L 600 42",
                stroke: "white",
                strokeWidth: "1",
                opacity: "0.3",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = PeaksBackground;
function AltaiTavanBogdPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950 text-sand-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourHero"], {
                image: "".concat(G, "/DSC02435.jpg"),
                kicker: "Western heights",
                meta: [
                    "2 departures",
                    "6 days"
                ],
                title: "Altai<br/>Tavan Bogd",
                subtitle: "The Five Holy Peaks — glaciers, Kazakh eagle hunters, twin alpine lakes, 4,000-year-old petroglyphs. Flight in from UB, everything handled. Two departures this season.",
                accent: ACCENT
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VitalsStrip"], {
                items: [
                    {
                        l: "Duration",
                        v: "6 days"
                    },
                    {
                        l: "Departures",
                        v: "2 in 2026"
                    },
                    {
                        l: "Group",
                        v: "6 – 8"
                    },
                    {
                        l: "Region",
                        v: "Western Mongolia"
                    },
                    {
                        l: "Price",
                        v: "$1,400"
                    },
                    {
                        l: "Co-host",
                        v: "Kazakh local"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Departures"], {
                accent: ACCENT,
                list: [
                    {
                        label: "June departure",
                        dates: "Jun 8 – 13, 2026",
                        days: 6
                    },
                    {
                        label: "August departure",
                        dates: "Aug 3 – 8, 2026",
                        days: 6
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Prologue"], {
                accent: ACCENT,
                title: "Mongolia’s wildest corner, all included.",
                paragraphs: [
                    "The Altai is where Mongolia meets Russia, Kazakhstan, and China in a single mountain range. It&apos;s not like anywhere else in the country — the people are Kazakh, the culture is eagle-hunters, and the peaks start above 4,000 m.",
                    "I run this as the budget version on purpose. We fly you from UB to Ölgii so no wasted drive days, stay with nomad families (not fancy hotels), eat what they eat, and cover the absolute highlights — Khoton Lake, Baga Turgen waterfall on horseback, the Potanin Glacier viewpoint, petroglyphs older than the pyramids.",
                    "Everything is included — flight, food, guides, horses, permits. You bring your boots and a warm layer. I hand off to a local Altai co-host the moment we land in Ölgii; you get the warmth of a personal tour AND the depth of someone who grew up in this specific landscape."
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Itinerary"], {
                accent: ACCENT,
                title: "Four days on the ground, two on the wing.",
                days: [
                    {
                        n: "01",
                        t: "UB → Ölgii · Khoton Lake",
                        d: "Morning flight west to Ölgii (~3 hours). Scenic 170 km drive to the twin Khoton–Khurgan lakes. Stop with an eagle-hunter family — hold the eagle. Night with a nomad family on the shore."
                    },
                    {
                        n: "02",
                        t: "Horse ride to Baga Turgen Waterfall",
                        d: "Saddle up on Mongolia&apos;s tough little horses. 22 km round-trip to the waterfall, ~6 hours total. Forest, icy rivers, green pasture, snow-line at the China border. Drive to another family camp to stay."
                    },
                    {
                        n: "03",
                        t: "Northern Altai Tavan Bogd",
                        d: "Drive deep into the national park. High passes, hour-by-hour shifts in terrain, the Yak Milk White River. Night with a nomad family near the ranger station."
                    },
                    {
                        n: "04",
                        t: "Sacred Ovoo · Potanin Glacier · petroglyphs",
                        d: "10 km to the sacred Ovoo — the viewpoint for the Five Holy Peaks and the Potanin Ice Glacier. Optional 3.5 km hike to the glacier. Return to Ölgii via 3,000–4,000 BC petroglyphs."
                    },
                    {
                        n: "05",
                        t: "Ölgii · rest + culture",
                        d: "Recovery day. Explore Ölgii bazaar, meet Kazakh artisans, visit the Museum of Natural History. Dinner at a local spot."
                    },
                    {
                        n: "06",
                        t: "Ölgii → UB",
                        d: "Morning flight back east. Arrive in UB by afternoon with time for a shower before your onward plans."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-28 border-b border-sand-900/30 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeaksBackground, {}, void 0, false, {
                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                kicker: "Western landscape",
                                title: "The Five Holy Peaks.",
                                center: true,
                                accent: ACCENT
                            }, void 0, false, {
                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 md:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6
                                        },
                                        className: "relative aspect-[21/9] overflow-hidden rounded-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "".concat(G, "/DSC02435.jpg"),
                                            alt: "Altai landscape",
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "100vw"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PullQuote"], {
                                        accent: ACCENT,
                                        quote: "The eagle weighs about seven kilos and she looks at you like you’re prey. It’s the longest ten seconds of the trip.",
                                        attribution: "— On meeting the eagle hunter’s bird."
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3",
                                        children: [
                                            "".concat(G, "/DSC02431.jpg"),
                                            "".concat(G, "/DSC02433.jpg"),
                                            "".concat(G, "/DSC02429.jpg"),
                                            "".concat(G, "/DSC02424.jpg")
                                        ].map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-square overflow-hidden rounded-lg group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: src,
                                                    alt: "",
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                                                    sizes: "25vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            }, src, false, {
                                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "rounded-2xl border border-indigo-800/30 bg-indigo-900/10 p-8 md:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-indigo-300 text-[11px] tracking-[0.3em] uppercase mb-3",
                                children: "Co-host on this tour"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-2xl md:text-3xl text-sand-100 mb-4",
                                children: "A local Altai guide joins the group."
                            }, void 0, false, {
                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 leading-relaxed text-base md:text-lg",
                                children: "The Altai is its own world — Kazakh instead of Khalkh, eagle-hunter culture, mountains above 4,000 m. I travel with the group from UB, but once we're in Ölgii a local co-host joins us: someone with years of direct experience in these peaks, family ties to the eagle hunters, and fluent Kazakh. You get the warmth of a personal tour AND the depth of someone who grew up in this specific landscape."
                            }, void 0, false, {
                                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncludedBring"], {
                accent: ACCENT,
                priceLabel: "$1,400",
                included: [
                    "Round-trip flight: Ulaanbaatar ↔ Ölgii",
                    "All meals (breakfast, lunch, dinner)",
                    "4×4 Russian van, driver, and fuel",
                    "English/Mongolian guide (Tugi) + local Altai co-host",
                    "Horses and local riding guide for Baga Turgen",
                    "Ger camps and nomad family stays",
                    "All park permits and site entrance fees",
                    "Eagle-hunter visit fee"
                ],
                bring: [
                    "Hiking boots (broken in) + blister tape",
                    "Warm layer — nights drop below 5 °C even in August",
                    "Rain shell (Altai weather flips fast)",
                    "Sleeping bag rated to 0 °C for the ger camps",
                    "Headlamp, sunhat, sunscreen, lip balm",
                    "Altitude is up to ~3,000 m — flag any heart conditions",
                    "A 40 L duffel (no hard suitcases)"
                ],
                note: "Altai is physically the most demanding of our tours. The horse day is 6 hours in the saddle; the glacier hike is 3.5 km each way at altitude. Most ages handle it — just come with something in the tank."
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourFAQ"], {
                accent: ACCENT,
                items: [
                    {
                        q: "Is the flight really included?",
                        a: "Yes. Round-trip UB ↔ Ölgii is built into the $1,400 price. Flight tickets go non-refundable ~45 days before departure, so if you need to cancel after that the flight portion is forfeit."
                    },
                    {
                        q: "How cold does it get?",
                        a: "Days 10–20 °C, nights can drop to 0–5 °C. The wind is the real factor — it cuts through thin layers. Wool or synthetic mid-layer + wind shell beats any fleece."
                    },
                    {
                        q: "Do I have to ride a horse?",
                        a: "The Baga Turgen day is on horseback with a local guide leading. If you really can&apos;t ride, we can swap it for a shorter hike — but the waterfall is the highlight and the horses are famously gentle."
                    },
                    {
                        q: "Is the eagle hunter real or a show?",
                        a: "Real. We visit a hunting family that actually uses their eagles for winter hunting. Summer they&apos;re training and mostly welcoming guests like us. Most famous training grounds are within a 2-hour drive."
                    },
                    {
                        q: "Can I do this + North & Central?",
                        a: "Yes — the June Altai (Jun 8–13) leaves 6 weeks before the N&C Loop (Jul 21–31). Plenty of time to reset. Or: August Altai (Aug 3–8) → Gobi Glimpse (Aug 18–28). Ask and I'll plan the combo."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourCTA"], {
                accent: ACCENT,
                title: "$1,400 per person · flight included",
                subtitle: "Two departures in 2026 — June 8–13 or Aug 3–8. Small groups of 6–8. Bring a friend and save 15% each.",
                emailSubject: "Altai Tavan Bogd · 2026"
            }, void 0, false, {
                fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/altai-tavan-bogd/page.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c1 = AltaiTavanBogdPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PeaksBackground");
__turbopack_context__.k.register(_c1, "AltaiTavanBogdPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1d76dc17._.js.map