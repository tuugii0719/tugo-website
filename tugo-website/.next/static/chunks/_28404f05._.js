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
"[project]/app/tours/playtime/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlaytimePage
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
const P = "/images/playtime";
// Image paths with fallback to gallery photos until the user drops the real
// festival shots (the crowd photo and the 2026 lineup poster) into
// /public/images/playtime/ as `hero.jpg` and `poster.jpg`.
const heroImage = "".concat(G, "/DSC02098.jpg"); // swap to `${P}/hero.jpg` when ready
const crowdImage = "".concat(G, "/DSC02098.jpg"); // swap to `${P}/crowd.jpg` when ready
const posterImage = "".concat(G, "/DSC02365.jpg"); // swap to `${P}/poster.jpg` when ready
const ACCENT = "emerald";
// Real Playtime 2026 lineup — Ulaanbaatar, July 2-4
const lineup = [
    {
        day: "Thursday",
        date: "Jul 2",
        headliner: "MOLCHAT DOMA",
        highlights: [
            "Teresa in the Moon",
            "Magnolian",
            "Blindfold",
            "Night Train",
            "Aaguu",
            "Diskonnected",
            "Fat Hamster × Kang New",
            "Jesse You",
            "Ouissam",
            "Torden"
        ]
    },
    {
        day: "Friday",
        date: "Jul 3",
        headliner: "KINGS OF CONVENIENCE · DIIV",
        highlights: [
            "Fazi",
            "OMA × Shing02 with Spin Master A-1",
            "Horse Radio",
            "The Colors",
            "Dotor Khuree",
            "Aisha Devi",
            "b.ai",
            "JASSS",
            "Gabbs",
            "Rhom Omit",
            "Sailor Honeymoon"
        ]
    },
    {
        day: "Saturday",
        date: "Jul 4",
        headliner: "STEREOLAB · HYUKOH",
        highlights: [
            "Helena Hauff",
            "DJ Stingray 313",
            "Identified Patient",
            "The Lemons",
            "HONH",
            "Lord Spikeheart",
            "IWKC",
            "One Click Straight",
            "Fat Cat Jazz Club",
            "Tumen Ekh Ensemble"
        ]
    }
];
function PlaytimePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950 text-sand-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourHero"], {
                image: heroImage,
                kicker: "Playtime Festival · UB",
                meta: [
                    "1 departure",
                    "5 days",
                    "Jul 1 – 5"
                ],
                title: "Playtime",
                subtitle: "Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh — Mongolia’s biggest festival. A 5-day crew trip built around the long weekend. Ticket, meals, camping, city, Terelj — all in.",
                accent: ACCENT
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VitalsStrip"], {
                items: [
                    {
                        l: "Tour dates",
                        v: "Jul 1 – 5, 2026"
                    },
                    {
                        l: "Festival",
                        v: "Jul 2 – 4"
                    },
                    {
                        l: "Days",
                        v: "5"
                    },
                    {
                        l: "Group",
                        v: "6 – 8"
                    },
                    {
                        l: "Venue",
                        v: "Playtime Field, Nalaikh"
                    },
                    {
                        l: "Price",
                        v: "$750"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Prologue"], {
                accent: ACCENT,
                title: "Come for the headliners. Stay for the crew.",
                paragraphs: [
                    "Playtime is the festival weekend I build my July around. It runs in a field just outside Ulaanbaatar — three days, three stages, and a lineup that sneaks international acts into a Mongolian crowd in the middle of the steppe. 2026 brings Molchat Doma, Kings of Convenience, DIIV, Stereolab, and Hyukoh. That&apos;s a real roster.",
                    "This tour is for the people who&apos;d go alone but would rather not. We gather Wednesday night before the gates open — introductions, Mongolian BBQ, cheap beer, you know everyone&apos;s name before you hear any music. Thursday through Saturday: the festival. Sunday is a reset — morning in UB, afternoon out at Terelj, drop-off that evening so you can fly home.",
                    "It&apos;s the cheapest tour on the calendar on purpose. Festival ticket, all meals, camping kit, transfers, the hostel nights, the city day, the Terelj day — all in the $750. I want it to be a yes for students, first-timers, and anyone who just wants to show up and see who they meet."
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                            kicker: "2026 Lineup",
                            title: "Who’s playing.",
                            center: true,
                            accent: ACCENT
                        }, void 0, false, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4",
                            children: lineup.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        margin: "-40px"
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-6 md:p-8 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline justify-between mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-emerald-300 text-xs tracking-[0.25em] uppercase font-semibold",
                                                    children: day.day
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/playtime/page.js",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sand-500 text-xs tracking-wider",
                                                    children: day.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/playtime/page.js",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-lg md:text-xl text-sand-100 leading-tight mb-5",
                                            children: day.headliner
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-emerald-800/30 pt-4 mt-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-2",
                                                    children: "Also playing"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/playtime/page.js",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sand-400 text-xs leading-relaxed",
                                                    children: day.highlights.join(" · ")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/playtime/page.js",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, day.day, true, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sand-500 text-xs mt-8 italic",
                            children: [
                                "80+ artists across three stages. Full lineup on ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://playtime.mn",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-sand-300 underline underline-offset-4 hover:text-sand-100",
                                    children: "playtime.mn"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 127,
                                    columnNumber: 61
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/playtime/page.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Itinerary"], {
                accent: ACCENT,
                title: "Five days, three acts.",
                days: [
                    {
                        n: "01",
                        t: "Wed Jul 1 · Arrive & pre-party",
                        d: "Pick you up from UB airport or your hostel. Afternoon city tour — Gandan monastery, Zaisan hill, a Mongolian BBQ dinner. Names and faces before the field."
                    },
                    {
                        n: "02",
                        t: "Thu Jul 2 · Festival Day 1",
                        d: "Drive out to Playtime Field in Nalaikh (~40 min). Set up camp. Day stages from 2 pm. Molchat Doma headlines. Stay at the festival overnight — tent included."
                    },
                    {
                        n: "03",
                        t: "Fri Jul 3 · Festival Day 2",
                        d: "Second festival day. Kings of Convenience and DIIV headline. International stage builds late — Aisha Devi and JASSS if that&apos;s your thing."
                    },
                    {
                        n: "04",
                        t: "Sat Jul 4 · Festival Day 3",
                        d: "Final day. Stereolab and Hyukoh headline. Helena Hauff and DJ Stingray 313 push the night late. Back to UB for one proper bed."
                    },
                    {
                        n: "05",
                        t: "Sun Jul 5 · Recovery + Terelj + fly out",
                        d: "Slow UB morning. Drive out to Gorkhi-Terelj National Park after lunch — Turtle Rock, family ger dinner, khorkhog if you can still eat. Drop-off at UB airport or hostel by 9 pm."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                            kicker: "The price covers",
                            title: "Everything you need for 5 days.",
                            center: true,
                            accent: ACCENT
                        }, void 0, false, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                {
                                    icon: "🎟",
                                    title: "Festival ticket",
                                    body: "3-day general admission. We sort your wristband in advance."
                                },
                                {
                                    icon: "🍽",
                                    title: "3 meals a day",
                                    body: "Breakfasts, lunches, dinners on the road. Local food, no hunger."
                                },
                                {
                                    icon: "🏛",
                                    title: "UB city tour",
                                    body: "Gandan, Zaisan, lunch. Half-day, solid intro."
                                },
                                {
                                    icon: "🌲",
                                    title: "Terelj day trip",
                                    body: "Turtle Rock, horseback, family ger. Sunday reset."
                                }
                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-sand-800/40 bg-night-900/40 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl mb-3",
                                            children: x.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-lg text-sand-100 mb-1",
                                            children: x.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sand-400 text-sm leading-relaxed",
                                            children: x.body
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, x.title, true, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/playtime/page.js",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                            kicker: "The field",
                            title: "What Playtime looks like.",
                            center: true,
                            accent: ACCENT
                        }, void 0, false, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 169,
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
                                        src: crowdImage,
                                        alt: "Playtime crowd at night",
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "100vw"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/playtime/page.js",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PullQuote"], {
                                    accent: ACCENT,
                                    quote: "You come for the music. You leave with friends on four continents.",
                                    attribution: "— Someone who came solo two years in a row."
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3",
                                    children: [
                                        posterImage,
                                        "".concat(G, "/DSC08283.jpg"),
                                        "".concat(G, "/DSC01558.jpg"),
                                        "".concat(G, "/DSC02098.jpg")
                                    ].map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square overflow-hidden rounded-lg group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: src,
                                                alt: "",
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                                                sizes: "25vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/playtime/page.js",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, src, false, {
                                            fileName: "[project]/app/tours/playtime/page.js",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/playtime/page.js",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/playtime/page.js",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/playtime/page.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncludedBring"], {
                accent: ACCENT,
                priceLabel: "$750",
                included: [
                    "3-day Playtime Festival ticket (general admission)",
                    "All transfers: airport → UB → festival → UB → Terelj → airport",
                    "3 meals a day, all 5 days",
                    "2 nights camping at the festival (tent + mat included)",
                    "2 nights in a UB hostel (shared dorm — private option +$100)",
                    "UB half-day city tour + Terelj day trip",
                    "English/Mongolian guide (Tugi) throughout"
                ],
                bring: [
                    "Festival-appropriate clothes (rain possible, cold at night)",
                    "Warm jacket for festival evenings (~8 °C)",
                    "Sleeping bag rated to 5 °C (or rent for $30)",
                    "Rain shell, ear plugs, water bottle",
                    "Photo ID (wristband pickup requires passport)",
                    "Phone charger / power bank",
                    "Cash — MNT or USD, small bills for snacks"
                ],
                note: "Venue is <strong>Playtime Field, Nalaikh</strong> — ~40 minutes from central UB. Official festival dates: July 2 – 4, 2026."
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourFAQ"], {
                accent: ACCENT,
                items: [
                    {
                        q: "Who&apos;s on the 2026 lineup?",
                        a: "Thursday: Molchat Doma + Teresa in the Moon, Magnolian, Night Train. Friday: Kings of Convenience, DIIV + Fazi, Aisha Devi, JASSS. Saturday: Stereolab, Hyukoh + Helena Hauff, DJ Stingray 313, Identified Patient. 80+ acts across three stages. Full lineup at playtime.mn."
                    },
                    {
                        q: "How old is the Playtime crowd?",
                        a: "Most of the crowd is 20 – 35, and about a third are international. It&apos;s the single most global weekend in the Mongolian calendar — expect Seoul, Berlin, Melbourne, New York all within ten metres."
                    },
                    {
                        q: "Do I have to camp?",
                        a: "The price includes camping at the festival site on the two nights of music. If you&apos;d rather come back to UB each night, say the word and we&apos;ll arrange transport — but camping is part of the experience most people love."
                    },
                    {
                        q: "Is there food and water on site?",
                        a: "Yes, Playtime has serious food vendors and refill stations. Your 3-meals-a-day on festival days are covered by us at the festival&apos;s better stalls (Mongolian BBQ, ramen, vegetarian options) — just show up."
                    },
                    {
                        q: "What if there&apos;s a big act I don&apos;t want to miss?",
                        a: "Tell me Wednesday and I&apos;ll build the Thursday-Saturday schedule so your must-sees are covered. We don&apos;t move as one blob — you&apos;re free to wander."
                    },
                    {
                        q: "Can I bring a partner?",
                        a: "Yes — and take 15% off each of you. Private hostel room on the UB nights is a $100 add-on."
                    },
                    {
                        q: "What if I arrive late on Wednesday?",
                        a: "No problem — the pre-party runs until about midnight. Text me your landing time and I&apos;ll hold dinner."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourCTA"], {
                accent: ACCENT,
                title: "July 1 – 5, 2026 · $750",
                subtitle: "The easiest way to see the festival with company. Small group of 6 – 8. Applications open — spots go fast once travellers see the lineup.",
                emailSubject: "Playtime Festival · July 2026"
            }, void 0, false, {
                fileName: "[project]/app/tours/playtime/page.js",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/playtime/page.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = PlaytimePage;
var _c;
__turbopack_context__.k.register(_c, "PlaytimePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_28404f05._.js.map