import { Link, routes } from '@redwoodjs/router'
import { css } from 'linaria'

const GridBox = css`
  width: 12rem;
  height: 12rem;

  &:nth-of-type(odd) {
    background-color: rgba(255, 0, 0, 0.25);
  }

  &:nth-of-type(even) {
    background-color: rgba(0, 0, 255, 0.25);
  }
`

import { PageLayout } from '@layouts'
const HomePage = () => (
  <PageLayout>
    <div className={GridBox}>
      <span>1</span>
    </div>
    <div className={GridBox}>
      <span>2</span>
    </div>
    <div className={GridBox}>
      <span>3</span>
    </div>
    <div className={GridBox}>
      <span>4</span>
    </div>
    <div className={GridBox}>
      <span>5</span>
    </div>
    <div className={GridBox}>
      <span>6</span>
    </div>
    <div className={GridBox}>
      <span>7</span>
    </div>
    <div className={GridBox}>
      <span>8</span>
    </div>
    <div className={GridBox}>
      <span>9</span>
    </div>
    <div className={GridBox}>
      <span>10</span>
    </div>
    <div className={GridBox}>
      <span>11</span>
    </div>
    <div className={GridBox}>
      <span>12</span>
    </div>
    <div className={GridBox}>
      <span>13</span>
    </div>
    <div className={GridBox}>
      <span>14</span>
    </div>
    <div className={GridBox}>
      <span>15</span>
    </div>
    <div className={GridBox}>
      <span>16</span>
    </div>
  </PageLayout>
)

export default HomePage
