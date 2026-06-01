/* =====================================================================
   Landing Page — App composition + toast interaction
   ===================================================================== */

function Toast({ show, onClose }) {
  useEffect(() => { if (show) { const t = setTimeout(onClose, 3200); return () => clearTimeout(t); } }, [show]);
  return (
    <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 80,
      transform: show ? 'translateY(0)' : 'translateY(140%)', opacity: show ? 1 : 0,
      transition: 'all var(--dur-slow) var(--ease-out)' }}>
      <div className="alert alert-success" style={{ boxShadow: 'var(--shadow-xl)', background: '#fff', minWidth: 300, alignItems: 'center' }}>
        <Icon name="check-circle-2" color="var(--success)" />
        <div><strong style={{ color: 'var(--ink)' }}>Solicitação enviada!</strong><span style={{ color: 'var(--ink-2)' }}>Você receberá a confirmação por e-mail.</span></div>
      </div>
    </div>
  );
}

function App() {
  const [toast, setToast] = useState(false);
  useLucide();
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [toast]);
  return (
    <div style={{ background: '#fff' }}>
      <Header onNav={() => {}} />
      <Hero onCta={() => setToast(true)} />
      <HowItWorks />
      <CollectionDays />
      <WasteTypes />
      <Education />
      <Stats />
      <Contact />
      <Footer />
      <Toast show={toast} onClose={() => setToast(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
