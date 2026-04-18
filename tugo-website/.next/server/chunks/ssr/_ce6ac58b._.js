module.exports = [
"[project]/components/animations/FadeIn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function FadeIn({ children, delay = 0, direction = "up", className = "", duration = 0.7 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const directions = {
        up: {
            y: 40
        },
        down: {
            y: -40
        },
        left: {
            x: 40
        },
        right: {
            x: -40
        },
        none: {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            ...directions[direction]
        },
        animate: isInView ? {
            opacity: 1,
            x: 0,
            y: 0
        } : {
            opacity: 0,
            ...directions[direction]
        },
        transition: {
            duration,
            delay,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/animations/FadeIn.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tours/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/FadeIn.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// ============================================================================
// TOUR DATA — 2026 SEASON (Jun–Aug)
// Maximized revenue mix: short city tours + mid festivals + long expeditions,
// with 1–2 day rest buffers between tours.
// ============================================================================
// Each tour has:
//   id      — unique React key
//   slug    — URL destination (multiple departures can share one slug)
//   Tours are ordered so specific, shorter trips appear BEFORE long
//   windows like North & Central Loop so they take visual priority on
//   days where ranges overlap.
const tours = [
    {
        id: "terelj-jun",
        slug: "terelj-escape",
        title: "Terelj Escape",
        emoji: "🌲",
        dates: "June 8 – 10",
        days: 3,
        price: "$350",
        groupSize: "8–16",
        status: "available",
        description: "Any age. A gentle weekend in Gorkhi-Terelj — Turtle Rock, Aryabal Monastery, horseback through alpine meadows, hiking, khorkhog dinner, and a night in a family ger camp.",
        highlights: [
            "Turtle Rock",
            "Aryabal Monastery",
            "Khorkhog",
            "Ger stay"
        ],
        theme: "terelj",
        startMonth: 5,
        startDay: 8,
        endMonth: 5,
        endDay: 10
    },
    {
        id: "altai-jun",
        slug: "altai-tavan-bogd",
        title: "Altai Tavan Bogd",
        emoji: "🏔️",
        dates: "June 11 – 16",
        days: 6,
        price: "$1,400",
        groupSize: "6–8",
        status: "available",
        description: "Budget Altai — flight from UB to Ölgii, Khoton Lake, eagle hunter family, horseback to Baga Turgen waterfall, Potanin Glacier, and ancient petroglyphs. Everything included: flight, food, guides, lodging.",
        highlights: [
            "UB flight inc.",
            "Khoton Lake",
            "Kazakh eagles",
            "Potanin Glacier"
        ],
        theme: "altai",
        startMonth: 5,
        startDay: 11,
        endMonth: 5,
        endDay: 16
    },
    {
        id: "southern-gobi",
        slug: "southern-gobi",
        title: "Southern Gobi + Central",
        emoji: "🏜️",
        dates: "June 16 – 23",
        days: 8,
        price: "$1,200",
        groupSize: "4–6",
        status: "available",
        description: "For young travellers who want to cover ground — Umnugobi, Yoliin Am ice canyon, a night in the desert, camels at Khongoriin Els, then central Mongolia on the way back with hot springs, horse riding, and hiking.",
        highlights: [
            "Yoliin Am",
            "Desert camp",
            "Khongoriin Els",
            "Hot springs",
            "Horse riding"
        ],
        theme: "southern-gobi",
        startMonth: 5,
        startDay: 16,
        endMonth: 5,
        endDay: 23
    },
    {
        id: "khagiin-khar-nuur",
        slug: "khagiin-khar-nuur",
        title: "Horse Trek · Khagiin Khar Nuur",
        emoji: "🐎",
        dates: "June 25 – 30",
        days: 6,
        price: "$1,400",
        groupSize: "6–8",
        status: "available",
        description: "Starting from UB. Horseback into the Khan Khentii taiga to Khagiin Khar Nuur — the Pearl of the Taiga. Ger stays, tent camps, riding through forest and over Khavirga Pass, a night by the alpine lake.",
        highlights: [
            "Terelj ger",
            "Khavirga Pass",
            "Khagiin Khar Lake",
            "Chinggis statue"
        ],
        theme: "khentii",
        startMonth: 5,
        startDay: 25,
        endMonth: 5,
        endDay: 30
    },
    {
        id: "playtime",
        slug: "playtime",
        title: "Playtime",
        emoji: "🦅",
        dates: "July 1 – 6",
        days: 6,
        price: "$950",
        groupSize: "6–8",
        status: "available",
        description: "Meet young people around Mongolia's biggest music festival. Pre-party the day before, festival together, Terelj day trips if you want, one city recovery day. Tent + water + a burrito a day.",
        highlights: [
            "Music festival",
            "Meet-up night",
            "Terelj side trips",
            "City recovery"
        ],
        theme: "playtime",
        startMonth: 6,
        startDay: 1,
        endMonth: 6,
        endDay: 6
    },
    {
        id: "naadam",
        slug: "naadam",
        title: "Naadam Festival",
        emoji: "🏇",
        dates: "July 7 – 14",
        days: 8,
        price: "$1,400",
        groupSize: "6–8",
        status: "limited",
        description: "Chill take on Naadam with deeper cultural immersion — local village Naadams, horse racing, wrestling, holiday foods and costumes, Terkhiin Tsagaan Nuur, Khorgo volcano, Tsenkher hot springs, nomadic family stays.",
        highlights: [
            "Horse racing",
            "Wrestling",
            "Terkh Lake",
            "Khorgo",
            "Hot springs"
        ],
        theme: "naadam",
        startMonth: 6,
        startDay: 7,
        endMonth: 6,
        endDay: 14
    },
    {
        id: "terelj-jul",
        slug: "terelj-escape",
        title: "Terelj Escape",
        emoji: "🌲",
        dates: "July 16 – 18",
        days: 3,
        price: "$350",
        groupSize: "8–16",
        status: "available",
        description: "Second Terelj departure, right after Naadam. Same route — Turtle Rock, Aryabal Monastery, horseback, hiking, khorkhog, family ger camp.",
        highlights: [
            "Turtle Rock",
            "Aryabal Monastery",
            "Khorkhog",
            "Ger stay"
        ],
        theme: "terelj",
        startMonth: 6,
        startDay: 16,
        endMonth: 6,
        endDay: 18
    },
    {
        id: "altai-aug",
        slug: "altai-tavan-bogd",
        title: "Altai Tavan Bogd",
        emoji: "🏔️",
        dates: "Aug 6 – 13",
        days: 8,
        price: "$1,400",
        groupSize: "6–8",
        status: "available",
        description: "Second Altai departure — Ölgii flight, Khoton Lake, eagle hunters, horseback to waterfalls, Potanin Glacier, petroglyphs. More time than the June trip for deeper exploration.",
        highlights: [
            "Khoton Lake",
            "Kazakh eagles",
            "Potanin Glacier",
            "Petroglyphs"
        ],
        theme: "altai",
        startMonth: 7,
        startDay: 6,
        endMonth: 7,
        endDay: 13
    },
    {
        id: "gobi-glimpse",
        slug: "gobi-glimpse",
        title: "Gobi Glimpse + Central",
        emoji: "🌅",
        dates: "Aug 18 – 28",
        days: 11,
        price: "$1,800",
        groupSize: "4–6",
        status: "available",
        description: "The iconic southern Gobi loop, extended through central Mongolia — Umnugobi, Yoliin Am, desert camping, camels at Khongoriin Els, hot springs, horse riding, hiking on the return.",
        highlights: [
            "Yoliin Am",
            "Desert camp",
            "Khongoriin Els",
            "Hot springs",
            "Horse riding"
        ],
        theme: "gobi",
        startMonth: 7,
        startDay: 18,
        endMonth: 7,
        endDay: 28
    },
    {
        id: "north-central",
        slug: "north-central",
        title: "North & Central Loop",
        emoji: "🐪",
        dates: "July 21 – 31",
        days: 11,
        price: "$1,800",
        groupSize: "4–6",
        status: "available",
        description: "The northern route — Huuchin Bulgan ger camp, Khuvsgul Lake camping and hiking, the taiga, Zavkhan, hot springs, many lakes, a horse-riding day, and central Mongolia on the way home.",
        highlights: [
            "Bulgan ger camp",
            "Khuvsgul Lake",
            "Taiga",
            "Hot springs",
            "Horse day"
        ],
        theme: "north-central",
        startMonth: 6,
        startDay: 21,
        endMonth: 6,
        endDay: 31
    }
];
// ============================================================================
// THEME MAP — 10 distinct visual identities
// ============================================================================
const themeMap = {
    terelj: {
        bg: "bg-teal-500/25",
        bgHover: "group-hover:bg-teal-500/50",
        border: "border-teal-400/40",
        text: "text-teal-200",
        dot: "bg-teal-400",
        bar: "from-teal-500 to-teal-600",
        pattern: "terelj",
        short: "Forest Weekend"
    },
    khentii: {
        bg: "bg-lime-500/25",
        bgHover: "group-hover:bg-lime-500/50",
        border: "border-lime-400/40",
        text: "text-lime-200",
        dot: "bg-lime-400",
        bar: "from-lime-500 to-lime-600",
        pattern: "horse",
        short: "Taiga Horse Trek"
    },
    "southern-gobi": {
        bg: "bg-orange-500/30",
        bgHover: "group-hover:bg-orange-500/55",
        border: "border-orange-400/40",
        text: "text-orange-100",
        dot: "bg-orange-400",
        bar: "from-orange-500 to-orange-600",
        pattern: "dunes",
        short: "Fast Gobi Run"
    },
    playtime: {
        bg: "bg-emerald-500/25",
        bgHover: "group-hover:bg-emerald-500/50",
        border: "border-emerald-400/40",
        text: "text-emerald-200",
        dot: "bg-emerald-400",
        bar: "from-emerald-500 to-emerald-600",
        pattern: "feather",
        short: "Festival Meet-Up"
    },
    naadam: {
        bg: "bg-red-500/30",
        bgHover: "group-hover:bg-red-500/55",
        border: "border-red-400/50",
        text: "text-red-100",
        dot: "bg-red-400",
        bar: "from-red-500 to-red-600",
        pattern: "naadam",
        short: "Local Naadam"
    },
    "north-central": {
        bg: "bg-sky-500/25",
        bgHover: "group-hover:bg-sky-500/50",
        border: "border-sky-400/40",
        text: "text-sky-100",
        dot: "bg-sky-400",
        bar: "from-sky-500 to-sky-600",
        pattern: "loop",
        short: "Long North Route"
    },
    altai: {
        bg: "bg-indigo-500/30",
        bgHover: "group-hover:bg-indigo-500/55",
        border: "border-indigo-400/40",
        text: "text-indigo-100",
        dot: "bg-indigo-400",
        bar: "from-indigo-500 to-indigo-600",
        pattern: "peaks",
        short: "Western Heights"
    },
    gobi: {
        bg: "bg-amber-500/30",
        bgHover: "group-hover:bg-amber-500/55",
        border: "border-amber-400/40",
        text: "text-amber-100",
        dot: "bg-amber-400",
        bar: "from-amber-500 to-amber-600",
        pattern: "dunes",
        short: "Gobi + Central"
    }
};
// ============================================================================
// CELL DECORATIVE PATTERNS — 10 motifs, one per theme
// ============================================================================
function CellPattern({ type }) {
    const props = {
        className: "absolute inset-0 w-full h-full pointer-events-none",
        viewBox: "0 0 60 60",
        fill: "none",
        preserveAspectRatio: "none"
    };
    switch(type){
        case "city":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "12",
                        y: "36",
                        width: "6",
                        height: "18",
                        fill: "currentColor",
                        opacity: "0.28"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "20",
                        y: "30",
                        width: "6",
                        height: "24",
                        fill: "currentColor",
                        opacity: "0.22"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "28",
                        y: "40",
                        width: "6",
                        height: "14",
                        fill: "currentColor",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "36",
                        y: "32",
                        width: "6",
                        height: "22",
                        fill: "currentColor",
                        opacity: "0.22"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "44",
                        y: "38",
                        width: "5",
                        height: "16",
                        fill: "currentColor",
                        opacity: "0.28"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 315,
                columnNumber: 9
            }, this);
        case "horse":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 42 Q 18 30, 26 28 L 32 26 L 34 20 L 38 22 L 40 25 Q 46 25, 46 33 L 44 40",
                        stroke: "currentColor",
                        strokeWidth: "1.1",
                        opacity: "0.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 42 L 18 48 M 24 40 L 24 47 M 40 42 L 40 48 M 44 42 L 44 48",
                        stroke: "currentColor",
                        strokeWidth: "0.7",
                        opacity: "0.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 52 Q 30 48, 50 52",
                        stroke: "currentColor",
                        strokeWidth: "0.6",
                        opacity: "0.3",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 325,
                columnNumber: 9
            }, this);
        case "terelj":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 50 L 14 32 L 18 50 Z",
                        fill: "currentColor",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 52 L 27 28 L 32 52 Z",
                        fill: "currentColor",
                        opacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M38 52 L 43 36 L 48 52 Z",
                        fill: "currentColor",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "45",
                        cy: "14",
                        r: "2",
                        fill: "currentColor",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 340,
                columnNumber: 9
            }, this);
        case "lake":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 46 Q 15 42, 30 46 T 60 46",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        opacity: "0.45",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 52 Q 20 48, 40 52 T 60 50",
                        stroke: "currentColor",
                        strokeWidth: "0.8",
                        opacity: "0.35",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 56 Q 15 54, 30 56 T 60 56",
                        stroke: "currentColor",
                        strokeWidth: "0.6",
                        opacity: "0.28",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "45",
                        cy: "18",
                        r: "2.5",
                        fill: "currentColor",
                        opacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 349,
                columnNumber: 9
            }, this);
        case "horse":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 40 Q 18 32, 24 32 L 30 30 L 32 26 L 35 28 L 38 30 Q 44 30, 44 36 L 42 42",
                        stroke: "currentColor",
                        strokeWidth: "1.1",
                        opacity: "0.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 42 L 18 48 M 24 42 L 24 48 M 38 42 L 38 48 M 42 42 L 42 48",
                        stroke: "currentColor",
                        strokeWidth: "0.8",
                        opacity: "0.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 358,
                columnNumber: 9
            }, this);
        case "feather":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 50 Q 28 28, 48 8",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        opacity: "0.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 44 L 24 38 M 24 38 L 30 32 M 30 32 L 36 26 M 36 26 L 42 18",
                        stroke: "currentColor",
                        strokeWidth: "0.7",
                        opacity: "0.35",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 372,
                columnNumber: 9
            }, this);
        case "naadam":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 44 Q 18 34, 30 40 T 54 36",
                        stroke: "currentColor",
                        strokeWidth: "1.1",
                        opacity: "0.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "18",
                        r: "1.8",
                        fill: "currentColor",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M28 20 L 36 20",
                        stroke: "currentColor",
                        strokeWidth: "0.6",
                        opacity: "0.35",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 379,
                columnNumber: 9
            }, this);
        case "ancient":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 48 L 14 32 L 22 28 L 30 32 L 30 48 Z",
                        stroke: "currentColor",
                        strokeWidth: "0.8",
                        opacity: "0.4",
                        fill: "currentColor",
                        fillOpacity: "0.15"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M34 48 L 34 36 L 44 32 L 44 48 Z",
                        stroke: "currentColor",
                        strokeWidth: "0.8",
                        opacity: "0.35",
                        fill: "currentColor",
                        fillOpacity: "0.12"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "22",
                        cy: "18",
                        r: "1.5",
                        fill: "currentColor",
                        opacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 387,
                columnNumber: 9
            }, this);
        case "loop":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 30 Q 20 18, 30 24 Q 42 30, 48 22 Q 52 30, 44 38 Q 34 44, 24 40 Q 14 38, 12 30 Z",
                        stroke: "currentColor",
                        strokeWidth: "0.9",
                        opacity: "0.45",
                        fill: "none",
                        strokeDasharray: "2 2"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30",
                        cy: "30",
                        r: "1.2",
                        fill: "currentColor",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 395,
                columnNumber: 9
            }, this);
        case "peaks":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 50 L 14 24 L 22 36 L 30 18 L 40 34 L 48 26 L 56 44 L 56 54 L 4 54 Z",
                        fill: "currentColor",
                        opacity: "0.28"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M26 22 L 30 18 L 34 24",
                        stroke: "white",
                        strokeWidth: "0.4",
                        opacity: "0.4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "12",
                        r: "0.6",
                        fill: "currentColor",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "14",
                        cy: "14",
                        r: "0.5",
                        fill: "currentColor",
                        opacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 409,
                columnNumber: 9
            }, this);
        case "dunes":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 42 Q 15 32, 30 38 T 60 36 V60 H0 Z",
                        fill: "currentColor",
                        opacity: "0.22"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 50 Q 20 44, 40 48 T 60 46",
                        stroke: "currentColor",
                        strokeWidth: "0.7",
                        opacity: "0.35",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "48",
                        cy: "12",
                        r: "2.5",
                        fill: "currentColor",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 418,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
