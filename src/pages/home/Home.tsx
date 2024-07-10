import { StoreType } from '@/store';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const category = useSelector(
    (state: StoreType) => {
      return state.categoryStore;
    }
  );
  console.log(category);
  return (
    <div>
        <h1>hello</h1>
    </div>
  )
}
