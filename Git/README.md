# Git 사용시 찾아본 지식 및 트러블 슛팅

## 유용한 정보

## 트러블 슛팅

### 1. git fatal: remote origin already exists
 - 현상: github에 새로운 repository를 생성하고 터미널에서 remote할때 위와 같은 에러 발생
 - 해결: `git remote rm origin` 으로 remote origin 제거
