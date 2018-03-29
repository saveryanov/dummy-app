/*
 * Configuration file
 */
const config = {};

//Local
const local = {};
local.appPort = 8881;
local.siteUrl = 'http://localhost:8881/';

local.debug = true;

module.exports = Object.assign(config, local);