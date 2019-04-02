import React from 'react';

export type InnerProps = {
  prop1: string,
  prop2: string
}

export default function Inner(props: InnerProps) {
  return <div>{props.prop1} + {props.prop2}</div>
};
