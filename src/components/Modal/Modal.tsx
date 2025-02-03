import React from "react"
import { Icon } from "../Icon"
import useOutsideClick from "../../hooks/useOnClickOutside"
import { StyledModal, Container, Wrapper } from "./styles"

interface Props extends React.PropsWithChildren {
  onClose?: () => void
}

export function Modal({ children, onClose }: Props) {
  React.useEffect(() => {
    const oldValue = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = oldValue
    }
  }, [])

  const ref = React.useRef<HTMLDivElement>(null!)

  useOutsideClick(ref, () => onClose && onClose())

  return (
    <StyledModal>
      <Container>
        <Wrapper ref={ref}>
          {onClose && (
            <button className="close" onClick={onClose}>
              <Icon.Close2 />
            </button>
          )}
          {children}
        </Wrapper>
      </Container>
    </StyledModal>
  )
}
