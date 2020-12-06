import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
## import
- Reactは{}無しで単体で書くっぽそう

## 変数
- let,var,const
- 変数名は最初は大文字・・・らしい

## Component
- Class Component
- functional Component 
- この２種類がある

## Componentにおける変数
- props；関数の引数として用いられる変数
- state；コンポーネント内で使用される変数


## Reactをコンパイルする上で、Babelとwebpackが動いている
- JSXコードはトランスパイラーBabelによってJavascriptに変換される
- 複数のJSファイルなどはwebpackによってbundle.jsへ変換される（参照：https://webpack.js.org/）
- 最終的なHTML（ブラウザ）ではscriptタグでbundle.jsを呼び出して用いられる形で記述される

## return
- return値は一つのみ
- divタグで実行するとdivタグが二つ表示される。divタグの代わりにReactFragmentを用いると防げる（らしい）
*/

//functional Component　
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 3 },
    { }
  ]
  return (

    <React.Fragment>
      {// domごとにキーにインデックスを与える
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      <Counter></Counter>
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}


//値を事前に定義できる・・・が、上に書けない。という問題点
User.defaultProps = {
  age: 1
}

//Warningにおいて型を確認できる。（エラーとして吐き出してほしいところだけど・・・）
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

//Class Component
class Counter extends Component {

  // 初期化処理 superで変数propsを初期化する形で書くらしい
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    //this.state = { count: this.state.count + 1 }　//みたいには書くとWarningが出る
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>----------------------------------------------</div>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;