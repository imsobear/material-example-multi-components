import * as React from 'react';

type ComponentProps = {
  type: string,
};

export default function ExampleComponent(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className="ExampleComponent" {...others}>Button: {type}</div>
  );
}
