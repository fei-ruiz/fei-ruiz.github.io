/* @ds-bundle: {"format":4,"namespace":"RenderPagerDesignSystem_4cea84","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"CursorLabel","sourcePath":"components/cursor/CursorLabel.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ImageRail","sourcePath":"components/media/ImageRail.jsx"},{"name":"RevealImage","sourcePath":"components/media/RevealImage.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SectionMarker","sourcePath":"components/navigation/SectionMarker.jsx"},{"name":"LandingKit","sourcePath":"ui_kits/landing/LandingKit.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"5fed21b390d3","components/cards/FeatureCard.jsx":"f9db68325bfb","components/cards/QuoteCard.jsx":"8c080407a03f","components/cursor/CursorLabel.jsx":"a3deeec20fdc","components/feedback/Badge.jsx":"2c49340be1c0","components/media/ImageRail.jsx":"22871fcbd11f","components/media/RevealImage.jsx":"30a3650156d4","components/navigation/NavBar.jsx":"ef3a0898ea9d","components/navigation/SectionMarker.jsx":"15fa7335f852","ui_kits/landing/LandingKit.jsx":"746093c72108"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RenderPagerDesignSystem_4cea84 = window.RenderPagerDesignSystem_4cea84 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '10px 20px',
    fontSize: 'var(--text-small)'
  },
  md: {
    padding: '17px 34px',
    fontSize: 'var(--text-body)'
  },
  lg: {
    padding: '20px 40px',
    fontSize: 'var(--text-body-lg)'
  }
};
const variantStyle = variant => {
  switch (variant) {
    case 'invert':
      // oliver gareis / maloot: full black<->white flip, sharp corners
      return {
        background: 'var(--ink-900)',
        color: 'var(--paper-50)',
        border: '1px solid var(--ink-900)'
      };
    case 'invert-light':
      return {
        background: 'var(--paper-50)',
        color: 'var(--ink-900)',
        border: '1px solid var(--paper-50)'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'currentColor',
        border: '1px solid currentColor'
      };
    case 'electric':
      // otherlife neon CTA
      return {
        background: 'var(--accent-electric)',
        color: 'var(--accent-electric-ink)',
        border: '1px solid var(--accent-electric)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'currentColor',
        border: '1px solid transparent'
      };
    case 'solid':
    default:
      return {
        background: 'var(--accent)',
        color: 'var(--paper-50)',
        border: '1px solid var(--accent)'
      };
  }
};

/** export function Button(props) */
function Button({
  children,
  variant = 'solid',
  shape = 'rect',
  // 'rect' | 'pill'
  size = 'md',
  uppercase = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;
  const vs = variantStyle(variant);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-label)',
    fontWeight: 500,
    letterSpacing: uppercase ? 'var(--tracking-label)' : '0',
    textTransform: uppercase ? 'uppercase' : 'none',
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-0)',
    cursor: 'pointer',
    transition: `opacity var(--dur-fast) var(--ease-swift), transform var(--dur-fast) var(--ease-swift)`,
    textDecoration: 'none',
    ...sizes[size],
    ...vs,
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.8';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
/** export function FeatureCard(props) */
function FeatureCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  imageSlot,
  tone = 'paper'
}) {
  const tones = {
    paper: {
      bg: 'var(--paper-200)',
      fg: 'var(--text-primary)'
    },
    sage: {
      bg: 'var(--sage-400)',
      fg: 'var(--sage-900)'
    },
    ink: {
      bg: 'var(--ink-900)',
      fg: 'var(--text-inverted)'
    }
  };
  const t = tones[tone] || tones.paper;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.fg,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: 'color-mix(in oklch, ' + t.fg + ' 10%, transparent)'
    }
  }, imageSlot), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display-sans)',
      fontSize: 'var(--text-title)',
      margin: 0,
      lineHeight: 'var(--leading-title)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      opacity: 0.85
    }
  }, description), ctaLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'underline',
      marginTop: 8,
      cursor: 'pointer'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
/** export function QuoteCard(props) */
function QuoteCard({
  quote,
  name,
  role,
  dark = true,
  avatar
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--ink-900)' : 'var(--paper-100)',
      color: dark ? 'var(--text-inverted)' : 'var(--text-primary)',
      border: `1px solid ${dark ? 'var(--border-inverted)' : 'var(--border-subtle)'}`,
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      minHeight: 260,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display-serif)',
      fontSize: '2.5rem',
      lineHeight: 0.6,
      color: dark ? 'var(--text-inverted-muted)' : 'var(--text-secondary)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      margin: '8px 0 0'
    }
  }, quote)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: dark ? 'var(--ink-700)' : 'var(--paper-300)',
      flexShrink: 0,
      backgroundImage: avatar ? `url(${avatar})` : 'none',
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      color: dark ? 'var(--text-inverted-muted)' : 'var(--text-secondary)'
    }
  }, role))));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cursor/CursorLabel.jsx
