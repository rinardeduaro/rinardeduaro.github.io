function main() {
  const records = [
    {
      feature: 'window.crypto.subtle.encapsulateKey',
      supported: window?.crypto?.subtle?.encapsulateKey != null,
    }
  ];
  const recordsEl = document.querySelector('#records');
  const recordsStr = JSON.stringify(records, null, 2);
  recordsEl.textContent = recordsStr;
}

main();