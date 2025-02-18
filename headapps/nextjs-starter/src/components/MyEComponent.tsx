interface MyEComponentProps {
  title: string;
}
export const MyEComponent = (props: MyEComponentProps): JSX.Element => {
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
    </div>
  );
};
