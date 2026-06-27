/* @ds-bundle: {"format":3,"namespace":"GAEAAIDesignSystem_8f501d","components":[],"sourceHashes":{"ui_kits/marketing/Chrome.jsx":"334c1a8ba7a5","ui_kits/marketing/Components.jsx":"a9e77501b7ed","ui_kits/marketing/Screens.jsx":"e3f52912ce2d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GAEAAIDesignSystem_8f501d = window.GAEAAIDesignSystem_8f501d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/Chrome.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, children);
}
function Button({
  variant = 'primary',
  children,
  onClick,
  arrow = true
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `btn btn--${variant}`,
    onClick: onClick
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": true
  }, "\u2192"));
}
function Header({
  screen,
  setScreen
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = document.querySelector('.app-main');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    (el || window).addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => (el || window).removeEventListener('scroll', onScroll);
  }, []);
  const nav = [{
    k: 'company',
    label: 'Company'
  }, {
    k: 'products',
    label: 'Products'
  }, {
    k: 'platform',
    label: 'Platform'
  }, {
    k: 'news',
    label: 'News'
  }, {
    k: 'careers',
    label: 'Careers'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: `site-header${scrolled ? ' is-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header__inner container"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: () => setScreen('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/gaea-ai-logo-white.svg",
    alt: "GAEA AI",
    className: "brand__logo"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.k,
    className: `site-nav__link${screen === n.k ? ' is-active' : ''}`,
    onClick: () => setScreen(n.k)
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "site-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setScreen('contact')
  }, "Contact"))));
}
function Footer({
  setScreen
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container site-footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "brand-line",
    onClick: () => setScreen('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/gaea-ai-logo-white.svg",
    alt: "GAEA AI",
    className: "brand-line__logo"
  })), /*#__PURE__*/React.createElement("p", {
    className: "tagline"
  }, "Real-world observational AI.")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h4", null, "Products"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('verify')
  }, "GAEA Verify"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('products')
  }, "GAEA Scene"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('products')
  }, "GAEA Sentinel"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('platform')
  }, "KAIRUS platform")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('company')
  }, "About"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('news')
  }, "News & GAEA Talks"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('careers')
  }, "Careers"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setScreen('contact')
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h4", null, "Elsewhere"), /*#__PURE__*/React.createElement("a", null, "YouTube \u2014 GAEA Talks"), /*#__PURE__*/React.createElement("a", null, "graeme.scott@gaeaai.com"), /*#__PURE__*/React.createElement("a", null, "www.gaeaai.com"))), /*#__PURE__*/React.createElement("div", {
    className: "container site-footer__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "\xA9 ", year, " GAEA AI Ltd. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "mono dim"
  }, "ISO 27001 / 9001 / 42001 \u2014 in progress")));
}
Object.assign(window, {
  Eyebrow,
  Button,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Components.jsx
try { (() => {
function VideoHero({
  eyebrow,
  title,
  lead,
  metaLeft,
  metaRight,
  actions,
  variant = 'full'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `hero hero--${variant}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__placeholder",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__slot-label mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " Video slot \u2014 drop your asset here")), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero__content"
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", null, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta container mono"
  }, /*#__PURE__*/React.createElement("span", null, metaLeft || `GAEA AI / ${new Date().getFullYear()}`), /*#__PURE__*/React.createElement("span", null, metaRight || 'Real-world observational AI')));
}
function ProductCard({
  index,
  name,
  tagline,
  description,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "product-card",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-card__video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Video loop \u2014 ", name))), /*#__PURE__*/React.createElement("div", {
    className: "product-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono index"
  }, index, " /"), /*#__PURE__*/React.createElement("h3", null, name), /*#__PURE__*/React.createElement("p", {
    className: "tag"
  }, tagline), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, description), /*#__PURE__*/React.createElement("span", {
    className: "more mono"
  }, "Explore ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))));
}
function FeatureRow({
  number,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "feature-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono num"
  }, number), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body));
}
function StatBlock({
  value,
  label,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "stat__label"
  }, label), note && /*#__PURE__*/React.createElement("div", {
    className: "stat__note"
  }, note));
}
function CompareTable() {
  return /*#__PURE__*/React.createElement("div", {
    className: "table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, "GAEA Verify"), /*#__PURE__*/React.createElement("th", null, "GAEA Scene"), /*#__PURE__*/React.createElement("th", null, "GAEA Sentinel"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Core function"), /*#__PURE__*/React.createElement("td", null, "Asset authentication & provenance"), /*#__PURE__*/React.createElement("td", null, "Scene understanding & visual search"), /*#__PURE__*/React.createElement("td", null, "Behavioural detection & event notification")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Primary question"), /*#__PURE__*/React.createElement("td", null, "\"Is this asset genuine?\""), /*#__PURE__*/React.createElement("td", null, "\"What is happening in my site right now?\""), /*#__PURE__*/React.createElement("td", null, "\"What behaviour should I be concerned about?\"")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Camera requirement"), /*#__PURE__*/React.createElement("td", null, "Dedicated sensor station(s)"), /*#__PURE__*/React.createElement("td", null, "Existing estate (8+)"), /*#__PURE__*/React.createElement("td", null, "Existing estate")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Deployment"), /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, "Local, single-site")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Anchor reference"), /*#__PURE__*/React.createElement("td", null, "Watchfinder & Co"), /*#__PURE__*/React.createElement("td", null, "Richemont / JP Morgan"), /*#__PURE__*/React.createElement("td", null, "JP Morgan")))));
}
Object.assign(window, {
  VideoHero,
  ProductCard,
  FeatureRow,
  StatBlock,
  CompareTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState: useState2
} = React;
const PRODUCTS = [{
  index: '01',
  screenKey: 'verify',
  name: 'GAEA Verify',
  tagline: "Know what you're holding. Know where it's been.",
  description: 'Single-location, sensor-driven authentication. Visual fingerprinting and geotemporal provenance.'
}, {
  index: '02',
  key: 'products',
  name: 'GAEA Scene',
  tagline: 'Ask your site anything.',
  description: 'Turn existing camera estates into an intelligent, queryable surface.'
}, {
  index: '03',
  screenKey: 'products',
  name: 'GAEA Sentinel',
  tagline: 'See the behaviour before the incident.',
  description: 'Behavioural detection and event notification.'
}];
function HomeScreen({
  setScreen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoHero, {
    eyebrow: "KAIRUS PRODUCTS + PLATFORM",
    title: "Three vision products. One observational AI platform.",
    lead: "Each product is a self-contained purchase with rapid time-to-value. Each deploys locally. Each is a natural pathway into the full KAIRUS platform.",
    metaLeft: "Powered by KAIRUS / LGM",
    metaRight: "Context-driven observational AI"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid--3"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p, {
    onClick: () => setScreen(p.screenKey === 'verify' ? 'verify' : 'products')
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section comparison"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Comparison"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Sold and deployed independently. Designed to work together."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem'
    }
  }, /*#__PURE__*/React.createElement(CompareTable, null)))), /*#__PURE__*/React.createElement("section", {
    className: "section platform-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container platform-band__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "KAIRUS platform"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "One observational AI, built on the LGM."), /*#__PURE__*/React.createElement("p", {
    className: "section-lead"
  }, "KAIRUS is the reasoning layer beneath every GAEA product. It watches the real world, connects what it sees, and answers the questions your operators cannot."), /*#__PURE__*/React.createElement("div", {
    className: "actions",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setScreen('platform')
  }, "Discover KAIRUS"))), /*#__PURE__*/React.createElement("div", {
    className: "platform-band__video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "KAIRUS \u2014 observational loop"))))), /*#__PURE__*/React.createElement("section", {
    className: "section trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Already trusted by"), /*#__PURE__*/React.createElement("div", {
    className: "trust__row",
    style: {
      marginTop: '2rem'
    }
  }, ['Cartier', 'Richemont', 'Watchfinder & Co', 'JP Morgan'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "trust__name mono"
  }, c))))), /*#__PURE__*/React.createElement("section", {
    className: "section proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container grid grid--3"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "Richemont",
    label: "Signed platform customer",
    note: "Cartier \u2014 anchor reference."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "Watchfinder",
    label: "Deployed product partner",
    note: "Live on GAEA Verify."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "JP Morgan",
    label: "Active engagement",
    note: "Behavioural & scene scoping."
  }))));
}
function ProductsScreen({
  setScreen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoHero, {
    eyebrow: "Products",
    title: "Multiple vision AI capabilities. One observational AI platform.",
    metaLeft: "Products / 2026",
    metaRight: "Powered by KAIRUS"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid--3"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p, {
    onClick: () => setScreen('verify')
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section comparison"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Comparison"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Sold and deployed independently. Designed to work together."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem'
    }
  }, /*#__PURE__*/React.createElement(CompareTable, null)))));
}
function VerifyScreen({
  setScreen
}) {
  const features = [{
    n: '01',
    t: 'Visual fingerprinting',
    b: 'A unique identity for each physical asset based on its visual and contextual characteristics — far beyond serial numbers or RFID.'
  }, {
    n: '02',
    t: 'Geotemporal provenance',
    b: 'A full trail of where every asset has been, when, and in what context.'
  }, {
    n: '03',
    t: 'Asset register integration',
    b: 'Connects directly to existing asset management systems.'
  }, {
    n: '04',
    t: 'Tampering & substitution detection',
    b: 'Identifies counterfeits and asset swaps that defeat conventional methods.'
  }, {
    n: '05',
    t: 'Local deployment',
    b: 'Runs on-site for data residency, low latency and full operator control.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoHero, {
    eyebrow: "Product 01 \u2014 GAEA Verify",
    title: "Know what you're holding. Know where it's been.",
    lead: "Sensor-driven authentication for high-value physical assets. Visual fingerprinting and geotemporal provenance, powered by KAIRUS.",
    metaLeft: "Verify / 01",
    metaRight: "Anchor reference \u2014 Watchfinder & Co",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setScreen('contact')
    }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      arrow: false,
      onClick: () => setScreen('platform')
    }, "KAIRUS platform"))
  }), /*#__PURE__*/React.createElement("section", {
    className: "section features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Key features"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Evidence where it matters."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem'
    }
  }, features.map(f => /*#__PURE__*/React.createElement(FeatureRow, {
    key: f.n,
    number: f.n,
    title: f.t,
    body: f.b
  }))))));
}
function PlatformScreen() {
  const primitives = [{
    n: '01',
    t: 'Context',
    b: 'KAIRUS reasons over the context of every observation — who is present, what is expected, what is normal for this site at this time.'
  }, {
    n: '02',
    t: 'Space',
    b: 'Spatial awareness is native. The platform understands where objects are, how they relate, and how those relationships evolve.'
  }, {
    n: '03',
    t: 'Time',
    b: 'Every observation is time-stamped and temporally reasoned. Sequences and trajectories are first-class concepts.'
  }];
  const roadmap = [{
    n: 'Agentic chat',
    d: 'Conversational interface for querying site intelligence.',
    a: 'H2 2026'
  }, {
    n: 'Visual analytics dashboards',
    d: 'Operator-facing dashboards with drill-down.',
    a: 'H2 2026'
  }, {
    n: 'Active learning',
    d: 'Continuous model improvement from operator feedback.',
    a: 'H2 2026'
  }, {
    n: '3D mapping & spatial search',
    d: 'Spatial model of the physical environment.',
    a: 'H1 2027'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoHero, {
    eyebrow: "Platform \u2014 KAIRUS",
    title: "Real-world observational AI, powered by the LGM.",
    lead: "KAIRUS is GAEA AI's platform. The LGM \u2014 our Observational World Model \u2014 is the core reasoning engine.",
    metaLeft: "KAIRUS / Platform",
    metaRight: "LGM \u2014 Observational World Model"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "First-class primitives"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Context, space and time \u2014 as core intelligence, not metadata."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem'
    }
  }, primitives.map(p => /*#__PURE__*/React.createElement(FeatureRow, {
    key: p.n,
    number: p.n,
    title: p.t,
    body: p.b
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section roadmap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Capability roadmap"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Hybrid local plus cloud \u2014 capabilities come online as customer needs grow."), /*#__PURE__*/React.createElement("div", {
    className: "roadmap__list",
    style: {
      marginTop: '3rem'
    }
  }, roadmap.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.n,
    className: "roadmap__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roadmap__name"
  }, /*#__PURE__*/React.createElement("h3", null, r.n), /*#__PURE__*/React.createElement("p", null, r.d)), /*#__PURE__*/React.createElement("div", {
    className: "roadmap__when mono"
  }, r.a)))))));
}
function ContactScreen() {
  const [sent, setSent] = useState2(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoHero, {
    eyebrow: "Contact",
    title: "Let's talk about what your site is really doing.",
    lead: "Request a demo, book a discovery workshop, or scope a time-boxed pilot. We reply within one business day.",
    metaLeft: "Contact / 01",
    metaRight: "graeme.scott@gaeaai.com"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "channels"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Direct"), /*#__PURE__*/React.createElement("h2", null, "Speak to GAEA directly."), /*#__PURE__*/React.createElement("ul", {
    className: "channels__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mono label"
  }, "CEO"), /*#__PURE__*/React.createElement("a", null, "graeme.scott@gaeaai.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mono label"
  }, "Web"), /*#__PURE__*/React.createElement("a", null, "www.gaeaai.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mono label"
  }, "YouTube"), /*#__PURE__*/React.createElement("a", null, "@GAEAAI \u2014 GAEA Talks")))), sent ? /*#__PURE__*/React.createElement("div", {
    className: "thanks"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Received"), /*#__PURE__*/React.createElement("h2", null, "Thank you."), /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, "A member of the GAEA team will be in touch within one business day.")) : /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Company"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Topic"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Product demonstration"), /*#__PURE__*/React.createElement("option", null, "Discovery workshop"), /*#__PURE__*/React.createElement("option", null, "Pilot engagement"))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    placeholder: "What are you trying to see, verify or understand?"
  })), /*#__PURE__*/React.createElement(Button, null, "Send")))));
}
function SimpleScreen({
  title,
  eyebrow,
  lead,
  metaLeft,
  metaRight
}) {
  return /*#__PURE__*/React.createElement(VideoHero, {
    variant: "compact",
    eyebrow: eyebrow,
    title: title,
    lead: lead,
    metaLeft: metaLeft,
    metaRight: metaRight
  });
}
Object.assign(window, {
  HomeScreen,
  ProductsScreen,
  VerifyScreen,
  PlatformScreen,
  ContactScreen,
  SimpleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Screens.jsx", error: String((e && e.message) || e) }); }

})();
