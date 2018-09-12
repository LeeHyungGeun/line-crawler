# 소개
이 crawling 라이브러리는 특정 도메인에서 키워드 검색을 도와주는 라이브러리 입니다.
예를들어, 만약 라인 플러스의 `Front End` 직군 구인 페이지들을 검색하고 싶다면 
`https://career.linecorp.com/linecorp/career/list/` 주소에서 검색을 시작하여 `Front End` 키워드를 검색하면 됩니다.
아래는 예제 입니다.
``` javascript
// ./app.js
import crawler from './crawler'

crawler('https://career.linecorp.com/linecorp/career/list/', 'Front End')
.then((result) => console.log(result));
```

# 데모 실행 방법
## 인스톨 & 실행
``` bash
> npm install
> npm run start
```
[NOTE]: 검색하는 로그 및 결과가 모두 콘솔창에 나오니 콘솔창을 확인 부탁 드립니다.

# 소스코드
- `./crawler.js`: crawling 메인 소스 코드입니다. 
- `./app.js`: crawling 라이브러리 사용 데모 파일입니다.

# 왜 이 앱을 보여드리고 싶었는지
0. 첫 째로 예전에 LINE WORKS (NAVER CHINA) 에서 일할 때 브랜드 명을 `WORKS MOBILE` 에서 `LINE WORKS`로 바꾼적이 있습니다. 그 때 제가 담당하고 있던 브랜드 페이지(line.worksmobile.com), 고객센터(help.worksmobile.com), 공지사항(kr1-notice.worksmobile.com) 의 모든 페이지에서 `WORKS MOBILE` 이라는 텍스트를 바꿔야 했는데요. 
그때 페이지가 너무 많아서 이 앱을 만들어서 혼자 검색하고 찾았던 적이 있습니다. 또 이외에 일본어 브랜드 사이트에서 한국어 텍스트가 있는지 와 같은 이슈를 찾을때도 사용했었습니다.
1. 이 라이브러리는 제가 프론트엔드 개발자임에도 불구하고 얼마나 네트워크와 헤드리스 브라우저, 리퀘스트 그리고 웹 컴파일러에 대한 지식이 있는지 보여줄수 있어서 보여드리게 되었습니다. 
2. crawler를 개발할때 좋은 점은 `Recursive Function` 를 사용할 수 있다는 겁니다. 자기 함수 호출을 통해 반복적인 일을 해결할 수 있는 점이 매력적이라고 생각 합니다.
또한 많은 자바스크립트 기술들을 사용할 수 있습니다.
- Recursive Function
- First Class Citizen(Function returns a Function) & Encapsulation
: 자바스크립트는 퍼스트 클래스 시티즌 이기 때문에 함수를 파라미터로 넘길수 있고 리턴할 수도 있습니다. 또한 어휘적 스코프(lexical scope)를 사용해서 private variable들을 만들수도 있습니다. 
- Promise
: 자바스크립트는 하나의 스레드만 사용하기 때문에 asynchronously 코딩합니다. 하지만 서버으 리스판스를 기다릴때 등은 synchronously하게 코딩해야하고 타임 스케줄링등을 해야 하는데요. 이 앱에서는 crawling 끝나는 시점을 확인하기 위해 Promise를 사용하였습니다.