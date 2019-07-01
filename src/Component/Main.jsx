/* eslint-disable radix */
import React from 'react';
import Slide from './Slide';
import ProductShows from './ProductShows';
import EventShows from './EventShows';

export default function Main() {
  return (
    <div id="mainWrap">
      <Slide />
      <ProductShows />
      <EventShows />
    </div>
  );
}
