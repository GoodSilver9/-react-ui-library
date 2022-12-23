import React, { memo, useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";

const Button = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
  const [singleToggler, setSingleToggler] = useState(false);
  const [multiToggler, setMultiToggler] = useState({
    open: false,
    index: 1,
  });
  const [youtubeToggler, setYoutubeToggler] = useState(false);
  const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
    open: false,
    index: 1,
  });
  return (
    <div>
      <h2>FsLightBox</h2>
      <h3>Single Gallery</h3>
      <div>
        <Button
          onClick={(e) => {
            setSingleToggler(!singleToggler);
          }}
        >
          <img src={img1} width="150" alt="img1" />
        </Button>
        <FsLightbox source={[img1]} toggler={singleToggler} />
      </div>
      <h3>Multi Gallery</h3>
      <div>
        <Button
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 1 })
          }
        >
          <img scr={img1} width="150" alt="img1" />
        </Button>
        <Button
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 2 })
          }
        >
          <img scr={img2} width="150" alt="img1" />
        </Button>
        <Button
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 3 })
          }
        >
          <img scr={img3} width="150" alt="img1" />
        </Button>
        <Button
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 4 })
          }
        >
          <img scr={img4} width="150" alt="img1" />
        </Button>
        <Button
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 5 })
          }
        >
          <img scr={img5} width="150" alt="img1" />
        </Button>
        <FsLightbox
          toggler={multiToggler.open}
          source={[img1, img2, img3, img4, img5]}
          slide={multiToggler.index}
        />
      </div>
      <h3>Youtube Single link</h3>
      <div>
        <Button onClick={(e) => setYoutubeToggler(!youtubeToggler)}>
          <img
            src="https://www.youtube.com/vi/NhHSXVjtlc4/default.jpg"
            width="150"
            alt="img1"
          />
        </Button>
        <FsLightbox
          toggler={youtubeToggler}
          source={["https://www.youtube.com/watch?v=NhHSXVjtlc4"]}
        />
        <h3>Youtube Multi link</h3>
        <div>
          <Button
            onClick={(e) =>
              setYoutubeMultiToggler({
                open: !youtubeMultiToggler.open,
                index: 1,
              })
            }
          >
            <img
              src="https://www.youtube.com/vi/NhHSXVjtlc4/default.jpg"
              width="150"
              alt="img1"
            />
          </Button>
          <Button
            onClick={(e) =>
              setYoutubeMultiToggler({
                open: !youtubeMultiToggler.open,
                index: 2,
              })
            }
          >
            <img
              src="https://www.youtube.com/vi/I01w4CouctE/default.jpg"
              width="150"
              alt="img1"
            />
          </Button>
          <Button
            onClick={(e) =>
              setYoutubeMultiToggler({
                open: !youtubeMultiToggler.open,
                index: 3,
              })
            }
          >
            <img
              src="https://www.youtube.com/vi/_kt9x11CxPw/default.jpg"
              width="150"
              alt="img1"
            />
          </Button>
          <FsLightbox
            toggler={youtubeMultiToggler.open}
            source={[
              "https://www.youtube.com/watch?v=NhHSXVjtlc4",
              "https://www.youtube.com/watch?v=I01w4CouctE",
              "https://www.youtube.com/watch?v=_kt9x11CxPw",
            ]}
            slide={youtubeMultiToggler.index}
          />
        </div>
      </div>
    </div>
  );
});

export default FsLightboxEx;
