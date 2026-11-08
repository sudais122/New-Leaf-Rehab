import Reveal from './Reveal';

/** .section-head block: eyebrow + h2 (+ optional rule and paragraph). */
export default function SectionHead({ eyebrow, title, children, center = true, light = false, rule = false }) {
  return (
    <Reveal className={'section-head' + (center ? ' center' : '')}>
      <span className={'eyebrow' + (light ? ' light' : '')}>{eyebrow}</span>
      <h2>{title}</h2>
      {rule && <div className="rule"></div>}
      {children}
    </Reveal>
  );
}
