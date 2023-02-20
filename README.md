# 적용

- Next13
- TS
- tanstack/react-query

- recoil
- MUI/emotion

- eslint, prettier, post css
- husky, lint-staged, stylelint
- nvmrc(버전 일치)

# stylelint 적용

1. vscode의 확장프로그램 Stylelint 설치
2. root경로의 .vscode/settings.json파일에 다음과 같이 작성

```
{
  "stylelint.enable": true,
  "stylelint.validate": ["css", "scss", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}

```
