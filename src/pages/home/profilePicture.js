const ProfilePicture = ({ className }) => {
  return (
      <div className={ className  }>
        <img src={ process.env.PUBLIC_URL + '/images/pfp.png' } alt=""
             className="max-w-48 sm:max-w-56 md:max-w-72 mx-auto rounded-xl"/>
      </div>
  );
}

export default ProfilePicture;