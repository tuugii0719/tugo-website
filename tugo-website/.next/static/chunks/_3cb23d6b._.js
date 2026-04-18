(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/animations/FadeIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FadeIn(param) {
    let { children, delay = 0, direction = "up", className = "", duration = 0.7 } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_s(FadeIn, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/book/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/FadeIn.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ============================================================================
// TOUR CATALOG — posted prices already include a 15% markup over base.
// Pair discount (15% off per person) is applied at booking when groupSize=2.
// Keep this in sync with /app/tours/page.js.
// ============================================================================
const PAIR_DISCOUNT = 0.15; // 15% off per person when booking a pair
const tourOptions = [
    {
        id: "terelj-jun",
        title: "Terelj Escape",
        dates: "Jun 8 – 10",
        days: 3,
        price: 350,
        emoji: "🌲"
    },
    {
        id: "altai-jun",
        title: "Altai Tavan Bogd",
        dates: "Jun 11 – 16",
        days: 6,
        price: 1400,
        emoji: "🏔️"
    },
    {
        id: "southern-gobi",
        title: "Southern Gobi + Central",
        dates: "Jun 16 – 23",
        days: 8,
        price: 1200,
        emoji: "🏜️"
    },
    {
        id: "khagiin-khar-nuur",
        title: "Horse Trek · Khagiin Khar",
        dates: "Jun 25 – 30",
        days: 6,
        price: 1400,
        emoji: "🐎"
    },
    {
        id: "playtime",
        title: "Playtime",
        dates: "Jul 1 – 6",
        days: 6,
        price: 950,
        emoji: "🦅"
    },
    {
        id: "naadam",
        title: "Naadam Festival",
        dates: "Jul 7 – 14",
        days: 8,
        price: 1400,
        emoji: "🏇"
    },
    {
        id: "terelj-jul",
        title: "Terelj Escape",
        dates: "Jul 16 – 18",
        days: 3,
        price: 350,
        emoji: "🌲"
    },
    {
        id: "north-central",
        title: "North & Central Loop",
        dates: "Jul 21 – 31",
        days: 11,
        price: 1800,
        emoji: "🐪"
    },
    {
        id: "altai-aug",
        title: "Altai Tavan Bogd",
        dates: "Aug 6 – 13",
        days: 8,
        price: 1400,
        emoji: "🏔️"
    },
    {
        id: "gobi-glimpse",
        title: "Gobi Glimpse + Central",
        dates: "Aug 18 – 28",
        days: 11,
        price: 1800,
        emoji: "🌅"
    }
];
const formatUSD = (n)=>"$".concat(n.toLocaleString());
// Stores submissions server-side. Swap to your backend of choice:
//   - mailto:   window.location.href = `mailto:hello@tugo.mn?subject=…&body=…`
//   - Formspree: POST to https://formspree.io/f/<your-id>
//   - Resend + Next.js API route at /api/book
//   - Google Sheets via Apps Script webhook
// Until one is wired, this function no-ops and we rely on the mailto fallback.
async function submitApplication(kind, payload) {
    // eslint-disable-next-line no-console
    console.info("[booking] ".concat(kind, " submission"), payload);
    // await fetch("/api/book", { method: "POST", body: JSON.stringify({ kind, payload }) });
    return {
        ok: true
    };
}
const buildMailto = (kind, payload)=>{
    const subject = kind === "waiver" ? "Fee waiver application · ".concat(payload.tour || "—") : "Booking · ".concat(payload.tour || "—");
    const body = Object.entries(payload).filter((param)=>{
        let [, v] = param;
        return v !== undefined && v !== "";
    }).map((param)=>{
        let [k, v] = param;
        return "".concat(k, ":\n").concat(v, "\n");
    }).join("\n");
    return "mailto:hello@tugo.mn?subject=".concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body));
};
function BookPage() {
    _s();
    const [selectedTourId, setSelectedTourId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [groupSize, setGroupSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("solo");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        country: "",
        phone: "",
        partnerName: "",
        dietary: "",
        experience: "",
        whyThis: "",
        agreeTerms: false,
        agreePace: false,
        agreeInsurance: false
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedTour = tourOptions.find((t)=>t.id === selectedTourId);
    const perPerson = selectedTour ? groupSize === "2" ? Math.round(selectedTour.price * (1 - PAIR_DISCOUNT)) : selectedTour.price : 0;
    const totalPrice = selectedTour ? groupSize === "2" ? perPerson * 2 : perPerson : 0;
    const onField = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((p)=>({
                ...p,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const allAgreed = formData.agreeTerms && formData.agreePace && formData.agreeInsurance;
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!allAgreed || !selectedTour) return;
        const payload = {
            tour: "".concat(selectedTour.title, " (").concat(selectedTour.dates, ")"),
            groupSize: groupSize === "2" ? "Pair" : "Solo",
            perPerson: formatUSD(perPerson),
            total: formatUSD(totalPrice),
            ...formData
        };
        await submitApplication("booking", payload);
        // Also open mailto as a guaranteed delivery path
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = buildMailto("booking", payload);
        }
        setSubmitted(true);
    };
    const resetForm = ()=>{
        setSelectedTourId(null);
        setGroupSize("solo");
        setFormData({
            name: "",
            email: "",
            country: "",
            phone: "",
            partnerName: "",
            dietary: "",
            experience: "",
            whyThis: "",
            agreeTerms: false,
            agreePace: false,
            agreeInsurance: false
        });
        setSubmitted(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night-950 text-sand-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex h-[52vh] min-h-[420px] items-end justify-start overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/home/hero1.jpg",
                        alt: "Apply to join an expedition",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-night-950/40 via-night-950/40 to-night-950"
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-5xl mx-auto w-full px-6 pb-16",
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
                                duration: 0.8,
                                delay: 0.15
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs uppercase tracking-[0.3em] text-sand-300",
                                    children: "Apply to Join"
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-5xl text-white md:text-7xl leading-[0.95] mb-4",
                                    children: [
                                        "2026 Expedition",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        "Applications"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-200 text-lg max-w-xl leading-relaxed",
                                    children: "Small groups. Real country. A proper application, because the people on each trip are as much the trip as the places."
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-sand-900/30 bg-night-900/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: [
                        {
                            n: "01",
                            title: "Pick a tour",
                            body: "Scan the ten 2026 departures below. Each has its own vibe."
                        },
                        {
                            n: "02",
                            title: "Apply",
                            body: "Short application — who you are, why this one, any heads-ups."
                        },
                        {
                            n: "03",
                            title: "Hear back in 48h",
                            body: "I'll reply personally. If we're a fit, you'll get the deposit link."
                        },
                        {
                            n: "04",
                            title: "Get ready",
                            body: "Visa notes, packing list, logistics. I'll hold your hand through the prep."
                        }
                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-500 text-xs tracking-[0.3em] mb-2",
                                    children: [
                                        "STEP ",
                                        s.n
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-lg text-sand-100 mb-1.5",
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sand-400 text-sm leading-relaxed",
                                    children: s.body
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.n, true, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/book/page.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3",
                                        children: "2026 Season"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-3xl md:text-4xl text-sand-100 mb-3",
                                        children: "Pick your tour"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sand-400 max-w-xl mx-auto",
                                        children: [
                                            "Ten departures across June, July, and August.",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sand-200",
                                                children: "Bring a friend — save 15% each."
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                children: tourOptions.map((t)=>{
                                    const active = t.id === selectedTourId;
                                    const pairPrice = Math.round(t.price * (1 - PAIR_DISCOUNT));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTourId(t.id),
                                        className: "\n                    text-left p-5 rounded-xl border transition-all\n                    ".concat(active ? "border-sand-400/60 bg-night-900/70 shadow-lg" : "border-sand-900/40 bg-night-900/30 hover:border-sand-700/60 hover:bg-night-900/50", "\n                  "),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl",
                                                                    children: t.emoji
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/book/page.js",
                                                                    lineNumber: 204,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-display text-lg text-sand-100 truncate",
                                                                    children: t.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/book/page.js",
                                                                    lineNumber: 205,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/book/page.js",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sand-500 text-xs tracking-wider uppercase",
                                                            children: [
                                                                t.dates,
                                                                " · ",
                                                                t.days,
                                                                " days"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/book/page.js",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-display text-lg text-sand-100",
                                                            children: formatUSD(t.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/book/page.js",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-emerald-300/90 text-[11px]",
                                                            children: [
                                                                formatUSD(pairPrice),
                                                                " as a pair"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/book/page.js",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this)
                                    }, t.id, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: selectedTour && !submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "mt-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-10 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-sand-800/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-2",
                                                        children: "Your application"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-2xl md:text-3xl text-sand-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2",
                                                                children: selectedTour.emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this),
                                                            selectedTour.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sand-500 text-sm mt-1",
                                                        children: [
                                                            selectedTour.dates,
                                                            " · ",
                                                            selectedTour.days,
                                                            " days"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display text-2xl text-sand-100",
                                                        children: formatUSD(perPerson)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sand-500 text-xs",
                                                        children: groupSize === "2" ? "per person · ".concat(formatUSD(totalPrice), " total") : "per person"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: onSubmit,
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs tracking-[0.2em] uppercase text-sand-500 mb-3",
                                                        children: "Who's coming?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            {
                                                                v: "solo",
                                                                label: "Just me",
                                                                sub: "Solo traveller"
                                                            },
                                                            {
                                                                v: "2",
                                                                label: "Me + one",
                                                                sub: "Save ".concat(Math.round(PAIR_DISCOUNT * 100), "% each")
                                                            }
                                                        ].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGroupSize(o.v),
                                                                className: "\n                            border px-5 py-4 text-left transition rounded-lg\n                            ".concat(groupSize === o.v ? "border-sand-400/60 bg-sand-400/10 text-sand-100" : "border-sand-800/40 text-sand-400 hover:border-sand-700/50", "\n                          "),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: o.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/book/page.js",
                                                                        lineNumber: 272,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-sand-500 mt-0.5",
                                                                        children: o.sub
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/book/page.js",
                                                                        lineNumber: 273,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, o.v, true, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    groupSize === "2" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-xs text-emerald-300/90",
                                                        children: [
                                                            "Pair discount applied · you'll both pay ",
                                                            formatUSD(perPerson),
                                                            " (",
                                                            formatUSD(totalPrice),
                                                            " total, a saving of ",
                                                            formatUSD(selectedTour.price * 2 - totalPrice),
                                                            ")."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                                        children: "About you"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                name: "name",
                                                                placeholder: "Full name",
                                                                value: formData.name,
                                                                onChange: onField,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 288,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                name: "email",
                                                                type: "email",
                                                                placeholder: "Email",
                                                                value: formData.email,
                                                                onChange: onField,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                name: "country",
                                                                placeholder: "Country / city",
                                                                value: formData.country,
                                                                onChange: onField,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                name: "phone",
                                                                placeholder: "Phone (WhatsApp preferred)",
                                                                value: formData.phone,
                                                                onChange: onField
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    groupSize === "2" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            name: "partnerName",
                                                            placeholder: "Your pair's name & email",
                                                            value: formData.partnerName,
                                                            onChange: onField,
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/book/page.js",
                                                            lineNumber: 295,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                                        children: "Short answers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                        name: "whyThis",
                                                        label: "Why this tour specifically, and what are you hoping to get out of it?",
                                                        value: formData.whyThis,
                                                        onChange: onField,
                                                        required: true,
                                                        rows: 4
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                        name: "experience",
                                                        label: "Any relevant experience or physical notes? (horses, altitude, camping, dietary, injuries, etc.)",
                                                        value: formData.experience,
                                                        onChange: onField,
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                        name: "dietary",
                                                        label: "Anything else we should know? Dietary preferences, travelling buddies, language concerns?",
                                                        value: formData.dietary,
                                                        onChange: onField,
                                                        rows: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                                        children: "Agreements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 rounded-lg border border-sand-800/40 bg-night-950/40 p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                                name: "agreeTerms",
                                                                checked: formData.agreeTerms,
                                                                onChange: onField,
                                                                children: [
                                                                    "I've read the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            var _document_getElementById;
                                                                            return (_document_getElementById = document.getElementById("agreements")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                                                                behavior: "smooth"
                                                                            });
                                                                        },
                                                                        className: "text-sand-300 underline underline-offset-4",
                                                                        children: "booking terms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/book/page.js",
                                                                        lineNumber: 342,
                                                                        columnNumber: 44
                                                                    }, this),
                                                                    " — 30% deposit to confirm, balance 45 days before departure, cancellation schedule applies."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 337,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                                name: "agreePace",
                                                                checked: formData.agreePace,
                                                                onChange: onField,
                                                                children: [
                                                                    "I understand this is a ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                        children: "small-group adventure"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/book/page.js",
                                                                        lineNumber: 349,
                                                                        columnNumber: 48
                                                                    }, this),
                                                                    ", not luxury tourism — there will be camping, long drive days, variable weather, and limited comms."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 344,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                                name: "agreeInsurance",
                                                                checked: formData.agreeInsurance,
                                                                onChange: onField,
                                                                children: "I'll travel with insurance covering medical, evacuation, and trip cancellation — and if I don't have a plan yet, I'll let TUGO know so we can sort one together."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/book/page.js",
                                                                lineNumber: 351,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: !allAgreed,
                                                        className: "\n                        px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition\n                        ".concat(allAgreed ? "bg-sand-400 text-night-950 hover:bg-sand-300" : "bg-sand-900/40 text-sand-600 cursor-not-allowed", "\n                      "),
                                                        children: "Send application"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 362,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: resetForm,
                                                        className: "px-8 py-3.5 text-sm uppercase tracking-[0.15em] border border-sand-800/40 text-sand-400 hover:border-sand-600/60 hover:text-sand-200 rounded-sm transition",
                                                        children: "Start over"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this),
                                            !allAgreed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-sand-600",
                                                children: "Tick all three agreements to enable submit."
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 383,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mt-12 rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-300 text-xs tracking-[0.3em] uppercase mb-3",
                                children: "✓ Sent"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl text-sand-100 mb-3",
                                children: "Thanks — your application is in."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 max-w-lg mx-auto",
                                children: "I read every one personally. Expect a reply within 48 hours. If you don't see anything, check spam, then message hello@tugo.mn."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetForm,
                                className: "mt-6 border border-sand-400/40 px-6 py-2.5 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition",
                                children: "Apply to another tour"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-sand-900/30 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center",
                                children: "What you pay, what it covers"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    {
                                        title: "Posted price",
                                        body: "Per person, for solo travellers. Covers 4×4 transport, accommodation (ger, tent, local homestay, hotel where indicated), all meals on the road, English-speaking guide, permits, and activities listed in the itinerary."
                                    },
                                    {
                                        title: "Bring a friend · save ".concat(Math.round(PAIR_DISCOUNT * 100), "%"),
                                        body: "Book as a pair and you both pay ".concat(Math.round((1 - PAIR_DISCOUNT) * 100), "% of posted. Our groups are small — two confirmed people is real weight. The saving is our thanks."),
                                        accent: true
                                    },
                                    {
                                        title: "Not included",
                                        body: "International flights, Mongolia visa (free for many passports), travel insurance, personal gear (sleeping bag, hiking boots), alcohol, tips, laundry, phone, optional activities."
                                    }
                                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border ".concat(c.accent ? "border-emerald-500/30 bg-emerald-500/5" : "border-sand-800/40 bg-night-900/30"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-lg mb-3 ".concat(c.accent ? "text-emerald-200" : "text-sand-100"),
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sand-400 text-sm leading-relaxed",
                                                children: c.body
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 437,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/book/page.js",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "agreements",
                className: "border-t border-sand-900/30 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center",
                                children: "Booking agreements"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-500 text-sm leading-relaxed mb-8 italic border-l-2 border-sand-800 pl-4",
                                children: "Summer is short and busy here. The moment your deposit arrives, I lock in your spot — guides, permits, domestic flights, family camps, fuel — and most of those costs don't come back once paid out. The policy below just reflects that, so everything runs smoothly for everyone on the trip."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "space-y-6",
                                children: [
                                    {
                                        t: "Deposit & payment",
                                        d: "A 30% deposit confirms your spot. The remaining balance is due 45 days before departure. We accept bank transfer (preferred — zero fees) or card (adds 3% processing). Late balances (inside 45 days) risk losing your spot."
                                    },
                                    {
                                        t: "Cancellation & refunds",
                                        d: "90+ days before departure: full refund minus a $100 admin fee. 60–89 days: 50% refund. 30–59 days: 25% refund OR full credit toward any 2027 departure (your choice). Inside 30 days: non-refundable — we've paid for your seat by then. No partial refunds for unused days, late arrivals, or early departures."
                                    },
                                    {
                                        t: "Non-refundable costs",
                                        d: "Altai departures include a round-trip flight to Ölgii that's non-refundable once booked (typically 45 days before departure). If you cancel after flight ticketing, you forfeit that portion in addition to the schedule above."
                                    },
                                    {
                                        t: "We&apos;re moving — guaranteed",
                                        d: "Every departure on the calendar runs. People are already lining up. If something unexpected happens in-country (weather, road closure), we re-route — we don&apos;t cancel."
                                    },
                                    {
                                        t: "Travel insurance",
                                        d: "You&apos;ll want travel insurance covering medical, emergency evacuation, and trip cancellation. If you don&apos;t have a provider yet, tell me — I&apos;ll help you find a plan that works for your passport and tour. No stress."
                                    },
                                    {
                                        t: "Physical & pace",
                                        d: "Small-group adventure, not luxury. Long drive days, camping nights, basic facilities, altitudes up to 3,000 m on Altai, weather that changes hourly. Flag any health conditions when you apply so we can plan with you."
                                    },
                                    {
                                        t: "Liability",
                                        d: "You are responsible for your own safety. We take every reasonable precaution and hire experienced local guides, but adventure travel carries inherent risk. Submitting the booking form acknowledges this."
                                    },
                                    {
                                        t: "Code of conduct",
                                        d: "Respect the land, the animals, the hosts. Leave every camp cleaner than you found it. No single-use plastics on camp nights. No drones without checking first. Photography of people — always ask. We book families and camps we want to be welcomed back to."
                                    }
                                ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "font-display text-lg text-sand-100 mb-1",
                                                children: row.t
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "text-sand-400 text-sm leading-relaxed",
                                                children: row.d
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 502,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, row.t, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/book/page.js",
                    lineNumber: 456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-sand-900/30 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center",
                                children: "Before you come"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center",
                                children: "Useful to know"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    {
                                        q: "Do I need a visa?",
                                        a: "Most Western passports (US, EU, UK, CA, AU, JP, KR and more) get 30 days visa-free. Others can apply for an e-visa. We'll confirm for your passport when you apply."
                                    },
                                    {
                                        q: "When should I book flights?",
                                        a: "After we confirm your spot, not before. International flights to Ulaanbaatar go through Seoul, Istanbul, Beijing, or Frankfurt. Summer 2026 fills up — aim to book 2–4 months out."
                                    },
                                    {
                                        q: "What should I pack?",
                                        a: "Layers (days warm, nights cold even in July), hiking boots, a sleeping bag rated to 0°C for camping tours, headlamp, sunglasses, sunscreen, a 40L duffel (not a suitcase — gets chucked around). Full packing list goes out once you're confirmed."
                                    },
                                    {
                                        q: "Wifi & phone?",
                                        a: "Ulaanbaatar has excellent wifi and 4G. Outside the city, signal is intermittent. On remote tours (Altai, Khuvsgul, horse trek) expect several days fully off-grid. If you need to stay reachable, let us know — satellite messenger can be arranged."
                                    },
                                    {
                                        q: "Meals & dietary stuff?",
                                        a: "All meals on the road are included. Food is rustic — mutton, noodles, rice, seasonal veg, wild berries, dairy. We can accommodate vegetarian / pescatarian / allergies with advance notice. Strict vegan is harder in the countryside; tell us early and we'll plan."
                                    },
                                    {
                                        q: "How physical is it?",
                                        a: "Ranges by tour. Terelj Escape is easy. North & Central is moderate (long drives, some hiking). Altai and Horse Trek are the most demanding — altitude and saddle time. You don't need to be an athlete; you do need to be OK with discomfort."
                                    },
                                    {
                                        q: "Can I join part of a tour?",
                                        a: "Generally no — logistics are built around full departures. But if you have a short window, talk to us about a custom private tour."
                                    }
                                ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group border border-sand-800/40 rounded-lg bg-night-900/30 open:bg-night-900/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: f.q
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 554,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sand-600 text-xl leading-none group-open:rotate-45 transition-transform",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 553,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-5 pb-5 text-sand-400 text-sm leading-relaxed",
                                                children: f.a
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 557,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/book/page.js",
                    lineNumber: 512,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeeWaiverSection, {
                tourOptions: tourOptions
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-sand-900/30 py-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-400 text-xs tracking-[0.3em] uppercase mb-3",
                            children: "Custom"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-2xl md:text-3xl text-sand-100 mb-4",
                            children: "Want something different?"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sand-400 text-sm mb-6 leading-relaxed",
                            children: "Private tours — any route, any dates, any group size — can be built on request. Tell us what you're after and we'll put something together."
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:hello@tugo.mn?subject=Custom tour request",
                            className: "inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition",
                            children: "Ask about custom"
                        }, void 0, false, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/book/page.js",
                    lineNumber: 570,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 569,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.js",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(BookPage, "rBHP6HcKXVL2sO+FHYDSD9OAnrA=");
_c = BookPage;
// ============================================================================
// FEE WAIVER — separate component with its own state
// ============================================================================
function FeeWaiverSection(param) {
    let { tourOptions } = param;
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        country: "",
        pronouns: "",
        tour: "",
        why: "",
        what: "",
        context: "",
        links: "",
        commit: false
    });
    const onField = (e)=>{
        const { name, value, type, checked } = e.target;
        setData((p)=>({
                ...p,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!data.commit) return;
        await submitApplication("waiver", data);
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = buildMailto("waiver", data);
        }
        setSubmitted(true);
    };
    const reset = ()=>{
        setOpen(false);
        setSubmitted(false);
        setData({
            name: "",
            email: "",
            country: "",
            pronouns: "",
            tour: "",
            why: "",
            what: "",
            context: "",
            links: "",
            commit: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-sand-900/30 py-24 bg-gradient-to-b from-night-900/30 to-night-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$FadeIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-amber-300/90 text-xs tracking-[0.3em] uppercase mb-3 text-center",
                        children: "Fee Waiver Program"
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 632,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl md:text-4xl text-sand-100 mb-5 text-center",
                        children: "Apply for a waived or reduced fee"
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sand-300 leading-relaxed text-center max-w-xl mx-auto mb-10",
                        children: [
                            "TUGO isn't just a business. Each season, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-sand-100",
                                children: "2 – 4 spots"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 639,
                                columnNumber: 59
                            }, this),
                            " are reserved for travellers who would otherwise not make it — artists, students, journalists, people with a story to tell about Mongolia. Partial or full waivers available. Applications read personally."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 638,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-4 mb-10",
                        children: [
                            {
                                n: "2–4",
                                l: "Waiver spots / season"
                            },
                            {
                                n: "50–100%",
                                l: "Fee covered"
                            },
                            {
                                n: "48h",
                                l: "Reply time"
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-5 rounded-xl border border-amber-800/30 bg-amber-900/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-2xl text-amber-200",
                                        children: s.n
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 649,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sand-500 text-xs tracking-wider uppercase mt-1",
                                        children: s.l
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 650,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.n, true, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 648,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this),
                    !open && !submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-sand-800/40 bg-night-900/30 p-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-lg text-sand-100 mb-4",
                                        children: "What we're looking for"
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 658,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sand-400 text-sm",
                                        children: [
                                            "A reason cost is a real barrier (we don't audit — we trust what you tell us).",
                                            "Something you'll bring to the group or the project — a craft, a skill, a story, a perspective.",
                                            "Openness to share your experience after — photos, writing, a song, word of mouth, anything.",
                                            "Flexibility on dates — waiver spots are assigned where we have room."
                                        ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-amber-400",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 667,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: l
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 668,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 666,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/book/page.js",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 657,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(true),
                                    className: "inline-block bg-amber-500 hover:bg-amber-400 text-night-950 px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition",
                                    children: "Start application"
                                }, void 0, false, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 674,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 673,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: open && !submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            onSubmit: onSubmit,
                            className: "space-y-8 rounded-2xl border border-amber-800/30 bg-night-900/40 p-6 md:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                            children: "About you"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 694,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    name: "name",
                                                    placeholder: "Full name",
                                                    value: data.name,
                                                    onChange: onField,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 696,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    name: "email",
                                                    type: "email",
                                                    placeholder: "Email",
                                                    value: data.email,
                                                    onChange: onField,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 697,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    name: "country",
                                                    placeholder: "Where are you based?",
                                                    value: data.country,
                                                    onChange: onField,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 698,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    name: "pronouns",
                                                    placeholder: "Pronouns (optional)",
                                                    value: data.pronouns,
                                                    onChange: onField
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 699,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 695,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 693,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                            children: "Which tour?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 704,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "tour",
                                            value: data.tour,
                                            onChange: onField,
                                            required: true,
                                            className: "w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 rounded-md focus:border-amber-400/50 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: 'Pick one — or "Flexible" if you\'re open'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 712,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Flexible",
                                                    children: "Flexible — any tour that has a spot"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/book/page.js",
                                                    lineNumber: 713,
                                                    columnNumber: 21
                                                }, this),
                                                tourOptions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "".concat(t.title, " (").concat(t.dates, ")"),
                                                        children: [
                                                            t.emoji,
                                                            " ",
                                                            t.title,
                                                            " · ",
                                                            t.dates
                                                        ]
                                                    }, t.id, true, {
                                                        fileName: "[project]/app/book/page.js",
                                                        lineNumber: 715,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 705,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 703,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                            children: "Short answers"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 723,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                            name: "why",
                                            label: "Why Mongolia, and why this tour?",
                                            value: data.why,
                                            onChange: onField,
                                            rows: 4,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 724,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                            name: "what",
                                            label: "What will you bring back? (photography, writing, a skill, a story, energy — anything)",
                                            value: data.what,
                                            onChange: onField,
                                            rows: 4,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 732,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                            name: "context",
                                            label: "A little about your situation — why cost is a barrier. Share only what you're comfortable with.",
                                            value: data.context,
                                            onChange: onField,
                                            rows: 3,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 740,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                            name: "links",
                                            placeholder: "Portfolio, Instagram, blog (optional — if we can see your work)",
                                            value: data.links,
                                            onChange: onField
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 722,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-[0.2em] uppercase text-sand-500 mb-4",
                                            children: "Commitment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 757,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-amber-800/30 bg-amber-900/5 p-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                name: "commit",
                                                checked: data.commit,
                                                onChange: onField,
                                                children: "If selected, I'll show up, follow the code of conduct, and share something about the trip afterwards (a photo, a write-up, a word to a friend — we agree on the format)."
                                            }, void 0, false, {
                                                fileName: "[project]/app/book/page.js",
                                                lineNumber: 759,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 758,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 756,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: !data.commit,
                                            className: "px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition\n                      ".concat(data.commit ? "bg-amber-500 hover:bg-amber-400 text-night-950" : "bg-sand-900/40 text-sand-600 cursor-not-allowed"),
                                            children: "Submit application"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 766,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: reset,
                                            className: "px-8 py-3.5 text-sm uppercase tracking-[0.15em] border border-sand-800/40 text-sand-400 hover:border-sand-600/60 hover:text-sand-200 rounded-sm transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/book/page.js",
                                            lineNumber: 776,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/book/page.js",
                                    lineNumber: 765,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/book/page.js",
                            lineNumber: 686,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 684,
                        columnNumber: 11
                    }, this),
                    submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mt-6 rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-300 text-xs tracking-[0.3em] uppercase mb-3",
                                children: "✓ Received"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 794,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl text-sand-100 mb-3",
                                children: "Thanks for applying."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 795,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sand-400 max-w-lg mx-auto",
                                children: "I read waiver applications carefully. You'll hear back within 48 hours whether you're selected, waitlisted, or not a fit for this season."
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 796,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: reset,
                                className: "mt-6 border border-sand-400/40 px-6 py-2.5 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/book/page.js",
                                lineNumber: 799,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/book/page.js",
                        lineNumber: 789,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 631,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/book/page.js",
            lineNumber: 630,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/book/page.js",
        lineNumber: 629,
        columnNumber: 5
    }, this);
}
_s1(FeeWaiverSection, "bbFA81g0Ey3Y2Ysd9gPjsUnkzm4=");
_c1 = FeeWaiverSection;
// ============================================================================
// FORM PRIMITIVES
// ============================================================================
function Input(param) {
    let { label, name, type = "text", ...rest } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-sm text-sand-400 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 820,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                name: name,
                ...rest,
                className: "w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 placeholder:text-sand-600 rounded-md focus:border-sand-400/50 focus:outline-none transition"
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 821,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.js",
        lineNumber: 819,
        columnNumber: 5
    }, this);
}
_c2 = Input;
function Textarea(param) {
    let { label, name, rows = 3, ...rest } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block mb-4",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-sm text-sand-400 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 834,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                rows: rows,
                ...rest,
                className: "w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 placeholder:text-sand-600 rounded-md focus:border-sand-400/50 focus:outline-none resize-y transition"
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 835,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.js",
        lineNumber: 833,
        columnNumber: 5
    }, this);
}
_c3 = Textarea;
function Checkbox(param) {
    let { name, checked, onChange, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex gap-3 cursor-pointer items-start group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                name: name,
                checked: checked,
                onChange: onChange,
                className: "mt-1 w-4 h-4 accent-sand-400 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 848,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sand-300 text-sm leading-relaxed group-hover:text-sand-100 transition-colors",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/book/page.js",
                lineNumber: 855,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/book/page.js",
        lineNumber: 847,
        columnNumber: 5
    }, this);
}
_c4 = Checkbox;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "BookPage");
__turbopack_context__.k.register(_c1, "FeeWaiverSection");
__turbopack_context__.k.register(_c2, "Input");
__turbopack_context__.k.register(_c3, "Textarea");
__turbopack_context__.k.register(_c4, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3cb23d6b._.js.map