try { (() => {
const {
  useState
} = React;
/**
 * CursorLabel — wraps media in a container that hides the system cursor and follows the
 * pointer with a small circular label carrying one word (otherlife's full-screen image cursor).
 * export function CursorLabel(props)
 */
function CursorLabel({
  children,
  word = 'View',
  dark = true
}) {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const [inside, setInside] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseMove: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos({
        x: e.clientX - r.left,
        y: e.clientY - r.top
      });
    },
    onMouseEnter: () => setInside(true),
    onMouseLeave: () => setInside(false),
    style: {
      position: 'relative',
      cursor: 'none',
      overflow: 'hidden'
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      transform: 'translate(-50%,-50%)',
      width: 84,
      height: 84,
      borderRadius: '50%',
      background: dark ? 'var(--ink-900)' : 'var(--paper-50)',
      color: dark ? 'var(--paper-50)' : 'var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      opacity: inside ? 1 : 0,
      scale: inside ? '1' : '0.6',
      pointerEvents: 'none',
      transition: `opacity var(--dur-fast) var(--ease-swift), scale var(--dur-fast) var(--ease-swift)`
    }
  }, word));
}
Object.assign(__ds_scope, { CursorLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cursor/CursorLabel.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** export function Badge(props) */
function Badge({
  children,
  tone = 'ink',
  shape = 'pill'
}) {
  const tones = {
    ink: {
      bg: 'var(--ink-900)',
      fg: 'var(--paper-50)'
    },
    violet: {
      bg: 'var(--violet-500)',
      fg: '#fafafa'
    },
    accent: {
      bg: 'var(--accent)',
      fg: 'var(--paper-50)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    }
  };
  const t = tones[tone] || tones.ink;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: t.bg,
      color: t.fg,
      border: t.border || 'none',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      padding: shape === 'pill' && !children.length ? '0' : '6px 14px',
      width: shape === 'circle' ? 56 : 'auto',
      height: shape === 'circle' ? 56 : 'auto',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageRail.jsx
try { (() => {
const {
  useRef
} = React;
/**
 * ImageRail — a horizontal filmstrip of thumbnails that scrolls; click one to feature it
 * (maloot's cocktail-menu thumbnail rail).
 * export function ImageRail(props)
 */
function ImageRail({
  items = [],
  activeIndex = 0,
  onSelect
}) {
  const ref = useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      padding: '4px 0'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onSelect && onSelect(i),
    style: {
      width: 100,
      height: 130,
      flexShrink: 0,
      cursor: 'pointer',
      border: i === activeIndex ? '2px solid var(--accent)' : '2px solid transparent',
      opacity: i === activeIndex ? 1 : 0.55,
      transition: `opacity var(--dur-fast), border-color var(--dur-fast)`
    }
  }, it)));
}
Object.assign(__ds_scope, { ImageRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageRail.jsx", error: String((e && e.message) || e) }); }

// components/media/RevealImage.jsx
try { (() => {
const {
  useState
} = React;
/**
 * RevealImage — a thumbnail that sits blurred/muted until hovered (or `active`), then sharpens
 * and lifts (maloot's corner-thumbnail effect; otherlife's corner-to-fullscreen crossfade uses
 * the same blur→sharp language at larger scale).
 * export function RevealImage(props)
 */
function RevealImage({
  imageSlot,
  label,
  aspect = '3/4'
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      aspectRatio: aspect,
      overflow: 'hidden',
      cursor: 'pointer',
      filter: hover ? 'blur(0px) saturate(1)' : 'blur(6px) saturate(0.85)',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: `filter var(--dur-med) var(--ease-out-expo), transform var(--dur-med) var(--ease-out-expo)`
    }
  }, imageSlot, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      color: 'var(--paper-50)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      opacity: hover ? 1 : 0,
      transition: `opacity var(--dur-fast)`,
      textShadow: '0 1px 6px rgba(0,0,0,.5)'
    }
  }, label));
}
Object.assign(__ds_scope, { RevealImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/RevealImage.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
/** export function NavBar(props) */
function NavBar({
  mark = 'Render-pager',
  links = ['Work', 'Studio', 'Journal'],
  dark = false,
  onMenuClick,
  ctaLabel
}) {
  const [open, setOpen] = useState(false);
  const fg = dark ? 'var(--text-inverted)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px var(--section-px)',
      color: fg,
      fontFamily: 'var(--font-label)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, mark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: open ? 'flex' : 'none',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: fg,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, l))), ctaLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '9px 20px',
      background: dark ? 'var(--paper-50)' : 'var(--ink-900)',
      color: dark ? 'var(--ink-900)' : 'var(--paper-50)',
      cursor: 'pointer'
    }
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(o => !o);
      onMenuClick && onMenuClick();
    },
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      background: 'transparent',
      border: `1px solid ${fg}`,
      color: fg,
      padding: '9px 20px',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, open ? 'Close' : 'Menu')));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionMarker.jsx
try { (() => {
/** export function SectionMarker(props) */
function SectionMarker({
  index,
  total,
  label,
  dark = false
}) {
  const fg = dark ? 'var(--text-inverted-muted)' : 'var(--text-secondary)';
  const pad = n => String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-label)',
      color: fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      border: `1px solid ${fg}`,
      padding: '3px 10px',
      letterSpacing: 'var(--tracking-label)'
    }
  }, total ? `${pad(index)}/${pad(total)}` : `(${pad(index)})`), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { SectionMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionMarker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LandingKit.jsx
try { (() => {
const {
  useState
} = React;
function Hero() {
  const {
    NavBar,
    Button
  } = window.RenderPagerDesignSystem_4cea84;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverted)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    mark: "Render-pager",
    dark: true,
    links: ['Work', 'Studio', 'Journal'],
    ctaLabel: "Start a project"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--section-px) var(--section-py)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-inverted-muted)'
    }
  }, "Render-pager / studio system"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-hero)',
      letterSpacing: 'var(--tracking-hero)',
      margin: '18px 0 0',
      maxWidth: 1100
    }
  }, "Pages that render ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "attention"), ", not just content."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      maxWidth: 560,
      color: 'var(--text-inverted-muted)',
      margin: '28px 0 0'
    }
  }, "A studio-grade system for building high-craft, high-contrast web pages \u2014 whatever the subject."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    shape: "pill",
    uppercase: true
  }, "See our work"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    shape: "pill",
    uppercase: true,
    style: {
      color: 'var(--paper-50)'
    }
  }, "Start a project"))));
}
function FeatureGrid() {
  const {
    SectionMarker,
    FeatureCard
  } = window.RenderPagerDesignSystem_4cea84;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-py) var(--section-px)'
    }
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    index: 1,
    total: 3,
    label: "What we build"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 2,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Momentum",
    title: "Fast, not furious",
    description: "Light, frictionless interfaces that get out of the way.",
    tone: "ink",
    ctaLabel: "Watch reel"
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "CloudWatch",
    title: "Systems that scale",
    description: "Foundations built to extend across every surface you ship.",
    tone: "sage",
    ctaLabel: "Explore"
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Signal",
    title: "Color with intent",
    description: "One accent, used with restraint, says more than five.",
    tone: "paper",
    ctaLabel: "See palette"
  })));
}
function MediaRow() {
  const {
    SectionMarker,
    RevealImage,
    CursorLabel
  } = window.RenderPagerDesignSystem_4cea84;
  const tones = ['var(--accent-500)', 'var(--sage-700)', 'var(--electric-900)', 'var(--violet-500)'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--section-px) var(--section-py)',
      background: 'var(--paper-100)'
    }
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    index: 2,
    total: 3,
    label: "In motion"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 32
    }
  }, tones.map((c, i) => /*#__PURE__*/React.createElement(RevealImage, {
    key: i,
    label: `0${i + 1}`,
    aspect: "3/4",
    imageSlot: /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: c
      }
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(CursorLabel, {
    word: "Explore"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '21/9',
      background: 'linear-gradient(120deg,var(--sage-900),var(--ink-900) 60%)'
    }
  }))));
}
function Testimonials() {
  const {
    SectionMarker,
    QuoteCard
  } = window.RenderPagerDesignSystem_4cea84;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-py) var(--section-px)',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    index: 3,
    total: 3,
    label: "Word on the street",
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "Didn't think we'd still see a studio without fluff or empty promises.",
    name: "Mike",
    role: "Design Director"
  }), /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "Every detail is designed to feel warm, yet infused with a festive energy.",
    name: "Andrea Storm",
    role: "Founder, Maloot"
  })));
}
function Footer() {
  const {
    Badge,
    Button
  } = window.RenderPagerDesignSystem_4cea84;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--section-py) var(--section-px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Available for projects"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display-serif)',
      fontSize: 'var(--text-display)',
      margin: '20px 0 0'
    }
  }, "Let's render something.")), /*#__PURE__*/React.createElement(Button, {
    variant: "invert",
    shape: "rect",
    size: "lg"
  }, "Start a project"));
}
function LandingKit() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeatureGrid, null), /*#__PURE__*/React.createElement(MediaRow, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(__ds_scope, { LandingKit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LandingKit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.CursorLabel = __ds_scope.CursorLabel;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ImageRail = __ds_scope.ImageRail;

__ds_ns.RevealImage = __ds_scope.RevealImage;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionMarker = __ds_scope.SectionMarker;

__ds_ns.LandingKit = __ds_scope.LandingKit;

})();
