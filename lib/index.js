import "@fontsource-variable/open-sans/wght.css";
import "@fontsource-variable/open-sans/wght-italic.css";
import { Paragraph as e, SLIDE_HEIGHT as t, SLIDE_WIDTH as n, createSlideTheme as r, useSlideView as i } from "@seminar/core";
import { alpha as a, styled as o, useTheme as s } from "@mui/material/styles";
import { useThemeProps as c } from "@mui/material";
import { Children as ee, isValidElement as te, useId as l } from "react";
import { Fragment as ne, jsx as u, jsxs as d } from "react/jsx-runtime";
import f from "../assets/title-background.avif";
import re from "../assets/title-background-top.avif";
var p = Math.tan(21.4 * Math.PI / 180), ie = [
	"m 22.389707,33.948443 q -1.197623,0 -1.996038,0.68954 -0.798416,0.689541 -0.90729,2.03233 l -0.03629,0.580665 h 4.391284 l -0.362916,4.863075 H 19.050879 L 17.962132,55.687111 H 11.35706 L 12.445808,42.114053 H 8.9981065 l 0.3992076,-4.863075 h 3.4477019 l 0.03629,-0.653248 q 0.290332,-3.738035 2.395245,-5.842948 2.141205,-2.104913 5.879239,-2.104913 2.141205,0 3.375119,0.508083 l -0.362916,5.044532 Q 23.15183,33.948443 22.389707,33.948443 Z",
	"m 32.043255,48.029583 q -0.07258,1.306498 0.616957,1.996038 0.725832,0.653249 1.887163,0.653249 0.689541,0 1.81458,-0.254041 l -0.435499,5.008241 q -1.342789,0.544374 -3.483994,0.544374 -3.447701,0 -5.22599,-1.81458 -1.778288,-1.850872 -1.778288,-5.153407 0,-0.653249 0.03629,-0.979874 l 0.471791,-5.91553 h -3.447702 l 0.399208,-4.863075 h 3.447702 l 0.326624,-4.173533 6.750238,-2.104913 -0.508083,6.278446 h 4.427575 l -0.362916,4.863075 h -4.463866 z",
	"m 46.124378,55.977444 q -2.50412,0 -4.645325,-0.508083 -2.141204,-0.544374 -4.246117,-1.705705 l 2.068622,-4.463867 q 1.524247,1.016165 3.375118,1.596831 1.850872,0.544374 3.592869,0.544374 1.197622,0 1.741996,-0.290333 0.580666,-0.326624 0.580666,-0.798415 0,-0.616957 -0.798415,-0.979873 -0.762124,-0.362916 -2.431537,-0.798416 -2.03233,-0.544374 -3.375119,-1.088748 -1.306498,-0.580665 -2.286371,-1.669413 -0.979873,-1.088748 -0.979873,-2.867036 0,-1.81458 1.052456,-3.229953 1.052457,-1.415372 2.93962,-2.177496 1.923455,-0.798415 4.391283,-0.798415 2.104913,0 4.173534,0.616957 2.104913,0.580666 3.556577,1.596831 l -1.996038,4.354992 q -1.415372,-0.943582 -2.939619,-1.451664 -1.524248,-0.508083 -2.93962,-0.508083 -1.197623,0 -1.81458,0.326625 -0.616957,0.290332 -0.616957,0.762123 0,0.653249 0.798415,1.052457 0.798415,0.362916 2.50412,0.834706 1.959747,0.544374 3.266244,1.12504 1.342789,0.544374 2.286371,1.669413 0.979873,1.088748 0.979873,2.830745 0,2.867037 -2.213787,4.463867 -2.177496,1.560539 -6.024406,1.560539 z",
	"m 69.859062,36.815479 q 1.37908,0 2.104912,0.399208 l -0.435499,5.988114 q -1.451664,-0.725832 -3.048494,-0.725832 -1.996038,0 -3.121078,0.90729 -1.125039,0.90729 -1.306497,3.048494 l -0.725832,9.254358 h -6.56878 l 1.052457,-13.137559 q 0.145166,-2.540412 0.145166,-3.810618 0,-1.016165 -0.03629,-1.487956 h 6.205863 l 0.108875,2.612996 q 0.762123,-1.415373 2.286371,-2.213788 1.560538,-0.834707 3.338826,-0.834707 z",
	"m 93.049369,37.250978 -1.379081,17.020761 q -0.362916,4.971949 -3.157369,7.258319 -2.758162,2.286371 -7.838985,2.286371 -4.645325,0 -8.056736,-1.560539 l 1.379081,-4.863074 q 3.193661,1.59683 6.931696,1.59683 1.923454,0 2.975911,-0.943581 1.052456,-0.90729 1.233914,-2.975911 l 0.145167,-1.996038 q -1.923455,2.104913 -5.44374,2.104913 -2.322663,0 -4.137243,-1.052457 -1.778288,-1.052456 -2.794453,-2.975911 -0.979873,-1.923455 -0.979873,-4.463867 0,-2.794453 1.12504,-5.044532 1.125039,-2.286371 3.157369,-3.592868 2.032329,-1.306498 4.645325,-1.306498 3.592868,0 5.552614,2.540412 l 0.145167,-2.03233 z M 82.125597,50.279663 q 1.741997,0 2.758162,-1.233915 1.052456,-1.233914 1.052456,-3.266244 0,-2.068621 -0.979873,-3.084786 -0.943581,-1.016164 -2.72187,-1.016164 -1.741996,0 -2.794453,1.233914 -1.016165,1.233914 -1.016165,3.41141 0,1.850872 0.979874,2.903328 0.979873,1.052457 2.721869,1.052457 z",
	"m 22.645,66.879 c 0,3.598 -2.918,6.519 -6.52,6.519 -3.602,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.918,-6.524 6.52,-6.524 3.602,0 6.52,2.922 6.52,6.524 z",
	"m 44.859,66.879 c 0,3.598 -2.921,6.519 -6.519,6.519 -3.602,0 -6.524,-2.921 -6.524,-6.519 0,-3.602 2.922,-6.524 6.524,-6.524 3.598,0 6.519,2.922 6.519,6.524 z",
	"m 67.074,66.879 c 0,3.598 -2.922,6.519 -6.523,6.519 -3.598,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.922,-6.524 6.52,-6.524 3.601,0 6.523,2.922 6.523,6.524 z"
], m = 84.051, h = 44.748, ae = `8.998 28.65 ${String(m)} ${String(h)}`;
function oe() {
	return /* @__PURE__ */ u("g", {
		fill: "currentColor",
		children: ie.map((e) => /* @__PURE__ */ u("path", { d: e }, e))
	});
}
var g = 48, _ = 107.6, v = g * p, y = 5.96, b = g - 2 * y, x = m / h * b, S = 61.599999999999994 - x / 2, C = 2, w = -12, T = _ - w, se = "#283c88", ce = "#5f2c60", E = 64.2, D = 61.15, le = D * Math.cos(E * Math.PI / 180), ue = D * Math.sin(E * Math.PI / 180), de = "#9f172d", O = D, fe = O * Math.cos(E * Math.PI / 180), pe = O * Math.sin(E * Math.PI / 180), me = O / Math.cos(E * Math.PI / 180), he = [
	[v, 0],
	[109.6, 0],
	[109.6, 50],
	[-2 * p, 50]
].join(" "), k = 2, A = 1, j = k * Math.hypot(1, p), M = [
	[v * (1 - k / g) + j, k],
	[105.6, k],
	[105.6, 46],
	[k / g * v + j, 46]
].join(" "), N = o("svg", {
	name: "FtsrgCornerLogo",
	slot: "Root"
})({
	display: "block",
	height: g,
	overflow: "visible",
	aspectRatio: `${String(T)} / ${String(g)}`
}), P = "https://ftsrg.mit.bme.hu", F = o("a", {
	name: "FtsrgCornerLogo",
	slot: "Badge"
})({
	outline: "none",
	"&:hover linearGradient, &:focus-visible linearGradient": { transform: `translateX(${String(-me)}px)` },
	"&:focus-visible > polygon": { visibility: "visible" }
}), I = o("polygon", {
	name: "FtsrgCornerLogo",
	slot: "FocusRing"
})({
	visibility: "hidden",
	fill: "none",
	stroke: "#fff"
}), L = o("linearGradient", {
	name: "FtsrgCornerLogo",
	slot: "Gradient"
})(({ theme: e }) => ({ "@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("transform", {
	duration: e.transitions.duration.standard,
	easing: e.transitions.easing.easeInOut
}) } }));
function R({ className: e, footerColor: t }) {
	let n = l();
	return /* @__PURE__ */ d(N, {
		className: e,
		viewBox: `${String(w)} 0 ${String(T)} ${String(g)}`,
		children: [/* @__PURE__ */ u("polygon", {
			fill: t,
			points: [
				[w - C, 0],
				[v - 12, 0],
				[-12, g],
				[w - C, g]
			].join(" ")
		}), /* @__PURE__ */ d(F, {
			href: P,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "ftsrg",
			children: [
				/* @__PURE__ */ u("defs", { children: /* @__PURE__ */ d(L, {
					id: n,
					gradientUnits: "userSpaceOnUse",
					x1: _ - le,
					y1: g - ue,
					x2: _ + fe,
					y2: g + pe,
					children: [
						/* @__PURE__ */ u("stop", {
							offset: "0",
							stopColor: se
						}),
						/* @__PURE__ */ u("stop", {
							offset: D / 122.3,
							stopColor: ce
						}),
						/* @__PURE__ */ u("stop", {
							offset: "1",
							stopColor: de
						})
					]
				}) }),
				/* @__PURE__ */ u("polygon", {
					fill: `url(#${n})`,
					points: he
				}),
				/* @__PURE__ */ u("svg", {
					x: S,
					y,
					width: x,
					height: b,
					viewBox: ae,
					color: "#fff",
					children: /* @__PURE__ */ u(oe, {})
				}),
				/* @__PURE__ */ u(I, {
					strokeWidth: A,
					points: M
				})
			]
		})]
	});
}
// src/master/FtsrgSlideMaster.tsx
var ge = o("section", {
	name: "FtsrgSlideMaster",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%"
}), _e = o("main", {
	name: "FtsrgSlideMaster",
	slot: "Content"
})(({ theme: e }) => ({
	position: "relative",
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	padding: e.spacing(4, 8)
})), ve = o("footer", {
	name: "FtsrgSlideMaster",
	slot: "Footer"
})(({ theme: e }) => ({
	position: "relative",
	display: "flex",
	height: e.spacing(6)
})), ye = o("div", {
	name: "FtsrgSlideMaster",
	slot: "FooterBackground"
})(({ theme: e }) => ({
	flexGrow: 1,
	background: e.palette.neutral.main
})), be = o("div", {
	name: "FtsrgSlideNumber",
	slot: "Footer"
})({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: 18
}), xe = o(R, {
	name: "FtsrgSlideMaster",
	slot: "Logo"
})({ flexShrink: 0 }), Se = o("h1", {
	name: "FtsrgContentMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0,
	"& strong": {
		color: e.palette.primary.main,
		fontWeight: "inherit"
	}
})), Ce = o("div", {
	name: "FtsrgContentMaster",
	slot: "Body"
})(({ theme: e }) => ({
	flex: 1,
	minHeight: 0,
	"& :is(p, ul, ol, dl, blockquote, pre, figure, table)": { marginBlock: e.spacing(1.5) },
	"& li > :is(p, ul, ol, dl, blockquote, pre, figure, table)": { marginBlock: 0 },
	"& > :not(style):not(:not(style) ~ *)": { marginTop: 0 },
	"& > :last-child": { marginBottom: 0 },
	"& li li": {
		fontSize: 24,
		listStyleType: "none",
		"&::before": {
			position: "absolute",
			content: "\"–\"",
			marginLeft: "-1.1em"
		}
	},
	"& li li li": {
		fontSize: 20,
		listStyleType: "circle",
		"&::before": {
			content: "\"\"",
			display: "none"
		}
	},
	"& li li li li": { listStyleType: "square" },
	"& strong": { color: e.palette.primary.main },
	"& a": {
		color: e.palette.primary.dark,
		fontWeight: e.typography.fontWeightMedium,
		textDecorationLine: "underline",
		textDecorationColor: e.palette.primary.main,
		textDecorationThickness: "0.08em",
		textUnderlineOffset: "0.14em",
		"&:hover": {
			color: e.palette.primary.main,
			backgroundColor: a(e.palette.primary.main, .08)
		},
		"&:focus-visible": {
			outline: `2px solid ${e.palette.primary.main}`,
			outlineOffset: "0.15em",
			borderRadius: e.shape.borderRadius
		}
	}
}));
function z({ className: e, children: t, showSlideNumber: n = !0 }) {
	let { index: r } = i(), { palette: a } = s();
	return /* @__PURE__ */ d(ge, {
		className: e,
		children: [/* @__PURE__ */ u(_e, { children: t }), /* @__PURE__ */ d(ve, { children: [
			/* @__PURE__ */ u(ye, {}),
			n && /* @__PURE__ */ u(be, { children: r + 1 }),
			/* @__PURE__ */ u(xe, { footerColor: a.neutral.main })
		] })]
	});
}
function we(e) {
	let { title: t, children: n, ...r } = c({
		props: e,
		name: "FtsrgContentMaster"
	});
	return /* @__PURE__ */ d(z, {
		...r,
		children: [t !== void 0 && /* @__PURE__ */ u(Se, { children: t }), /* @__PURE__ */ u(Ce, { children: n })]
	});
}
var Te = f, B = {
	x: .4,
	y: .5,
	inner: "#1a191a",
	outer: "#2d2f2e"
}, Ee = o("section", {
	name: "FtsrgTitleMaster",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%",
	backgroundImage: `url(${re})`,
	backgroundSize: "contain",
	backgroundPosition: "top",
	backgroundRepeat: "no-repeat"
}), De = o("main", {
	name: "FtsrgTitleMaster",
	slot: "Body"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginTop: 80,
	width: "100%",
	height: 480,
	color: e.palette.primary.contrastText,
	backgroundImage: `url(${f}), radial-gradient(circle at ${String(B.x * 100)}% ${String(B.y * 100)}%, ${B.inner} 0%, ${B.outer} 100%)`,
	backgroundSize: "contain",
	gap: e.spacing(3),
	padding: e.spacing(0, 16)
})), Oe = o("h1", {
	name: "FtsrgTitleMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), ke = o("div", {
	name: "FtsrgTitleMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(1.5),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function Ae(e) {
	let { title: t, children: n } = c({
		props: e,
		name: "FtsrgTitleMaster"
	});
	return /* @__PURE__ */ u(Ee, { children: /* @__PURE__ */ d(De, { children: [t !== void 0 && /* @__PURE__ */ u(Oe, { children: t }), n !== void 0 && /* @__PURE__ */ u(ke, { children: n })] }) });
}
// src/master/FtsrgSectionMaster.tsx
var V = 320, H = (t - V) / 2, U = H + V, W = n / 2 - 6, G = 4, K = H + G / 2, q = U - G / 2, J = G * Math.hypot(1, p), Y = n / 2 + 6 + J / 2, X = W - J / 2;
function Z(e, n) {
	return e + (t / 2 - n) * p;
}
var je = [
	[0, H],
	[Z(W, H), H],
	[Z(W, U), U],
	[0, U]
].join(" "), Me = [
	[-4, K],
	[Z(X, K), K],
	[Z(X, q), q],
	[-4, q]
].join(" "), Ne = [
	[Z(Y, K), K],
	[n + G, K],
	[n + G, q],
	[Z(Y, q), q]
].join(" "), Pe = o("svg", {
	name: "FtsrgSectionMaster",
	slot: "Background"
})({
	position: "absolute",
	top: 0,
	left: 0,
	width: n,
	height: t,
	overflow: "visible",
	pointerEvents: "none"
}), Fe = o("div", {
	name: "FtsrgSectionMaster",
	slot: "Block",
	shouldForwardProp: (e) => e !== "filled"
})(({ theme: e, filled: t }) => ({
	position: "absolute",
	top: H,
	left: 0,
	width: t ? Z(W, U) : Z(W - J, U - G),
	height: V,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(0, 8),
	color: t ? e.palette.primary.contrastText : void 0
})), Q = Z(Y + J / 2, H + G), Ie = o("div", {
	name: "FtsrgSectionMaster",
	slot: "Aside"
})(({ theme: e }) => ({
	position: "absolute",
	top: H + G,
	left: Q,
	right: 0,
	height: 312,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(1.5),
	padding: e.spacing(0, 8, 0, 4),
	"& > *": { margin: 0 }
})), Le = o("h1", {
	name: "FtsrgSectionMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0
})), Re = o("div", {
	name: "FtsrgSectionMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function ze({ filled: e }) {
	let { palette: r } = s();
	return /* @__PURE__ */ d(Pe, {
		viewBox: `0 0 ${String(n)} ${String(t)}`,
		children: [e ? /* @__PURE__ */ u(Be, {}) : /* @__PURE__ */ u("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: G,
			points: Me
		}), /* @__PURE__ */ u("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: G,
			points: Ne
		})]
	});
}
function Be() {
	let e = l(), t = l(), r = n * B.x, i = 80 + 480 * B.y, a = Math.hypot(Math.max(r, n - r), Math.max(i - 80, 560 - i));
	return /* @__PURE__ */ d(ne, { children: [/* @__PURE__ */ d("defs", { children: [/* @__PURE__ */ d("radialGradient", {
		id: t,
		gradientUnits: "userSpaceOnUse",
		cx: r,
		cy: i,
		r: a,
		children: [/* @__PURE__ */ u("stop", {
			offset: "0",
			stopColor: B.inner
		}), /* @__PURE__ */ u("stop", {
			offset: "1",
			stopColor: B.outer
		})]
	}), /* @__PURE__ */ u("clipPath", {
		id: e,
		children: /* @__PURE__ */ u("polygon", { points: je })
	})] }), /* @__PURE__ */ d("g", {
		clipPath: `url(#${e})`,
		children: [/* @__PURE__ */ u("rect", {
			y: 80,
			width: n,
			height: 480,
			fill: `url(#${t})`
		}), /* @__PURE__ */ u("image", {
			href: Te,
			y: 80,
			width: n,
			height: 480,
			preserveAspectRatio: "xMidYMid meet"
		})]
	})] });
}
function Ve(t) {
	return te(t) && (t.type === e || t.type === "p");
}
function He(e) {
	let t = ee.toArray(e).filter((e) => typeof e != "string" || e.trim() !== "");
	if (t.length > 0 && Ve(t[0])) {
		let [e, ...n] = t;
		return [e, n];
	}
	return [void 0, t];
}
function $({ title: e, children: t, filled: n, ...r }) {
	let [i, a] = He(t);
	return /* @__PURE__ */ d(z, {
		...r,
		children: [
			/* @__PURE__ */ u(ze, { filled: n }),
			/* @__PURE__ */ d(Fe, {
				filled: n,
				children: [e !== void 0 && /* @__PURE__ */ u(Le, { children: e }), i !== void 0 && /* @__PURE__ */ u(Re, { children: i })]
			}),
			a.length > 0 && /* @__PURE__ */ u(Ie, { children: a })
		]
	});
}
function Ue(e) {
	let t = c({
		props: e,
		name: "FtsrgSectionMaster"
	});
	return /* @__PURE__ */ u($, {
		...t,
		filled: !0
	});
}
function We(e) {
	let t = c({
		props: e,
		name: "FtsrgSubsectionMaster"
	});
	return /* @__PURE__ */ u($, {
		...t,
		filled: !1
	});
}
// src/index.ts
var Ge = r({
	palette: {
		primary: {
			main: "#1446a0",
			dark: "#0a2350",
			light: "#8aaef0"
		},
		secondary: {
			main: "#522b47",
			dark: "#291623",
			light: "#ca9abc"
		},
		error: {
			main: "#960018",
			dark: "#4b000c",
			light: "#ffb7c3"
		},
		warning: {
			main: "#fb8b24",
			dark: "#8d4503",
			light: "#fdd1a7"
		},
		info: {
			main: "#4472c4",
			dark: "#203864",
			light: "#b4c7e7"
		},
		success: {
			main: "#70ad47",
			dark: "#384723",
			light: "#c5e0b4"
		},
		neutral: {
			main: "#a7a8a7",
			dark: "#535453",
			light: "#dcdcdc",
			contrastText: "#000"
		}
	},
	typography: {
		fontFamily: "\"Open Sans Variable\", \"Open Sans\", sans-serif",
		fontWeightMedium: 600,
		fontWeightBold: 700,
		allVariants: {
			letterSpacing: "inherit",
			textTransform: "inherit"
		},
		h1: {
			fontSize: 64,
			fontWeight: 800,
			letterSpacing: "-2%"
		},
		h2: {
			fontSize: 56,
			fontWeight: 800,
			letterSpacing: "-2%"
		},
		h3: { fontWeight: 700 },
		h4: { fontWeight: 700 },
		h5: { fontWeight: 700 },
		h6: { fontWeight: 700 }
	},
	master: {
		title: Ae,
		content: we,
		section: Ue,
		subsection: We
	},
	slideTransition: { duration: 0 },
	stepTransition: { duration: 0 },
	components: {
		SeminarCallout: { styleOverrides: {
			root: ({ ownerState: e, theme: t }) => e.variant === "filled" ? {
				"--SeminarCallout-outline": "var(--SeminarCallout-palette-dark)",
				"--SeminarCallout-outline-width": 2
			} : {
				"--SeminarCallout-color": t.palette.text.primary,
				...e.color === "neutral" ? { "--SeminarCallout-outline": t.palette.neutral.dark } : { "& .SeminarCalloutTitle-root": { color: "var(--SeminarCallout-palette-main)" } }
			},
			content: ({ ownerState: e }) => e.variant === "filled" ? { "& strong": { color: "inherit" } } : {}
		} },
		SeminarCalloutTitle: { styleOverrides: { root: ({ theme: e }) => ({ marginBottom: e.spacing(1.5) }) } },
		SeminarColumn: { styleOverrides: { heading: ({ theme: e }) => ({
			fontSize: 32,
			color: e.palette.primary.main,
			marginBottom: e.spacing(1.5)
		}) } }
	}
});
export { Ge as default };
