import React from 'react';
import { Link, Track } from '../components';
import { events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders paragraph component, for safely rendering text data with urls
 * @param {*} props the component's properties
 * 
 * usage: <Paragraphs links=['X', ...]>...</Paragraphs>
 */
const Paragraphs = (props) => {
  // link regex pattern
  const pattern = RegExp(`(\\{\\{(${[...props.links.keys()].join('|')})\\}\\})`);
  return (
    props.children.split('\n').map((paragraph, i) => {
      let result = [];
      let linkCount = 0;
      do {
        const results = pattern.exec(paragraph);
        if (!results) break;
        // create span from text before link
        result.push(<span key={`paragraph-${i}-span-${result.length - linkCount}`}>{paragraph.substring(0, results.index)}</span>);
        // create link
        const link = props.links[results[2]];
        const linkName = `paragraph-${i}-link-${linkCount++}`;
        result.push(<Link key={linkName} analytics={analytics.decorate(props.analytics, {tags: 'paragraph', name: linkName})} ariaLabel={link.label} href={link.href}>{link.label}</Link>);
        // set new search on text after link
        paragraph = paragraph.substring(results.index + results[0].length);
      } while (paragraph.length > 4)

      // create span from remaining text
      result.push(<span key={`${i}-${result.length}`}>{paragraph}</span>);
      const paragraphName = `paragraph-${i}`;
      return (
        <Track key={`paragraph-${i}`} analytics={analytics.decorate(props.analytics, {tags: 'paragraph', name: paragraphName}, events.visibility)}>
          <p>{result}</p>
        </Track>
      );
    })
  );
};

export default Paragraphs;