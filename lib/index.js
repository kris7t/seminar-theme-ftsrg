import "@fontsource-variable/open-sans/wght.css";
import "@fontsource-variable/open-sans/wght-italic.css";
import { Paragraph as e, SLIDE_HEIGHT as t, SLIDE_WIDTH as n, createSlideTheme as r, useDeck as i, useSlideView as a } from "@seminar/core";
import { alpha as o, styled as s, useTheme as c } from "@mui/material/styles";
import { generateUtilityClasses as l, useThemeProps as u } from "@mui/material";
import { Children as d, isValidElement as f, useEffect as p, useId as m, useRef as h, useState as ee } from "react";
import { Fragment as te, jsx as g, jsxs as _ } from "react/jsx-runtime";
import ne from "../assets/title-background.avif";
import re from "../assets/title-background-top.avif";
import "../assets/mulish-800-italic-subset.css";
import ie from "../assets/bme-logo.avif";
import ae from "../assets/vik-logo.avif";
import oe from "../assets/vik-label-en.avif";
import se from "../assets/vik-label-hu.avif";
import ce from "../assets/mit-logo.avif";
import le from "../assets/mit-label-en.avif";
import ue from "../assets/mit-label-hu.avif";
import de from "@mui/icons-material/Facebook";
import fe from "@mui/icons-material/LinkedIn";
import pe from "@mui/material/SvgIcon";
var v = Math.tan(21.4 * Math.PI / 180), me = [
	"m 11.396,5.988 c -0.532,0.46 -0.834,1.137 -0.907,2.032 l -0.037,0.581 h 4.391 l -0.363,4.863 H 10.053 L 8.965,27.038 H 2.36 l 1.088,-13.573 H 0 l 0.4,-4.863 h 3.448 l 0.036,-0.654 c 0.194,-2.491 0.998,-4.439 2.414,-5.843 1.415,-1.403 3.369,-2.105 5.861,-2.105 1.427,0 2.553,0.169 3.375,0.508 l -0.363,5.045 c -0.677,-0.169 -1.27,-0.254 -1.778,-0.254 -0.799,0 -1.464,0.23 -1.996,0.69",
	"m 23.772,19.38 c -0.048,0.871 0.163,1.53 0.635,1.978 0.472,0.448 1.094,0.671 1.869,0.671 0.46,0 1.064,-0.084 1.815,-0.254 l -0.436,5.008 c -0.895,0.363 -2.057,0.544 -3.484,0.544 -2.299,0 -4.041,-0.611 -5.226,-1.832 -1.186,-1.221 -1.778,-2.934 -1.778,-5.135 0,-0.436 0.012,-0.763 0.036,-0.98 l 0.472,-5.916 h -3.448 l 0.399,-4.863 h 3.448 l 0.326,-4.174 6.75,-2.104 -0.508,6.278 H 29.07 l -0.363,4.863 h -4.464 l -0.472,5.916",
	"m 33.207,26.802 c -1.428,-0.351 -2.843,-0.913 -4.246,-1.688 l 2.069,-4.464 c 1.016,0.677 2.141,1.204 3.375,1.579 1.234,0.376 2.432,0.563 3.593,0.563 0.798,0 1.385,-0.102 1.76,-0.308 0.375,-0.205 0.563,-0.466 0.563,-0.781 0,-0.411 -0.26,-0.738 -0.78,-0.98 -0.52,-0.241 -1.337,-0.508 -2.449,-0.798 -1.355,-0.362 -2.475,-0.731 -3.358,-1.107 -0.883,-0.374 -1.65,-0.925 -2.304,-1.651 -0.653,-0.726 -0.98,-1.682 -0.98,-2.867 0,-1.209 0.351,-2.286 1.053,-3.23 0.701,-0.944 1.687,-1.675 2.957,-2.196 1.27,-0.52 2.728,-0.781 4.373,-0.781 1.403,0 2.801,0.2 4.192,0.599 1.391,0.4 2.57,0.938 3.538,1.615 l -1.996,4.355 c -0.943,-0.629 -1.924,-1.112 -2.94,-1.452 -1.016,-0.338 -1.996,-0.507 -2.94,-0.507 -0.798,0 -1.403,0.103 -1.815,0.308 -0.412,0.206 -0.617,0.466 -0.617,0.78 0,0.436 0.266,0.781 0.798,1.034 0.532,0.254 1.367,0.539 2.505,0.853 1.307,0.363 2.4,0.732 3.284,1.107 0.883,0.376 1.645,0.931 2.287,1.669 0.64,0.738 0.961,1.687 0.961,2.849 0,1.911 -0.732,3.393 -2.196,4.445 -1.464,1.053 -3.478,1.579 -6.042,1.579 -1.669,0 -3.218,-0.176 -4.645,-0.526",
	"m 62.24,8.565 -0.436,5.988 c -0.968,-0.484 -1.984,-0.726 -3.049,-0.726 -1.331,0 -2.372,0.303 -3.121,0.908 -0.751,0.605 -1.186,1.621 -1.307,3.049 l -0.726,9.254 h -6.568 l 1.052,-13.138 c 0.097,-1.693 0.145,-2.964 0.145,-3.811 0,-0.677 -0.013,-1.174 -0.036,-1.488 h 6.205 l 0.109,2.613 c 0.508,-0.944 1.276,-1.688 2.305,-2.232 1.028,-0.545 2.135,-0.817 3.321,-0.817 0.919,0 1.621,0.134 2.105,0.399",
	"m 75.903,20.396 c 0.69,-0.822 1.034,-1.911 1.034,-3.267 0,-1.379 -0.321,-2.407 -0.962,-3.084 -0.641,-0.677 -1.555,-1.017 -2.74,-1.017 -1.161,0 -2.087,0.412 -2.776,1.234 -0.689,0.823 -1.034,1.96 -1.034,3.412 0,1.234 0.327,2.202 0.98,2.904 0.653,0.702 1.56,1.052 2.722,1.052 1.161,0 2.087,-0.411 2.776,-1.234 z m 8.148,-11.795 -1.379,17.021 c -0.242,3.314 -1.288,5.734 -3.139,7.258 -1.851,1.524 -4.47,2.286 -7.858,2.286 -3.098,0 -5.783,-0.521 -8.057,-1.56 l 1.379,-4.863 c 2.128,1.064 4.439,1.597 6.932,1.597 1.282,0 2.274,-0.309 2.975,-0.925 0.702,-0.617 1.113,-1.615 1.234,-2.994 l 0.145,-1.996 c -1.283,1.403 -3.097,2.104 -5.444,2.104 -1.549,0 -2.921,-0.35 -4.119,-1.052 -1.197,-0.702 -2.13,-1.694 -2.794,-2.976 -0.666,-1.282 -0.998,-2.77 -0.998,-4.464 0,-1.862 0.376,-3.55 1.126,-5.063 0.749,-1.512 1.802,-2.704 3.157,-3.575 1.355,-0.871 2.903,-1.307 4.646,-1.307 2.395,0 4.246,0.847 5.552,2.541 l 0.145,-2.032 h 6.496"
], he = "m 14.502,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525", ge = ["m 36.346,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525", "m 51.663,41.687 c -1.914,0 -3.47,-1.557 -3.47,-3.47 0,-1.913 1.556,-3.469 3.47,-3.469 1.913,0 3.469,1.556 3.469,3.469 0,1.914 -1.556,3.47 -3.469,3.47 z m 0,-10.203 c -3.713,0 -6.734,3.02 -6.734,6.732 0,3.713 3.021,6.733 6.734,6.733 3.713,0 6.733,-3.021 6.733,-6.733 0,-3.712 -3.02,-6.732 -6.733,-6.732"], _e = 84.051, ve = 44.95, y = `0 0 ${String(_e)} ${String(ve)}`, b = "#100f0d", ye = "#8e162b";
function x({ accentColor: e = "currentColor" }) {
	return /* @__PURE__ */ _("g", {
		fill: "currentColor",
		children: [
			me.map((e) => /* @__PURE__ */ g("path", { d: e }, e)),
			/* @__PURE__ */ g("path", {
				d: he,
				fill: e
			}),
			ge.map((e) => /* @__PURE__ */ g("path", { d: e }, e))
		]
	});
}
function be({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: y,
		role: e,
		"aria-label": "ftsrg",
		...t,
		children: /* @__PURE__ */ g(x, {})
	});
}
function xe({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: y,
		role: e,
		"aria-label": "ftsrg",
		color: b,
		...t,
		children: /* @__PURE__ */ g(x, { accentColor: ye })
	});
}
// src/master/FtsrgCornerLogo.tsx
var S = 46, C = 103.12, w = S * v, Se = 5.99, Ce = 34.41, we = _e / ve * Ce, Te = 59.120000000000005 - we / 2, T = 2, E = -12, D = C - E, Ee = "#283c88", De = "#5f2c60", O = 64.2, k = 58.6, Oe = k * Math.cos(O * Math.PI / 180), ke = k * Math.sin(O * Math.PI / 180), Ae = "#9f172d", A = k, je = A * Math.cos(O * Math.PI / 180), Me = A * Math.sin(O * Math.PI / 180), Ne = A / Math.cos(O * Math.PI / 180), Pe = [
	[w, 0],
	[105.12, 0],
	[105.12, 48],
	[-2 * v, 48]
].join(" "), j = 2, Fe = 1, M = j * Math.hypot(1, v), Ie = [
	[w * (1 - j / S) + M, j],
	[101.12, j],
	[101.12, 44],
	[j / S * w + M, 44]
].join(" "), Le = s("svg", {
	name: "FtsrgCornerLogo",
	slot: "Root"
})({
	display: "block",
	height: S,
	overflow: "visible",
	aspectRatio: `${String(D)} / ${String(S)}`
}), Re = "https://ftsrg.mit.bme.hu", ze = s("a", {
	name: "FtsrgCornerLogo",
	slot: "Badge",
	shouldForwardProp: (e) => e !== "interactive"
})(({ interactive: e }) => ({
	outline: "none",
	...e && { "&:hover linearGradient, &:focus-visible linearGradient": { transform: `translateX(${String(-Ne)}px)` } },
	"&:focus-visible > polygon": { visibility: "visible" }
})), Be = s("polygon", {
	name: "FtsrgCornerLogo",
	slot: "FocusRing"
})({
	visibility: "hidden",
	fill: "none",
	stroke: "#fff"
}), Ve = s("linearGradient", {
	name: "FtsrgCornerLogo",
	slot: "Gradient"
})(({ theme: e }) => ({ "@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("transform", {
	duration: e.transitions.duration.standard,
	easing: e.transitions.easing.easeInOut
}) } }));
function He({ className: e, footerColor: t }) {
	let n = m(), { interactive: r } = a();
	return /* @__PURE__ */ _(Le, {
		className: e,
		viewBox: `${String(E)} 0 ${String(D)} ${String(S)}`,
		children: [/* @__PURE__ */ g("polygon", {
			fill: t,
			points: [
				[E - T, 0],
				[w - 12, 0],
				[-12, S],
				[E - T, S]
			].join(" ")
		}), /* @__PURE__ */ _(ze, {
			interactive: r,
			href: Re,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "ftsrg",
			children: [
				/* @__PURE__ */ g("defs", { children: /* @__PURE__ */ _(Ve, {
					id: n,
					gradientUnits: "userSpaceOnUse",
					x1: C - Oe,
					y1: S - ke,
					x2: C + je,
					y2: S + Me,
					children: [
						/* @__PURE__ */ g("stop", {
							offset: "0",
							stopColor: Ee
						}),
						/* @__PURE__ */ g("stop", {
							offset: k / 117.2,
							stopColor: De
						}),
						/* @__PURE__ */ g("stop", {
							offset: "1",
							stopColor: Ae
						})
					]
				}) }),
				/* @__PURE__ */ g("polygon", {
					fill: `url(#${n})`,
					points: Pe
				}),
				/* @__PURE__ */ g("svg", {
					x: Te,
					y: Se,
					width: we,
					height: Ce,
					viewBox: y,
					color: "#fff",
					children: /* @__PURE__ */ g(x, {})
				}),
				/* @__PURE__ */ g(Be, {
					strokeWidth: Fe,
					points: Ie
				})
			]
		})]
	});
}
// src/master/FtsrgSlideMaster.tsx
var Ue = s("section", {
	name: "FtsrgSlideMaster",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%"
}), We = s("main", {
	name: "FtsrgSlideMaster",
	slot: "Content"
})(({ theme: e }) => ({
	position: "relative",
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	padding: e.spacing(4, 8)
})), Ge = s("footer", {
	name: "FtsrgSlideMaster",
	slot: "Footer"
})(({ theme: e }) => ({
	position: "relative",
	display: "flex",
	height: e.spacing(5.75),
	fontSize: 16,
	color: "#2f2d2e"
})), Ke = s("div", {
	name: "FtsrgSlideMaster",
	slot: "FooterBackground"
})(({ theme: e }) => ({
	flexGrow: 1,
	background: e.palette.neutral.main
})), qe = s("div", {
	name: "FtsrgSlideMaster",
	slot: "RunningTitle"
})(({ theme: e }) => ({
	position: "absolute",
	left: e.spacing(1.25),
	top: "50%",
	transform: "translate(0, -50%)"
})), Je = s("div", {
	name: "FtsrgSlideMaster",
	slot: "SlideNumber"
})({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)"
}), Ye = s(He, {
	name: "FtsrgSlideMaster",
	slot: "Logo"
})({ flexShrink: 0 }), Xe = s("h1", {
	name: "FtsrgContentMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0,
	"& strong": {
		color: e.palette.primary.main,
		fontWeight: "inherit"
	}
})), Ze = s("div", {
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
			backgroundColor: o(e.palette.primary.main, .08)
		},
		"&:focus-visible": {
			outline: `2px solid ${e.palette.primary.main}`,
			outlineOffset: "0.15em",
			borderRadius: e.shape.borderRadius
		}
	}
}));
function N({ className: e, children: t, showSlideNumber: n = !0 }) {
	let { metadata: { event: r }, lang: o } = i(), { index: s, lang: l } = a(), { palette: u } = c();
	return /* @__PURE__ */ _(Ue, {
		className: e,
		children: [/* @__PURE__ */ g(We, { children: t }), /* @__PURE__ */ _(Ge, { children: [
			/* @__PURE__ */ g(Ke, {}),
			r && /* @__PURE__ */ g(qe, {
				...o === l ? {} : { lang: o },
				children: r
			}),
			n && /* @__PURE__ */ g(Je, { children: s + 1 }),
			/* @__PURE__ */ g(Ye, { footerColor: u.neutral.main })
		] })]
	});
}
function Qe(e) {
	let { title: t, children: n, ...r } = u({
		props: e,
		name: "FtsrgContentMaster"
	});
	return /* @__PURE__ */ _(N, {
		...r,
		children: [t !== void 0 && /* @__PURE__ */ g(Xe, { children: t }), /* @__PURE__ */ g(Ze, { children: n })]
	});
}
// src/master/useGradientFollowsPointer.ts
function $e(e, t, n, r) {
	let i = (e, t, n) => 3 * e * n * (1 - n) ** 2 + 3 * t * n ** 2 * (1 - n) + n ** 3;
	return (a) => {
		let o = 0, s = 1;
		for (let t = 0; t < 20; t += 1) {
			let t = (o + s) / 2;
			i(e, n, t) < a ? o = t : s = t;
		}
		return i(t, r, (o + s) / 2);
	};
}
var et = $e(.4, 0, .2, 1);
function tt(e, t) {
	let n = c(), { interactive: r } = a(), i = h({
		rest: e,
		apply: t,
		duration: n.transitions.duration.complex,
		interactive: r
	});
	p(() => {
		i.current = {
			rest: e,
			apply: t,
			duration: n.transitions.duration.complex,
			interactive: r
		};
	});
	let o = h(e), s = h(void 0), l = h(void 0), [u] = ee(() => {
		let e = (e) => {
			o.current = e, i.current.apply(e);
		}, t = () => {
			l.current !== void 0 && (cancelAnimationFrame(l.current), l.current = void 0);
		}, n = () => {
			t();
			let { duration: n } = i.current, r = matchMedia("(prefers-reduced-motion: reduce)").matches, a = o.current, c = performance.now(), u = (t) => {
				let o = r ? 1 : Math.min((t - c) / n, 1), d = et(o), f = s.current ?? i.current.rest;
				e({
					x: a.x + (f.x - a.x) * d,
					y: a.y + (f.y - a.y) * d
				}), l.current = o < 1 ? requestAnimationFrame(u) : void 0;
			};
			u(c);
		};
		return {
			enter(e) {
				i.current.interactive && (s.current = e, n());
			},
			move(t) {
				s.current !== void 0 && (s.current = t, l.current === void 0 && e(t));
			},
			leave() {
				s.current !== void 0 && (s.current = void 0, n());
			}
		};
	});
	return p(() => () => {
		l.current !== void 0 && cancelAnimationFrame(l.current);
	}, []), u;
}
// src/logos/FtsrgName.tsx
var nt = {
	en: ["Critical Systems", "Research Group"],
	hu: ["Kritikus Rendszerek", "Kutatócsoport"]
}, rt = 1.005, it = .25, at = .705, ot = s("span", {
	name: "FtsrgName",
	slot: "Root"
})({
	display: "block",
	fontFamily: "'FTSRG Name', Mulish, sans-serif",
	fontStyle: "italic",
	fontWeight: 800,
	letterSpacing: 0,
	whiteSpace: "nowrap"
});
function st({ lang: e, ...t }) {
	let [n, r] = e === "hu" ? nt.hu : nt.en;
	return /* @__PURE__ */ _(ot, {
		...t,
		children: [
			n,
			/* @__PURE__ */ g("br", {}),
			r
		]
	});
}
// src/logos/Logos.tsx
var P = l("FtsrgLogos", [
	"root",
	"separator",
	"link",
	"image",
	"label"
]), ct = s("div", {
	name: "FtsrgLogos",
	slot: "Root"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	"&:has(.FtsrgLogos-link:is(:hover, :focus-within)) > *:not(.FtsrgLogos-link:is(:hover, :focus-within))": { filter: "brightness(0%) opacity(0.34)" },
	"& > *": { "@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("filter", {
		duration: e.transitions.duration.standard,
		easing: e.transitions.easing.easeInOut
	}) } }
})), F = s("div", {
	name: "FtsrgLogos",
	slot: "Separator",
	shouldForwardProp: (e) => e !== "color"
})(({ color: e }) => ({
	height: "46px",
	width: "1px",
	backgroundColor: e,
	marginInline: "12px"
})), I = s("a", {
	name: "FtsrgLogos",
	slot: "Link"
})({
	display: "flex",
	textDecoration: "none",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center"
}), lt = s(st, {
	name: "FtsrgLogos",
	slot: "Label"
})({
	marginInlineStart: 16,
	fontSize: 22.75,
	lineHeight: "28px",
	color: b
}), L = 64, ut = 2.5 / 170 * L;
function dt({ lang: e = "en", compact: t = !1 }) {
	let n = e === "hu" ? {
		lang: "hu",
		bme: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
		vik: "Villamosmérnöki és Informatikai Kar",
		mit: "Mesterséges Intelligencia és Rendszertervezés Tanszék",
		ftsrg: "Kritikus Rendszerek Kutatócsoport"
	} : {
		lang: "en",
		bme: "Budapest University of Technology and Economics",
		vik: "Faculty of Electrical Engineering and Informatics",
		mit: "Department of Artificial Intelligence and Systems Engineering",
		ftsrg: "Critical Systems Research Group"
	}, r = e === "hu" ? {
		vik: se,
		mit: ue
	} : {
		vik: oe,
		mit: le
	};
	return /* @__PURE__ */ _(ct, {
		className: P.root,
		...e === n.lang ? {} : { lang: n.lang },
		children: [
			/* @__PURE__ */ g(I, {
				href: "https://www.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.bme,
				className: P.link,
				children: /* @__PURE__ */ g("img", {
					src: ie,
					height: L,
					alt: "",
					className: P.image
				})
			}),
			/* @__PURE__ */ g(F, {
				color: "#000",
				className: P.separator
			}),
			/* @__PURE__ */ _(I, {
				href: "https://vik.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.vik,
				className: P.link,
				children: [/* @__PURE__ */ g("img", {
					src: ae,
					height: L,
					alt: "",
					className: P.image
				}), !t && /* @__PURE__ */ g("img", {
					src: r.vik,
					height: L,
					alt: "",
					className: P.image
				})]
			}),
			/* @__PURE__ */ g(F, {
				color: "#211661",
				className: P.separator
			}),
			/* @__PURE__ */ _(I, {
				href: "https://mit.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.mit,
				className: P.link,
				children: [/* @__PURE__ */ g("img", {
					src: ce,
					height: L,
					alt: "",
					className: P.image
				}), !t && /* @__PURE__ */ g("img", {
					src: r.mit,
					height: L,
					className: P.image
				})]
			}),
			/* @__PURE__ */ g(F, {
				color: "#810f29",
				className: P.separator
			}),
			/* @__PURE__ */ _(I, {
				href: "https://ftsrg.mit.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.ftsrg,
				className: P.link,
				children: [/* @__PURE__ */ g(xe, {
					height: L - 2 * ut,
					role: "presentation",
					"aria-label": void 0,
					style: { margin: ut },
					className: P.image
				}), !t && /* @__PURE__ */ g(lt, {
					lang: n.lang,
					"aria-hidden": "true",
					className: P.label
				})]
			})
		]
	});
}
var ft = ne, R = {
	x: .5,
	y: .75,
	inner: "#1a191a",
	outer: "#2d2f2e"
}, pt = "--FtsrgTitleMaster-gradientX", mt = "--FtsrgTitleMaster-gradientY", ht = s("section", {
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
}), gt = s("div", {
	name: "FtsrgTitleMaster",
	slot: "RunningTitle"
})(({ theme: e }) => ({
	position: "absolute",
	right: e.spacing(5),
	top: "40px",
	transform: "translate(0, -50%)",
	fontSize: 24
})), _t = s("main", {
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
	backgroundImage: `url(${ne}), radial-gradient(circle at var(${pt}, ${String(R.x * 100)}%) var(${mt}, ${String(R.y * 100)}%), ${R.inner} 0%, ${R.outer} 100%)`,
	backgroundSize: "contain",
	gap: e.spacing(3),
	padding: e.spacing(0, 16)
})), vt = s("h1", {
	name: "FtsrgTitleMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), yt = s("div", {
	name: "FtsrgTitleMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
})), bt = s("aside", {
	name: "FtsrgTitleMaster",
	slot: "Footer"
})({
	display: "flex",
	flexGrow: 1,
	flexDirection: "row",
	justifyContent: "center"
});
function xt(e) {
	let t = e.currentTarget.getBoundingClientRect();
	return {
		x: (e.clientX - t.left) / t.width,
		y: (e.clientY - t.top) / t.height
	};
}
function St(e) {
	let { title: t, children: n } = u({
		props: e,
		name: "FtsrgTitleMaster"
	}), { metadata: { event: r }, lang: o } = i(), { lang: s } = a(), c = h(null), l = tt(R, ({ x: e, y: t }) => {
		c.current?.style.setProperty(pt, `${String(e * 100)}%`), c.current?.style.setProperty(mt, `${String(t * 100)}%`);
	});
	return /* @__PURE__ */ _(ht, { children: [/* @__PURE__ */ _(_t, {
		ref: c,
		onPointerEnter: (e) => {
			l.enter(xt(e));
		},
		onPointerMove: (e) => {
			l.move(xt(e));
		},
		onPointerLeave: () => {
			l.leave();
		},
		children: [t !== void 0 && /* @__PURE__ */ g(vt, { children: t }), n !== void 0 && /* @__PURE__ */ g(yt, { children: n })]
	}), /* @__PURE__ */ _(bt, { children: [r && /* @__PURE__ */ g(gt, {
		...o === s ? {} : { lang: o },
		children: r
	}), /* @__PURE__ */ g(dt, { lang: s })] })] });
}
// src/master/FtsrgSectionMaster.tsx
var z = 312, B = (t - z) / 2, V = B + z, H = n / 2 - 6, U = 4, W = B + U / 2, G = V - U / 2, K = U * Math.hypot(1, v), q = n / 2 + 6 + K / 2, Ct = H - K / 2;
function J(e, n) {
	return e + (t / 2 - n) * v;
}
var wt = [
	[0, B],
	[J(H, B), B],
	[J(H, V), V],
	[0, V]
].join(" "), Tt = [
	[-4, W],
	[J(Ct, W), W],
	[J(Ct, G), G],
	[-4, G]
].join(" "), Et = [
	[J(q, W), W],
	[n + U, W],
	[n + U, G],
	[J(q, G), G]
].join(" "), Dt = s("svg", {
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
}), Ot = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Block",
	shouldForwardProp: (e) => e !== "filled"
})(({ theme: e, filled: t }) => ({
	position: "absolute",
	top: B,
	left: 0,
	width: t ? J(H, V) : J(H - K, V - U),
	height: z,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(0, 8),
	color: t ? e.palette.primary.contrastText : void 0
})), kt = J(q + K / 2, B + U), At = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Aside"
})(({ theme: e }) => ({
	position: "absolute",
	top: B + U,
	left: kt,
	right: 0,
	height: 304,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(0, 8, 0, 4),
	"& > *": { margin: 0 }
})), jt = s("h1", {
	name: "FtsrgSectionMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0
})), Mt = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function Nt({ filled: e }) {
	let { palette: r } = c();
	return /* @__PURE__ */ _(Dt, {
		viewBox: `0 0 ${String(n)} ${String(t)}`,
		children: [e ? /* @__PURE__ */ g(It, {}) : /* @__PURE__ */ g("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: U,
			points: Tt
		}), /* @__PURE__ */ g("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: U,
			points: Et
		})]
	});
}
function Pt({ x: e, y: t }) {
	return t >= B && t <= V && e >= 0 && e <= J(H, t);
}
var Y = {
	x: n * R.x,
	y: 80 + 480 * R.y
};
function Ft({ x: e, y: t }) {
	return Math.hypot(Math.max(e, n - e), Math.max(t - 80, 560 - t));
}
function It() {
	let e = m(), t = m(), r = h(null), i = h(null), a = tt(Y, (e) => {
		let t = i.current;
		t?.setAttribute("cx", String(e.x)), t?.setAttribute("cy", String(e.y)), t?.setAttribute("r", String(Ft(e)));
	});
	return p(() => {
		let e = r.current?.ownerSVGElement, t = e?.parentElement;
		if (!e || !t) return;
		let n = !1, i = (t) => {
			let r = e.getScreenCTM()?.inverse();
			if (!r) return;
			let { x: i, y: o } = new DOMPoint(t.clientX, t.clientY).matrixTransform(r), s = {
				x: i,
				y: o
			};
			Pt(s) ? n ? a.move(s) : (n = !0, a.enter(s)) : n && (n = !1, a.leave());
		}, o = () => {
			n && (n = !1, a.leave());
		};
		return t.addEventListener("pointermove", i), t.addEventListener("pointerleave", o), () => {
			t.removeEventListener("pointermove", i), t.removeEventListener("pointerleave", o);
		};
	}, [a]), /* @__PURE__ */ _(te, { children: [/* @__PURE__ */ _("defs", { children: [/* @__PURE__ */ _("radialGradient", {
		ref: i,
		id: t,
		gradientUnits: "userSpaceOnUse",
		cx: Y.x,
		cy: Y.y,
		r: Ft(Y),
		children: [/* @__PURE__ */ g("stop", {
			offset: "0",
			stopColor: R.inner
		}), /* @__PURE__ */ g("stop", {
			offset: "1",
			stopColor: R.outer
		})]
	}), /* @__PURE__ */ g("clipPath", {
		id: e,
		children: /* @__PURE__ */ g("polygon", { points: wt })
	})] }), /* @__PURE__ */ _("g", {
		ref: r,
		clipPath: `url(#${e})`,
		children: [/* @__PURE__ */ g("rect", {
			y: 80,
			width: n,
			height: 480,
			fill: `url(#${t})`
		}), /* @__PURE__ */ g("image", {
			href: ft,
			y: 80,
			width: n,
			height: 480,
			preserveAspectRatio: "xMidYMid meet"
		})]
	})] });
}
function Lt(t) {
	return f(t) && (t.type === e || t.type === "p");
}
function Rt(e) {
	let t = d.toArray(e).filter((e) => typeof e != "string" || e.trim() !== "");
	if (t.length > 0 && Lt(t[0])) {
		let [e, ...n] = t;
		return [e, n];
	}
	return [void 0, t];
}
function zt({ title: e, children: t, filled: n, ...r }) {
	let [i, a] = Rt(t);
	return /* @__PURE__ */ _(N, {
		...r,
		children: [
			/* @__PURE__ */ g(Nt, { filled: n }),
			/* @__PURE__ */ _(Ot, {
				filled: n,
				children: [e !== void 0 && /* @__PURE__ */ g(jt, { children: e }), i !== void 0 && /* @__PURE__ */ g(Mt, { children: i })]
			}),
			a.length > 0 && /* @__PURE__ */ g(At, { children: a })
		]
	});
}
function Bt(e) {
	let t = u({
		props: e,
		name: "FtsrgSectionMaster"
	});
	return /* @__PURE__ */ g(zt, {
		...t,
		filled: !0
	});
}
function Vt(e) {
	let t = u({
		props: e,
		name: "FtsrgSubsectionMaster"
	});
	return /* @__PURE__ */ g(zt, {
		...t,
		filled: !1
	});
}
// src/master/WebIcon.tsx
var Ht = "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z", X = {
	x: 3,
	y: 3,
	width: 18,
	height: 18,
	rx: 2
}, Ut = .65;
function Wt(e) {
	let t = m();
	return /* @__PURE__ */ _(pe, {
		...e,
		children: [/* @__PURE__ */ g("defs", { children: /* @__PURE__ */ _("mask", {
			id: t,
			children: [/* @__PURE__ */ g("rect", {
				...X,
				fill: "#fff"
			}), /* @__PURE__ */ g("path", {
				d: Ht,
				fill: "#000",
				transform: `translate(12 12) scale(${String(Ut)}) translate(-12 -12)`
			})]
		}) }), /* @__PURE__ */ g("rect", {
			...X,
			mask: `url(#${t})`
		})]
	});
}
// src/master/FtsrgStatementMaster.tsx
var Z = 80, Q = 96, Gt = Q + at * Z, Kt = (Q - (rt + it) * Z) / 2 + (rt - at) * Z, qt = [
	{
		href: "https://ftsrg.mit.bme.hu",
		label: "ftsrg.mit.bme.hu",
		Icon: Wt,
		title: "Web"
	},
	{
		href: "https://www.facebook.com/ftsrg",
		label: "ftsrg",
		Icon: de,
		title: "Facebook"
	},
	{
		href: "https://www.linkedin.com/company/ftsrg",
		label: "ftsrg",
		Icon: fe,
		title: "LinkedIn"
	}
], Jt = "nolinks", Yt = "light", $ = (e) => e !== "light", Xt = s("section", {
	name: "FtsrgStatementMaster",
	slot: "Root",
	shouldForwardProp: $
})(({ theme: e, light: t }) => ({
	position: "relative",
	width: "100%",
	height: "100%",
	backgroundColor: t ? "#fff" : "#000",
	color: t ? e.palette.text.primary : "#fff"
})), Zt = s("main", {
	name: "FtsrgStatementMaster",
	slot: "Body"
})(({ theme: e }) => ({
	position: "absolute",
	inset: 0,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(12, 8),
	textAlign: "center"
})), Qt = s("div", {
	name: "FtsrgStatementMaster",
	slot: "Brand",
	shouldForwardProp: $
})(({ light: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "flex-start",
	gap: 64,
	color: e ? b : void 0
})), $t = {
	display: "block",
	height: Gt,
	marginTop: Kt
}, en = s(be, {
	name: "FtsrgStatementMaster",
	slot: "Logo"
})($t), tn = s(xe, {
	name: "FtsrgStatementMaster",
	slot: "Logo"
})($t), nn = s(st, {
	name: "FtsrgStatementMaster",
	slot: "Name"
})({
	fontSize: Z,
	lineHeight: `${String(Q)}px`,
	textAlign: "start"
}), rn = s("h1", {
	name: "FtsrgStatementMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), an = s("div", {
	name: "FtsrgStatementMaster",
	slot: "Content"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
})), on = s("nav", {
	name: "FtsrgStatementMaster",
	slot: "Links",
	shouldForwardProp: $
})(({ theme: e, light: t }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	bottom: e.spacing(4),
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
	...t && { color: "#100f0d" }
})), sn = s("a", {
	name: "FtsrgStatementMaster",
	slot: "Link",
	shouldForwardProp: $
})(({ theme: e, light: t }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: e.spacing(1),
	fontSize: 28,
	fontWeight: e.typography.fontWeightBold,
	color: "inherit",
	textDecoration: "none",
	"& .MuiSvgIcon-root": { fontSize: 60 },
	"&:hover": {
		textDecoration: "underline",
		textDecorationThickness: "0.08em",
		textUnderlineOffset: "0.14em",
		...t && { textDecorationColor: "#8e162b" }
	},
	"&:focus-visible": {
		outline: `2px solid ${t ? ye : "currentColor"}`,
		outlineOffset: "0.15em",
		borderRadius: e.shape.borderRadius
	}
}));
function cn(e) {
	return d.toArray(e).some((e) => typeof e != "string" || e.trim() !== "");
}
function ln(e) {
	let { title: t, children: n, className: r } = u({
		props: e,
		name: "FtsrgStatementMaster"
	}), { lang: i } = a(), o = cn(n), s = r?.split(/\s+/) ?? [], c = !s.includes(Jt), l = s.includes(Yt);
	return /* @__PURE__ */ _(Xt, {
		className: r,
		light: l,
		children: [/* @__PURE__ */ g(Zt, { children: t === void 0 && !o ? /* @__PURE__ */ _(Qt, {
			light: l,
			children: [g(l ? tn : en, {}), /* @__PURE__ */ g(nn, { lang: i })]
		}) : /* @__PURE__ */ _(te, { children: [t !== void 0 && /* @__PURE__ */ g(rn, { children: t }), o && /* @__PURE__ */ g(an, { children: n })] }) }), c && /* @__PURE__ */ g(on, {
			light: l,
			children: qt.map(({ href: e, label: t, Icon: n, title: r }) => /* @__PURE__ */ _(sn, {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				light: l,
				children: [/* @__PURE__ */ g(n, { titleAccess: r }), t]
			}, e))
		})]
	});
}
// src/index.ts
var un = r({
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
			dark: "#2f2d2e",
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
		title: St,
		content: Qe,
		section: Bt,
		subsection: Vt,
		statement: ln
	},
	slideTransition: { duration: 0 },
	stepTransition: { duration: 0 },
	components: {
		SeminarCallout: {
			defaultProps: { radius: 0 },
			styleOverrides: {
				root: ({ ownerState: e, theme: t }) => e.variant === "filled" ? {
					"--SeminarCallout-outline": "var(--SeminarCallout-palette-dark)",
					"--SeminarCallout-outline-width": 2
				} : {
					"--SeminarCallout-color": t.palette.text.primary,
					...e.color === "neutral" ? { "--SeminarCallout-outline": t.palette.neutral.dark } : { "& .SeminarCalloutTitle-root": { color: "var(--SeminarCallout-palette-main)" } }
				},
				content: ({ ownerState: e }) => e.variant === "filled" ? { "& strong": { color: "inherit" } } : {}
			}
		},
		SeminarCalloutTitle: { styleOverrides: { root: ({ theme: e }) => ({ marginBottom: e.spacing(1.5) }) } },
		SeminarColumn: { styleOverrides: { heading: ({ theme: e }) => ({
			fontSize: 32,
			color: e.palette.primary.main,
			marginBottom: e.spacing(1.5)
		}) } }
	}
});
export { un as default };
