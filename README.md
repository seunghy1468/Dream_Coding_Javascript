# Dream_Coding_Javascript

## start : 2021.05.31 ~ 

 ๐ฅ ๊ด๋ จ ์ฉ์ด ์ค๋ช

	โข Single Page Application (SPA)
		โ ์๋ฒ๋ก๋ถํฐ ์์ ํ ์๋ก์ด ํ์ด์ง๋ฅผ ๋ถ๋ฌ์ค๋ ๋ฐฉ์ x
		โ ํ์ฌ ํ์ด์ง๋ฅผ ๋์ ์ผ๋ก ๋ค์ ์์ฑ
		โ React, Vue ๋ฑ framework์ ์ด์ฉํ์ฌ ๋์ฑ ์ฝ๊ฒ ์์ฑ ๊ฐ๋ฅ

	โข ํ์ฉ
		โ Node.js : back-end
		โ React-native : mobile
		โ Electron : desktop
		โ ์ด๋ ๊ฒ ํ์ฉ ๊ฐ๋ฅ

	โข Application Programming Interface (API)

๐ฅฃ Async vs Defer

	โข ๋ธ๋ผ์ฐ์ ๊ฐ HTML์ ํ ์ค ์ฉ ๋ถ์ํ๋ค.
		โ DOM ์์๋ก ๋ณํํ๋ค.
		โ ์ด๋ฅผ parsing์ด๋ผ ํจ.
	โข ์ด๋, script tag๋ฅผ ๋ง๋๋ฉด parsing์ ์ค๋จํ๋ค! (head ์ scrip tag)
		โ Js ํ์ผ์ ์๋ฒ์์ ๋ค์ด ๋ฐ์์ ์คํํ๋ค.
		โ ์ดํ ๋ค์ parsingํ๋ค.
		
	- Js ํ์ผ์ด ํฌ๋ค๋ฉด, ์ธํฐ๋ท ํ๊ฒฝ์ด ๋๋ฆฌ๋ค๋ฉดโฆ.
		โ ์ฌ์ฉ์๊ฐ ์น์ฌ์ดํธ๋ฅผ ๋ณผ ๋๊น์ง ์ค๋ ๊ฑธ๋ฆฐ๋ค.
		โ ์ด๋ฅผ ํด๊ฒฐํ
		โ ๊ธฐ ์ํดโฆ -> body ๋ ๋ถ๋ถ์ script tag๋ฅผ ๋ฃ๋๋ค.

