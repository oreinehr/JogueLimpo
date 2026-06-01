/* =====================================================================
   Admin Dashboard — views
   ===================================================================== */

const REQUESTS = [
  ['#4821', 'Ana Souza', 'Centro', 'Volumosos', 'Em rota', '01/06'],
  ['#4820', 'Mercado Bom Preço', 'Industrial', 'Recicláveis', 'Pendente', '01/06'],
  ['#4819', 'Carlos Lima', 'Jardim das Águas', 'Orgânicos', 'Concluída', '31/05'],
  ['#4818', 'Escola Vila Nova', 'Vila Nova', 'Educação', 'Concluída', '31/05'],
  ['#4817', 'Joana Prado', 'Ribeirinho', 'Entulho', 'Pendente', '30/05'],
  ['#4816', 'Coop. Recicla+', 'Porto', 'Recicláveis', 'Cancelada', '30/05'],
];

/* simple CSS bar chart */
function BarChart({ data, color }) {
  const max = Math.max(...data.map(d => d[1]));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 180, padding: '10px 4px 0' }}>
      {data.map(([m, v]) => (
        <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11.5, color: 'var(--ink-2)' }}>{v}</div>
          <div style={{ width: '100%', maxWidth: 38, height: (v / max * 130) + 'px', borderRadius: '8px 8px 4px 4px', background: color }} />
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>{m}</div>
        </div>
      ))}
    </div>
  );
}

function RequestsTable({ rows, compact }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)' }}>
        <thead>
          <tr style={{ background: 'var(--gray-50)', textAlign: 'left' }}>
            {['ID', 'Solicitante', 'Bairro', 'Tipo', 'Status', 'Data'].map(h => (
              <th key={h} style={{ padding: '13px 18px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(compact ? rows.slice(0, 4) : rows).map(r => (
            <tr key={r[0]} style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: '14px 18px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13.5, color: 'var(--primary-700)' }}>{r[0]}</td>
              <td style={{ padding: '14px 18px', fontSize: 14, color: 'var(--ink)', fontWeight: 600 }}>{r[1]}</td>
              <td style={{ padding: '14px 18px', fontSize: 14, color: 'var(--ink-2)' }}>{r[2]}</td>
              <td style={{ padding: '14px 18px', fontSize: 14, color: 'var(--ink-2)' }}>{r[3]}</td>
              <td style={{ padding: '14px 18px' }}><StatusPill status={r[4]} /></td>
              <td style={{ padding: '14px 18px', fontSize: 13.5, color: 'var(--ink-3)' }}>{r[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* stylized city map representation (not a real map) */
function CityMap({ h = 360 }) {
  const pins = [[22, 32, 'var(--primary-500)'], [54, 24, 'var(--secondary-600)'], [70, 56, 'var(--olive-600)'], [38, 64, 'var(--info)'], [82, 40, 'var(--primary-500)']];
  return (
    <div style={{ position: 'relative', height: h, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--primary-50)', border: '1px solid var(--border)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--primary-100) 1px, transparent 1px), linear-gradient(90deg, var(--primary-100) 1px, transparent 1px)', backgroundSize: '44px 44px', opacity: .7 }} />
      {/* river */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: '58%', height: 34, background: 'linear-gradient(90deg, var(--primary-200), var(--primary-300))', transform: 'rotate(-6deg)', opacity: .8 }} />
      {/* park */}
      <div style={{ position: 'absolute', left: '12%', top: '20%', width: 120, height: 90, borderRadius: 18, background: 'var(--secondary-100)', opacity: .8 }} />
      {pins.map(([x, y, c], i) => (
        <div key={i} style={{ position: 'absolute', left: x + '%', top: y + '%', transform: 'translate(-50%,-100%)' }}>
          <Icon name="map-pin" size={30} color={c} style={{ filter: 'drop-shadow(0 3px 4px rgba(9,54,96,.25))' }} />
        </div>
      ))}
    </div>
  );
}

function Overview() {
  return (
    <div style={PAGE}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        <StatCard icon="clipboard-list" label="Solicitações abertas" value="184" trend="+12%" tint="teal" />
        <StatCard icon="truck" label="Coletas em rota hoje" value="27" trend="+4%" tint="info" />
        <StatCard icon="recycle" label="Recicláveis no mês" value="12,4 t" trend="+18%" tint="green" />
        <StatCard icon="clock" label="Coletas no prazo" value="96%" trend="-1%" tint="olive" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--ink)', margin: 0 }}>Recicláveis coletados (t)</h3>
            <span className="badge badge-reciclavel"><Icon name="trending-up" size={13} />+18% no semestre</span>
          </div>
          <BarChart color="linear-gradient(180deg, var(--primary-400), var(--primary-600))"
            data={[['Jan', 8.1], ['Fev', 8.9], ['Mar', 9.6], ['Abr', 10.5], ['Mai', 11.2], ['Jun', 12.4]]} />
        </div>
        <div className="card" style={{ padding: 22 }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--ink)', margin: '0 0 16px' }}>Por tipo de resíduo</h3>
          {[['Recicláveis', 48, 'var(--primary-500)'], ['Orgânicos', 31, 'var(--secondary-600)'], ['Entulho/Volumosos', 14, 'var(--olive-500)'], ['Especiais', 7, 'var(--info)']].map(([l, p, c]) => (
            <div key={l} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                <span style={{ color: 'var(--ink-2)', fontWeight: 600, fontFamily: 'var(--font-body)' }}>{l}</span>
                <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{p}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 5, background: 'var(--gray-100)' }}><div style={{ width: p + '%', height: '100%', borderRadius: 5, background: c }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--ink)', margin: 0 }}>Solicitações recentes</h3>
          <button className="btn btn-ghost btn-sm" style={{ paddingRight: 0 }}>Ver todas <Icon name="arrow-right" size={15} /></button>
        </div>
        <RequestsTable rows={REQUESTS} compact />
      </div>
    </div>
  );
}

function Requests() {
  const [filter, setFilter] = useState('Todas');
  const filters = ['Todas', 'Pendente', 'Em rota', 'Concluída', 'Cancelada'];
  const rows = filter === 'Todas' ? REQUESTS : REQUESTS.filter(r => r[4] === filter);
  return (
    <div style={PAGE}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 16px', borderRadius: 'var(--radius-pill)', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
              border: '1.5px solid ' + (filter === f ? 'var(--primary-500)' : 'var(--border)'),
              background: filter === f ? 'var(--primary-500)' : '#fff', color: filter === f ? '#fff' : 'var(--ink-2)' }}>{f}</button>
          ))}
        </div>
        <button className="btn btn-primary btn-sm"><Icon name="plus" size={16} />Nova solicitação</button>
      </div>
      <RequestsTable rows={rows} />
    </div>
  );
}

