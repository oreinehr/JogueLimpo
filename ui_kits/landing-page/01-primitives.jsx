/* =====================================================================
   Landing Page — shared primitives
   (Concatenated into index.html at build; do not load via <script src>.)
   ===================================================================== */
const { useState, useEffect, useRef } = React;

/* Lucide icon — renders <i data-lucide> and is hydrated by lucide.createIcons() */
function Icon({ name, size = 20, color, strokeWidth = 2, style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, strokeWidth, display: 'inline-flex', ...style }} />;
}

/* Re-run lucide hydration after every render of the tree */
function useLucide(dep) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

function Button({ variant = 'primary', size, icon, iconRight, children, onClick, style }) {
  const cls = ['btn', 'btn-' + variant, size ? 'btn-' + size : ''].join(' ');
  return (
    <button className={cls} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={size === 'lg' ? 20 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </button>
  );
}

function Overline({ children, style }) {
  return <div className="overline" style={style}>{children}</div>;
}

/* Section heading block */
function SectionHead({ eyebrow, title, sub, align = 'left', light }) {
  return (
    <div style={{ maxWidth: 640, margin: align === 'center' ? '0 auto' : 0, textAlign: align }}>
      {eyebrow && <Overline style={{ color: light ? 'var(--primary-200)' : 'var(--primary-600)' }}>{eyebrow}</Overline>}
      <h2 className="h2" style={{ margin: '10px 0 0', fontSize: 38, color: light ? '#fff' : 'var(--ink)' }}>{title}</h2>
      {sub && <p className="body-lg" style={{ marginTop: 14, color: light ? 'rgba(255,255,255,.82)' : 'var(--ink-2)' }}>{sub}</p>}
    </div>
  );
}

/* Photo placeholder communicating photography direction (no generated images) */
function Photo({ caption, h = 320, radius = 'var(--radius-xl)', icon = 'camera', tint = 'teal' }) {
  const grad = tint === 'teal'
    ? 'linear-gradient(135deg, var(--primary-400), var(--secondary-500))'
    : 'linear-gradient(135deg, var(--secondary-500), var(--olive-500))';
  return (
    <div style={{ position: 'relative', height: h, borderRadius: radius, background: grad, overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end', boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: .5 }}>
        <Icon name={icon} size={56} color="#fff" />
      </div>
      <div style={{ position: 'relative', padding: '14px 18px', background: 'linear-gradient(transparent, rgba(9,54,96,.5))', width: '100%' }}>
        <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600 }}>
          <Icon name="image" size={14} style={{ marginRight: 6, verticalAlign: '-2px' }} />{caption}
        </span>
      </div>
    </div>
  );
}

const CONTAINER = { maxWidth: 1180, margin: '0 auto', padding: '0 32px' };
