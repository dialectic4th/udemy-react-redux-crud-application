import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 3 },
    { }
  ]
  return (
    <div>
      {// domごとにキーにインデックスを与える
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
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

export default App;