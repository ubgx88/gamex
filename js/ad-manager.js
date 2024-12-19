fetch('js/ad-config.json')
  .then(response => response.json())
  .then(adConfig => {
    document.querySelectorAll('.ad-container').forEach(container => {
      const slotId = container.getAttribute('data-ad-slot');
      if (adConfig[slotId]) {
        const adData = adConfig[slotId];


        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adData.adClient}`;
        adScript.crossOrigin = 'anonymous';

        const adIns = document.createElement('ins');
        adIns.className = 'adsbygoogle';
        adIns.style.display = 'inline-block';
        adIns.style.width = `${adData.width}px`;
        adIns.style.height = `${adData.height}px`;
        adIns.setAttribute('data-ad-client', adData.adClient);
        adIns.setAttribute('data-ad-slot', adData.adSlot);

        container.appendChild(adScript);
        container.appendChild(adIns);


        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    });
  })
  .catch(error => console.error('Error loading ad config:', error));
