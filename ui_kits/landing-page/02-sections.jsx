/* =====================================================================
   Landing Page — sections
   ===================================================================== */

function Header({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Como funciona', 'Dias de coleta', 'Resíduos', 'Educação', 'Contato'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all var(--dur) var(--ease-out)' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <img src="../../assets/logo-capao.png" alt="Jogue Limpo com Capão" style={{ width: 44, height: 44 }} />
          <div style={{ lineHeight: 1.1, whiteSpace: 'nowrap' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17, color: 'var(--navy)' }}>Jogue Limpo</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 10.5, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--primary-600)' }}>com Capão</div>
          </div>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(l => (
            <a key={l} href="#" onClick={e => { e.preventDefault(); onNav && onNav(l); }}
              style={{ fontFamily: 'var(--font-heading)', fontSize: 14.5, fontWeight: 600, color: 'var(--ink-2)', textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <Button variant="primary" size="sm" icon="recycle">Solicitar coleta</Button>
      </div>
    </header>
  );
}

function Hero({ onCta }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* soft brand wash */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(1100px 480px at 78% -8%, var(--primary-50), transparent 60%), radial-gradient(800px 420px at -5% 30%, var(--secondary-50), transparent 60%)' }} />
      <div style={{ ...CONTAINER, position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center', padding: '64px 32px 88px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--secondary-50)', border: '1px solid var(--secondary-200)', marginBottom: 22 }}>
            <Icon name="sprout" size={15} color="var(--secondary-700)" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12.5, color: 'var(--secondary-800)' }}>Iniciativa ambiental da cidade</span>
          </div>
          <h1 className="h1" style={{ fontSize: 60, lineHeight: 1.02 }}>Cidade limpa começa na<span style={{ color: 'var(--primary-500)' }}> sua porta.</span></h1>
          <p className="body-lg" style={{ marginTop: 20, fontSize: 19, maxWidth: 500 }}>
            Descarte correto, coleta seletiva e educação ambiental para um Capão mais
            sustentável. Agende a coleta, conheça os dias e aprenda a reciclar.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <Button variant="primary" size="lg" icon="recycle" onClick={onCta}>Solicitar coleta</Button>
            <Button variant="outline" size="lg" iconRight="arrow-right">Ver dias de coleta</Button>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 38 }}>
            {[['12,4 t', 'Reciclados/mês'], ['38', 'Bairros atendidos'], ['9', 'Cooperativas parceiras']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 26, color: 'var(--navy)' }}>{n}</div>
                <div className="body-sm" style={{ color: 'var(--ink-3)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Photo caption="Comunidade em mutirão de coleta seletiva" h={420} />
          <div style={{ position: 'absolute', left: -28, bottom: 36, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--secondary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="calendar-check" size={22} color="var(--secondary-600)" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>Próxima coleta</div>
              <div className="body-sm">Quinta-feira · Recicláveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['map-pin', 'Informe seu endereço', 'Digite seu endereço e o sistema identifica seu bairro e a rota de coleta.'],
    ['package', 'Separe os resíduos', 'Recicláveis, orgânicos e rejeitos — siga o guia de separação por cor.'],
    ['calendar-check', 'Agende a coleta', 'Escolha o dia disponível ou solicite a coleta de volumosos e entulho.'],
    ['truck', 'Acompanhe a coleta', 'Receba a confirmação e acompanhe o status até a retirada concluída.'],
  ];
  return (
    <section style={{ ...CONTAINER, padding: '80px 32px' }}>
      <SectionHead eyebrow="Como funciona" title="Reciclar em quatro passos simples" align="center"
        sub="Um fluxo pensado para o morador — sem burocracia, do agendamento à coleta." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 48 }}>
        {steps.map(([ic, t, d], i) => (
          <div key={t} className="card is-hoverable" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={ic} size={24} color="var(--primary-600)" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 30, color: 'var(--gray-200)' }}>0{i + 1}</span>
            </div>
            <h4 className="h5" style={{ marginTop: 16, fontSize: 17 }}>{t}</h4>
            <p className="body-sm" style={{ marginTop: 6 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CollectionDays() {
  const rows = [
    ['Centro · Vila Nova', 'Seg / Qua / Sex', 'Recicláveis', 'badge-reciclavel', 'recycle'],
    ['Jardim das Águas', 'Ter / Qui', 'Orgânicos', 'badge-organico', 'leaf'],
    ['Ribeirinho · Porto', 'Quarta-feira', 'Coleta agendada', 'badge-coleta', 'calendar-check'],
    ['Industrial', 'Sexta-feira', 'Recicláveis', 'badge-reciclavel', 'recycle'],
  ];
  return (
    <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ ...CONTAINER, padding: '80px 32px', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <SectionHead eyebrow="Dias de coleta" title="Saiba quando é a coleta no seu bairro"
          sub="Consulte o calendário por região. Os dias seguem as rotas das equipes e cooperativas parceiras." />
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {rows.map((r, i) => (
            <div key={r[0]} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{r[0]}</div>
                <div className="body-sm" style={{ color: 'var(--ink-3)', marginTop: 2 }}>{r[1]}</div>
              </div>
              <span className={'badge ' + r[3]}><Icon name={r[4]} size={14} />{r[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WasteTypes() {
  const types = [
    ['recycle', 'Recicláveis', 'Papel, plástico, metal e vidro limpos e secos.', 'var(--primary-500)', 'var(--primary-50)'],
    ['leaf', 'Orgânicos', 'Restos de alimentos, podas e resíduos de jardim.', 'var(--secondary-600)', 'var(--secondary-50)'],
    ['trash-2', 'Rejeitos', 'O que não recicla: fraldas, papel higiênico, cerâmica.', 'var(--olive-600)', 'var(--olive-50)'],
    ['battery-charging', 'Especiais', 'Pilhas, baterias, eletrônicos e óleo — pontos específicos.', 'var(--navy)', 'var(--primary-50)'],
  ];
  return (
    <section style={{ ...CONTAINER, padding: '80px 32px' }}>
      <SectionHead eyebrow="Tipos de resíduos" title="Separe certo, recicle mais" align="center"
        sub="Cada cor, um destino. Veja como classificar o que sai da sua casa ou empresa." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 48 }}>
        {types.map(([ic, t, d, c, bg]) => (
          <div key={t} className="card is-hoverable" style={{ padding: 24 }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={ic} size={26} color={c} />
            </div>
            <h4 className="h5" style={{ marginTop: 16, fontSize: 18 }}>{t}</h4>
            <p className="body-sm" style={{ marginTop: 6 }}>{d}</p>
            <a href="#" onClick={e => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 14, color: 'var(--link)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              Guia de descarte <Icon name="arrow-right" size={15} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section style={{ ...CONTAINER, padding: '40px 32px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
      <Photo caption="Crianças aprendendo coleta seletiva na escola" h={360} tint="green" icon="graduation-cap" />
      <div>
        <SectionHead eyebrow="Educação ambiental" title="Aprender hoje, cidade limpa amanhã"
          sub="Conteúdos, oficinas e materiais para escolas, famílias e empresas — construindo cultura de reciclagem em Capão." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26 }}>
          {[['book-open', 'Cartilhas e guias de separação para baixar'],
            ['users', 'Oficinas e mutirões com a comunidade'],
            ['heart-handshake', 'Parcerias com escolas e cooperativas']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--info-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 40px' }}>
                <Icon name={ic} size={20} color="var(--info)" />
              </div>
              <span className="body-md" style={{ color: 'var(--ink)' }}>{t}</span>
            </div>
          ))}
        </div>
        <Button variant="secondary" style={{ marginTop: 28 }} iconRight="arrow-right">Explorar conteúdos</Button>
      </div>
    </section>
  );
}

function Stats() {
  const data = [['12,4 t', 'Recicláveis coletados/mês', 'trending-up'], ['38', 'Bairros atendidos', 'map-pin'],
    ['9.200', 'Solicitações concluídas', 'check-circle-2'], ['96%', 'Coletas no prazo', 'clock']];
  return (
    <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 300px at 85% 120%, rgba(10,126,155,.45), transparent 60%)' }} />
      <div style={{ ...CONTAINER, position: 'relative', padding: '64px 32px' }}>
        <SectionHead eyebrow="Impacto" title="Resultados que a cidade pode ver" light
          sub="Transparência é um valor. Acompanhe os números da coleta e reciclagem em Capão." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 44 }}>
          {data.map(([n, l, ic]) => (
            <div key={l}>
              <Icon name={ic} size={24} color="var(--primary-200)" />
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 44, color: '#fff', marginTop: 12, lineHeight: 1 }}>{n}</div>
              <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, marginTop: 6, fontFamily: 'var(--font-body)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" style={{ ...CONTAINER, padding: '80px 32px' }}>
      <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: 44 }}>
          <SectionHead eyebrow="Contato" title="Fale com a equipe" sub="Dúvidas, denúncias de descarte irregular ou parcerias? Escreva para a gente." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 26 }}>
            <div className="field"><label className="field-label">Nome</label><input className="input" placeholder="Seu nome" /></div>
            <div className="field"><label className="field-label">E-mail</label><input className="input" placeholder="voce@email.com" /></div>
            <div className="field" style={{ gridColumn: '1 / -1' }}><label className="field-label">Mensagem</label><textarea className="input" placeholder="Como podemos ajudar?"></textarea></div>
          </div>
          <Button variant="primary" style={{ marginTop: 20 }} iconRight="send">Enviar mensagem</Button>
        </div>
        <div style={{ background: 'linear-gradient(150deg, var(--primary-600), var(--secondary-700))', padding: 44, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22 }}>
          {[['phone', '0800 123 4567'], ['mail', 'contato@joguelimpocapao.gov.br'], ['map-pin', 'Secretaria de Meio Ambiente · Capão']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 44px' }}>
                <Icon name={ic} size={20} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.2)', display: 'flex', gap: 12 }}>
            {['message-circle', 'share-2', 'globe'].map(s => (
              <div key={s} style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Icon name={s} size={18} color="#fff" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ['Serviços', ['Solicitar coleta', 'Dias de coleta', 'Coleta de volumosos', 'Pontos de entrega']],
    ['Aprender', ['Guia de separação', 'Educação ambiental', 'Oficinas', 'Cartilhas']],
    ['Cidade', ['Sobre a iniciativa', 'Cooperativas', 'Transparência', 'Contato']],
  ];
  return (
    <footer style={{ background: 'var(--gray-950)', color: 'rgba(255,255,255,.7)' }}>
      <div style={{ ...CONTAINER, padding: '56px 32px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
            <img src="../../assets/logo-capao.png" alt="" style={{ width: 40, height: 40 }} />
            <div style={{ lineHeight: 1.1, whiteSpace: 'nowrap' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, color: '#fff' }}>Jogue Limpo</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--primary-200)' }}>com Capão</div>
            </div>
          </div>
          <p className="body-sm" style={{ color: 'rgba(255,255,255,.55)', maxWidth: 260 }}>Iniciativa de coleta, reciclagem e educação ambiental da cidade de Capão.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 14 }}>{h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(i => <a key={i} href="#" onClick={e => e.preventDefault()} style={{ color: 'rgba(255,255,255,.6)', fontSize: 13.5, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div style={{ ...CONTAINER, padding: '18px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: 'rgba(255,255,255,.45)' }}>
          <span>© 2026 Prefeitura de Capão · Secretaria de Meio Ambiente</span>
          <span>Política de Privacidade · Acessibilidade</span>
        </div>
      </div>
    </footer>
  );
}
