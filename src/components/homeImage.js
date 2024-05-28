const HomeImage = ({ className }) => {
  return (
      <div className={ className }>
        <img src={ process.env.PUBLIC_URL + '/pfp.jpg' } alt=""/>
      </div>
  );
}

export default HomeImage;