function Routes() {
  const routes = [
    ['Rota Norte', 'Centro · Vila Nova', 'Equipe A', 8, 'Em andamento'],
    ['Rota Sul', 'Jardim das Águas', 'Equipe B', 6, 'Concluída'],
    ['Rota Ribeirinha', 'Ribeirinho · Porto', 'Coop. Recicla+', 5, 'Pendente'],
  ];
  return (
    <div style={PAGE}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 18 }}>
        <div className="card" style={{ padding: 16 }}>
          <CityMap h={380} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {routes.map(([n, area, team, stops, st]) => (
            <div key={n} className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15.5, color: 'var(--ink)', margin: 0 }}>{n}</h4>
                <StatusPill status={st === 'Em andamento' ? 'Em rota' : st} />
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 12 }}>
                {[['map-pin', area], ['users', team], ['package', stops + ' paradas']].map(([ic, t]) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--ink-2)' }}>
                    <Icon name={ic} size={15} color="var(--ink-3)" />{t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div style={PAGE}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        <StatCard icon="recycle" label="Total reciclado (ano)" value="62,8 t" trend="+22%" tint="green" />
        <StatCard icon="check-circle-2" label="Solicitações concluídas" value="9.200" trend="+8%" tint="teal" />
        <StatCard icon="users" label="Cooperativas ativas" value="9" tint="olive" />
      </div>
      <div className="card" style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--ink)', margin: 0 }}>Volume coletado por mês (t)</h3>
          <button className="btn btn-outline btn-sm"><Icon name="download" size={15} />Exportar CSV</button>
        </div>
        <BarChart color="linear-gradient(180deg, var(--secondary-400), var(--secondary-700))"
          data={[['Jan', 8.1], ['Fev', 8.9], ['Mar', 9.6], ['Abr', 10.5], ['Mai', 11.2], ['Jun', 12.4]]} />
      </div>
    </div>
  );
}

function MapView() {
  return (
    <div style={PAGE}>
      <div className="card" style={{ padding: 16 }}>
        <CityMap h={460} />
      </div>
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        {[['var(--primary-500)', 'Ponto de coleta'], ['var(--secondary-600)', 'Cooperativa'], ['var(--olive-600)', 'Ecoponto'], ['var(--info)', 'Solicitação aberta']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--ink-2)' }}>
            <Icon name="map-pin" size={18} color={c} />{l}
          </div>
        ))}
      </div>
    </div>
  );
}

function Notifications() {
  const items = [
    ['alert-triangle', 'warning', 'Coleta atrasada na Rota Ribeirinha', 'Equipe reportou via aplicativo · há 12 min'],
    ['check-circle-2', 'success', 'Meta de recicláveis atingida em Vila Nova', 'Coleta seletiva acima de 90% · há 1 h'],
    ['clipboard-list', 'info', '8 novas solicitações de coleta', 'Bairro Centro e Industrial · há 2 h'],
    ['x-circle', 'error', 'Solicitação #4816 cancelada pelo morador', 'Coop. Recicla+ · há 3 h'],
  ];
  const tint = { warning: ['var(--warning-bg)', 'var(--warning)'], success: ['var(--success-bg)', 'var(--success)'], info: ['var(--info-bg)', 'var(--info)'], error: ['var(--error-bg)', 'var(--error)'] };
  return (
    <div style={PAGE}>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {items.map(([ic, t, title, sub], i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 22px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: tint[t][0], display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 40px' }}>
              <Icon name={ic} size={20} color={tint[t][1]} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14.5, color: 'var(--ink)' }}>{title}</div>
              <div className="body-sm" style={{ color: 'var(--ink-3)', marginTop: 2 }}>{sub}</div>
            </div>
            <button className="btn btn-ghost btn-sm">Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}
