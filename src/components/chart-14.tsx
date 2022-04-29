import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={4}>入室盗窃</td>
        <td>翻窗入室</td>
        <td>99</td>
        <td rowSpan={4}>99</td>
      </tr>
      <tr>
        <td>撬门入室</td>
        <td>99</td>
      </tr>
      <tr>
        <td>技术开锁</td>
        <td>99</td>
      </tr>
      <tr>
        <td>撬防护栏</td>
        <td>99</td>
      </tr>
      <tr>
        <td rowSpan={2}>抢夺</td>
        <td>摩托车飞车抢夺</td>
        <td>99</td>
        <td rowSpan={2}>99</td>
      </tr>
      <tr>
        <td>徒手抢夺</td>
        <td>99</td>
      </tr>
      <tr>
        <td rowSpan={3}>扒窃</td>
        <td>公交车扒窃</td>
        <td>99</td>
        <td rowSpan={3}>99</td>
      </tr>
      <tr>
        <td>车站扒窃</td>
        <td>99</td>
      </tr>
      <tr>
        <td>街面扒窃</td>
        <td>99</td>
      </tr>
      <tr>
        <td rowSpan={2}>诈骗</td>
        <td>甩票子诈骗</td>
        <td>99</td>
        <td rowSpan={2}>99</td>
      </tr>
      <tr>
        <td>买手机诈骗</td>
        <td>99</td>
      </tr>
      </tbody>
    </table>
  );
};