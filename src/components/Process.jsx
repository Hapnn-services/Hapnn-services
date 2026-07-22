const STEPS = [
  {
    num: '01',
    title: 'Plug us in',
    text: 'One onboarding call. We map your lanes, your paperwork, and your pain points — then take over the dispatch inbox, driver files, and books inside a week.',
  },
  {
    num: '02',
    title: 'We work the desk',
    text: 'Loads get booked, invoices go out, files stay current, and hours get monitored — while your phone finally stays quiet.',
  },
  {
    num: '03',
    title: 'You add trucks',
    text: 'Scale the fleet without scaling the office. Every unit you add plugs into a back office that already runs.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="sec-tag">How it works</span>
          <h2 className="sec-title disp">
            Three steps. <span className="accent">No drama.</span>
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" data-reveal key={step.num}>
              <span className="step-num">{step.num}</span>
              <h3 className="step-title disp">{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
