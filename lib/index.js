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
import "../assets/mit-label.css";
import "../assets/montserrat-425-subset.css";
import ie from "@mui/icons-material/Facebook";
import ae from "@mui/icons-material/LinkedIn";
import oe from "@mui/material/SvgIcon";
// src/design.ts
var se = 21.4, v = Math.tan(se * Math.PI / 180), ce = [
	"m 11.396,5.988 c -0.532,0.46 -0.834,1.137 -0.907,2.032 l -0.037,0.581 h 4.391 l -0.363,4.863 H 10.053 L 8.965,27.038 H 2.36 l 1.088,-13.573 H 0 l 0.4,-4.863 h 3.448 l 0.036,-0.654 c 0.194,-2.491 0.998,-4.439 2.414,-5.843 1.415,-1.403 3.369,-2.105 5.861,-2.105 1.427,0 2.553,0.169 3.375,0.508 l -0.363,5.045 c -0.677,-0.169 -1.27,-0.254 -1.778,-0.254 -0.799,0 -1.464,0.23 -1.996,0.69",
	"m 23.772,19.38 c -0.048,0.871 0.163,1.53 0.635,1.978 0.472,0.448 1.094,0.671 1.869,0.671 0.46,0 1.064,-0.084 1.815,-0.254 l -0.436,5.008 c -0.895,0.363 -2.057,0.544 -3.484,0.544 -2.299,0 -4.041,-0.611 -5.226,-1.832 -1.186,-1.221 -1.778,-2.934 -1.778,-5.135 0,-0.436 0.012,-0.763 0.036,-0.98 l 0.472,-5.916 h -3.448 l 0.399,-4.863 h 3.448 l 0.326,-4.174 6.75,-2.104 -0.508,6.278 H 29.07 l -0.363,4.863 h -4.464 l -0.472,5.916",
	"m 33.207,26.802 c -1.428,-0.351 -2.843,-0.913 -4.246,-1.688 l 2.069,-4.464 c 1.016,0.677 2.141,1.204 3.375,1.579 1.234,0.376 2.432,0.563 3.593,0.563 0.798,0 1.385,-0.102 1.76,-0.308 0.375,-0.205 0.563,-0.466 0.563,-0.781 0,-0.411 -0.26,-0.738 -0.78,-0.98 -0.52,-0.241 -1.337,-0.508 -2.449,-0.798 -1.355,-0.362 -2.475,-0.731 -3.358,-1.107 -0.883,-0.374 -1.65,-0.925 -2.304,-1.651 -0.653,-0.726 -0.98,-1.682 -0.98,-2.867 0,-1.209 0.351,-2.286 1.053,-3.23 0.701,-0.944 1.687,-1.675 2.957,-2.196 1.27,-0.52 2.728,-0.781 4.373,-0.781 1.403,0 2.801,0.2 4.192,0.599 1.391,0.4 2.57,0.938 3.538,1.615 l -1.996,4.355 c -0.943,-0.629 -1.924,-1.112 -2.94,-1.452 -1.016,-0.338 -1.996,-0.507 -2.94,-0.507 -0.798,0 -1.403,0.103 -1.815,0.308 -0.412,0.206 -0.617,0.466 -0.617,0.78 0,0.436 0.266,0.781 0.798,1.034 0.532,0.254 1.367,0.539 2.505,0.853 1.307,0.363 2.4,0.732 3.284,1.107 0.883,0.376 1.645,0.931 2.287,1.669 0.64,0.738 0.961,1.687 0.961,2.849 0,1.911 -0.732,3.393 -2.196,4.445 -1.464,1.053 -3.478,1.579 -6.042,1.579 -1.669,0 -3.218,-0.176 -4.645,-0.526",
	"m 62.24,8.565 -0.436,5.988 c -0.968,-0.484 -1.984,-0.726 -3.049,-0.726 -1.331,0 -2.372,0.303 -3.121,0.908 -0.751,0.605 -1.186,1.621 -1.307,3.049 l -0.726,9.254 h -6.568 l 1.052,-13.138 c 0.097,-1.693 0.145,-2.964 0.145,-3.811 0,-0.677 -0.013,-1.174 -0.036,-1.488 h 6.205 l 0.109,2.613 c 0.508,-0.944 1.276,-1.688 2.305,-2.232 1.028,-0.545 2.135,-0.817 3.321,-0.817 0.919,0 1.621,0.134 2.105,0.399",
	"m 75.903,20.396 c 0.69,-0.822 1.034,-1.911 1.034,-3.267 0,-1.379 -0.321,-2.407 -0.962,-3.084 -0.641,-0.677 -1.555,-1.017 -2.74,-1.017 -1.161,0 -2.087,0.412 -2.776,1.234 -0.689,0.823 -1.034,1.96 -1.034,3.412 0,1.234 0.327,2.202 0.98,2.904 0.653,0.702 1.56,1.052 2.722,1.052 1.161,0 2.087,-0.411 2.776,-1.234 z m 8.148,-11.795 -1.379,17.021 c -0.242,3.314 -1.288,5.734 -3.139,7.258 -1.851,1.524 -4.47,2.286 -7.858,2.286 -3.098,0 -5.783,-0.521 -8.057,-1.56 l 1.379,-4.863 c 2.128,1.064 4.439,1.597 6.932,1.597 1.282,0 2.274,-0.309 2.975,-0.925 0.702,-0.617 1.113,-1.615 1.234,-2.994 l 0.145,-1.996 c -1.283,1.403 -3.097,2.104 -5.444,2.104 -1.549,0 -2.921,-0.35 -4.119,-1.052 -1.197,-0.702 -2.13,-1.694 -2.794,-2.976 -0.666,-1.282 -0.998,-2.77 -0.998,-4.464 0,-1.862 0.376,-3.55 1.126,-5.063 0.749,-1.512 1.802,-2.704 3.157,-3.575 1.355,-0.871 2.903,-1.307 4.646,-1.307 2.395,0 4.246,0.847 5.552,2.541 l 0.145,-2.032 h 6.496"
], le = "m 14.502,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525", ue = ["m 36.346,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525", "m 51.663,41.687 c -1.914,0 -3.47,-1.557 -3.47,-3.47 0,-1.913 1.556,-3.469 3.47,-3.469 1.913,0 3.469,1.556 3.469,3.469 0,1.914 -1.556,3.47 -3.469,3.47 z m 0,-10.203 c -3.713,0 -6.734,3.02 -6.734,6.732 0,3.713 3.021,6.733 6.734,6.733 3.713,0 6.733,-3.021 6.733,-6.733 0,-3.712 -3.02,-6.732 -6.733,-6.732"], de = 84.051, y = 44.95, b = `0 0 ${String(de)} ${String(y)}`, x = "#100f0d", fe = "#8e162b";
function S({ accentColor: e = "currentColor" }) {
	return /* @__PURE__ */ _("g", {
		fill: "currentColor",
		children: [
			ce.map((e) => /* @__PURE__ */ g("path", { d: e }, e)),
			/* @__PURE__ */ g("path", {
				d: le,
				fill: e
			}),
			ue.map((e) => /* @__PURE__ */ g("path", { d: e }, e))
		]
	});
}
function pe({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: b,
		overflow: "visible",
		role: e,
		"aria-label": "ftsrg",
		...t,
		children: /* @__PURE__ */ g(S, {})
	});
}
function me({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: b,
		overflow: "visible",
		role: e,
		"aria-label": "ftsrg",
		color: x,
		...t,
		children: /* @__PURE__ */ g(S, { accentColor: fe })
	});
}
// src/master/FtsrgCornerLogo.tsx
var C = 46, w = 103.12, T = C * v, he = 5.99, ge = 34.41, _e = de / y * ge, ve = 59.120000000000005 - _e / 2, ye = 2, E = -12, be = w - E, xe = "#283c88", Se = "#5f2c60", D = 64.2, O = 58.6, Ce = O * Math.cos(D * Math.PI / 180), we = O * Math.sin(D * Math.PI / 180), Te = "#9f172d", k = O, Ee = k * Math.cos(D * Math.PI / 180), De = k * Math.sin(D * Math.PI / 180), Oe = k / Math.cos(D * Math.PI / 180), ke = [
	[T, 0],
	[105.12, 0],
	[105.12, 48],
	[-2 * v, 48]
].join(" "), A = 2, Ae = 1, je = A * Math.hypot(1, v), Me = [
	[T * (1 - A / C) + je, A],
	[101.12, A],
	[101.12, 44],
	[A / C * T + je, 44]
].join(" "), Ne = s("svg", {
	name: "FtsrgCornerLogo",
	slot: "Root"
})({
	display: "block",
	height: C,
	overflow: "visible",
	aspectRatio: `${String(be)} / ${String(C)}`
}), Pe = "https://ftsrg.mit.bme.hu", Fe = s("a", {
	name: "FtsrgCornerLogo",
	slot: "Badge",
	shouldForwardProp: (e) => e !== "interactive"
})(({ interactive: e }) => ({
	outline: "none",
	...e && { "&:hover linearGradient, &:focus-visible linearGradient": { transform: `translateX(${String(-Oe)}px)` } },
	"&:focus-visible > polygon": { visibility: "visible" }
})), Ie = s("polygon", {
	name: "FtsrgCornerLogo",
	slot: "FocusRing"
})({
	visibility: "hidden",
	fill: "none",
	stroke: "#fff"
}), Le = s("linearGradient", {
	name: "FtsrgCornerLogo",
	slot: "Gradient"
})(({ theme: e }) => ({ "@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("transform", {
	duration: e.transitions.duration.standard,
	easing: e.transitions.easing.easeInOut
}) } }));
function Re({ className: e, footerColor: t }) {
	let n = m(), { interactive: r } = a();
	return /* @__PURE__ */ _(Ne, {
		className: e,
		viewBox: `${String(E)} 0 ${String(be)} ${String(C)}`,
		children: [/* @__PURE__ */ g("polygon", {
			fill: t,
			points: [
				[E - ye, 0],
				[T - 12, 0],
				[-12, C],
				[E - ye, C]
			].join(" ")
		}), /* @__PURE__ */ _(Fe, {
			interactive: r,
			href: Pe,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "ftsrg",
			children: [
				/* @__PURE__ */ g("defs", { children: /* @__PURE__ */ _(Le, {
					id: n,
					gradientUnits: "userSpaceOnUse",
					x1: w - Ce,
					y1: C - we,
					x2: w + Ee,
					y2: C + De,
					children: [
						/* @__PURE__ */ g("stop", {
							offset: "0",
							stopColor: xe
						}),
						/* @__PURE__ */ g("stop", {
							offset: O / 117.2,
							stopColor: Se
						}),
						/* @__PURE__ */ g("stop", {
							offset: "1",
							stopColor: Te
						})
					]
				}) }),
				/* @__PURE__ */ g("polygon", {
					fill: `url(#${n})`,
					points: ke
				}),
				/* @__PURE__ */ g("svg", {
					x: ve,
					y: he,
					width: _e,
					height: ge,
					viewBox: b,
					color: "#fff",
					children: /* @__PURE__ */ g(S, {})
				}),
				/* @__PURE__ */ g(Ie, {
					strokeWidth: Ae,
					points: Me
				})
			]
		})]
	});
}
// src/master/FtsrgSlideMaster.tsx
var ze = s("section", {
	name: "FtsrgSlideMaster",
	slot: "Root"
})({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%"
}), Be = s("main", {
	name: "FtsrgSlideMaster",
	slot: "Content"
})(({ theme: e }) => ({
	position: "relative",
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	padding: e.spacing(4, 8)
})), Ve = s("footer", {
	name: "FtsrgSlideMaster",
	slot: "Footer"
})(({ theme: e }) => ({
	position: "relative",
	display: "flex",
	height: e.spacing(5.75),
	fontSize: 16,
	color: "#2f2d2e"
})), He = s("div", {
	name: "FtsrgSlideMaster",
	slot: "FooterBackground"
})(({ theme: e }) => ({
	flexGrow: 1,
	background: e.palette.neutral.main
})), Ue = s("div", {
	name: "FtsrgSlideMaster",
	slot: "RunningTitle"
})(({ theme: e }) => ({
	position: "absolute",
	left: e.spacing(1.25),
	top: "50%",
	transform: "translate(0, -50%)"
})), We = s("div", {
	name: "FtsrgSlideMaster",
	slot: "SlideNumber"
})({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)"
}), Ge = s(Re, {
	name: "FtsrgSlideMaster",
	slot: "Logo"
})({ flexShrink: 0 }), Ke = s("h1", {
	name: "FtsrgContentMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0,
	"& strong": {
		color: e.palette.primary.main,
		fontWeight: "inherit"
	}
})), qe = s("div", {
	name: "FtsrgContentMaster",
	slot: "Body"
})(({ theme: e }) => ({
	flex: 1,
	minHeight: 0,
	"& :is(p, ul, ol, dl, blockquote, pre, figure, table)": { marginBlock: e.spacing(1.5) },
	"& li > :is(p, ul, ol, dl, blockquote, pre, figure, table)": { marginBlock: 0 },
	"& > :not(style):not(:not(style) ~ *)": { marginTop: 0 },
	"& > :last-child": { marginBottom: 0 },
	"& > .SeminarColumns-root": { "--FtsrgColumns-edge": e.spacing(8) },
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
function Je({ className: e, children: t, showSlideNumber: n = !0 }) {
	let { metadata: { event: r }, lang: o } = i(), { index: s, lang: l } = a(), { palette: u } = c();
	return /* @__PURE__ */ _(ze, {
		className: e,
		children: [/* @__PURE__ */ g(Be, { children: t }), /* @__PURE__ */ _(Ve, { children: [
			/* @__PURE__ */ g(He, {}),
			r && /* @__PURE__ */ g(Ue, {
				...o === l ? {} : { lang: o },
				children: r
			}),
			n && /* @__PURE__ */ g(We, { children: s + 1 }),
			/* @__PURE__ */ g(Ge, { footerColor: u.neutral.main })
		] })]
	});
}
function Ye(e) {
	let { title: t, children: n, ...r } = u({
		props: e,
		name: "FtsrgContentMaster"
	});
	return /* @__PURE__ */ _(Je, {
		...r,
		children: [t !== void 0 && /* @__PURE__ */ g(Ke, { children: t }), /* @__PURE__ */ g(qe, { children: n })]
	});
}
// src/master/useGradientFollowsPointer.ts
function Xe(e, t, n, r) {
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
var Ze = Xe(.4, 0, .2, 1);
function Qe(e, t) {
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
				let o = r ? 1 : Math.min((t - c) / n, 1), d = Ze(o), f = s.current ?? i.current.rest;
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
// src/logos/BmeLogo.tsx
var $e = "M7.6 29.5q-.2 2.3 1.4 3.8 1.2.9 1.8 1c.6.1 2.7.3 4.6.3 3.4 0 7-.8 8.6-4 .7-1.3.7-2.7.7-3.2q0-3.6-3-5.6c-1.1-.7-2.4-.9-2.7-1a52 52 0 0 0-10.1 0l-1.3.1Zm0-13.3 4.6.2 4.6-.2c2.4-.2 4.3-.6 5.6-2.6.9-1.4 1-2.8 1-3.3 0-.7 0-2-1.2-3.3A5 5 0 0 0 19 5.3a36 36 0 0 0-7.6-.2c-3.2.6-3.6 2.2-3.7 5.2ZM0 38.5q.8-.8 1-1.2c1.5-2 1.6-4 1.7-6.3V7.4l-.3-2.5C2 3.2 1.4 2.4.1 1l5.1.2 7-.2h4l2.6.2c5 .6 7.2 2.4 8.4 4.5.4.8 1.2 2.5 1.2 4.7 0 1-.2 4.2-2.7 6.3l-2.8 1.5q1.6.4 2.8 1.1c1.7 1 4.3 3.3 4.3 8a11 11 0 0 1-3.8 8.4c-2.8 2.3-6 2.6-9.5 2.8h-3.9l-6-.3h-5ZM36.2 10c0-2.2 0-5.1-1.1-7.2L33.8 1h11c-.4.8-.4 1-.4 1.5 0 1 1 3.6 2.1 6.5l1.5 4.3 6.3 18.4 2.2-7 3-8.6 2.1-6.3 1.5-4.1q.9-2.5 1-3.3 0-.5-.6-1.4h11.3l-1.2 1.1C72 4 72 7.4 72 9.7v20.9c0 3.9.3 4.7 2.5 7.9H64.3c1-1 1.5-1.4 2-2.7q.8-2.5.8-5V13.3l.3-8Q63.5 17.7 59 30l-1.7 5.2q-.4 1.1-.4 1.7.2 1 .5 1.4h-6.7c.1-.2.6-.8.6-1.5q0-.5-.4-1.5l-.5-1.6-1.2-3.4-2.6-7.3-6-17.4.1 8.6.2 14.3.1 3c.2 3.4.6 4.2 2.6 6.8h-9.9L35 37c1.3-2.2 1.3-4.8 1.3-7.4Zm44.5-.4-.1-3.2C80.2 3.4 79 2 78.2 1h20.5c4 0 3.8.2 6.1-1v11.9c-1-2.7-2.5-6-8.7-6.9l-4-.2s-2.5 0-4 .4l-1 .6c-1.6 1.2-1.4 3.6-1.5 4V17l3.2.2h3.4c.5 0 3.4-.1 5.3-1.3q1.3-.9 2-2.1v10.5L98 22.5c-1.5-1.3-3.3-1.4-5.4-1.6h-3.8l-3 .2v8.5c0 .8-.2 3.3 2.2 4.4q1.3.5 5 .6c.8 0 4.6 0 7.5-1.2 3-1.3 4.2-3.5 5.6-6.4v12.7c-1.7-1.3-2-1.2-4-1.2H77.8l1.3-1.3c1.7-2.1 1.6-5.4 1.6-7.8Zm0 0", et = 106.019, tt = 39.664, nt = `0 0 ${String(et)} ${String(tt)}`, rt = "#000";
function it({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: nt,
		overflow: "visible",
		role: e,
		"aria-label": "BME",
		color: rt,
		...t,
		children: /* @__PURE__ */ g("path", {
			d: $e,
			fill: "currentColor"
		})
	});
}
// src/logos/FtsrgName.tsx
var at = {
	en: ["Critical Systems", "Research Group"],
	hu: ["Kritikus Rendszerek", "Kutatócsoport"]
}, ot = 1.005, st = .25, ct = .705, lt = s("span", {
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
function ut({ lang: e, ...t }) {
	let [n, r] = e === "hu" ? at.hu : at.en;
	return /* @__PURE__ */ _(lt, {
		...t,
		children: [
			n,
			/* @__PURE__ */ g("br", {}),
			r
		]
	});
}
// src/logos/MitLogo.tsx
var dt = {
	en: [
		"Department of",
		"Artificial Intelligence and",
		"Systems Engineering"
	],
	hu: [
		"Mesterséges Intelligencia és",
		"Rendszertervezés",
		"Tanszék"
	]
}, ft = 10.5336, pt = {
	en: [
		[66.619, 15.976],
		[65.625, 29.196],
		[66.208, 42.417]
	],
	hu: [
		[66.619, 15.976],
		[66.619, 29.196],
		[65.661, 42.417]
	]
}, mt = "M17.4 40.7V14.2a1.5 1.5 0 0 1 1.5-1.5h1.3a1.5 1.5 0 0 1 1.5 1.5v18.4a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.6 1.5v14a1.5 1.5 0 0 0 1.5 1.5h18.5a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 1 1.5-1.4h1a1.5 1.5 0 0 0 1.6-1.5v-1.4a1.5 1.5 0 0 0-1.5-1.5h-1.1a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 0 50.3 4h-1.5a1.5 1.5 0 0 0-1.5 1.5v26.8a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.6-1.5v-10a1.5 1.5 0 0 0-1.5-1.4h-1.4a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.4h-1a1.5 1.5 0 0 1-1.5-1.5V18.2a1.5 1.5 0 0 0-1.5-1.5h-5.6a1.5 1.5 0 0 1-1.5-1.5V9.4a1.5 1.5 0 0 0-1.5-1.5H14.4a1.5 1.5 0 0 0-1.5 1.5v31.3a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5", ht = "M39.1 40.7h4v8h-4zm-33.7.2h2.2q1 .1 1.1 1v5.7q-.1 1-1.1 1H5.4q-1.1 0-1.2-1V42q0-1 1.2-1.1zM47.5 40.7h2.8a1.3 1.3 0 0 1 1.2 1.2v5.7a1 1 0 0 1-1 1h-3z", gt = "M23.2 36.8h1.5q1.2.1 1.3 1.3v9.3q-.1 1.2-1.3 1.3h-1.5q-1.1-.1-1.2-1.3v-9.3q0-1.2 1.2-1.3zm-8.7 7.9h1.3q1.3.1 1.4 1.4v1.2q-.1 1.3-1.4 1.4h-1.3q-1.3-.1-1.4-1.4V46q.1-1.3 1.4-1.4zm17.3-4h2.8v8h-3a1 1 0 0 1-1-1.1l-.1-5.5a1.3 1.3 0 0 1 1.3-1.4zM57.5 40.7h1.9q1 .1 1.1 1.1v5.7q-.1 1.1-1.1 1.2h-1.9q-1 0-1.2-1.2v-5.7q0-1 1.2-1.1z", _t = .458, vt = {
	x: 38.82,
	y: 12.789,
	width: 4.407,
	height: 4.074,
	rx: 1.214
}, j = "#810f29", yt = "#000", bt = 3.971, xt = 4, St = 56.758, Ct = 44.929, wt = 60.729, Tt = 123.02399999999999, Et = 141.829;
function Dt(e, t) {
	return [
		e,
		xt,
		t,
		Ct
	].map(String).join(" ");
}
function Ot({ role: e = "img", ...t }) {
	return /* @__PURE__ */ _("svg", {
		viewBox: Dt(bt, St),
		overflow: "visible",
		role: e,
		"aria-label": "MIT",
		color: j,
		...t,
		children: [
			/* @__PURE__ */ g("path", {
				d: mt,
				fill: "currentColor"
			}),
			/* @__PURE__ */ _("g", {
				stroke: "currentColor",
				strokeWidth: _t,
				children: [/* @__PURE__ */ g("path", {
					d: ht,
					fill: "currentColor"
				}), /* @__PURE__ */ g("path", {
					d: gt,
					fill: "none"
				})]
			}),
			/* @__PURE__ */ g("rect", {
				...vt,
				fill: yt
			})
		]
	});
}
function kt({ language: e, viewBoxWidth: t, ...n }) {
	let r = pt[e];
	return /* @__PURE__ */ g("svg", {
		viewBox: Dt(wt, t),
		overflow: "visible",
		color: j,
		"aria-hidden": "true",
		...n,
		children: /* @__PURE__ */ g("text", {
			fontFamily: "'MIT Label'",
			fontSize: ft,
			fill: "currentColor",
			style: { fontKerning: "normal" },
			children: dt[e].map((e, t) => /* @__PURE__ */ g("tspan", {
				x: r[t]?.[0],
				y: r[t]?.[1],
				children: e
			}, e))
		})
	});
}
function At(e) {
	return /* @__PURE__ */ g(kt, {
		language: "en",
		viewBoxWidth: Tt,
		...e
	});
}
function jt(e) {
	return /* @__PURE__ */ g(kt, {
		language: "hu",
		viewBoxWidth: Et,
		...e
	});
}
// src/logos/VikLogo.tsx
var Mt = "m22.5 58.8.1-.4 1.5-4.5q.2-.4-.3-.7a21 21 0 0 1-7.5-13.1 21 21 0 0 1 20.2-24q.5 0 .8-.5l2.5-3.7.1-.3c-10-1.4-22.7 4-27.4 17a26 26 0 0 0 10 30.2m-1.2 12.5a37.4 37.4 0 1 1 41-61.7H62l-8.7-1.2-7.1-1q-.7 0-1.1.5A106 106 0 0 0 33 24.6q-3 5.2-5.6 10.6l-.6 1.3 5.4 2.7a67 67 0 0 0-5.7 11.2 95 95 0 0 0-3.9 12q-1.7-1.5-3.5-2.8zm9.1-9c9 2.7 22.4-.2 29.2-12.4a26 26 0 0 0-3.9-30.4l-3.3 3.1v.2l.5.5a21 21 0 0 1 2.8 23 21 21 0 0 1-21.8 11.3q-.4 0-.7.3l-2 3zm32.8-52a37.3 37.3 0 0 1-41.6 61.1l10.9-6.7v-.2l-4.4-.8a139 139 0 0 1 20.7-28l-7.5-2.9.3-.4q1.7-3 4-5.4 5.1-5.7 10.7-10.7l6.7-6z", Nt = 74.951, Pt = 74.983, Ft = `0 0 ${String(Nt)} ${String(Pt)}`, M = "#211261";
function It({ role: e = "img", ...t }) {
	return /* @__PURE__ */ g("svg", {
		viewBox: Ft,
		overflow: "visible",
		role: e,
		"aria-label": "VIK",
		color: M,
		...t,
		children: /* @__PURE__ */ g("path", {
			d: Mt,
			fill: "currentColor"
		})
	});
}
// src/logos/VikName.tsx
var Lt = {
	en: [
		"FACULTY OF",
		"ELECTRICAL ENGINEERING",
		"AND INFORMATICS"
	],
	hu: [
		"VILLAMOSMÉRNÖKI",
		"ÉS INFORMATIKAI",
		"KAR"
	]
}, Rt = 16.941, zt = 18.04, Bt = 91.6, Vt = s("span", {
	name: "VikName",
	slot: "Root"
})({
	display: "block",
	fontFamily: "'VIK Name', Montserrat, sans-serif",
	fontStyle: "normal",
	fontWeight: 425,
	letterSpacing: "0.083em",
	whiteSpace: "nowrap"
});
function Ht({ lang: e, ...t }) {
	let [n, r, i] = e === "hu" ? Lt.hu : Lt.en;
	return /* @__PURE__ */ _(Vt, {
		...t,
		children: [
			n,
			/* @__PURE__ */ g("br", {}),
			r,
			/* @__PURE__ */ g("br", {}),
			i
		]
	});
}
// src/logos/Logos.tsx
var N = l("FtsrgLogos", [
	"root",
	"separator",
	"link",
	"image",
	"label"
]), Ut = s("div", {
	name: "FtsrgLogos",
	slot: "Root"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	"&:has(.FtsrgLogos-link:is(:hover, :focus-within)) > *:not(.FtsrgLogos-link:is(:hover, :focus-within))": { filter: "brightness(0%) opacity(0.34)" },
	"& > *": {
		willChange: "filter",
		"@media (prefers-reduced-motion: no-preference)": { transition: e.transitions.create("filter", {
			duration: e.transitions.duration.standard,
			easing: e.transitions.easing.easeInOut
		}) }
	}
})), P = s("div", {
	name: "FtsrgLogos",
	slot: "Separator",
	shouldForwardProp: (e) => e !== "color"
})(({ color: e }) => ({
	height: "46px",
	width: "1px",
	backgroundColor: e,
	marginInline: "12px"
})), F = s("a", {
	name: "FtsrgLogos",
	slot: "Link"
})({
	display: "flex",
	textDecoration: "none",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center"
}), Wt = s(ut, {
	name: "FtsrgLogos",
	slot: "Label"
})({
	marginInlineStart: 16,
	fontSize: 22.75,
	lineHeight: "28px",
	color: x
}), Gt = 64, I = 2.5 / 170 * Gt, L = Gt - 2 * I, R = L / Pt, Kt = s(Ht, {
	name: "FtsrgLogos",
	slot: "Label"
})({
	marginInlineStart: (Bt - Nt) * R,
	marginInlineEnd: I,
	fontSize: Rt * R,
	lineHeight: `${String(zt * R)}px`,
	color: M
});
function qt({ lang: e = "en", compact: t = !1 }) {
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
	}, r = e === "hu" ? jt : At;
	return /* @__PURE__ */ _(Ut, {
		className: N.root,
		...e === n.lang ? {} : { lang: n.lang },
		children: [
			/* @__PURE__ */ g(F, {
				href: "https://www.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.bme,
				className: N.link,
				children: /* @__PURE__ */ g(it, {
					height: tt * R,
					role: "presentation",
					"aria-label": void 0,
					style: { margin: I },
					className: N.image
				})
			}),
			/* @__PURE__ */ g(P, {
				color: rt,
				className: N.separator
			}),
			/* @__PURE__ */ _(F, {
				href: "https://vik.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.vik,
				className: N.link,
				children: [/* @__PURE__ */ g(It, {
					height: L,
					role: "presentation",
					"aria-label": void 0,
					style: {
						margin: I,
						marginInlineEnd: t ? I : 0
					},
					className: N.image
				}), !t && /* @__PURE__ */ g(Kt, {
					lang: n.lang,
					"aria-hidden": "true",
					className: N.label
				})]
			}),
			/* @__PURE__ */ g(P, {
				color: M,
				className: N.separator
			}),
			/* @__PURE__ */ _(F, {
				href: "https://mit.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.mit,
				className: N.link,
				children: [/* @__PURE__ */ g(Ot, {
					height: L,
					role: "presentation",
					"aria-label": void 0,
					style: {
						margin: I,
						marginInlineEnd: t ? I : 0
					},
					className: N.image
				}), !t && /* @__PURE__ */ g(r, {
					height: L,
					style: {
						marginBlock: I,
						marginInlineEnd: I
					},
					className: N.label
				})]
			}),
			/* @__PURE__ */ g(P, {
				color: j,
				className: N.separator
			}),
			/* @__PURE__ */ _(F, {
				href: "https://ftsrg.mit.bme.hu",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": n.ftsrg,
				className: N.link,
				children: [/* @__PURE__ */ g(me, {
					height: L,
					role: "presentation",
					"aria-label": void 0,
					style: { margin: I },
					className: N.image
				}), !t && /* @__PURE__ */ g(Wt, {
					lang: n.lang,
					"aria-hidden": "true",
					className: N.label
				})]
			})
		]
	});
}
var Jt = ne, z = {
	x: .5,
	y: .75,
	inner: "#1a191a",
	outer: "#2d2f2e"
}, Yt = "--FtsrgTitleMaster-gradientX", Xt = "--FtsrgTitleMaster-gradientY", Zt = s("section", {
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
}), Qt = s("div", {
	name: "FtsrgTitleMaster",
	slot: "RunningTitle"
})(({ theme: e }) => ({
	position: "absolute",
	right: e.spacing(5),
	top: "40px",
	transform: "translate(0, -50%)",
	fontSize: 24
})), $t = s("main", {
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
	backgroundImage: `url(${ne}), radial-gradient(circle at var(${Yt}, ${String(z.x * 100)}%) var(${Xt}, ${String(z.y * 100)}%), ${z.inner} 0%, ${z.outer} 100%)`,
	backgroundSize: "contain",
	gap: e.spacing(3),
	padding: e.spacing(0, 16)
})), en = s("h1", {
	name: "FtsrgTitleMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), tn = s("div", {
	name: "FtsrgTitleMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
})), nn = s("aside", {
	name: "FtsrgTitleMaster",
	slot: "Footer"
})({
	display: "flex",
	flexGrow: 1,
	flexDirection: "row",
	justifyContent: "center"
});
function rn(e) {
	let t = e.currentTarget.getBoundingClientRect();
	return {
		x: (e.clientX - t.left) / t.width,
		y: (e.clientY - t.top) / t.height
	};
}
function an(e) {
	let { title: t, children: n } = u({
		props: e,
		name: "FtsrgTitleMaster"
	}), { metadata: { event: r }, lang: o } = i(), { lang: s } = a(), c = h(null), l = Qe(z, ({ x: e, y: t }) => {
		c.current?.style.setProperty(Yt, `${String(e * 100)}%`), c.current?.style.setProperty(Xt, `${String(t * 100)}%`);
	});
	return /* @__PURE__ */ _(Zt, { children: [/* @__PURE__ */ _($t, {
		ref: c,
		onPointerEnter: (e) => {
			l.enter(rn(e));
		},
		onPointerMove: (e) => {
			l.move(rn(e));
		},
		onPointerLeave: () => {
			l.leave();
		},
		children: [t !== void 0 && /* @__PURE__ */ g(en, { children: t }), n !== void 0 && /* @__PURE__ */ g(tn, { children: n })]
	}), /* @__PURE__ */ _(nn, { children: [r && /* @__PURE__ */ g(Qt, {
		...o === s ? {} : { lang: o },
		children: r
	}), /* @__PURE__ */ g(qt, { lang: s })] })] });
}
// src/master/FtsrgSectionMaster.tsx
var B = 312, V = (t - B) / 2, H = V + B, U = n / 2 - 6, W = 4, G = V + W / 2, K = H - W / 2, q = W * Math.hypot(1, v), J = n / 2 + 6 + q / 2, on = U - q / 2;
function Y(e, n) {
	return e + (t / 2 - n) * v;
}
var sn = [
	[0, V],
	[Y(U, V), V],
	[Y(U, H), H],
	[0, H]
].join(" "), cn = [
	[-4, G],
	[Y(on, G), G],
	[Y(on, K), K],
	[-4, K]
].join(" "), ln = [
	[Y(J, G), G],
	[n + W, G],
	[n + W, K],
	[Y(J, K), K]
].join(" "), un = s("svg", {
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
}), dn = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Block",
	shouldForwardProp: (e) => e !== "filled"
})(({ theme: e, filled: t }) => ({
	position: "absolute",
	top: V,
	left: 0,
	width: t ? Y(U, H) : Y(U - q, H - W),
	height: B,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(0, 8),
	color: t ? e.palette.primary.contrastText : void 0
})), fn = Y(J + q / 2, V + W), pn = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Aside"
})(({ theme: e }) => ({
	position: "absolute",
	top: V + W,
	left: fn,
	right: 0,
	height: 304,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: e.spacing(3),
	padding: e.spacing(0, 8, 0, 4),
	"& > *": { margin: 0 }
})), mn = s("h1", {
	name: "FtsrgSectionMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h2,
	margin: 0
})), hn = s("div", {
	name: "FtsrgSectionMaster",
	slot: "Subtitle"
})(({ theme: e }) => ({
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
}));
function gn({ filled: e }) {
	let { palette: r } = c();
	return /* @__PURE__ */ _(un, {
		viewBox: `0 0 ${String(n)} ${String(t)}`,
		children: [e ? /* @__PURE__ */ g(yn, {}) : /* @__PURE__ */ g("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: W,
			points: cn
		}), /* @__PURE__ */ g("polygon", {
			fill: "none",
			stroke: r.neutral.main,
			strokeWidth: W,
			points: ln
		})]
	});
}
function _n({ x: e, y: t }) {
	return t >= V && t <= H && e >= 0 && e <= Y(U, t);
}
var X = {
	x: n * z.x,
	y: 80 + 480 * z.y
};
function vn({ x: e, y: t }) {
	return Math.hypot(Math.max(e, n - e), Math.max(t - 80, 560 - t));
}
function yn() {
	let e = m(), t = m(), r = h(null), i = h(null), a = Qe(X, (e) => {
		let t = i.current;
		t?.setAttribute("cx", String(e.x)), t?.setAttribute("cy", String(e.y)), t?.setAttribute("r", String(vn(e)));
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
			_n(s) ? n ? a.move(s) : (n = !0, a.enter(s)) : n && (n = !1, a.leave());
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
		cx: X.x,
		cy: X.y,
		r: vn(X),
		children: [/* @__PURE__ */ g("stop", {
			offset: "0",
			stopColor: z.inner
		}), /* @__PURE__ */ g("stop", {
			offset: "1",
			stopColor: z.outer
		})]
	}), /* @__PURE__ */ g("clipPath", {
		id: e,
		children: /* @__PURE__ */ g("polygon", { points: sn })
	})] }), /* @__PURE__ */ _("g", {
		ref: r,
		clipPath: `url(#${e})`,
		children: [/* @__PURE__ */ g("rect", {
			y: 80,
			width: n,
			height: 480,
			fill: `url(#${t})`
		}), /* @__PURE__ */ g("image", {
			href: Jt,
			y: 80,
			width: n,
			height: 480,
			preserveAspectRatio: "xMidYMid meet"
		})]
	})] });
}
function bn(t) {
	return f(t) && (t.type === e || t.type === "p");
}
function xn(e) {
	let t = d.toArray(e).filter((e) => typeof e != "string" || e.trim() !== "");
	if (t.length > 0 && bn(t[0])) {
		let [e, ...n] = t;
		return [e, n];
	}
	return [void 0, t];
}
function Sn({ title: e, children: t, filled: n, ...r }) {
	let [i, a] = xn(t);
	return /* @__PURE__ */ _(Je, {
		...r,
		children: [
			/* @__PURE__ */ g(gn, { filled: n }),
			/* @__PURE__ */ _(dn, {
				filled: n,
				children: [e !== void 0 && /* @__PURE__ */ g(mn, { children: e }), i !== void 0 && /* @__PURE__ */ g(hn, { children: i })]
			}),
			a.length > 0 && /* @__PURE__ */ g(pn, { children: a })
		]
	});
}
function Cn(e) {
	let t = u({
		props: e,
		name: "FtsrgSectionMaster"
	});
	return /* @__PURE__ */ g(Sn, {
		...t,
		filled: !0
	});
}
function wn(e) {
	let t = u({
		props: e,
		name: "FtsrgSubsectionMaster"
	});
	return /* @__PURE__ */ g(Sn, {
		...t,
		filled: !1
	});
}
// src/master/WebIcon.tsx
var Tn = "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z", En = {
	x: 3,
	y: 3,
	width: 18,
	height: 18,
	rx: 2
}, Dn = .65;
function On(e) {
	let t = m();
	return /* @__PURE__ */ _(oe, {
		...e,
		children: [/* @__PURE__ */ g("defs", { children: /* @__PURE__ */ _("mask", {
			id: t,
			children: [/* @__PURE__ */ g("rect", {
				...En,
				fill: "#fff"
			}), /* @__PURE__ */ g("path", {
				d: Tn,
				fill: "#000",
				transform: `translate(12 12) scale(${String(Dn)}) translate(-12 -12)`
			})]
		}) }), /* @__PURE__ */ g("rect", {
			...En,
			mask: `url(#${t})`
		})]
	});
}
// src/master/FtsrgStatementMaster.tsx
var Z = 80, Q = 96, kn = Q + ct * Z, An = (Q - (ot + st) * Z) / 2 + (ot - ct) * Z, jn = [
	{
		href: "https://ftsrg.mit.bme.hu",
		label: "ftsrg.mit.bme.hu",
		Icon: On,
		title: "Web"
	},
	{
		href: "https://www.facebook.com/ftsrg",
		label: "ftsrg",
		Icon: ie,
		title: "Facebook"
	},
	{
		href: "https://www.linkedin.com/company/ftsrg",
		label: "ftsrg",
		Icon: ae,
		title: "LinkedIn"
	}
], Mn = "nolinks", Nn = "light", $ = (e) => e !== "light", Pn = s("section", {
	name: "FtsrgStatementMaster",
	slot: "Root",
	shouldForwardProp: $
})(({ theme: e, light: t }) => ({
	position: "relative",
	width: "100%",
	height: "100%",
	backgroundColor: t ? "#fff" : "#000",
	color: t ? e.palette.text.primary : "#fff"
})), Fn = s("main", {
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
})), In = s("div", {
	name: "FtsrgStatementMaster",
	slot: "Brand",
	shouldForwardProp: $
})(({ light: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "flex-start",
	gap: 64,
	color: e ? x : void 0
})), Ln = {
	display: "block",
	height: kn,
	marginTop: An
}, Rn = s(pe, {
	name: "FtsrgStatementMaster",
	slot: "Logo"
})(Ln), zn = s(me, {
	name: "FtsrgStatementMaster",
	slot: "Logo"
})(Ln), Bn = s(ut, {
	name: "FtsrgStatementMaster",
	slot: "Name"
})({
	fontSize: Z,
	lineHeight: `${String(Q)}px`,
	textAlign: "start"
}), Vn = s("h1", {
	name: "FtsrgStatementMaster",
	slot: "Title"
})(({ theme: e }) => ({
	...e.typography.h1,
	margin: 0
})), Hn = s("div", {
	name: "FtsrgStatementMaster",
	slot: "Content"
})(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	...e.typography.subtitle1,
	"& > *": { margin: 0 }
})), Un = s("nav", {
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
})), Wn = s("a", {
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
		outline: `2px solid ${t ? fe : "currentColor"}`,
		outlineOffset: "0.15em",
		borderRadius: e.shape.borderRadius
	}
}));
function Gn(e) {
	return d.toArray(e).some((e) => typeof e != "string" || e.trim() !== "");
}
function Kn(e) {
	let { title: t, children: n, className: r } = u({
		props: e,
		name: "FtsrgStatementMaster"
	}), { lang: i } = a(), o = Gn(n), s = r?.split(/\s+/) ?? [], c = !s.includes(Mn), l = s.includes(Nn);
	return /* @__PURE__ */ _(Pn, {
		className: r,
		light: l,
		children: [/* @__PURE__ */ g(Fn, { children: t === void 0 && !o ? /* @__PURE__ */ _(In, {
			light: l,
			children: [g(l ? zn : Rn, {}), /* @__PURE__ */ g(Bn, { lang: i })]
		}) : /* @__PURE__ */ _(te, { children: [t !== void 0 && /* @__PURE__ */ g(Vn, { children: t }), o && /* @__PURE__ */ g(Hn, { children: n })] }) }), c && /* @__PURE__ */ g(Un, {
			light: l,
			children: jn.map(({ href: e, label: t, Icon: n, title: r }) => /* @__PURE__ */ _(Wn, {
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
function qn(e) {
	if (e === void 0) return;
	let t = String(e).trim();
	return t !== "" && Number.isFinite(Number(t)) ? `${t}px` : t;
}
var Jn = r({
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
		title: an,
		content: Ye,
		section: Cn,
		subsection: wn,
		statement: Kn
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
		SeminarColumns: {
			defaultProps: {
				radius: 0,
				variant: "slanted"
			},
			styleOverrides: { root: ({ theme: e, ownerState: t }) => ({
				"--FtsrgColumns-gap": qn(t.gap) ?? e.spacing(4),
				"--FtsrgColumns-edge": "0px"
			}) }
		},
		SeminarColumn: {
			defaultProps: { headingVariant: "h3" },
			styleOverrides: {
				root: ({ theme: e, ownerState: t }) => {
					let n = t.color === "neutral", r = {
						"--FtsrgColumn-accent": n ? e.palette.neutral.dark : "var(--SeminarColumn-palette-main)",
						"& > .SeminarColumn-content > :not(.SeminarColumn-heading) strong": { color: n ? e.palette.text.primary : "var(--FtsrgColumn-accent)" }
					}, i = {
						"--SeminarColumn-heading-color": n ? "#fff" : "var(--SeminarColumn-palette-contrastText)",
						"--SeminarColumn-heading-background": "var(--FtsrgColumn-accent)"
					};
					switch (t.variant) {
						case void 0:
						case "plain": return {
							...r,
							"--SeminarColumn-heading-color": "var(--FtsrgColumn-accent)"
						};
						case "card": return {
							...r,
							...i,
							"--SeminarColumn-backgroundColor": e.palette.neutral.light
						};
						case "slanted": return {
							...r,
							...i,
							"--FtsrgColumn-start": "calc(var(--FtsrgColumns-gap) / 2 - 6px)",
							"--FtsrgColumn-end": "calc(var(--FtsrgColumns-gap) / 2 - 6px)",
							"--FtsrgColumn-start-clip": "-100%",
							"--FtsrgColumn-end-clip": "-100%",
							"&:not(:not(style) ~ *)": {
								"--FtsrgColumn-start": "var(--FtsrgColumns-edge)",
								"--FtsrgColumn-start-clip": "0px",
								"& > .SeminarColumn-content > .SeminarColumn-heading::before": { left: "-100%" }
							},
							"&:last-child": {
								"--FtsrgColumn-end": "var(--FtsrgColumns-edge)",
								"--FtsrgColumn-end-clip": "0px",
								"& > .SeminarColumn-content > .SeminarColumn-heading::before": { right: "-100%" }
							}
						};
					}
				},
				heading: ({ theme: e, ownerState: t }) => {
					let n = {
						fontWeight: e.typography.fontWeightRegular,
						"&& strong": { color: "inherit" }
					};
					switch (t.variant) {
						case void 0:
						case "plain": return {
							...n,
							margin: `0 0 ${e.spacing(3)}`,
							padding: `${e.spacing(3)} 0`
						};
						case "card": return {
							...n,
							margin: "calc(-1 * var(--SeminarColumn-padding)) calc(-1 * var(--SeminarColumn-padding)) var(--SeminarColumn-padding)",
							padding: `${e.spacing(3)} var(--SeminarColumn-padding)`
						};
						case "slanted": return {
							...n,
							position: "relative",
							zIndex: 0,
							margin: `0 calc(-1 * var(--FtsrgColumn-end)) ${e.spacing(3)} calc(-1 * var(--FtsrgColumn-start))`,
							padding: e.spacing(3),
							backgroundColor: "transparent",
							clipPath: "inset(-1px var(--FtsrgColumn-end-clip) -1px var(--FtsrgColumn-start-clip))",
							"&::before": {
								content: "\"\"",
								position: "absolute",
								zIndex: -1,
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								backgroundColor: "var(--SeminarColumn-heading-background)",
								transform: `skewX(${String(-se)}deg)`
							}
						};
					}
				}
			}
		}
	}
});
export { Jn as default };
