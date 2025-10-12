import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CodeExplanation = ({ explanation }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        marginTop: '24px',
        backgroundColor: '#f9fafb',
        padding: '24px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
      }}
    >
      <h2 style={{ marginBottom: '12px' }}>Explanation:</h2>
      <Markdown remarkPlugins={[remarkGfm]}>
        {explanation}
      </Markdown>
    </div>
  );
};

export default CodeExplanation;
