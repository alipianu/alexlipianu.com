import './timeline.scss'
import React from 'react';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

// data defaults
const defaultData = {
  color: 'transparent',
  shape: 'circle'
};

/**
 * Renders timeline component
 * @param {*} props the component's properties
 * 
 * usage: <Timeline analytics?={{...}} data={[{year?: 'X', color?: 'Y', entries: [{shape: ('circle' || *), content: 'Z'}, ...]}]} />
 */
const Timeline = (props) => props.data && props.data.length && (
  <ul className="timeline">
    {props.data.map((data, i) => {
      const analyticsObj = analytics.decorate(props.analytics, {name: `time-period-${i}`, tags: 'time-period'}, events.visibility);
      return (
        <Track key={i} analytics={analyticsObj}>
          <li style={{ width: `${100 / props.data.length}%` }}>
            {data.year && <div className="timeline-label">{data.year}</div>}
            <table className="timeline-ribbon">
              <tbody style={{ backgroundColor: data.color || defaultData.color }}>
                <tr style={{ backgroundColor: data.color || defaultData.color }}>
                  <th key={0} className="ribbon" style={{ backgroundColor: data.color || defaultData.color }}>
                    <div>{/* left of ribbon */}</div>
                  </th>
                  {data.entries.map((entry, _i) => entry.content && (
                    <Track key={_i} analytics={analytics.decorate(analyticsObj, {name: `entry-${_i}`, tags: 'entry'}, events.hover)}>
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
                    </Track>
                  ))}
                  <th key={data.entries.length + 1} className="ribbon" style={{ backgroundColor: data.color || defaultData.color }}>
                    <div>{/* right of ribbon */}</div>
                  </th>
                </tr>
              </tbody>
            </table>
          </li>
        </Track>
    )})}
  </ul>
);

export default Timeline;