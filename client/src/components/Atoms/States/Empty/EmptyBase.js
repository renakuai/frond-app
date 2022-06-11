import React from "react";
import { State, Img } from '../State.styles'
import { H3Base, PBase } from '../../Font/FontBase'

function EmptyBase(props) {
  const {
    children,
    children2,
    width,
    fullPage
  } = props;

  return (
    <State
      width={width}
      fullPage={fullPage}
    >
      <Img src="/illustrations/empty.png" />
      <H3Base>{children}</H3Base>
      <PBase>{children2}</PBase>
    </State>
  )
}

export default EmptyBase;