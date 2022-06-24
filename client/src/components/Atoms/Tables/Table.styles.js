import styled, { css } from 'styled-components';
import { Colors } from '../Colors/Colors.js';
import { Weights } from '../Font/Weights.js';
import { Shadows } from '../Shadows/Shadows.js';


export const RowStyles = css`
text-align: left;
border-bottom: 1px solid ${Colors.grey[20]};
padding: 0.5rem;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.grey[20]};
  border-radius: 8px;
`

export const Th = styled.th`
  background-color: ${Colors.lightBlue[10]};
  color: ${Colors.grey[50]};
  font-size: 0.85rem;
  text-align: left;
  padding: 0.5rem;
`
export const Td = styled.th`
  font-weight: ${Weights.regular};
  ${RowStyles}
`
export const Tr = styled.tr`
> * {
  &:first-child {
    font-weight: ${Weights.semibold};
  }
}
`
