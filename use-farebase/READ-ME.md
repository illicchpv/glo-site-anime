https://console.firebase.google.com/

### home - выбор рабочей базы
![alt text](image.png)

### firebase управление базой
![alt text](image-1.png)

### firebase создание базы
![alt text](image-2.png)

### firebase  создание базы2
![alt text](image-3.png)

### firebase  создание базы3
![alt text](image-4.png)

### firebase   создание базы4 готово
![alt text](image-5.png)

### firebase  наполнение данными из файла
![alt text](image-6.png)

### firebase наполнение данными из файла готово
![alt text](image-7.png)

### firebase конфигурация доступа
![alt text](image-9.png)
```json
вариант конфигурации
{
  "rules": {
    //".read": "now < 1762549200000",  // 2025-11-8
    //".write": "now < 1762549200000",  // 2025-11-8
    ".read": true,
    ".write": false,
    "goods": {
      ".indexOn": ["title", "price", "category"]
    }      
  }
}
```


### firebase получение ссылки для доступа к данным
![alt text](image-8.png)

### firebase мой вариант ссылки:
```
https://myproject-4cdbd-default-rtdb.firebaseio.com/db-anime.json
```


### firebase данные получаемые по этой ссылке;
![alt text](image-10.png)

