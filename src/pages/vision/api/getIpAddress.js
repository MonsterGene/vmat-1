function getIpAddress () {
  let hostname = window.location.hash.split('=')[1];
  if (!hostname) { 
    hostname = window.location.hostname;
  }
  // console.log(hostname);
  // hostname = '10.167.5.238';
  return hostname + ':8000';
}

export {
  getIpAddress
};
