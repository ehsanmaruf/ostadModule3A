function openNewWindow(url, width, height) {
   
    const windowFeatures = `
      width=${width},
      height=${height},
    `;
    window.open(url, '_blank', windowFeatures);
  };
  
  openNewWindow('https://www.google.com', 800, 600);