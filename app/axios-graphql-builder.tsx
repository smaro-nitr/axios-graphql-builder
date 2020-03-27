export const buildQuery = (jsonInput: any) => {
  const queryString = JSON.stringify(jsonInput)
  const modfiedQueryString = queryString
    .replace(/:null/g, '')
    .replace(/,/g, '\n')
    .replace(/:{/g, '{\n')
    .replace(/"/g, '')
    .replace(/}/g, '\n}')
  modfiedQueryString.slice(1, modfiedQueryString.length - 1)
  const axiosBasedQuery = { query: modfiedQueryString }
  return axiosBasedQuery
}
