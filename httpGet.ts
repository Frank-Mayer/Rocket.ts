async function httpGet(url: string) {
  return new Promise(function (resolve: (value: string) => void) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          resolve(xmlHttp.responseText);
        } else {
          console.error(xmlHttp.response);
        }
      }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
  });
}
