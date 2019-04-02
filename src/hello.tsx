//import * as React from 'react'
import React from 'react'
import Inner, {InnerProps} from "./inner";

export default function Hello(props: InnerProps) {
  return <div>
    <h1>Hello React</h1>
    <Inner {...props} />
  </div>
};
