# React

## React Hook 
### 1. useMemo vs useCallback
 - 차이: 어떠한 value type에 상관없이 (함수 뿐만 아니라) **memorization 적용** 시킨다는 것을 제외하고는 유사
 - [When to useMemo and useCallback](https://ideveloper2.dev/blog/2019-06-14--when-to-use-memo-and-use-callback/)

### 2.React + Graphql suspend
- https://medium.com/open-graphql/react-suspense-with-graphql-d95cdef46bfe

#### 선행지식 : React 의 suspend 개념
 - https://reactjs.org/docs/react-api.html#reactsuspense
 - Lazy loading 개념과 호환
```javascript
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```
OtherComponent가 로딩되기전까지 Fallback으로 Spinner Component 렌더링을 해주는 것을 ‘React Suspend’라고 칭함

- React.lazy(), <React.Suspense>는 ReactDomServer에서 지원하지 않기에 차후 한계점이 있을거라 생각. 그래서 그 대안으로 <b>Graphql suspend</b> 사용