![image](https://user-images.githubusercontent.com/47622991/121138173-66b69200-c872-11eb-924b-6d2c95758a40.png)


	โข Body ๋ script tag
		โ ์ญ parsingํด์ ํ์ด์ง๊ฐ ์ค๋น๊ฐ ๋ ๋ค์, fetching(์๋ฒ๋ก๋ถํฐ ๋ฐ์์ค๊ณ ), executing(์คํ)ํ๋ค.
		โ ์ฌ์ฉ์๊ฐ ๋นจ๋ฆฌ ์น ํ์ด์ง๋ฅผ ๋ณผ ์ ์๋ค.
		โ ๊ทธ๋ฌ๋ ์น์ฌ์ดํธ๊ฐ js์ ๋ง์ด ์์กด์ ์ด๋ผ๋ฉดโฆ js๋ฅผ ๋ฐ์์ค๋ ์๊ฐ์ ๊ธฐ๋ค๋ ค์ผ ์ฌ์ฉ์๊ฐ ์ ๋๋ก ์ฌ์ฉํ  ์ ์๋ค.
		
![image](https://user-images.githubusercontent.com/47622991/121138204-703ffa00-c872-11eb-90f0-f8aaf4ceb189.png)


	โข Head ์ async
		โ Async == boolean ํ์ (์ ์ธ๋ง์ผ๋ก ํญ์ true๋ก ๋์ด์์)
		โ Parsing์ ํ๋ค๊ฐ script tag๋ฅผ ๋ง๋๋ฉด ๋ณ๋ ฌ๋ก ๋ค์ด๋ก๋(fetching) ์งํ
		โ ์ดํ fetching์ด ๋๋๋ฉด parsing์ ์ค๋จํ๊ณ , script๋ฅผ ์คํํ๋ค.
		โ ๊ทธ๋ฌ๋ ์ฌ์ฉ์๊ฐ ์ฌ์ ํ ์น ์ฌ์ดํธ๋ฅผ ๋ณด๋๋ฐ ์๊ฐ์ด ๊ฑธ๋ฆฐ๋ค.
		โ ๋ํ js๋ฅผ ์คํํ๋ ค ํ  ๋, ์์ง html์ parsing ๋ชปํ ๋ถ๋ถ์ด ๋จ์์์ด์ ์ํ์์!
		
![image](https://user-images.githubusercontent.com/47622991/121138257-77ff9e80-c872-11eb-96af-d44e4878d9f2.png)


	โข Head ์ defer
		โ Parsing ํ๋ค๊ฐ script tag๋ฅผ ๋ง๋๋ฉด ๋ณ๋ ฌ๋ก fetching ์งํ
		โ Fetching์ด ๋๋๋ ๊ณ์ parsing ์ ์ง
		โ ์ดํ Parsing ๋๋๋ฉด ๊ทธ ๋, js๋ฅผ ์คํํ๋ค!
			ยง ๊ฐ์ฅ ์ข์ ์ต์!!!
			
![image](https://user-images.githubusercontent.com/47622991/121138275-7c2bbc00-c872-11eb-8f91-41db2e9fd355.png)


	โข ์ฌ๋ฌ script tag๋ฅผ ๋ฃ์์ ๋ ๋น๊ต
		โ Defer ์์ฑ์ด ํจ์ฌ ํจ์จ์ !!
		
![image](https://user-images.githubusercontent.com/47622991/121138321-877ee780-c872-11eb-94b8-397c2eb3dfda.png)
![image](https://user-images.githubusercontent.com/47622991/121138338-8a79d800-c872-11eb-9661-0d34e206533e.png)

๐ช ๋ณ์

	โข Mutable : let, var (์ฌ์ฉํ์ง ์์)
	โข Immutable : const
		โ Security
		โ Thread safety
		โ Reduce human mistakes
	โข Number
		โ Type ์ง์  (์๋ฃํ์ด ํ๋๋ก ํต์ผ)
		โ Infinity, -infinity, NaN
		// DOM ์์๋ฅผ js๋ฅผ ์ด์ฉํด์ position์ ๋ฐ๊พธ๊ฑฐ๋, ๋ค์ํ ๊ณ์ฐ์ ํ  ๋,
		// ์ ๋ง validํ ๊ฐ์ธ์ง ํ์ธํ  ์ ์๋ค.
		โ Boolean
			ยง False : 0, NaN, null, undefined, ' '
				โก Null : x = null; ์ด๋ผ๊ณ  ๋ชํํ ์ ์ธํด์ฃผ์ด์ผ ํจ
				โก Undefined : x; ๋ณ์์ value๋ฅผ ์ง์ ํ์ง ์์ผ๋ฉด ๋จ
			ยง True : false ๊ฒฝ์ฐ๋ฅผ ์ ์ธํ ๋ค๋ฅธ value
	โข Symbol
		โ ๋์ค์ ๊ณ ์  ์๋ณ์๊ฐ ํ์ํ  ๋ ์ฌ์ฉ

๐ Dynamic typing

	// ๋น ๋ฅด๊ฒ ํ๋กํ ํ์์ ํ  ๋, ๊ต์ฅํ ํจ๊ณผ์ !
	// ๊ทธ๋ฌ๋ ๋ค์์ ์์ง๋์ด๋ค๊ณผ ๊ท๋ชจ๊ฐ ์๋ ํ๋ก์ ํธ๋ฅผ ํ  ๋, ๋ฌธ์  ๋ฐ์ํ  ์ ์๋ค.
	
	```
	let text = 'hello';
	console.log(text.charAt(0)); // h
	console.log(`value: ${text}, type: ${typeof text}`);
	text = 1;
	console.log(`value: ${text}, type: ${typeof text}`);
	text = '7' + 5;
	console.log(`value: ${text}, type: ${typeof text}`);
	text = '8' / '2';
	console.log(`value: ${text}, type: ${typeof text}`);
	console.log(text.charAt(0)); // error ๋ฐ์!!
	```
	
	// -> ์ด๋ฐ ๋ค์ด๋๋ฏน ์ฑ์ง ๋๋ฌธ์ type์ผ๋ก ๋คํต์๋ฅผ ๋ง์์... typescript๊ฐ ๋์๋ค!!
	
๐ Function์ด๋

	โข ์์ ํ๋ก๊ทธ๋จ์ด๋ผ ํ๋ค. (sub-program)
	โข Parameter -> function -> return
	โข Input, output, function name ์ค์!

๐ฅฃ class / object

	โข Class
		โ Fields (์์๋คโฆ ๊ฐ๋ค..)
		โ Methods (ํจ์๋ค)
		โ ์ผํ๋ชฐ์ ๋ง๋ค๊ฑฐ๋ ์๊ฐ์ ์ฒญ ํ๋ก๊ทธ๋จ์ ๋ง๋ค ๋, ์ด๋ป๊ฒ class๋ฅผ ์ ์ํ๋ฉด ์ข์ ์ง ์ ์๊ฐํด๋ณด์!
		โ Template
			ยง ์ด๋ฐ class๋ ์ด๋ฌ์ด๋ฌํ data๊ฐ ์์ด..
		โ Declare once
		โ No data in
		
	โข Object
		โ Instance of a class
		โ Created many times
		โ Data in
		
![image](https://user-images.githubusercontent.com/47622991/121138697-eba1ab80-c872-11eb-8673-a7c61496075a.png)

	โข Typescript์ input type (string), output type (number)


	* ๋ถ์ด๋นต : class -> ํฅ, ํฌ๋ฆผ, ํผ์ ๋ฑ๋ฑ : object

	* Class ์์ fields์ methods ๋ค์ ์๋ก์ด object๋ฅผ ๋ง๋ค ๋๋ง๋ค, ๊ทธ๋๋ก ๋ณต์ ๊ฐ ๋์ด์ value๋ง ์ฐ๋ฆฌ๊ฐ ์ง์ ๋ ๊ฑธ๋ก ๋ณ๊ฒฝ๋์ด์ง๋ค!!






