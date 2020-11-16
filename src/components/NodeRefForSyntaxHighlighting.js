import React, { useCallback } from "react";
import hljs from "highlight.js";

function NodeRefForSyntaxHighlighting(node) {
  return useCallback((node) => {
    if (node) {
      hljs.initHighlighting();
      const nodes = node.querySelectorAll("pre");
      nodes.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  });
}

export default NodeRefForSyntaxHighlighting;
