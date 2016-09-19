import assign from 'object-assign';

const defaultLocale = {
  okText: '确定',
  cancelText: '取消',
  justOkText: '知道了',
};

let runtimeLocale = assign({}, defaultLocale);

export function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = assign({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = assign({}, defaultLocale);
  }
  console.log('runtimeLocaleruntimeLocale2',runtimeLocale)
}

export function getConfirmLocale() {
  console.log('runtimeLocaleruntimeLocale',runtimeLocale)
  return runtimeLocale;
}
