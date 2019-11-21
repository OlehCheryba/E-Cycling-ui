import React from 'react';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      {pages.map(p => (
        <span key={p} onClick={() => {props.onPageChanged(p)}}>
          {p}
        </span>
      ))}
    </>
  )
}

export default Paginator