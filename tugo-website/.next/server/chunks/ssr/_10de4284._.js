module.exports = [
"[project]/components/tours/kit.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
function Kicker({ children, accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `${accentTextMap[accent]} text-[11px] tracking-[0.3em] uppercase mb-3`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/tours/kit.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SectionHead({ kicker, title, center = false, accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: center ? "text-center mb-10 md:mb-14" : "mb-8 md:mb-12",
        children: [
            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                accent: accent,
                children: kicker
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 102,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
function Signature() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 180 50",
        className: "h-10 w-auto text-sand-300",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 6 12 L 22 12 M 14 12 L 14 36"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 28 20 C 28 34, 38 36, 40 24 M 40 20 L 40 36"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 56 20 C 46 20, 46 32, 54 32 C 60 32, 60 20, 56 20 M 60 20 L 60 40 C 60 46, 50 46, 48 42"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 68 20 L 68 36 M 68 14 L 68 15"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function TourHero({ image, kicker, meta = [], title, subtitle, accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[86vh] min-h-[580px] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-night-950/50 via-transparent to-night-950"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-end pb-14 md:pb-20 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tours",
                                className: "inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-5 hover:text-sand-100 transition-colors",
                                children: "← 2026 Season"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${accentTextMap[accent].replace("text-", "text-").replace("-400", "-300")} text-[11px] tracking-[0.3em] uppercase`,
                                        children: kicker
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/kit.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    meta.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sand-700",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6 max-w-3xl",
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
function VitalsStrip({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-y border-sand-900/30 bg-night-900/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm",
            children: items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1",
                            children: x.l
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function Prologue({ kicker = "A letter from Tugi", title, paragraphs, accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        accent: accent,
                        children: kicker
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl md:text-5xl text-sand-100 leading-tight mb-8",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/tours/kit.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 text-sand-300 text-lg leading-relaxed",
                        children: paragraphs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Signature, {}, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function Itinerary({ kicker = "Itinerary", title = "Day by day.", days, acts, accent = "sky" }) {
    // If acts provided, group visually. Each day has .act (index into acts).
    const showGroups = Array.isArray(acts) && acts.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: kicker,
                    title: title,
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute left-3 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b ${trailGradientMap[accent]}`
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5 md:space-y-7",
                            children: days.map((day, idx)=>{
                                const dayAccent = showGroups && day.act !== undefined ? acts[day.act].accent : accent;
                                const showActHead = showGroups && (idx === 0 || days[idx - 1].act !== day.act);
                                const act = showGroups && day.act !== undefined ? acts[day.act] : null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        showActHead && act && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            className: `ml-10 md:ml-16 mb-2 ${idx === 0 ? "mt-0" : "mt-6"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[10px] tracking-[0.3em] uppercase ${accentTextMap[act.accent].replace("-400", "-300")}`,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center font-display text-[10px] md:text-xs ${nodeColorMap[dayAccent]}`,
                                                    children: day.n
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-lg md:text-xl text-sand-100 mb-1",
                                                    children: day.t
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function PullQuote({ quote, attribution, accent = "sky" }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].blockquote, {
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
        className: `max-w-3xl mx-auto py-10 md:py-14 border-l-2 ${borderMap[accent]} pl-6 md:pl-8`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            attribution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
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
function IncludedBring({ priceLabel, included, bring, accent = "sky", note }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: "Practicals",
                    title: "What’s included, what to bring.",
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-2xl border p-6 md:p-8 ${includedCardMap[accent]}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-sand-100 mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sand-300 text-sm leading-relaxed",
                                    children: included.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${accentTextMap[accent]} mt-0.5`,
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-sand-100 mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sand-300 text-sm leading-relaxed",
                                    children: bring.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sand-500 mt-0.5",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/kit.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function TourFAQ({ items, kicker = "Before you apply", title = "Answers to the usual questions.", accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28 border-b border-sand-900/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                    kicker: kicker,
                    title: title,
                    center: true,
                    accent: accent
                }, void 0, false, {
                    fileName: "[project]/components/tours/kit.jsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: items.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "group border border-sand-800/40 rounded-xl bg-night-900/30 open:bg-night-900/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: f.q
                                        }, void 0, false, {
                                            fileName: "[project]/components/tours/kit.jsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function TourCTA({ title, subtitle, emailSubject, accent = "sky" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: `relative overflow-hidden rounded-3xl border ${ctaBoxMap[accent]} bg-gradient-to-br via-night-900/60 to-night-900/80 p-8 md:p-12`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                            accent: accent,
                            children: "Come with me"
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-3xl md:text-4xl text-sand-100 mb-4",
                            dangerouslySetInnerHTML: {
                                __html: title
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-300 text-lg mb-8 max-w-xl leading-relaxed",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/tours/kit.jsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/book",
                                    className: `inline-flex items-center justify-center ${accentButtonMap[accent]} px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition`,
                                    children: "Reserve a Spot"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/kit.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:Tuugii7019@gmail.com?subject=${encodeURIComponent(emailSubject || "Tour inquiry")}`,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
function GerEtiquette() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-sand-800/40 bg-night-900/40 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sand-500 text-[10px] tracking-[0.25em] uppercase mb-3",
                children: "Your first ger visit"
            }, void 0, false, {
                fileName: "[project]/components/tours/kit.jsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 text-sand-300 text-sm leading-relaxed",
                children: [
                    "Enter right foot first, move clockwise inside.",
                    "Never touch the two central columns — they hold the sky up.",
                    "Receive food and drink with the right hand.",
                    "Don't step on the threshold; don't whistle indoors.",
                    "Accept the bowl of milk tea — a sip is enough."
                ].map((rule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-600",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function Departures({ list, accent = "sky" }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b border-sand-900/30 bg-night-900/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-3 md:grid-cols-${Math.min(list.length, 3)}`,
                style: {
                    gridTemplateColumns: `repeat(${Math.min(list.length, 3)}, minmax(0, 1fr))`
                },
                children: list.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border ${borderMap[accent]} rounded-xl p-5 flex items-center gap-3 flex-wrap`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${textMap[accent]} text-xs tracking-[0.2em] uppercase font-semibold`,
                                children: d.label
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 494,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-700",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sand-100 font-display text-lg",
                                children: d.dates
                            }, void 0, false, {
                                fileName: "[project]/components/tours/kit.jsx",
                                lineNumber: 498,
                                columnNumber: 15
                            }, this),
                            d.days && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sand-700",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/kit.jsx",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/tours/CentralMongoliaSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CentralMongoliaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CentralMongoliaSection({ accent = "sky", compact = false }) {
    const accentClass = {
        sky: "text-sky-300",
        amber: "text-amber-300",
        rose: "text-rose-300",
        red: "text-red-300",
        emerald: "text-emerald-300"
    }[accent] || "text-sky-300";
    const photos = [
        {
            src: "/images/gallery/DSC01684.jpg",
            alt: "Orkhon river canyon",
            tall: true
        },
        {
            src: "/images/gallery/DSC02365.jpg",
            alt: "Wild horse herd across the steppe"
        },
        {
            src: "/images/gallery/DSC01558.jpg",
            alt: "Clouds over the central steppe"
        },
        {
            src: "/images/gallery/DSC08283.jpg",
            alt: "Erdene Zuu monastery near Karakorum"
        },
        {
            src: "/images/gallery/DSC08200.jpg",
            alt: "4×4 on a steppe dirt road"
        },
        {
            src: "/images/gallery/DSC01820.jpg",
            alt: "Khorkhog — hot-stone lamb prep"
        }
    ];
    const sites = [
        "Orkhon Valley",
        "Karakorum",
        "Erdene Zuu Monastery",
        "Khorgo volcano",
        "Terkhiin Tsagaan Nuur",
        "Tsenkher hot springs",
        "Nomadic family stays",
        "Khorkhog cookouts"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: compact ? "py-14 md:py-20" : "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    margin: "-50px"
                },
                transition: {
                    duration: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${accentClass} text-xs tracking-[0.3em] uppercase mb-3 text-center`,
                        children: "The central leg"
                    }, void 0, false, {
                        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-2xl md:text-4xl text-sand-100 mb-4 text-center leading-tight",
                        children: "Central Mongolia"
                    }, void 0, false, {
                        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sand-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 text-center",
                        children: "The country's heart. Orkhon Valley waterfalls, Erdene Zuu and the ruins of Karakorum, the dormant Khorgo volcano, the pale water of Terkhiin Tsagaan Nuur, Tsenkher hot springs, and long evenings at a family ger camp with khorkhog on the fire."
                    }, void 0, false, {
                        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8",
                        children: photos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative overflow-hidden rounded-lg group ${p.tall ? "row-span-2 aspect-[3/4] md:col-span-1" : "aspect-square"} ${i === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-1 aspect-[4/5]" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: p.src,
                                    alt: p.alt,
                                    fill: true,
                                    className: "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                                    sizes: "(max-width: 768px) 50vw, 25vw"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            }, p.src, false, {
                                fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-2",
                        children: sites.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-sand-800/40 bg-night-900/40 text-sand-400",
                                children: s
                            }, s, false, {
                                fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tours/CentralMongoliaSection.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tours/naadam/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NaadamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tours/kit.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$CentralMongoliaSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tours/CentralMongoliaSection.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const G = "/images/gallery";
const ACCENT = "red";
function NaadamPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950 text-sand-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TourHero"], {
                image: `${G}/DSC02098.jpg`,
                kicker: "Local Naadam",
                meta: [
                    "1 departure",
                    "6 days"
                ],
                title: "Naadam<br/>Festival",
                subtitle: "Our chill take on Mongolia's biggest holiday — a single central province, horse racing, wrestling, holiday food, nomadic family stays, hot springs, and a volcano on the way home.",
                accent: ACCENT
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VitalsStrip"], {
                items: [
                    {
                        l: "Dates",
                        v: "Jul 8 – 13, 2026"
                    },
                    {
                        l: "Days",
                        v: "6"
                    },
                    {
                        l: "Group",
                        v: "6 – 8"
                    },
                    {
                        l: "Region",
                        v: "Zavkhan + central"
                    },
                    {
                        l: "Festival",
                        v: "Local village"
                    },
                    {
                        l: "Price",
                        v: "$1,200"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Prologue"], {
                accent: ACCENT,
                title: "Mongolia’s biggest holiday, without the crowd.",
                paragraphs: [
                    "Naadam is the three-day national holiday — wrestling, horse racing, archery — that happens every July. Most travellers see it in Ulaanbaatar: a stadium, a lot of tourists, a great show but a packaged one.",
                    "I run this one differently. We drive out to a single central-Mongolian province and catch the <em>local</em> Naadam there — the village version. Smaller stadium (sometimes just a roped-off field), actual neighbours wrestling, horse races you can watch from the fence, women in full holiday <em>deel</em>, the best <em>khuushuur</em> you&apos;ll ever eat.",
                    "Around it we wrap the central highlights — Zavkhan&apos;s lakes and forests, Terkhiin Tsagaan Nuur, Khorgo&apos;s crater rim, Tsenkher hot springs, and a couple of nights with a nomadic family we know. The route bends with the festival schedule — which is the whole idea."
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Itinerary"], {
                accent: ACCENT,
                title: "Six days with the holiday at the middle.",
                days: [
                    {
                        n: "01",
                        t: "UB → Central Mongolia",
                        d: "Morning drive west out of UB. Lunch at a roadside <em>guanz</em>. Arrive at our first family ger camp by evening."
                    },
                    {
                        n: "02",
                        t: "Local Naadam — opening day",
                        d: "Horse race in the morning (riders are kids aged 6–12 on Mongolian horses, some galloping 25 km). Wrestling in the afternoon. Archery alongside. Holiday food all day."
                    },
                    {
                        n: "03",
                        t: "Naadam finals",
                        d: "Second day of the village Naadam. Final wrestling matches, the horse races that crown the champions, costumes and speeches. Night around a fire."
                    },
                    {
                        n: "04",
                        t: "Terkhiin Tsagaan Nuur + Khorgo",
                        d: "Drive east to the lava-dammed White Lake. Hike the crater rim of Khorgo volcano (~40 min up). Swim in the lake if you&apos;re brave."
                    },
                    {
                        n: "05",
                        t: "Tsenkher hot springs",
                        d: "South to the springs. 86 °C water piped into wooden pools under the stars. A proper reset after three hard-and-happy days."
                    },
                    {
                        n: "06",
                        t: "Back to UB",
                        d: "Slow morning at the springs, then the drive back east. Stop at Erdene Zuu Monastery and Karakorum ruins. UB by evening."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                            kicker: "The festival",
                            title: "Three sports, one holiday.",
                            center: true,
                            accent: ACCENT
                        }, void 0, false, {
                            fileName: "[project]/app/tours/naadam/page.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 md:space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: `${G}/DSC02098.jpg`,
                                        alt: "Horse racing at Naadam",
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "100vw"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/naadam/page.js",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PullQuote"], {
                                    accent: ACCENT,
                                    quote: "The kid riders gallop in bareheaded and the whole village runs out to check which horse was first. That's the finish line.",
                                    attribution: "— The Naadam horse race in one sentence."
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3",
                                    children: [
                                        `${G}/DSC02090.jpg`,
                                        `${G}/DSC02095.jpg`,
                                        `${G}/DSC02105.jpg`,
                                        `${G}/DSC02132.jpg`
                                    ].map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square overflow-hidden rounded-lg group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: src,
                                                alt: "",
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                                                sizes: "25vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/naadam/page.js",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        }, src, false, {
                                            fileName: "[project]/app/tours/naadam/page.js",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3",
                                    children: [
                                        `${G}/DSC02111.jpg`,
                                        `${G}/DSC02138.jpg`,
                                        `${G}/DSC02365.jpg`
                                    ].map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] overflow-hidden rounded-lg group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: src,
                                                alt: "",
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                                                sizes: "33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/naadam/page.js",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        }, src, false, {
                                            fileName: "[project]/app/tours/naadam/page.js",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/naadam/page.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/naadam/page.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28 border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHead"], {
                                    kicker: "Holiday food",
                                    title: "Khuushuur, airag, and then some.",
                                    accent: ACCENT
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-300 text-lg leading-relaxed mb-4",
                                    children: [
                                        "Naadam is the biggest ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "khuushuur"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/naadam/page.js",
                                            lineNumber: 109,
                                            columnNumber: 37
                                        }, this),
                                        " weekend of the year — deep-fried mutton hand-pies eaten straight off the pan by the stadium fence. Everyone has a count. Ten is modest. The record on one of my trips is twenty-three."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-400 leading-relaxed mb-6",
                                    children: [
                                        "Add fermented mare's milk (",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "airag"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/naadam/page.js",
                                            lineNumber: 112,
                                            columnNumber: 47
                                        }, this),
                                        "), dried curds (",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "aaruul"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/naadam/page.js",
                                            lineNumber: 112,
                                            columnNumber: 77
                                        }, this),
                                        "), milk tea, and the occasional glass of vodka someone's grandfather insists you try. We eat well."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tours/naadam/page.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/naadam/page.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GerEtiquette"], {}, void 0, false, {
                                fileName: "[project]/app/tours/naadam/page.js",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tours/naadam/page.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/naadam/page.js",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-sand-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$CentralMongoliaSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    accent: "red",
                    compact: true
                }, void 0, false, {
                    fileName: "[project]/app/tours/naadam/page.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IncludedBring"], {
                accent: ACCENT,
                priceLabel: "$1,200",
                included: [
                    "4×4 vehicle, fuel, driver",
                    "English/Mongolian guide (Tugi)",
                    "All meals on the road",
                    "Nomadic family ger stays (4 nights)",
                    "Hot-spring camp (1 night)",
                    "Local village Naadam entry / seating",
                    "All park and site entrance fees",
                    "UB airport pickup + drop-off"
                ],
                bring: [
                    "Festival-friendly clothes — sun hat, sunglasses",
                    "Warm layer for evenings (10–12 °C)",
                    "Rain shell (afternoon storms in July)",
                    "Swimsuit (hot springs + lake)",
                    "Hiking shoes for the Khorgo crater",
                    "Small cash bills for khuushuur and airag"
                ],
                note: "Photography note: always ask before photographing wrestlers, riders, or families. Tugi will help with the hello."
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TourFAQ"], {
                accent: ACCENT,
                items: [
                    {
                        q: "Why the local Naadam instead of the big UB one?",
                        a: "The stadium Naadam in UB is a huge show but also heavily commercial — thousands of tourists, assigned seats, everything behind a fence. Village Naadam is what the holiday actually is: your neighbours wrestling, kids racing, grandmothers selling khuushuur from a tent. Real."
                    },
                    {
                        q: "Will I see opening ceremony fireworks?",
                        a: "The village ceremony is smaller — speeches, a horse parade, maybe a military honor march. The UB ceremony is the bigger spectacle. If that matters, pair this with a day in UB around July 11 (the official holiday) for the stadium opening."
                    },
                    {
                        q: "How far is the drive?",
                        a: "UB to the province is ~6 – 7 hours on day 1. The festival site is close to the family camp. Day 4 – 6 are shorter drives, 3 – 5 hours each, all stopping at real places."
                    },
                    {
                        q: "What about the heat?",
                        a: "July in central Mongolia: 15–26 °C, which is pleasant. Evenings drop to 10 °C. Afternoon thunderstorms are common but usually pass in 30 min."
                    },
                    {
                        q: "Is this good for photographers?",
                        a: "Yes — the light is clean, the subjects are striking, the access is personal. Long lens for horse racing, wide for the crowd, fast prime for portraits. Tugi will help you get close without being in the way."
                    },
                    {
                        q: "What if Naadam dates shift?",
                        a: "Naadam falls on July 11–13 nationally. Village Naadam starts a few days earlier or later. We confirm exact dates 60 days out — the Jul 8–13 window catches most cycles."
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tours$2f$kit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TourCTA"], {
                accent: ACCENT,
                title: "July 8 – 13, 2026 · $1,200",
                subtitle: "One village, one holiday, one small group. Bring a friend and save 15% each. Limited seats — Naadam is the year’s busiest week.",
                emailSubject: "Naadam · July 8 – 13"
            }, void 0, false, {
                fileName: "[project]/app/tours/naadam/page.js",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/naadam/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_10de4284._.js.map