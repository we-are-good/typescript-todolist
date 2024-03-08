# TodoList

### 목적

- 할 일 목록을 관리할 수 있는 홈페이지를 제작하기 위해 만들어졌습니다.
- 할 일을 추기하고, 삭제하고, 완료/진행 여부를 바꿀 수 있습니다.

---

### 항목

- TodoTitle : 할일 제목
- TodoContent : 할일 내용
- TodoDate : 마감일
- IsDone : 완료/진행중

---

### 컴포넌트 구조

```
📦src
┣ 📂assets
┃ ┗ 📜react.svg
┣ 📂components
┃ ┣ 📜Header.tsx
┃ ┣ 📜TodoDelete.tsx -- Todo delete
┃ ┣ 📜TodoForm.tsx -- Todo create
┃ ┣ 📜TodoList.tsx -- TodoList reading
┃ ┗ 📜TodoToggle.tsx -- Todo working/done toggle
┣ 📂styles
┃ ┣ 📜GlobalStyle.tsx
┃ ┣ 📜HeaderStyle.tsx
┃ ┣ 📜TodoFormStyle.tsx
┃ ┗ 📜TodoListStyle.tsx
┣ 📜App.tsx
┣ 📜main.tsx -- GlobalStyle
┗ 📜vite-env.d.ts
```

---

### 사용방법

- 제목과 내용을 입력한 후 등록 버튼을 누릅니다.
  - 등록한 할일은 Working 에 입력됩니다.
  - 제목과 내용을 입력하지 않으면 등록되지 않습니다.
- working에 등록된 할일은 완료와 삭제 버튼이 있습니다
  - 완료를 누르면 Done으로 이동합니다.
  - 삭제를 누르면 리스트가 삭제됩니다.

---

### 사용된 기술

- React

---
