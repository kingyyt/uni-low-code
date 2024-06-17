"use strict";
const http_httpRequest = require("../../http/httpRequest.js");
const GetJsonListDetail = (id) => http_httpRequest.Http.getRequest(`${"/api/uni/jsonListDetail/"}${id}/`);
exports.GetJsonListDetail = GetJsonListDetail;
