import * as React from 'react';

type ComponentProps = {
  type: string,
};

export default function Label(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className="label" {...others}>Label: {type}</div>
  );
}
