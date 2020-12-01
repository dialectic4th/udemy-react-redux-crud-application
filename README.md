## package management
- npmよりもyarnの方が信頼度が高い(らしい)
- nodebrew,node,yarnの依存関係（っぽい）
- yarnはプロジェクト単位で管理できるJSのパッケージ管理ツール（らしい）
- 参考
  - https://qiita.com/morikiyo/items/cd219a0b7aaed5b23d51
  - https://qiita.com/chihiro/items/13652c461519f8922f56
  - https://qiita.com/senou/items/d939601e32c0005ebfe3
  - https://classic.yarnpkg.com/ja/docs/usage/

```
$ nodebrew install 10.14.2
$ nodebrew use 10.14.2
$ node -v
10.14.2
$ npm install --global yarn
$ yarn --version
1.22.10
```

## create-react-app
```
$ git checkout -b hello-world
$ yarn global add create-react-app
$ create-react-app .
$ yarn run start 
http://localhost:3000/
$ vim src App.js
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          Hello World(by Editor)
        </p>
```