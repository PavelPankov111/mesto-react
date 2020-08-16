
class Api {
    constructor({ url, headers = {} }) {
      this.url = url;
      this.headers = headers;
  }

_handleResponse(response){
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response.statusText)
  }
}

_handleResponseError(err){
  return Promise.reject(err.message)
}

getInitialCards(){
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
}

getUserInfo(){
  return fetch(`${this.url}/users/me`, {
    headers: this.headers
  })
  .then(this._handleResponse)
  .catch(this._handleResponseError)
}

changeAvatar(form){
  return fetch(`${this.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
          avatar: form
        })
  })
  .then(this._handleResponse)
  .catch(this._handleResponseError)
}

addCard(item){
  return fetch(`${this.url}/cards`, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(item)
  })
  .then(this._handleResponse)
  .catch(this._handleResponseError)
}

changeUserInfo(profileInfo){
  return fetch(`${this.url}/users/me`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
        name: profileInfo.profileName,
        about: profileInfo.info
    })
  })
  .then(this._handleResponse)
  .catch(this._handleResponseError)
}

}

export default Api;