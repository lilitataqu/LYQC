const TokenKey = 'ums-token'

const ExpiresInKey = 'ums-expires-in'

export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function getExpiresIn() {
  return uni.getStorageSync(ExpiresInKey) || -1
}

export function setExpiresIn(time) {
  return uni.setStorageSync(ExpiresInKey, time)
}

export function removeExpiresIn() {
  return uni.removeStorageSync(ExpiresInKey)
}
