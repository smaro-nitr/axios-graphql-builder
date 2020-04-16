"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = function (jsonInput, paramList) {
    var queryString = JSON.stringify(jsonInput);
    var modfiedQueryString = queryString
        .replace(/:null/g, '')
        .replace(/,/g, ' \n ')
        .replace(/:{/g, ' { \n ')
        .replace(/"/g, '')
        .replace(/}/g, ' \n }');
    var slicedQueryString = modfiedQueryString.slice(1, modfiedQueryString.length - 1);
    Array.isArray(paramList) &&
        paramList.forEach(function (item) {
            slicedQueryString = slicedQueryString.replace(item.key, item.key + "(" + item.param + ")");
        });
    var axiosBasedQuery = { query: slicedQueryString };
    return axiosBasedQuery;
};
