## GraphQL

### 개념
- Hooks 는 리액트 v16.8 에 새로 도입된 기능으로서, 함수형 컴포넌트에서도 상태 관리
- class없이 state를 사용할 수 있는 새로운 기능

### Why use hook
- UI Component와 React Life-cycle이 밀접한 연관이 되어 있어 중복된 코드 중가
```javascript 1.8
/* 로직과 UI가 섞인 Component */
class HomeBanners extends Component {
    componentWillMount() { /* 배너 정보 가져오기 */ }

    render() {
        return <>
            {this.state.banners.map((banner, index) => /* 배너 UI */}
        </>
    }
 }

/* 비슷한 또 다른 배너 Component */
class OtherBanners extends Component { ... }
```

- HOC(Higher Order Component): 상태 및 변수가 자주 바뀌는 Component만 따로 만들고, 재사용이 불가능한 Component는 파라미터를 받아서 처리  
```javascript 1.8
export default class Banners extends Component {
    componentWillMount() { /* 배너 정보 가져오기 */ }

    render() {
        return (this.props.children)(this.state.banners)
    }
 }
/* 재사용 */
<Banners>{banners => /* 홈 Banner용 UI */ }</Banners>
<Banners>{banners => /* 다른 Banner용 UI */ }</Banners>
```

- 위와 같은 방법으로 해결시, React route wrapper의 depth가 너무 많아짐. 무엇보다도 `componentWillUnmount, componentDidMount` 등이 각 컴포넌트에 사용되다보니 
    - 함수는 단일 책임 원칙 위배 
    - 복잡한 코드 생성
    - 테스트 시 어려움 발생

### useState()
- useState는 인자로 초기값을 받고, 현재 상태와 현재 상태를 업데이트할 수 있는 함수를 반환
```javascript 1.8
import { useState } from 'react';

function Example() {
  const [name, setName] = useState('이름');

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

### useEffect()
- `function useEffect(effect: EffectCallback, inputs?: InputIdentityList)`
- 데이터 fetch 등 작업 수행 시, 효과적으로 상태를 업데이트
- 기존 Life-cycle 중 `componentDidMount와 componentDidUpdate, componentWillUnmount` 를 합쳐놓은 것과 유사

```javascript 1.8
/**
* 기존 React 코드
*/
class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = { item : null };
      this.setData = this.setData.bind(this);
    }
    
    componentDidMount() {
      API.getData()
        .then((response) => { this.setData(response) });
    }
    
    setData(data) {
      this.setState({ item: data });
    }
    
    render() {
      const isLoading = (this.state.item == null);
        return { isLoading ? "Loading..."  : this.state.item }
    }
}

/**
* useEffect() 사용하여 개선한 코드
*/
import { useState, useEffect } from 'react';

export function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getData()
      .then((response) => { setData(response) });
  }, []);

  const isLoading = (data == null);
  return { isLoading ? "Loading..."  : data }
}
```

##### 출처
 - https://velog.io/@vies00/React-Hooks
