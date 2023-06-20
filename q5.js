function getBrowserNameAndVersion() {
    const userAgent = window.navigator.userAgent;
    let browserName = '';
    let browserVersion = '';
  
    if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      browserName = 'Opera';
    }
    else if (userAgent.indexOf('Edge') > -1) {
      browserName = 'Microsoft Edge';
    }
    else if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Google Chrome';
    }
    else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
    } else{
      browserName = "Unknown!";
    }
  
    const browserVersionRegex = new RegExp(`${browserName}/(\\d+(?:\\.\\d+)+)`);
    const versionMatches = userAgent.match(browserVersionRegex);
    if (versionMatches && versionMatches.length > 1) {
      browserVersion = versionMatches[1];
    }
  
    return { name: browserName, version: browserVersion };
  }

  const browserInfo = getBrowserNameAndVersion();
  console.log(`You are using ${browserInfo.name} ${browserInfo.version}`);
  
  