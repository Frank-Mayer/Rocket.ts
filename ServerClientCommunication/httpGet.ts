/// <reference path="../DataStructures/HashMap.ts"/>
const httpGetCache = new HashMap(128);
/**
 *Sends an asynchronous http-get request to a given url
 * @param url Url to send the request to
 * @param cached Whether you want the response to be cached or not
 */
async function httpGet(url: string, cached: boolean = false) {
  return new Promise(function (
    resolve: (value: string) => void,
    reject: (reason?: any) => void
  ) {
    if (cached && httpGetCache.has(url)) {
      let cache = httpGetCache.get(url);
      if (cache[0]) {
        resolve(cache[1]);
      } else {
        reject(cache[1]);
      }
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          if (cached) {
            httpGetCache.set(url, [true, xmlHttp.responseText]);
          }
          resolve(xmlHttp.responseText);
        } else {
          if (cached) {
            httpGetCache.set(url, [false, xmlHttp.response]);
          }
          reject(xmlHttp.response);
        }
      }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
  });
}
