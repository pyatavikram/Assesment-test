import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-container">
      <header className="top-header">
        <div className="brand-section">
          <div className="brand-logo" />
          <h1 className="brand-title">VectorShift <span>Flow</span></h1>
        </div>
        <SubmitButton />
      </header>
      <main className="workspace-container">
        <PipelineToolbar />
        <section className="canvas-container">
          <PipelineUI />
        </section>
      </main>
    </div>
  );
}

export default App;

