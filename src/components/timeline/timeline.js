import './timeline.scss'
import React from 'react';

// data defaults
const defaultData = {
  color: 'transparent',
  shape: 'circle'
};

/**
 * Renders timeline component
 * @param {*} props - the component's properties
 * 
 * usage: <Timeline data={[{year?: 'X', color?: 'Y', entries: [{shape: ('circle' || *), content: 'Z'}, ...]}]} />
 */
const Timeline = (props) => props.data && props.data.length && (
  <ul className="timeline">
    {props.data.map((data, i) => (
      <li key={i} style={{ width: `${100 / props.data.length}%` }}>
        {data.year && <div className="timeline-label">{data.year}</div>}
        <table className="timeline-ribbon">
          <tbody style={{ backgroundColor: data.color || defaultData.color }}>
            <tr style={{ backgroundColor: data.color || defaultData.color }}>
              <th key={0} className="ribbon" style={{ backgroundColor: data.color || defaultData.color }}>
                <div>{/* left of ribbon */}</div>
              </th>
              {data.entries.map((entry, _i) => entry.content && (
                <th key={_i + 1} className="ribbon timeline-entry" style={{ backgroundColor: data.color || defaultData.color }}>
                  <div className={entry.shape || defaultData.shape}>{/* ribbon point */}</div>
                  {/* Dynamically set hover tooltip content and color */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      ul.timeline li:nth-child(${i + 1}) th.timeline-entry:nth-child(${_i + 2}) > div:after {
                        content: '${entry.content}';
                        background-color: ${data.color || defaultData.color};
                    `}} />
                </th>
              ))}
              <th key={data.entries.length + 1} className="ribbon" style={{ backgroundColor: data.color || defaultData.color }}>
                <div>{/* right of ribbon */}</div>
              </th>
            </tr>
          </tbody>
        </table>
      </li>
    ))}
  </ul>
);

export default Timeline;