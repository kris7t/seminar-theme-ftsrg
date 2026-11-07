import "@fontsource-variable/open-sans/wght.css";
import "@fontsource-variable/open-sans/wght-italic.css";
import { Paragraph as e, SLIDE_HEIGHT as t, SLIDE_WIDTH as n, createSlideTheme as r, useSlideView as i } from "@seminar/core";
import { styled as a } from "@mui/material/styles";
import { useThemeProps as o } from "@mui/material";
import { Children as ee, isValidElement as te, useId as s } from "react";
import { Fragment as ne, jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "../assets/title-background.avif";
import re from "../assets/title-background-top.avif";
var d = Math.tan(21.4 * Math.PI / 180), ie = [
	"m 22.389707,33.948443 q -1.197623,0 -1.996038,0.68954 -0.798416,0.689541 -0.90729,2.03233 l -0.03629,0.580665 h 4.391284 l -0.362916,4.863075 H 19.050879 L 17.962132,55.687111 H 11.35706 L 12.445808,42.114053 H 8.9981065 l 0.3992076,-4.863075 h 3.4477019 l 0.03629,-0.653248 q 0.290332,-3.738035 2.395245,-5.842948 2.141205,-2.104913 5.879239,-2.104913 2.141205,0 3.375119,0.508083 l -0.362916,5.044532 Q 23.15183,33.948443 22.389707,33.948443 Z",
	"m 32.043255,48.029583 q -0.07258,1.306498 0.616957,1.996038 0.725832,0.653249 1.887163,0.653249 0.689541,0 1.81458,-0.254041 l -0.435499,5.008241 q -1.342789,0.544374 -3.483994,0.544374 -3.447701,0 -5.22599,-1.81458 -1.778288,-1.850872 -1.778288,-5.153407 0,-0.653249 0.03629,-0.979874 l 0.471791,-5.91553 h -3.447702 l 0.399208,-4.863075 h 3.447702 l 0.326624,-4.173533 6.750238,-2.104913 -0.508083,6.278446 h 4.427575 l -0.362916,4.863075 h -4.463866 z",
	"m 46.124378,55.977444 q -2.50412,0 -4.645325,-0.508083 -2.141204,-0.544374 -4.246117,-1.705705 l 2.068622,-4.463867 q 1.524247,1.016165 3.375118,1.596831 1.850872,0.544374 3.592869,0.544374 1.197622,0 1.741996,-0.290333 0.580666,-0.326624 0.580666,-0.798415 0,-0.616957 -0.798415,-0.979873 -0.762124,-0.362916 -2.431537,-0.798416 -2.03233,-0.544374 -3.375119,-1.088748 -1.306498,-0.580665 -2.286371,-1.669413 -0.979873,-1.088748 -0.979873,-2.867036 0,-1.81458 1.052456,-3.229953 1.052457,-1.415372 2.93962,-2.177496 1.923455,-0.798415 4.391283,-0.798415 2.104913,0 4.173534,0.616957 2.104913,0.580666 3.556577,1.596831 l -1.996038,4.354992 q -1.415372,-0.943582 -2.939619,-1.451664 -1.524248,-0.508083 -2.93962,-0.508083 -1.197623,0 -1.81458,0.326625 -0.616957,0.290332 -0.616957,0.762123 0,0.653249 0.798415,1.052457 0.798415,0.362916 2.50412,0.834706 1.959747,0.544374 3.266244,1.12504 1.342789,0.544374 2.286371,1.669413 0.979873,1.088748 0.979873,2.830745 0,2.867037 -2.213787,4.463867 -2.177496,1.560539 -6.024406,1.560539 z",
	"m 69.859062,36.815479 q 1.37908,0 2.104912,0.399208 l -0.435499,5.988114 q -1.451664,-0.725832 -3.048494,-0.725832 -1.996038,0 -3.121078,0.90729 -1.125039,0.90729 -1.306497,3.048494 l -0.725832,9.254358 h -6.56878 l 1.052457,-13.137559 q 0.145166,-2.540412 0.145166,-3.810618 0,-1.016165 -0.03629,-1.487956 h 6.205863 l 0.108875,2.612996 q 0.762123,-1.415373 2.286371,-2.213788 1.560538,-0.834707 3.338826,-0.834707 z",
	"m 93.049369,37.250978 -1.379081,17.020761 q -0.362916,4.971949 -3.157369,7.258319 -2.758162,2.286371 -7.838985,2.286371 -4.645325,0 -8.056736,-1.560539 l 1.379081,-4.863074 q 3.193661,1.59683 6.931696,1.59683 1.923454,0 2.975911,-0.943581 1.052456,-0.90729 1.233914,-2.975911 l 0.145167,-1.996038 q -1.923455,2.104913 -5.44374,2.104913 -2.322663,0 -4.137243,-1.052457 -1.778288,-1.052456 -2.794453,-2.975911 -0.979873,-1.923455 -0.979873,-4.463867 0,-2.794453 1.12504,-5.044532 1.125039,-2.286371 3.157369,-3.592868 2.032329,-1.306498 4.645325,-1.306498 3.592868,0 5.552614,2.540412 l 0.145167,-2.03233 z M 82.125597,50.279663 q 1.741997,0 2.758162,-1.233915 1.052456,-1.233914 1.052456,-3.266244 0,-2.068621 -0.979873,-3.084786 -0.943581,-1.016164 -2.72187,-1.016164 -1.741996,0 -2.794453,1.233914 -1.016165,1.233914 -1.016165,3.41141 0,1.850872 0.979874,2.903328 0.979873,1.052457 2.721869,1.052457 z",
	"m 22.645,66.879 c 0,3.598 -2.918,6.519 -6.52,6.519 -3.602,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.918,-6.524 6.52,-6.524 3.602,0 6.52,2.922 6.52,6.524 z",
	"m 44.859,66.879 c 0,3.598 -2.921,6.519 -6.519,6.519 -3.602,0 -6.524,-2.921 -6.524,-6.519 0,-3.602 2.922,-6.524 6.524,-6.524 3.598,0 6.519,2.922 6.519,6.524 z",
	"m 67.074,66.879 c 0,3.598 -2.922,6.519 -6.523,6.519 -3.598,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.922,-6.524 6.52,-6.524 3.601,0 6.523,2.922 6.523,6.524 z"
], f = 84.051, p = 44.748, ae = `8.998 28.65 ${f} ${p}`;
function m() {
	return /* @__PURE__ */ c("g", {
		fill: "currentColor",
		children: ie.map((e) => /* @__PURE__ */ c("path", { d: e }, e))
	});
}
var h = 48, g = 107.6, _ = h * d, v = 5.96, y = h - 2 * v, b = f / p * y, oe = 61.599999999999994 - b / 2, x = 2, S = -12, C = g - S, se = "#283c88", ce = "#5f2c60", w = 64.2, T = 61.15, le = T * Math.cos(w * Math.PI / 180), ue = T * Math.sin(w * Math.PI / 180), de = "#9f172d", E = T, fe = E * Math.cos(w * Math.PI / 180), pe = E * Math.sin(w * Math.PI / 180), me = E / Math.cos(w * Math.PI / 180), he = [
	[_, 0],
	[109.6, 0],
	[109.6, 50],
	[-2 * d, 50]
].join(" "), D = 2, ge = 1, O = D * Math.hypot(1, d), k = [
	[_ * (1 - D / h) + O, D],
	[105.6, D],
	[105.6, 46],
	[D / h * _ + O, 46]
].join(" "), A = a("svg", {
	name: "FtsrgCornerLogo",
	slot: "Root"
})({
	display: "block",
	height: h,
	overflow: "visible",
	aspectRatio: `${C} / ${h}`
}), j = "https://ftsrg.mit.bme.hu", M = a("a", {
	name: "FtsrgCornerLogo",
	slot: "Badge"
})({
	outline: "none",
	"&:hover linearGradient, &:focus-visible linearGradient": { transform: `translateX(${-me}px)` },
	"&:focus-visible > polygon": { visibility: "visible" }
}), N = a("polygon", {
	name: "FtsrgCornerLogo",
	slot: "FocusRing"
})({
	visibility: "hidden",
	fill: "none",
	stroke: "#fff"
}), P = a("linearGradient", {
	name: "FtsrgCornerLogo",
	slot: "Gradient"
})(({ theme: e }) => ({ "@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("transform", {
	duration: e.transitions.duration.standard,
	easing: e.transitions.easing.easeInOut
}) } }));
function F({ className: e, footerColor: t }) {
	let n = s();
	return /* @__PURE__ */ l(A, {
		className: e,
		viewBox: `${S} 0 ${C} ${h}`,
		children: [/* @__PURE__ */ c("polygon", {
			fill: t,
			points: [
				[S - x, 0],
				[_ - 12, 0],
				[-12, h],
				[S - x, h]
			].join(" ")
		}), /* @__PURE__ */ l(M, {
			href: j,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "ftsrg",
			children: [
				/* @__PURE__ */ c("defs", { children: /* @__PURE__ */ l(P, {
					id: n,
					gradientUnits: "userSpaceOnUse",
					x1: g - le,
					y1: h - ue,
					x2: g + fe,
					y2: h + pe,
					children: [
						/* @__PURE__ */ c("stop", {
							offset: "0",
							stopColor: se
						}),
						/* @__PURE__ */ c("stop", {
							offset: T / 122.3,
							stopColor: ce
						}),
						/* @__PURE__ */ c("stop", {
							offset: "1",
							stopColor: de
						})
					]
				}) }),
				/* @__PURE__ */ c("polygon", {
					fill: `url(#${n})`,
					points: he
				}),
				/* @__PURE__ */ c("svg", {
					x: oe,
					y: v,
					width: b,
					height: y,
					viewBox: ae,
					color: "#fff",
					children: /* @__PURE__ */ c(m, {})
				}),
				/* @__PURE__ */ c(N, {
					strokeWidth: ge,
					points: k
				})
			]
		})]
	});
}
// src/master/FtsrgSlideMaster.tsx
var I = "#a7a8a7", L = a("section", {
	name: "FtsrgSlideMaster",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%"
}), _e = a("main", {
	name: "FtsrgSlideMaster",
	slot: "Content"
})(({ theme: e }) => ({
	position: "relative",
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(2),
	padding: e.spacing(4, 8)
})), ve = a("footer", {
	name: "FtsrgSlideMaster",
	slot: "Footer"
})(({ theme: e }) => ({
	position: "relative",
	display: "flex",
	height: e.spacing(6)
})), ye = a("div", {
	name: "FtsrgSlideMaster",
	slot: "FooterBackground"
})({
	flexGrow: 1,
	background: I
}), be = a("div", {
	name: "FtsrgSlideNumber",
	slot: "Footer"
})({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: 18
}), xe = a(F, {
	name: "FtsrgSlideMaster",
	slot: "Logo"
})({ flexShrink: 0 }), Se = a("h1", {
	name: "FtsrgContentMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0
})), Ce = a("div", {
	name: "FtsrgContentMaster",
	slot: "Body"
})({
	flex: 1,
	minHeight: 0
});
function R({ className: e, children: t, showSlideNumber: n = !0 }) {
	let { index: r } = i();
	return /* @__PURE__ */ l(L, {
		className: e,
		children: [/* @__PURE__ */ c(_e, { children: t }), /* @__PURE__ */ l(ve, { children: [
			/* @__PURE__ */ c(ye, {}),
			n && /* @__PURE__ */ c(be, { children: r + 1 }),
			/* @__PURE__ */ c(xe, { footerColor: I })
		] })]
	});
}
function we(e) {
	let { title: t, children: n, ...r } = o({
		props: e,
		name: "FtsrgContentMaster"
	});
	return /* @__PURE__ */ l(R, {
		...r,
		children: [t !== void 0 && /* @__PURE__ */ c(Se, { children: t }), /* @__PURE__ */ c(Ce, { children: n })]
	});
}
var Te = u, z = {
	x: .4,
	y: .5,
	inner: "#1a191a",
	outer: "#2d2f2e"
}, Ee = a("section", {
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
}), De = a("main", {
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
	backgroundImage: `url(${u}), radial-gradient(circle at ${z.x * 100}% ${z.y * 100}%, ${z.inner} 0%, ${z.outer} 100%)`,
	backgroundSize: "contain",
	gap: e.spacing(4),
	padding: e.spacing(0, 16)
})), Oe = a("h1", {
	name: "FtsrgTitleMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), ke = a("div", {
	name: "FtsrgTitleMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(4),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function Ae(e) {
	let { title: t, children: n } = o({
		props: e,
		name: "FtsrgTitleMaster"
	});
	return /* @__PURE__ */ c(Ee, { children: /* @__PURE__ */ l(De, { children: [t && /* @__PURE__ */ c(Oe, { children: t }), n && /* @__PURE__ */ c(ke, { children: n })] }) });
}
// src/master/FtsrgSectionMaster.tsx
var B = 320, V = (t - B) / 2, H = V + B, U = n / 2 - 6, W = 4, G = "#a7a8a7", K = V + W / 2, q = H - W / 2, J = W * Math.hypot(1, d), Y = n / 2 + 6 + J / 2, X = U - J / 2;
function Z(e, n) {
	return e + (t / 2 - n) * d;
}
var je = [
	[0, V],
	[Z(U, V), V],
	[Z(U, H), H],
	[0, H]
].join(" "), Me = [
	[-4, K],
	[Z(X, K), K],
	[Z(X, q), q],
	[-4, q]
].join(" "), Ne = [
	[Z(Y, K), K],
	[n + W, K],
	[n + W, q],
	[Z(Y, q), q]
].join(" "), Pe = a("svg", {
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
}), Fe = a("div", {
	name: "FtsrgSectionMaster",
	slot: "Block",
	shouldForwardProp: (e) => e !== "filled"
})(({ theme: e, filled: t }) => ({
	position: "absolute",
	top: V,
	left: 0,
	width: t ? Z(U, H) : Z(U - J, H - W),
	height: B,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(4),
	padding: e.spacing(0, 8),
	color: t ? e.palette.primary.contrastText : void 0
})), Q = Z(Y + J / 2, V + W), Ie = a("div", {
	name: "FtsrgSectionMaster",
	slot: "Aside"
})(({ theme: e }) => ({
	position: "absolute",
	top: V + W,
	left: Q,
	right: 0,
	height: 312,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(2),
	padding: e.spacing(0, 8, 0, 4),
	"& > *": { margin: 0 }
})), Le = a("h1", {
	name: "FtsrgSectionMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0
})), Re = a("div", {
	name: "FtsrgSectionMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function ze({ filled: e }) {
	return /* @__PURE__ */ l(Pe, {
		viewBox: `0 0 ${n} ${t}`,
		children: [e ? /* @__PURE__ */ c(Be, {}) : /* @__PURE__ */ c("polygon", {
			fill: "none",
			stroke: G,
			strokeWidth: W,
			points: Me
		}), /* @__PURE__ */ c("polygon", {
			fill: "none",
			stroke: G,
			strokeWidth: W,
			points: Ne
		})]
	});
}
function Be() {
	let e = s(), t = s(), r = n * z.x, i = 80 + 480 * z.y, a = Math.hypot(Math.max(r, n - r), Math.max(i - 80, 560 - i));
	return /* @__PURE__ */ l(ne, { children: [/* @__PURE__ */ l("defs", { children: [/* @__PURE__ */ l("radialGradient", {
		id: t,
		gradientUnits: "userSpaceOnUse",
		cx: r,
		cy: i,
		r: a,
		children: [/* @__PURE__ */ c("stop", {
			offset: "0",
			stopColor: z.inner
		}), /* @__PURE__ */ c("stop", {
			offset: "1",
			stopColor: z.outer
		})]
	}), /* @__PURE__ */ c("clipPath", {
		id: e,
		children: /* @__PURE__ */ c("polygon", { points: je })
	})] }), /* @__PURE__ */ l("g", {
		clipPath: `url(#${e})`,
		children: [/* @__PURE__ */ c("rect", {
			y: 80,
			width: n,
			height: 480,
			fill: `url(#${t})`
		}), /* @__PURE__ */ c("image", {
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
	return /* @__PURE__ */ l(R, {
		...r,
		children: [
			/* @__PURE__ */ c(ze, { filled: n }),
			/* @__PURE__ */ l(Fe, {
				filled: n,
				children: [e !== void 0 && /* @__PURE__ */ c(Le, { children: e }), i !== void 0 && /* @__PURE__ */ c(Re, { children: i })]
			}),
			a.length > 0 && /* @__PURE__ */ c(Ie, { children: a })
		]
	});
}
function Ue(e) {
	let t = o({
		props: e,
		name: "FtsrgSectionMaster"
	});
	return /* @__PURE__ */ c($, {
		...t,
		filled: !0
	});
}
function We(e) {
	let t = o({
		props: e,
		name: "FtsrgSubsectionMaster"
	});
	return /* @__PURE__ */ c($, {
		...t,
		filled: !1
	});
}
// src/index.ts
var Ge = r({
	palette: { primary: { main: "#00639b" } },
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
	stepTransition: { duration: 0 }
});
export { Ge as default };
