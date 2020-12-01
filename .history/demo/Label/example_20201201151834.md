---
title: Label-Simple
order: 1
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Label } from 'material-example-multi-components';

class App extends Component {
  render() {
    return (
      <div>
        <Label type="simple" />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```
