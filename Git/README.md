# Git 사용시 찾아본 지식 및 트러블 슛팅

## 유용한 정보

## 트러블 슛팅

### 1. git fatal: remote origin already exists
 - 현상: github에 새로운 repository를 생성하고 터미널에서 remote할때 위와 같은 에러 발생
 - 해결: `git remote rm origin` 으로 remote origin 제거
 
### 2. 강제로 master, dev pull 받는방법 [(참고자료)](https://frontdev.tistory.com/entry/GIT-Conflict%EC%B6%A9%EB%8F%8C-%EB%82%AC%EC%9D%84-%EB%95%8C-%EA%B0%95%EC%A0%9C%EB%A1%9C-Pull-%ED%95%98%EA%B8%B0)
 - 현상: `git pull origin dev` 시 conflict error 다수 발생
 - 해결: 강제로 pull 하는 방법으로 해결
 ```markdown
  git fetch --all
  git reset --hard origin/master
  git pull origin master
 ```

