// ==UserScript==
// @name         URL archiver
// @namespace    https://github.com/oliverearl/url-archiver
// @version      1.0
// @description  Makes my life a little easier.
// @author       Oliver Earl
// @include      *
// @grant        GM.xmlHttpRequest
// @noframes
// ==/UserScript==

(function () {
    'use strict';
    // Change this
    const url = 'http://archive.test/';

    function log(link) {
        const archiveLink = link + location.href;
        GM.xmlHttpRequest({
            method: "GET",
            url: archiveLink,
        });
    }

    log(url);

})();