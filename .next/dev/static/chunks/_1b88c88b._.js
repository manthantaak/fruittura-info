(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
    "[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "cn",
            () => cn
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
        ;
        ;
        function cn(...inputs) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
        }
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "Navbar",
            () => Navbar
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        ;
        ;
        ;
        ;
        const navLinks = [
            {
                href: "/",
                label: "Home"
            },
            {
                href: "/about",
                label: "About"
            },
            {
                href: "/products",
                label: "Products"
            },
            {
                href: "/quality",
                label: "Quality"
            },
            {
                href: "/export",
                label: "Export"
            },
            {
                href: "/contact",
                label: "Contact"
            }
        ];
        function Navbar() {
            _s();
            const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Navbar.useEffect": () => {
                    const handleScroll = {
                        "Navbar.useEffect.handleScroll": () => {
                            setIsScrolled(window.scrollY > 50);
                        }
                    }["Navbar.useEffect.handleScroll"];
                    window.addEventListener("scroll", handleScroll);
                    return ({
                        "Navbar.useEffect": () => window.removeEventListener("scroll", handleScroll)
                    })["Navbar.useEffect"];
                }
            }["Navbar.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg py-2" : "bg-white/80 backdrop-blur-sm py-3 md:py-4 shadow-sm"),
                children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container mx-auto px-3 md:px-4 flex items-center justify-between",
                    children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 md:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/fruittura.jpg",
                            alt: "Fruittura Logo",
                            width: 40,
                            height: 40,
                            className: "rounded-full md:w-[50px] md:h-[50px]"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-serif text-xl md:text-2xl font-bold text-primary",
                            children: "Fruittura"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden lg:flex items-center gap-6 xl:gap-8",
                        children: navLinks.map((link) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-foreground/80 hover:text-primary transition-colors duration-300 font-medium tracking-wide",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20your%20dry%20fruits",
                        target: "_blank",
                        className: "hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm xl:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 xl:w-5 xl:h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                            "Get Quote"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden text-foreground p-1.5",
                        onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                        "aria-label": "Toggle menu",
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 81,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 81,
                            columnNumber: 49
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-xl transition-all duration-300 overflow-hidden", isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col py-3",
                        children: [
                            navLinks.map((link) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-colors text-base",
                                    onClick: () => setIsMobileMenuOpen(false),
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://wa.me/918446896952",
                                    target: "_blank",
                                    className: "flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm",
                                    children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                        "Get Quote on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this);
        }
        _s(Navbar, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
        _c = Navbar;
        var _c;
        __turbopack_context__.k.register(_c, "Navbar");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "HeroSection",
            () => HeroSection
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        ;
        ;
        function HeroSection() {
            _s();
            const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "HeroSection.useEffect": () => {
                    const handleScroll = {
                        "HeroSection.useEffect.handleScroll": () => {
                            if (heroRef.current) {
                                const scrollY = window.scrollY;
                                heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
                            }
                        }
                    }["HeroSection.useEffect.handleScroll"];
                    window.addEventListener("scroll", handleScroll);
                    return ({
                        "HeroSection.useEffect": () => window.removeEventListener("scroll", handleScroll)
                    })["HeroSection.useEffect"];
                }
            }["HeroSection.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cream",
                children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23B8860B' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: heroRef,
                    className: "absolute inset-0 pointer-events-none hidden md:block",
                    children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-24 h-24 animate-float opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/golden-almond-illustration.jpg",
                            alt: "",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-20 w-20 h-20 animate-float-delayed opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/golden-cashew-illustration.jpg",
                            alt: "",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-40 left-20 w-16 h-16 animate-float-slow opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/golden-pistachio-illustration.jpg",
                            alt: "",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-40 w-28 h-28 animate-float opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/golden-walnut-illustration.jpg",
                            alt: "",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12 md:py-16 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center lg:text-left space-y-4 md:space-y-6 animate-fade-in-up order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                    "Premium Quality Since Establishment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance",
                                children: [
                                    "Premium ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Dry Fruits"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 23
                                    }, this),
                                    " & Spices Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed",
                                children: "Sourcing the finest quality dry fruits from trusted farms and delivering excellence to global markets."
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20getting%20a%20quote%20for%20dry%20fruits",
                                    target: "_blank",
                                    className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 md:w-6 md:h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                        "Get Quote on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    className: "inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-secondary/80 transition-all duration-300 border-2 border-primary/20",
                                    children: "Explore Products"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start pt-4 md:pt-6",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "100+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm text-muted-foreground",
                                        children: "Happy Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px bg-border h-10 md:h-12"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "20+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm text-muted-foreground",
                                        children: "Countries"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px bg-border h-10 md:h-12"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "6+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm text-muted-foreground",
                                        children: "Products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-gold-light/20 rounded-full blur-2xl md:blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-6 md:inset-8 bg-gradient-to-tr from-gold-light/30 to-primary/30 rounded-full blur-xl md:blur-2xl animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-primary/20 shadow-xl md:shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/premium-dry-fruits-bowl-with-almonds-cashews-pista.jpg",
                                        alt: "Premium Dry Fruits Collection",
                                        fill: true,
                                        className: "object-cover",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 md:gap-2",
                                        children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 md:w-5 md:h-5 text-primary",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] md:text-xs text-muted-foreground",
                                                children: "Certified"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-xs md:text-sm text-foreground",
                                                children: "FSSAI Approved"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float-delayed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 md:gap-2",
                                        children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 md:w-5 md:h-5 text-primary",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] md:text-xs text-muted-foreground",
                                                children: "Shipping"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-xs md:text-sm text-foreground",
                                                children: "Worldwide"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 170,
                    columnNumber: 7
                }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this);
        }
        _s(HeroSection, "rS7LcCXjly7/pTs1LPmN/oyd16w=");
        _c = HeroSection;
        var _c;
        __turbopack_context__.k.register(_c, "HeroSection");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "getProductById",
            () => getProductById,
            "getProductsByCategory",
            () => getProductsByCategory,
            "products",
            () => products
        ]);
        const products = [
            // Dry Fruits (7)
            {
                id: "almond",
                name: "Almond",
                hindiName: "Badam",
                category: "Dry Fruits",
                image: "/premium-whole-almonds-nuts-close-up.jpg",
                description: "Premium quality almonds known for their rich flavor and exceptional nutritional value. Our almonds are carefully selected to ensure the best taste and texture.",
                benefits: [
                    "Rich in Vitamin E",
                    "High in protein",
                    "Heart-healthy fats",
                    "Boosts brain function"
                ],
                uses: [
                    "Snacking",
                    "Baking",
                    "Milk preparation",
                    "Garnishing desserts"
                ]
            },
            {
                id: "cashew",
                name: "Cashew",
                hindiName: "Kaju",
                category: "Dry Fruits",
                image: "/premium-white-cashew-nuts-close-up.jpg",
                description: "Hand-selected cashews with a rich buttery flavor and creamy texture. Perfect for snacking, cooking, and making delicious sweets.",
                benefits: [
                    "Good source of copper",
                    "Promotes heart health",
                    "Supports bone health",
                    "Rich in antioxidants"
                ],
                uses: [
                    "Sweets making",
                    "Curries",
                    "Snacking",
                    "Cashew butter"
                ]
            },
            {
                id: "pistachio",
                name: "Pistachio",
                hindiName: "Pista",
                category: "Dry Fruits",
                image: "/green-pistachios-nuts-close-up.jpg",
                description: "Naturally opened green pistachios with a distinctive sweet taste. Known as the 'smiling nut' for their naturally split shells.",
                benefits: [
                    "High in antioxidants",
                    "Supports eye health",
                    "Aids weight management",
                    "Good for gut health"
                ],
                uses: [
                    "Snacking",
                    "Ice cream topping",
                    "Baklava",
                    "Kulfi making"
                ]
            },
            {
                id: "walnut",
                name: "Walnut",
                hindiName: "Akhrot",
                category: "Dry Fruits",
                image: "/walnut-halves-kernels-close-up.jpg",
                description: "Premium walnut kernels known for their brain-boosting properties. Light halves perfect for baking and healthy snacking.",
                benefits: [
                    "Omega-3 fatty acids",
                    "Improves brain health",
                    "Reduces inflammation",
                    "Heart-healthy"
                ],
                uses: [
                    "Baking",
                    "Salads",
                    "Brain tonics",
                    "Dessert garnishing"
                ]
            },
            {
                id: "raisins",
                name: "Raisins",
                hindiName: "Kismis",
                category: "Dry Fruits",
                image: "/golden-raisins-dried-grapes-close-up.jpg",
                description: "Sweet and plump raisins, naturally sun-dried for optimal sweetness. Available in golden and black varieties.",
                benefits: [
                    "Natural energy booster",
                    "Rich in iron",
                    "Aids digestion",
                    "Good for bone health"
                ],
                uses: [
                    "Desserts",
                    "Kheer",
                    "Trail mix",
                    "Baking"
                ]
            },
            {
                id: "dates",
                name: "Dates",
                hindiName: "Khajoor",
                category: "Dry Fruits",
                image: "/medjool-dates-dried-fruit-close-up.jpg",
                description: "Naturally sweet dates with a soft, chewy texture. A perfect natural sweetener and energy booster packed with nutrients.",
                benefits: [
                    "Natural sweetener",
                    "High in fiber",
                    "Rich in potassium",
                    "Instant energy source"
                ],
                uses: [
                    "Snacking",
                    "Smoothies",
                    "Date syrup",
                    "Religious offerings"
                ]
            },
            {
                id: "figs",
                name: "Figs",
                hindiName: "Anjeer",
                category: "Dry Fruits",
                image: "/dried-figs-anjeer-close-up.jpg",
                description: "Premium dried figs with a honey-like sweetness. Rich in fiber and minerals, perfect for healthy snacking.",
                benefits: [
                    "High in fiber",
                    "Rich in calcium",
                    "Supports digestive health",
                    "Natural laxative"
                ],
                uses: [
                    "Snacking",
                    "Milkshakes",
                    "Desserts",
                    "Energy bars"
                ]
            },
            // Spices (22)
            {
                id: "black-pepper",
                name: "Black Pepper",
                hindiName: "Kali Mirch",
                category: "Spices",
                image: "/spices/black-pepper-kali-mirch.jpg",
                description: "Known as the 'King of Spices', our black pepper offers a sharp, pungent flavor that enhances any dish.",
                benefits: [
                    "Aids digestion",
                    "Rich in antioxidants",
                    "Improves nutrient absorption",
                    "Anti-inflammatory"
                ],
                uses: [
                    "Seasoning",
                    "Marinades",
                    "Soups",
                    "Ayurvedic remedies"
                ]
            },
            {
                id: "white-pepper",
                name: "White Pepper",
                hindiName: "Safed Mirch",
                category: "Spices",
                image: "/spices/white-pepper-safed-mirch.jpg",
                description: "Milder than black pepper with a subtle heat. Perfect for light-colored dishes where black specks are undesirable.",
                benefits: [
                    "Aids digestion",
                    "Milder flavor",
                    "Rich in vitamins",
                    "Antibacterial properties"
                ],
                uses: [
                    "White sauces",
                    "Soups",
                    "Chinese cuisine",
                    "Baking"
                ]
            },
            {
                id: "green-cardamom",
                name: "Green Cardamom",
                hindiName: "Chhoti Elaichi",
                category: "Spices",
                image: "/spices/green-cardamom-elaichi.jpg",
                description: "The 'Queen of Spices' with an intensely aromatic, sweet flavor. Essential for Indian desserts and chai.",
                benefits: [
                    "Freshens breath",
                    "Aids digestion",
                    "Detoxifying",
                    "Rich in antioxidants"
                ],
                uses: [
                    "Tea/Chai",
                    "Desserts",
                    "Biryani",
                    "Mouth freshener"
                ]
            },
            {
                id: "black-cardamom",
                name: "Black Cardamom",
                hindiName: "Badi Elaichi",
                category: "Spices",
                image: "/spices/black-cardamom-badi-elaichi.jpg",
                description: "Bold, smoky flavor perfect for savory dishes. An essential spice in garam masala and meat preparations.",
                benefits: [
                    "Respiratory health",
                    "Digestive aid",
                    "Detoxifying",
                    "Anti-inflammatory"
                ],
                uses: [
                    "Garam masala",
                    "Meat curries",
                    "Biryani",
                    "Pulao"
                ]
            },
            {
                id: "cloves",
                name: "Cloves",
                hindiName: "Long",
                category: "Spices",
                image: "/spices/cloves-long.jpg",
                description: "Intensely aromatic flower buds with a warm, sweet flavor. A staple in Indian cooking and traditional medicine.",
                benefits: [
                    "Dental health",
                    "Antibacterial",
                    "Rich in antioxidants",
                    "Aids digestion"
                ],
                uses: [
                    "Biryani",
                    "Chai",
                    "Meat dishes",
                    "Dental care"
                ]
            },
            {
                id: "cinnamon",
                name: "Cinnamon",
                hindiName: "Dalchini",
                category: "Spices",
                image: "/spices/cinnamon-dalchini.jpg",
                description: "Warm, sweet aromatic bark that adds depth to both sweet and savory dishes. A versatile spice loved worldwide.",
                benefits: [
                    "Blood sugar control",
                    "Anti-inflammatory",
                    "Heart health",
                    "Rich in antioxidants"
                ],
                uses: [
                    "Desserts",
                    "Curries",
                    "Tea",
                    "Baking"
                ]
            },
            {
                id: "nutmeg",
                name: "Nutmeg",
                hindiName: "Jaiphal",
                category: "Spices",
                image: "/spices/nutmeg-jaiphal.jpg",
                description: "Warm, nutty spice with a slightly sweet flavor. Used sparingly to add depth to dishes and beverages.",
                benefits: [
                    "Aids sleep",
                    "Brain health",
                    "Digestive aid",
                    "Pain relief"
                ],
                uses: [
                    "Desserts",
                    "Bechamel sauce",
                    "Garam masala",
                    "Beverages"
                ]
            },
            {
                id: "mace",
                name: "Mace",
                hindiName: "Javitri",
                category: "Spices",
                image: "/spices/mace-javitri.jpg",
                description: "The delicate outer covering of nutmeg with a lighter, more refined flavor. A premium spice for special dishes.",
                benefits: [
                    "Digestive health",
                    "Stress relief",
                    "Skin health",
                    "Anti-inflammatory"
                ],
                uses: [
                    "Biryani",
                    "Korma",
                    "Desserts",
                    "Pickles"
                ]
            },
            {
                id: "star-anise",
                name: "Star Anise",
                hindiName: "Chakra Phool",
                category: "Spices",
                image: "/spices/star-anise-chakra-phool.jpg",
                description: "Beautiful star-shaped spice with a distinct licorice flavor. Essential in Chinese five-spice and Indian cooking.",
                benefits: [
                    "Antiviral properties",
                    "Aids digestion",
                    "Rich in antioxidants",
                    "Respiratory health"
                ],
                uses: [
                    "Biryani",
                    "Chai",
                    "Chinese dishes",
                    "Soup broths"
                ]
            },
            {
                id: "bay-leaf",
                name: "Bay Leaf",
                hindiName: "Tej Patta",
                category: "Spices",
                image: "/spices/bay-leaf-tej-patta.jpg",
                description: "Aromatic leaves that add a subtle, herbal flavor to dishes. Essential for slow-cooked curries and rice dishes.",
                benefits: [
                    "Digestive aid",
                    "Blood sugar control",
                    "Anti-inflammatory",
                    "Respiratory health"
                ],
                uses: [
                    "Biryani",
                    "Curries",
                    "Rice dishes",
                    "Soups"
                ]
            },
            {
                id: "cumin",
                name: "Cumin",
                hindiName: "Jeera",
                category: "Spices",
                image: "/spices/cumin-jeera.jpg",
                description: "Earthy, warming spice essential to Indian cooking. The backbone of countless curry recipes and spice blends.",
                benefits: [
                    "Aids digestion",
                    "Iron-rich",
                    "Boosts immunity",
                    "Weight management"
                ],
                uses: [
                    "Tadka/Tempering",
                    "Curries",
                    "Rice dishes",
                    "Chaas/Buttermilk"
                ]
            },
            {
                id: "fennel",
                name: "Fennel",
                hindiName: "Saunf",
                category: "Spices",
                image: "/spices/fennel-saunf.jpg",
                description: "Sweet, licorice-flavored seeds often enjoyed as a mouth freshener. Adds a unique flavor to many dishes.",
                benefits: [
                    "Freshens breath",
                    "Aids digestion",
                    "Rich in fiber",
                    "Antioxidant properties"
                ],
                uses: [
                    "Mouth freshener",
                    "Pickles",
                    "Curries",
                    "Tea"
                ]
            },
            {
                id: "fenugreek",
                name: "Fenugreek",
                hindiName: "Methi",
                category: "Spices",
                image: "/spices/fenugreek-methi.jpg",
                description: "Slightly bitter seeds with a maple-like aroma. Essential for authentic Indian curries and pickles.",
                benefits: [
                    "Blood sugar control",
                    "Lactation support",
                    "Hair health",
                    "Digestive aid"
                ],
                uses: [
                    "Pickles",
                    "Curries",
                    "Tadka",
                    "Hair treatments"
                ]
            },
            {
                id: "mustard-seeds",
                name: "Mustard Seeds",
                hindiName: "Sarson",
                category: "Spices",
                image: "/spices/mustard-seeds-sarson.jpg",
                description: "Pungent seeds that pop and release flavor when tempered in hot oil. Essential for South Indian cuisine.",
                benefits: [
                    "Rich in selenium",
                    "Anti-inflammatory",
                    "Digestive health",
                    "Metabolism booster"
                ],
                uses: [
                    "Tempering",
                    "Pickles",
                    "South Indian dishes",
                    "Mustard oil"
                ]
            },
            {
                id: "nigella-seeds",
                name: "Nigella Seeds",
                hindiName: "Kalonji",
                category: "Spices",
                image: "/spices/nigella-seeds-kalonji.jpg",
                description: "Tiny black seeds with a slightly bitter, peppery flavor. Often sprinkled on naan bread and pickles.",
                benefits: [
                    "Immune support",
                    "Anti-inflammatory",
                    "Digestive health",
                    "Skin health"
                ],
                uses: [
                    "Naan bread",
                    "Pickles",
                    "Vegetable dishes",
                    "Ayurvedic remedies"
                ]
            },
            {
                id: "saffron",
                name: "Saffron",
                hindiName: "Kesar",
                category: "Spices",
                image: "/spices/saffron-kesar.jpg",
                description: "The world's most precious spice, known for its golden color and distinctive aroma. Hand-harvested with care.",
                benefits: [
                    "Mood enhancer",
                    "Rich in antioxidants",
                    "Skin glow",
                    "Improves memory"
                ],
                uses: [
                    "Biryani",
                    "Kheer",
                    "Saffron milk",
                    "Desserts"
                ]
            },
            {
                id: "carom-seeds",
                name: "Carom Seeds",
                hindiName: "Ajwain",
                category: "Spices",
                image: "/spices/carom-seeds-ajwain.jpg",
                description: "Powerful digestive seeds with a thyme-like flavor. A staple in Indian fried snacks and breads.",
                benefits: [
                    "Digestive relief",
                    "Respiratory health",
                    "Acidity relief",
                    "Anti-bacterial"
                ],
                uses: [
                    "Parathas",
                    "Pakoras",
                    "Digestive remedies",
                    "Pickles"
                ]
            },
            {
                id: "asafoetida",
                name: "Asafoetida",
                hindiName: "Hing",
                category: "Spices",
                image: "/spices/asafoetida-hing.jpg",
                description: "Pungent spice that transforms when cooked, adding an onion-garlic like flavor. Essential in vegetarian cooking.",
                benefits: [
                    "Digestive aid",
                    "Anti-flatulent",
                    "Respiratory health",
                    "Anti-inflammatory"
                ],
                uses: [
                    "Dal",
                    "Vegetable dishes",
                    "Pickles",
                    "Digestive remedies"
                ]
            },
            {
                id: "tamarind",
                name: "Tamarind",
                hindiName: "Imli",
                category: "Spices",
                image: "/spices/tamarind-imli.jpg",
                description: "Tangy, sweet-sour fruit pulp essential for South Indian and Thai cuisines. Adds depth to chutneys and curries.",
                benefits: [
                    "Rich in antioxidants",
                    "Digestive health",
                    "Heart health",
                    "Anti-inflammatory"
                ],
                uses: [
                    "Sambar",
                    "Chutneys",
                    "Candies",
                    "Rasam"
                ]
            },
            {
                id: "red-chilli",
                name: "Red Chilli",
                hindiName: "Lal Mirch",
                category: "Spices",
                image: "/spices/red-chilli-lal-mirch.jpg",
                description: "Fiery spice that adds heat and vibrant color to dishes. Available in various heat levels to suit all palates.",
                benefits: [
                    "Metabolism booster",
                    "Pain relief",
                    "Rich in Vitamin C",
                    "Digestive aid"
                ],
                uses: [
                    "Curries",
                    "Pickles",
                    "Chutneys",
                    "Marinades"
                ]
            },
            {
                id: "turmeric",
                name: "Turmeric",
                hindiName: "Haldi",
                category: "Spices",
                image: "/spices/turmeric-haldi.jpg",
                description: "The golden spice of India, known for its earthy flavor and powerful health benefits. A kitchen essential.",
                benefits: [
                    "Anti-inflammatory",
                    "Antioxidant",
                    "Immune booster",
                    "Skin health"
                ],
                uses: [
                    "Curries",
                    "Golden milk",
                    "Pickles",
                    "Skincare"
                ]
            },
            {
                id: "coriander",
                name: "Coriander",
                hindiName: "Dhaniya",
                category: "Spices",
                image: "/spices/coriander-dhaniya.jpg",
                description: "Citrusy, slightly sweet seeds essential for Indian spice blends. Forms the base of many curry powders.",
                benefits: [
                    "Digestive health",
                    "Blood sugar control",
                    "Rich in antioxidants",
                    "Skin health"
                ],
                uses: [
                    "Curry powder",
                    "Chutneys",
                    "Pickles",
                    "Spice blends"
                ]
            }
        ];
        function getProductById(id) {
            return products.find((p) => p.id === id);
        }
        function getProductsByCategory(category) {
            if (category === "All") return products;
            return products.filter((p) => p.category === category);
        }
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/featured-products.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "FeaturedProducts",
            () => FeaturedProducts
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        ;
        ;
        ;
        const featuredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 6);
        function FeaturedProducts() {
            _s();
            const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "FeaturedProducts.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "FeaturedProducts.useEffect": ([entry]) => {
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["FeaturedProducts.useEffect"], {
                        threshold: 0.1
                    });
                    if (sectionRef.current) {
                        observer.observe(sectionRef.current);
                    }
                    return ({
                        "FeaturedProducts.useEffect": () => observer.disconnect()
                    })["FeaturedProducts.useEffect"];
                }
            }["FeaturedProducts.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "py-12 md:py-24 bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-8 md:mb-16",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-medium tracking-wider uppercase text-xs md:text-sm",
                            children: "Our Collection"
                        }, void 0, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 md:mt-3 mb-2 md:mb-4 text-balance",
                            children: "Premium Dry Fruits & Spices"
                        }, void 0, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm md:text-lg px-2",
                            children: "Sourced from the finest farms, our products are selected for exceptional quality and authentic taste."
                        }, void 0, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/featured-products.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8",
                        children: featuredProducts.map((product, index) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/products/${product.id}`,
                            className: `group bg-background rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-32 sm:h-48 md:h-64 overflow-hidden bg-cream",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: product.image || "/placeholder.svg",
                                    alt: product.name,
                                    fill: true,
                                    className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/featured-products.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2.5 md:p-5 space-y-1 md:space-y-3",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-serif text-sm md:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm text-primary font-medium",
                                    children: product.hindiName
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2 hidden sm:block",
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/featured-products.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                            ]
                        }, product.id, true, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/featured-products.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8 md:mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products",
                            className: "inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:gap-3 transition-all duration-300",
                            children: [
                                "View All Products",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 md:w-5 md:h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/featured-products.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/featured-products.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/featured-products.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/featured-products.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/featured-products.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this);
        }
        _s(FeaturedProducts, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
        _c = FeaturedProducts;
        var _c;
        __turbopack_context__.k.register(_c, "FeaturedProducts");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/why-choose-us.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "WhyChooseUs",
            () => WhyChooseUs
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        ;
        const features = [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                title: "Premium Quality",
                description: "Hand-selected dry fruits meeting international quality standards with rigorous quality checks."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                title: "Global Reach",
                description: "Exporting to 20+ countries with reliable logistics and timely delivery worldwide."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
                title: "100% Natural",
                description: "No artificial additives or preservatives. Pure, natural, and wholesome products."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                title: "Certified & Trusted",
                description: "FSSAI, ISO, and HACCP certified. Complete documentation for hassle-free import."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                title: "Reliable Logistics",
                description: "Temperature-controlled shipping ensuring freshness from our warehouse to your doorstep."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                title: "Dedicated Support",
                description: "Personal account manager for seamless communication and order tracking."
            }
        ];
        function WhyChooseUs() {
            _s();
            const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "WhyChooseUs.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "WhyChooseUs.useEffect": ([entry]) => {
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["WhyChooseUs.useEffect"], {
                        threshold: 0.1
                    });
                    if (sectionRef.current) {
                        observer.observe(sectionRef.current);
                    }
                    return ({
                        "WhyChooseUs.useEffect": () => observer.disconnect()
                    })["WhyChooseUs.useEffect"];
                }
            }["WhyChooseUs.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "py-12 md:py-24 bg-cream relative overflow-hidden",
                children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                }, void 0, false, {
                    fileName: "[project]/components/why-choose-us.tsx",
                    lineNumber: 63,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                }, void 0, false, {
                    fileName: "[project]/components/why-choose-us.tsx",
                    lineNumber: 64,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-8 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-medium tracking-wider uppercase text-xs md:text-sm",
                            children: "Why Partner With Us"
                        }, void 0, false, {
                            fileName: "[project]/components/why-choose-us.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 md:mt-3 mb-3 md:mb-4 text-balance",
                            children: "The Fruittura Advantage"
                        }, void 0, false, {
                            fileName: "[project]/components/why-choose-us.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm md:text-lg px-2",
                            children: "Experience unmatched quality, reliability, and service that sets us apart in the dry fruits export industry."
                        }, void 0, false, {
                            fileName: "[project]/components/why-choose-us.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/why-choose-us.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8",
                        children: features.map((feature, index) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-card p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                    className: "w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/components/why-choose-us.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/why-choose-us.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3",
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/components/why-choose-us.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground leading-relaxed text-xs md:text-base line-clamp-3 md:line-clamp-none",
                                children: feature.description
                            }, void 0, false, {
                                fileName: "[project]/components/why-choose-us.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                            ]
                        }, feature.title, true, {
                            fileName: "[project]/components/why-choose-us.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/why-choose-us.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/why-choose-us.tsx",
                    lineNumber: 66,
                    columnNumber: 7
                }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/why-choose-us.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this);
        }
        _s(WhyChooseUs, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
        _c = WhyChooseUs;
        var _c;
        __turbopack_context__.k.register(_c, "WhyChooseUs");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/export-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "ExportSection",
            () => ExportSection
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        ;
        ;
        function ExportSection() {
            _s();
            const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "ExportSection.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "ExportSection.useEffect": ([entry]) => {
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["ExportSection.useEffect"], {
                        threshold: 0.1
                    });
                    if (sectionRef.current) {
                        observer.observe(sectionRef.current);
                    }
                    return ({
                        "ExportSection.useEffect": () => observer.disconnect()
                    })["ExportSection.useEffect"];
                }
            }["ExportSection.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "py-24 bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/cargo-ship-containers-dry-fruits-export-logistics-.jpg",
                                    alt: "Export Logistics",
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-bold",
                                    children: "20+"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-90",
                                    children: "Country Serving"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-section.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`,
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary font-medium tracking-wider uppercase text-sm",
                                children: "Export Excellence"
                            }, void 0, false, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance",
                                children: "Seamless Global Export Services"
                            }, void 0, false, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg leading-relaxed",
                                children: "From sourcing to delivery, we handle every aspect of the export process with precision and care. Our expertise in international logistics ensures your products arrive fresh and on time."
                            }, void 0, false, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    "Complete export documentation support",
                                    "Real-time shipment tracking",
                                    "Customs clearance assistance",
                                    "Flexible payment terms"
                                ].map((item) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-primary",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/export-section.tsx",
                                                lineNumber: 73,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/export-section.tsx",
                                            lineNumber: 72,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-section.tsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground",
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-section.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, item, true, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/export",
                                    className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300",
                                    children: [
                                        "Learn More",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/export-section.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/export-section.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-section.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/export-section.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-section.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-section.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-section.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-section.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this);
        }
        _s(ExportSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
        _c = ExportSection;
        var _c;
        __turbopack_context__.k.register(_c, "ExportSection");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/components/certifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "Certifications",
            () => Certifications
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        "use client";
        ;
        const certifications = [
            {
                name: "FSSAI",
                fullName: "Food Safety and Standards Authority of India",
                description: "Licensed for food safety and quality standards"
            },
            {
                name: "ISO 22000",
                fullName: "International Organization for Standardization",
                description: "Food safety management systems certification"
            },
            {
                name: "HACCP",
                fullName: "Hazard Analysis Critical Control Points",
                description: "Systematic preventive approach to food safety"
            },
            {
                name: "APEDA",
                fullName: "Agricultural & Processed Food Products Export",
                description: "Registered exporter of agricultural products"
            }
        ];
        function Certifications() {
            _s();
            const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Certifications.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "Certifications.useEffect": ([entry]) => {
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["Certifications.useEffect"], {
                        threshold: 0.1
                    });
                    if (sectionRef.current) {
                        observer.observe(sectionRef.current);
                    }
                    return ({
                        "Certifications.useEffect": () => observer.disconnect()
                    })["Certifications.useEffect"];
                }
            }["Certifications.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "py-24 bg-cream",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-16",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-medium tracking-wider uppercase text-sm",
                            children: "Quality Assurance"
                        }, void 0, false, {
                            fileName: "[project]/components/certifications.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance",
                            children: "Certified Excellence"
                        }, void 0, false, {
                            fileName: "[project]/components/certifications.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "Our products meet the highest international quality and safety standards, backed by prestigious certifications."
                        }, void 0, false, {
                            fileName: "[project]/components/certifications.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: certifications.map((cert, index) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-card p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary group-hover:text-primary-foreground font-bold text-lg transition-colors",
                                    children: cert.name
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/certifications.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif text-lg font-bold text-foreground mb-2",
                                children: cert.fullName
                            }, void 0, false, {
                                fileName: "[project]/components/certifications.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: cert.description
                            }, void 0, false, {
                                fileName: "[project]/components/certifications.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                            ]
                        }, cert.name, true, {
                            fileName: "[project]/components/certifications.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/certifications.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/certifications.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this);
        }
        _s(Certifications, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
        _c = Certifications;
        var _c;
        __turbopack_context__.k.register(_c, "Certifications");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
]);

//# sourceMappingURL=_1b88c88b._.js.map