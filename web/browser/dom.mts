const selectAndAttchToWindow: $Fn<{
  $data: string,
  isPlainParams: true,
  dataArray: [string],
  skipReturn: true
}> = (selector, windowId) => {
  type $Window = {
    [key: (string & {})]: any
  }
  const elements = document.querySelector(selector);
  (window as any as $Window)[windowId] = elements
}

export default 1