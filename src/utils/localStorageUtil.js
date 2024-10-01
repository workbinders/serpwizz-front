import CryptoJS from 'crypto-js'

let STORAGE // Fallback in case localStorage is unavailable

const APP_NAME = import.meta.env.VITE_APP_NAME || 'SERPWizz'
const SALT = import.meta.env.VITE_APP_APP_SALT || '4UBzxVMmMWXfo2o5Nn4bZAsVajT0hnIX'

function encrypt(data) {
  return CryptoJS.AES.encrypt(data, SALT).toString()
}

function decrypt(data) {
  return CryptoJS.AES.decrypt(data, SALT).toString(CryptoJS.enc.Utf8)
}

function md5Hash(string) {
  return CryptoJS.MD5(string).toString()
}

function convertToType(data, type) {
  switch (type) {
    case 'bool':
      return data === 'true'
    case 'number':
      return Number(data)
    case 'string':
      return String(data)
    case 'object':
      try {
        return JSON.parse(data)
      } catch (e) {
        return {}
      }
    default:
      return data
  }
}

function getDefaultValue(type) {
  switch (type) {
    case 'bool':
      return false
    case 'number':
      return 0
    case 'string':
      return ''
    case 'object':
      return {}
    default:
      return null
  }
}

export function setItem(key, data) {
  key = APP_NAME + key

  if (typeof data === 'object') {
    data = JSON.stringify(data)
  } else if (typeof data !== 'string') {
    data = convertToType(data, 'string')
  }

  const hashedKey = md5Hash(key)
  const encryptedData = encrypt(data)

  try {
    localStorage.setItem(hashedKey, encryptedData)
  } catch (e) {
    if (STORAGE) {
      STORAGE[hashedKey] = encryptedData
    }
  }
}

export function getItem(key, defaultValue = null, type = 'string') {
  key = APP_NAME + key
  const hashedKey = md5Hash(key)
  let data

  try {
    data = localStorage.getItem(hashedKey)
  } catch (e) {
    if (STORAGE) {
      data = STORAGE[hashedKey]
    }
  }

  if (!data) {
    data = defaultValue !== null ? defaultValue : getDefaultValue(type)
  } else {
    data = decrypt(data)
  }

  return convertToType(data, type)
}

export function removeItem(key) {
  key = APP_NAME + key
  const hashedKey = md5Hash(key)

  try {
    localStorage.removeItem(hashedKey)
  } catch (e) {
    if (STORAGE && STORAGE[hashedKey]) {
      delete STORAGE[hashedKey]
    }
  }
}

export function clearStorage() {
  try {
    localStorage.clear()
  } catch (e) {
    STORAGE = {}
  }
}
