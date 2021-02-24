import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_favorite } from "react-icons-kit/md/ic_favorite";
import { ic_favorite_border } from "react-icons-kit/md/ic_favorite_border";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";

/**
 *
 * @param {string} loading - 속성 리스트 : size(기본: 28), style, isFullHeart(불린) //{isFilled, defaultColor, logicalSize, size}
 */

export default function LikedIcon(props) {
  const { size, style, isFilled } = props;
  return (
    <>
      {isFilled ? (
        <HeartFill size={size ? size : "28px"} style={style} />
      ) : (
        <Heart size={size ? size : "28px"} style={style} />
      )}
    </>
  );
}
