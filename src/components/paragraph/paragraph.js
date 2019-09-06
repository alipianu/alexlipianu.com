import React from 'react';
import Link from '../../components/link/link';

/**
 * Renders paragraph component, for safely rendering text data with urls
 * @param {*} props the component's properties
 * 
 * usage: <Paragraph links=['X', ...]>...</Paragraph>
 */
const Paragraph = (props) => {
  // link regex pattern
  const pattern = RegExp(`(\\{\\{(${[...props.links.keys()].join('|')})\\}\\})`);
  return (
    props.children.split('\n').map((paragraph, i) => {
      let result = [];
      do {
        const results = pattern.exec(paragraph);
        if (!results) break;
        // create span from text before link
        result.push(<span key={`${i}-${result.length}`}>{paragraph.substring(0, results.index)}</span>);
        // create link
        const link = props.links[results[2]];
        result.push(<Link key={`${i}-${result.length}`} ariaLabel={link.label} href={link.href}>{link.label}</Link>);
        // set new search on text after link
        paragraph = paragraph.substring(results.index + results[0].length);
      } while (paragraph.length > 4)

      // create span from remaining text
      result.push(<span key={`${i}-${result.length}`}>{paragraph}</span>);
      return <p key={i}>{result}</p>;
    })
  );
};

export default Paragraph;