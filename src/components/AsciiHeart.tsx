import React from 'react';
import { generateOptimizedHeart } from '../utils/heartAscii';

const HEART_ROWS = generateOptimizedHeart(71, 31);

export default function AsciiHeart() {
  return (
    <figure
      className="ascii-stage"
      aria-label="Corazón en arte ASCII formado por las letras del nombre DANIELA"
    >
      <pre
        className="ascii-heart"
        role="img"
        aria-label="Corazón construido con la repetición del nombre DANIELA"
      >
        {HEART_ROWS.map((row, rIdx) => (
          <span key={rIdx} className="ascii-row">
            {row.segments.map((seg, sIdx) => {
              if (seg.type === 'space') {
                return seg.text;
              }
              return (
                <span key={sIdx} className="ascii-word" tabIndex={0} role="button" aria-label="Palabra Daniela interactiva">
                  <span className="ascii-word-default">
                    {seg.word?.chars.map((ch, cIdx) => (
                      <span
                        key={cIdx}
                        className={`ascii-cell ascii-${ch.layer}`}
                      >
                        {ch.char}
                      </span>
                    ))}
                  </span>
                  <span className="ascii-word-hover" aria-hidden="true">
                    {seg.word?.hoverText}
                  </span>
                </span>
              );
            })}
            {'\n'}
          </span>
        ))}
      </pre>
    </figure>
  );
}
