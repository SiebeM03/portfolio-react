const HomeImage = ({ className }) => {
  return (
      <div className={ className  }>
        <img src={ process.env.PUBLIC_URL + '/images/pfp.png' } alt=""/>
      </div>
  );
}

export default HomeImage;