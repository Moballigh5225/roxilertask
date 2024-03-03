import { useRef, useState } from "react";

const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="">
      <div onClick={handleImageClick}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="img-display-after"
          />
        ) : (
          <img src="./profile.png" alt="" className="img-display-before" />
        )}
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Profile;
