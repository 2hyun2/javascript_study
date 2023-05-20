# `#`은 제목

- `-` 은 리스트 순서가 없는 리스트

1. `number.` 은 숫자 목록 ex ol 순서가 있는 리스트

- git bash 는 bash를 윈도우 에서 작동되게 해주는 프로그램
- posix shell 이란
- posix 는 운영체제를 어떻게 만들지 사람들 끼리 약속한 표준
- window 는 posix를 구현 안함 따르지 않음

<!-- # 은 html h 를 뜻함 # 1개는 h1 2개는 h2 -->

## posix shell 명령어 모음

1. shell 은 현재위치 , 환경변수를 가지고 있음
   - 현재 디렉토리 위치를 보려면 `pwd` 명령어 `print working directory`
   - 현재 위치에서 파일 목록을 보려면 `ls`
   - 이름이 `.` 으로 시작하면 숨김 폴더나 숨김 파일로 간주한다.
   - 숨겨진 파일 보고싶으면 `ls -a`
   - `ls [경로]`
   - 현재 위치를 변경하고 싶으면 `cd <경로>`
     - `cd`입력하면 홈으로 감
     - `cd -` 입력전 직전 디렉토리로 이동
     - `cd ..` 상위 디렉토리로 이동
     - `cd ../..` 2상위 위로 이동
1. 폴더 만들고 지우기
   - `mkdir` 폴더 만들기 make directory
   - `rmdir` 폴더 지우기 remove directory
1. 파일 만들고 지우기
   - `touch` 파일 만들기
   - `rm` 파일 지우기
1. 파일 내용물 출력하기
   - `cat <파일명>`
   - `cat 만 적으면 무한루프 발생 ctrl + c 로 종료 시켜야함`
   - `ctrl + c 가 적용이 안될시 ctrl + d 로 강제종료 시켜야함`
1. 파일 이름 바꾸기
   - `mv <기존경로명> <신규경로명>` <br> ex : mv study1 ../study
