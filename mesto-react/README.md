# mesto-react
## javascript + React.
## Скоро вы сможете в этой работе редактировать текст, добавлять свои изображения, открывать их по нажатию, и удалять. 
### Здесь применено:
1. _html5_
2. _css3_
3. _javascript_
4. _React_

### 1. html:
``` html
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Место</title>
</head>
```
  
### 2. css:
 ```css
  .popup{
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    background: rgba(0,0,0,0);
    position:initial;
}
```
  
### 3. React:
  ```javascript
  React.useEffect(() =>{ 
  api.getUserInfo()
  .then( res =>{
    setUserInfo(res.name)
    setUserDescription(res.about)
    setUserAvatar(res.avatar)
  })
  .catch((err) => {
    console.log(err); 
  });     
  }, [])

const [cards, setCards] = React.useState([]);
```

## Сайт является кроссбраузерным и работает во всех известных браузерах(Safari,Яндекс Браузер,Google Chrome,Firefox)
## Github Pages: https://pavelpankov111.github.io/mesto-react/
  
  
  
  
  
