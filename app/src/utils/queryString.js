import QueryString from 'query-string';

export function getQueryParametersByURL(query) {
  return QueryString.parse(query);
}

export function convertToQueryString(params) {
  return QueryString.stringify(params);
}
