interface Param {
  key: string
  param: string
}

export const buildQuery = (jsonInput: any, paramList?: Param[]) => {
  const queryString = JSON.stringify(jsonInput)

  const modfiedQueryString = queryString
    .replace(/:null/g, '')
    .replace(/,/g, ' \n ')
    .replace(/:{/g, ' { \n ')
    .replace(/"/g, '')
    .replace(/}/g, ' \n }')

  let slicedQueryString = modfiedQueryString.slice(1, modfiedQueryString.length - 1)
  Array.isArray(paramList) &&
    paramList.forEach((item: Param) => {
      slicedQueryString = slicedQueryString.replace(item.key, `${item.key}(${item.param})`)
    })

  const axiosBasedQuery = { query: slicedQueryString }
  return axiosBasedQuery
}
