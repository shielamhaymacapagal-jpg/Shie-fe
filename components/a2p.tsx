import { Eyebrow } from './section-head'

const CHECKS = [
  'Business entity verification',
  'Twilio / LC phone setup',
  'EIN verification',
  'SMS compliance',
  'Brand registration',
  'Opt-in language',
  'Campaign registration',
  'Workflow configuration',
]

export function A2P() {
  return (
    <section id="a2p" className="bg-background-alt py-[70px] md:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[20px] border border-border bg-card p-8 md:grid-cols-[1.4fr_0.6fr] md:p-11">
          <div>
            <Eyebrow>Specialized Skill</Eyebrow>
            <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.02em] text-balance">
              Successfully Navigated <span className="grad-text">A2P 10DLC Approval</span>
            </h2>
            <span className="grad-bg my-[14px] mb-[18px] inline-block rounded-[20px] px-[18px] py-2 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
              Officially Approved
            </span>
            <p className="mb-5 max-w-[540px] text-[14.5px] text-dim">
              End-to-end A2P 10DLC registration inside GoHighLevel — from brand &amp; campaign registration to SMS
              compliance and workflow configuration.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-[10px] sm:grid-cols-2">
              {CHECKS.map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-2 text-[13px] text-dim before:font-bold before:text-pink before:content-['✓']"
                >
                  {check}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full border-2 border-dashed border-purple-light p-[10px] text-center font-display text-[12px] leading-[1.4] tracking-[0.08em] text-purple-light">
            A2P 10DLC
            <br />
            APPROVED
          </div>
        </div>
      </div>
    </section>
  )
}
