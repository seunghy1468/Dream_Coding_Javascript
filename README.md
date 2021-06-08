# Dream_Coding_Javascript

## start : 2021.05.31 ~ 

 🥙 관련 용어 설명

	• Single Page Application (SPA)
		○ 서버로부터 완전한 새로운 페이지를 불러오는 방식 x
		○ 현재 페이지를 동적으로 다시 작성
		○ React, Vue 등 framework을 이용하여 더욱 쉽게 작성 가능

	• 활용
		○ Node.js : back-end
		○ React-native : mobile
		○ Electron : desktop
		○ 이렇게 활용 가능

	• Application Programming Interface (API)
![image](https://user-images.githubusercontent.com/47622991/121137825-0aec0900-c872-11eb-8d6a-930205e9f667.png)

----------------------------------------

🥣 Async vs Defer

	• 브라우저가 HTML을 한 줄 씩 분석한다.
		○ DOM 요소로 변환한다.
		○ 이를 parsing이라 함.
	• 이때, script tag를 만나면 parsing을 중단한다! (head 안 scrip tag)
		○ Js 파일을 서버에서 다운 받아서 실행한다.
		○ 이후 다시 parsing한다.
		
	- Js 파일이 크다면, 인터넷 환경이 느리다면….
		○ 사용자가 웹사이트를 볼 때까지 오래 걸린다.
		○ 이를 해결하
		○ 기 위해… -> body 끝 부분에 script tag를 넣는다.

	- 
![image](https://user-images.githubusercontent.com/47622991/121137866-1808f800-c872-11eb-8a7f-822ddcaf799d.png)

	• Body 끝 script tag
		○ 쭉 parsing해서 페이지가 준비가 된 다음, fetching(서버로부터 받아오고), executing(실행)한다.
		○ 사용자가 빨리 웹 페이지를 볼 수 있다.
		○ 그러나 웹사이트가 js에 많이 의존적이라면… js를 받아오는 시간을 기다려야 사용자가 제대로 사용할 수 있다.
![image](https://user-images.githubusercontent.com/47622991/121137949-2eaf4f00-c872-11eb-9016-c7abb3936120.png)

	• Head 안 async
		○ Async == boolean 타입 (선언만으로 항상 true로 되어있음)
		○ Parsing을 하다가 script tag를 만나면 병렬로 다운로드(fetching) 진행
		○ 이후 fetching이 끝나면 parsing을 중단하고, script를 실행한다.
		○ 그러나 사용자가 여전히 웹 사이트를 보는데 시간이 걸린다.
		○ 또한 js를 실행하려 할 때, 아직 html을 parsing 못한 부분이 남아있어서 위험요소!
![image](https://user-images.githubusercontent.com/47622991/121137974-35d65d00-c872-11eb-9821-c959577947a9.png)

	• Head 안 defer
		○ Parsing 하다가 script tag를 만나면 병렬로 fetching 진행
		○ Fetching이 끝나도 계속 parsing 유지
		○ 이후 Parsing 끝나면 그 때, js를 실행한다!
			§ 가장 좋은 옵션!!!
![image](https://user-images.githubusercontent.com/47622991/121137996-3a027a80-c872-11eb-9634-6aa8d9218ebc.png)

	• 여러 script tag를 넣었을 때 비교
		○ Defer 속성이 훨씬 효율적!!
![image](https://user-images.githubusercontent.com/47622991/121138010-3ec72e80-c872-11eb-8056-e07c0ba491da.png)


