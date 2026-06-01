/* =====================================================================
   Admin Dashboard — shell & primitives
   ===================================================================== */
const { useState, useEffect } = React;

function Icon({ name, size = 20, color, strokeWidth = 2, style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, strokeWidth, display: 'inline-flex', ...style }} />;
}

const NAV = [
  ['Visão geral', 'layout-dashboard', 'overview'],
  ['Solicitações', 'clipboard-list', 'requests'],
  ['Rotas de coleta', 'route', 'routes'],
  ['Relatórios', 'bar-chart-3', 'reports'],
  ['Mapa da cidade', 'map', 'map'],
  ['Notificações', 'bell', 'notifications'],
];

function Sidebar({ view, setView }) {
  return (
    <aside style={{ width: 256, flex: '0 0 256px', background: 'var(--navy)', color: '#fff', display: 'flex', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '22px 20px 20px', whiteSpace: 'nowrap' }}>
        <img src="../../assets/logo-capao.png" alt="" style={{ width: 38, height: 38 }} />
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 15, color: '#fff' }}>Jogue Limpo</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--primary-200)' }}>Painel administrativo</div>
        </div>
      </div>
      <nav style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
        {NAV.map(([label, ic, key]) => {
          const active = view === key;
          return (
            <button key={key} onClick={() => setView(key)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 'var(--radius-md)',
              border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%',
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
              background: active ? 'rgba(255,255,255,.12)' : 'transparent',
              color: active ? '#fff' : 'rgba(255,255,255,.66)',
              transition: 'background var(--dur) var(--ease-out)' }}>
              <Icon name={ic} size={19} color={active ? 'var(--primary-200)' : 'rgba(255,255,255,.6)'} />{label}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: 16, margin: 12, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <Icon name="leaf" size={16} color="var(--secondary-300)" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12.5, color: '#fff' }}>Meta do mês</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginBottom: 10 }}>14 t de recicláveis</div>
        <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,.15)' }}>
          <div style={{ width: '88%', height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, var(--primary-300), var(--secondary-400))' }} />
        </div>
        <div style={{ fontSize: 11, color: 'var(--primary-200)', marginTop: 6, fontWeight: 600 }}>12,4 t · 88%</div>
      </div>
    </aside>
  );
}

function Topbar({ title }) {
  return (
    <header style={{ height: 68, borderBottom: '1px solid var(--border)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky', top: 0, zIndex: 20 }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: 'var(--ink)', margin: 0 }}>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="input-icon" style={{ width: 260 }}>
          <Icon name="search" size={17} />
          <input className="input" placeholder="Buscar solicitação, bairro…" style={{ height: 40, fontSize: 13.5 }} />
        </div>
        <button style={{ position: 'relative', width: 40, height: 40, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Icon name="bell" size={19} color="var(--ink-2)" />
          <span style={{ position: 'absolute', top: 7, right: 8, width: 8, height: 8, borderRadius: 99, background: 'var(--error)', border: '2px solid #fff' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 99, background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-600))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14 }}>MR</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>Marina Reis</div>
            <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>Secretaria de Meio Ambiente</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatCard({ icon, label, value, trend, tint }) {
  const tints = {
    teal: ['var(--primary-50)', 'var(--primary-600)'],
    green: ['var(--secondary-50)', 'var(--secondary-600)'],
    olive: ['var(--olive-50)', 'var(--olive-600)'],
    info: ['var(--info-bg)', 'var(--info)'],
  }[tint || 'teal'];
  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: 44, height: 44, borderRadius: 13, background: tints[0], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={22} color={tints[1]} />
        </div>
        {trend && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12.5, color: trend[0] === '-' ? 'var(--error)' : 'var(--success)' }}>
          <Icon name={trend[0] === '-' ? 'trending-down' : 'trending-up'} size={14} />{trend}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 30, color: 'var(--ink)', marginTop: 16, lineHeight: 1 }}>{value}</div>
      <div className="body-sm" style={{ color: 'var(--ink-3)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    'Concluída': ['var(--success-bg)', 'var(--success-fg)', 'check-circle-2'],
    'Em rota': ['var(--info-bg)', 'var(--info-fg)', 'truck'],
    'Pendente': ['var(--warning-bg)', 'var(--warning-fg)', 'clock'],
    'Cancelada': ['var(--error-bg)', 'var(--error-fg)', 'x-circle'],
  };
  const [bg, fg, ic] = map[status] || map['Pendente'];
  return <span className="badge" style={{ background: bg, color: fg }}><Icon name={ic} size={13} />{status}</span>;
}

const PAGE = { padding: '28px', display: 'flex', flexDirection: 'column', gap: 22 };
