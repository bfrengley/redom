import { parseQuery } from './parse-query.mjs';

export const createElement = (query, ns) => {
  const { tag, id, className } = parseQuery(query);
  const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    if (ns) {
      element.setAttribute('id', id);
    } else {
      element.id = id;
    }
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
};
