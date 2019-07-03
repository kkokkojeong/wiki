# Javascript

## 구글링해본 것들
### 1. javascript object find value
 - [Stackoverflow](https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value) 
```javascript 1.8
    const getKeyByValue = (obj, value) => 
            Object.keys(obj).find(key => obj[key] === value);
```

```javascript 1.8
// list에서 folder, author를 가져와서 
    const discoveries = discoveryMock.discoveryLists
        .map(item => {
          return {
            ...item.folder,
            author: item.author,
          }
        })
// list key 와 bookmarksInFolder key가 일치하는 것을 찾아 오브젝트 반환
        .map(item => {
          const key = typeof item.folderId === 'number' ? item.folderId.toString() : item.folderId
          const places = discoveryMock.bookmarksInFolder[key]
    
          return {
            ...item,
            places,
          }
        })
```