// ============================================================================
// MONTH SETUP
// ============================================================================
const MONTHS = [
    {
        index: 5,
        name: "June",
        year: 2026,
        days: 30
    },
    {
        index: 6,
        name: "July",
        year: 2026,
        days: 31
    },
    {
        index: 7,
        name: "August",
        year: 2026,
        days: 31
    }
];
const DAY_LABELS = [
    "S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S"
];
function getTourForDay(monthIndex, day) {
    for (const tour of tours){
        const afterStart = monthIndex > tour.startMonth || monthIndex === tour.startMonth && day >= tour.startDay;
        const beforeEnd = monthIndex < tour.endMonth || monthIndex === tour.endMonth && day <= tour.endDay;
        if (afterStart && beforeEnd) return tour;
    }
    return null;
}
// ============================================================================
// DAY CELL
// ============================================================================
function DayCell({ monthIndex, day, isEmpty, onHover, onLeave, hoveredId, dayOfWeek }) {
    if (isEmpty) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-square"
        }, void 0, false, {
            fileName: "[project]/app/tours/page.js",
            lineNumber: 460,
            columnNumber: 12
        }, this);
    }
    const tour = getTourForDay(monthIndex, day);
    if (!tour) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-square flex items-center justify-center rounded-lg hover:bg-sand-900/10 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sand-700 text-xs md:text-sm tabular-nums",
                children: day
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 468,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tours/page.js",
            lineNumber: 467,
            columnNumber: 7
        }, this);
    }
    const theme = themeMap[tour.theme];
    const isFirstDay = monthIndex === tour.startMonth && day === tour.startDay;
    const isLastDay = monthIndex === tour.endMonth && day === tour.endDay;
    const isHovered = hoveredId === tour.id;
    const isDimmed = hoveredId && hoveredId !== tour.id;
    const roundLeft = isFirstDay || dayOfWeek === 0;
    const roundRight = isLastDay || dayOfWeek === 6;
    const roundingClass = [
        roundLeft ? "rounded-l-xl" : "",
        roundRight ? "rounded-r-xl" : ""
    ].join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/tours/${tour.slug}`,
        onMouseEnter: ()=>onHover(tour.id),
        onMouseLeave: onLeave,
        className: `
        relative aspect-square flex flex-col items-center justify-center
        border ${theme.border} ${theme.bg} ${theme.bgHover} ${roundingClass}
        transition-all duration-300 group cursor-pointer overflow-hidden
        ${isHovered ? "scale-[1.12] z-20" : ""}
        ${isDimmed ? "opacity-25" : "opacity-100"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${theme.text} absolute inset-0 pointer-events-none`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CellPattern, {
                    type: theme.pattern
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative z-10 tabular-nums font-medium ${theme.text} ${isFirstDay ? "text-sm md:text-base font-bold" : "text-xs md:text-sm"}`,
                children: day
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            isFirstDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-0.5 right-1 md:top-1 md:right-1.5 text-[11px] md:text-sm leading-none",
                children: tour.emoji
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 513,
                columnNumber: 9
            }, this),
            isFirstDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute bottom-1 left-1 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${theme.dot} animate-pulse`
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 519,
                columnNumber: 9
            }, this),
            isLastDay && !isFirstDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0.5 right-1 text-[8px] md:text-[10px] uppercase tracking-wider text-sand-500 opacity-70",
                children: "end"
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 523,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
// ============================================================================
// TOOLTIP POPOVER
// ============================================================================
function TourPopover({ tour }) {
    const theme = themeMap[tour.theme];
    const statusConfig = {
        available: {
            cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
            label: "Spots Available"
        },
        limited: {
            cls: "bg-amber-500/15 text-amber-300 border-amber-500/30",
            label: "Limited Spots"
        },
        sold_out: {
            cls: "bg-red-500/15 text-red-300 border-red-500/30",
            label: "Sold Out"
        }
    };
    const s = statusConfig[tour.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -8,
            scale: 0.96
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -8,
            scale: 0.96
        },
        transition: {
            duration: 0.18,
            ease: "easeOut"
        },
        className: "pointer-events-none absolute z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-night-900/95 backdrop-blur-lg border border-sand-800/50 rounded-2xl shadow-2xl overflow-hidden w-[320px] max-w-[92vw]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-1 bg-gradient-to-r ${theme.bar}`
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 553,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-[10px] tracking-[0.18em] uppercase mb-1.5 ${theme.text}`,
                            children: theme.short
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl text-sand-100 leading-tight mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2",
                                    children: tour.emoji
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this),
                                tour.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-medium ${theme.text}`,
                                    children: tour.dates
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sand-700 text-xs",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sand-500 text-xs",
                                    children: [
                                        tour.days,
                                        " days"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this),
                                tour.groupSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sand-700 text-xs",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/page.js",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sand-500 text-xs",
                                            children: [
                                                tour.groupSize,
                                                " pax"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tours/page.js",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-400 text-[13px] leading-relaxed mb-3",
                            children: tour.description
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5 mb-4",
                            children: tour.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-800/40 text-sand-400 border border-sand-800/60",
                                    children: h
                                }, i, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 578,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-3 border-t border-sand-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sand-200 text-sm font-semibold",
                                            children: tour.price
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/page.js",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border mt-1 ${s.cls}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-1 h-1 rounded-full ${theme.dot}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tours/page.js",
                                                    lineNumber: 590,
                                                    columnNumber: 17
                                                }, this),
                                                s.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tours/page.js",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[11px] uppercase tracking-wider ${theme.text} font-medium`,
                                    children: "Open →"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 554,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tours/page.js",
            lineNumber: 552,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 545,
        columnNumber: 5
    }, this);
}
// ============================================================================
// MONTH CALENDAR
// ============================================================================
function MonthCalendar({ month, hoveredId, onHover, onLeave }) {
    const firstDayOfWeek = new Date(month.year, month.index, 1).getDay();
    const cells = [];
    for(let i = 0; i < firstDayOfWeek; i++){
        cells.push({
            isEmpty: true,
            key: `empty-start-${i}`
        });
    }
    for(let d = 1; d <= month.days; d++){
        cells.push({
            isEmpty: false,
            day: d,
            key: `day-${d}`
        });
    }
    while(cells.length % 7 !== 0){
        cells.push({
            isEmpty: true,
            key: `empty-end-${cells.length}`
        });
    }
    const hoveredTour = tours.find((t)=>t.id === hoveredId);
    let popoverAnchor = null;
    if (hoveredTour) {
        const startsHere = hoveredTour.startMonth === month.index;
        const endsHere = hoveredTour.endMonth === month.index;
        const spansHere = hoveredTour.startMonth < month.index && hoveredTour.endMonth > month.index;
        if (startsHere || endsHere || spansHere) {
            const anchorDay = startsHere ? hoveredTour.startDay : 1;
            const cellIndex = firstDayOfWeek + anchorDay - 1;
            popoverAnchor = {
                row: Math.floor(cellIndex / 7),
                col: cellIndex % 7
            };
        }
    }
    const totalRows = Math.ceil(cells.length / 7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-2xl md:text-3xl text-sand-100",
                        children: month.name
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sand-600 text-xs tracking-wider uppercase",
                        children: month.year
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 645,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 643,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-2",
                children: DAY_LABELS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-sand-700 text-[10px] tracking-wider uppercase font-medium py-1",
                        children: d
                    }, i, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 650,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 relative",
                children: cells.map((cell, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DayCell, {
                        monthIndex: month.index,
                        day: cell.day,
                        isEmpty: cell.isEmpty,
                        dayOfWeek: idx % 7,
                        hoveredId: hoveredId,
                        onHover: onHover,
                        onLeave: onLeave
                    }, cell.key, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 661,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 659,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: popoverAnchor && hoveredTour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 pointer-events-none",
                    style: {
                        top: `calc(((100% - 80px) * ${(popoverAnchor.row + 1) / totalRows}) + 60px)`,
                        left: "50%",
                        transform: "translate(-50%, 12px)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TourPopover, {
                        tour: hoveredTour
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 685,
                        columnNumber: 13
                    }, this)
                }, hoveredTour.id, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 676,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 674,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
// ============================================================================
// LEGEND
// ============================================================================
function Legend({ onHover, onLeave, hoveredId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-center gap-2 mb-10 px-4",
        children: tours.map((tour)=>{
            const theme = themeMap[tour.theme];
            const active = hoveredId === tour.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/tours/${tour.slug}`,
                onMouseEnter: ()=>onHover(tour.id),
                onMouseLeave: onLeave,
                className: `
              group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all
              ${active ? "border-sand-500/60 bg-night-900/70 scale-105" : "border-sand-800/40 bg-night-900/40 hover:border-sand-600/50 hover:bg-night-900/70"}
            `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-2 h-2 rounded-full ${theme.dot}`
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 716,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sand-300 text-xs group-hover:text-sand-100 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1.5",
                                children: tour.emoji
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 718,
                                columnNumber: 15
                            }, this),
                            tour.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 717,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sand-600 text-[10px]",
                        children: tour.dates
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 721,
                        columnNumber: 13
                    }, this)
                ]
            }, tour.id, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 704,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 699,
        columnNumber: 5
    }, this);
}
// ============================================================================
// CALENDAR SECTION
// ============================================================================
function CalendarSection() {
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // The hovered tour's month range — used to bump z-index on panels
    // that are responsible for showing the popover so it paints above
    // sibling panels (each panel creates its own stacking context via
    // backdrop-blur, so a popover that extends past the panel edge is
    // otherwise covered by the next panel).
    const hoveredTour = tours.find((t)=>t.id === hoveredId);
    const monthHasHovered = (monthIndex)=>{
        if (!hoveredTour) return false;
        return hoveredTour.startMonth === monthIndex || hoveredTour.endMonth === monthIndex || hoveredTour.startMonth < monthIndex && hoveredTour.endMonth > monthIndex;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeIn"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3",
                                children: "Summer 2026"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-3xl md:text-5xl text-sand-100 mb-3",
                                children: "Pick Your Month"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 max-w-xl mx-auto",
                                children: "Ten departures across June, July, and August — weekend escapes, festival meet-ups, horse treks into the taiga, and long flagship expeditions. Hover a highlighted day to peek inside. Click to open the tour."
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 760,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 755,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 754,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                    onHover: setHoveredId,
                    onLeave: ()=>setHoveredId(null),
                    hoveredId: hoveredId
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 766,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
                    children: MONTHS.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                zIndex: monthHasHovered(month.index) ? 40 : 1
                            },
                            className: "bg-night-900/30 border border-sand-900/30 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthCalendar, {
                                month: month,
                                hoveredId: hoveredId,
                                onHover: setHoveredId,
                                onLeave: ()=>setHoveredId(null)
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 775,
                                columnNumber: 15
                            }, this)
                        }, month.index, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 770,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 768,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sand-600 text-xs mt-10 tracking-wider",
                    children: [
                        "Open days between tours are rest buffers — or build a custom trip ·",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book",
                            className: "text-sand-400 hover:text-sand-200 underline underline-offset-4",
                            children: "Request custom dates"
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 787,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 785,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tours/page.js",
            lineNumber: 753,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 752,
        columnNumber: 5
    }, this);
}
// ============================================================================
// MOUNTAIN SILHOUETTE
// ============================================================================
function MountainSilhouette() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1200 120",
        fill: "none",
        className: "w-full h-20 md:h-28",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 120L100 60L180 90L280 30L380 80L480 40L580 75L680 35L780 70L880 45L980 85L1080 55L1200 90V120H0Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/app/tours/page.js",
            lineNumber: 809,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 802,
        columnNumber: 5
    }, this);
}
function ToursPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[55vh] w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tours/north-central.jpg",
                        alt: "Mongolia Tours",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 826,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/30 to-night-950"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 text-night-950 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MountainSilhouette, {}, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 836,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center text-center z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs tracking-[0.3em] uppercase text-sand-400 mb-4",
                                    children: "2026 SEASON"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 845,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-4xl md:text-6xl text-white mb-4",
                                    children: "Your Journey Starts Here"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 846,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-300 max-w-xl mx-auto px-6",
                                    children: "Three months, ten departures. Pick a date on the calendar and we'll take you there."
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 847,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 840,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 839,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 825,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-sand-900/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 md:gap-14 text-center",
                    children: [
                        {
                            label: "Season",
                            value: "June – August"
                        },
                        {
                            label: "Departures",
                            value: "10 Scheduled"
                        },
                        {
                            label: "Group Size",
                            value: "4–16"
                        },
                        {
                            label: "Starting From",
                            value: "$350"
                        }
                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-500 text-xs tracking-wider uppercase mb-1",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 864,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-200 font-display text-lg",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 865,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 863,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 856,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarSection, {}, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-t border-sand-900/20 relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-4",
                                    children: "ROUTES"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 878,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-3xl md:text-4xl text-sand-100",
                                    children: "Three Ways to Explore"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 877,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                {
                                    title: "Weekend Escapes",
                                    duration: "3 Days",
                                    price: "TBD",
                                    items: [
                                        "Terelj Escape × 3",
                                        "Any age welcome"
                                    ],
                                    desc: "Three Terelj weekends across June and July. Gentle, ger-camp vibe, close to the city.",
                                    color: "from-teal-400 to-teal-600",
                                    border: "border-teal-700/20 hover:border-teal-600/40"
                                },
                                {
                                    title: "Festival & Adventure",
                                    duration: "6–11 Days",
                                    price: "From $950",
                                    items: [
                                        "Southern Gobi + Central",
                                        "Playtime",
                                        "Local Naadam",
                                        "Gobi Glimpse + Central"
                                    ],
                                    desc: "Mid-length departures — festivals, desert nights, and nomadic immersion. For travellers who want to get into it.",
                                    color: "from-emerald-500 to-amber-600",
                                    border: "border-emerald-700/20 hover:border-amber-600/40"
                                },
                                {
                                    title: "Grand Expeditions",
                                    duration: "8–42 Days",
                                    price: "TBD",
                                    items: [
                                        "Altai Tavan Bogd",
                                        "North & Central Loop"
                                    ],
                                    desc: "The flagship tours — western peaks with Kazakh eagle hunters, and the long flexible north route through taiga, Khuvsgul, and Zavkhan.",
                                    color: "from-indigo-500 to-sky-600",
                                    border: "border-indigo-700/20 hover:border-sky-600/40"
                                }
                            ].map((route, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: idx * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-night-900/60 border rounded-xl p-8 hover:shadow-lg transition-all duration-500 h-full flex flex-col ${route.border}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-1.5 rounded-full bg-gradient-to-r ${route.color} mb-6`
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 916,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-xl text-sand-100 mb-1",
                                                children: route.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 917,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sand-500 text-xs",
                                                        children: route.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tours/page.js",
                                                        lineNumber: 919,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sand-700 text-xs",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tours/page.js",
                                                        lineNumber: 920,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sand-400 text-xs font-medium",
                                                        children: route.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tours/page.js",
                                                        lineNumber: 921,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 918,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sand-400 text-sm leading-relaxed mb-5 flex-grow",
                                                children: route.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 923,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-6",
                                                children: route.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-sm text-sand-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sand-600",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tours/page.js",
                                                                lineNumber: 927,
                                                                columnNumber: 25
                                                            }, this),
                                                            item
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/tours/page.js",
                                                        lineNumber: 926,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 924,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/book",
                                                className: "text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300",
                                                children: "Book Now →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.js",
                                                lineNumber: 932,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 913,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 882,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 876,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 875,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-sand-900/20 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 font-display text-2xl text-sand-100",
                                children: "Not sure which tour?"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 949,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-8 text-sand-400",
                                children: "Every journey is flexible and personal. Contact me and we'll find the perfect adventure for you."
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 sm:flex-row sm:justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/book",
                                        className: "inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300 rounded-sm",
                                        children: "Book Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 954,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hello@tugo.mn",
                                        className: "inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-wider text-sand-400 transition hover:bg-sand-400/10 rounded-sm",
                                        children: "Ask a Question"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 960,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 953,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 948,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 947,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 946,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 823,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ce6ac58b._.js.map