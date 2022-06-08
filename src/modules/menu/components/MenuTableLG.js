import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

function MenuTableLG({ data }) {
  return (
    <table className="table table-borderless menu-table">
      <thead>
        <tr>
          <td colSpan="5" className="pb-0">
            <div className="horizontal-bar" />
          </td>
        </tr>
        <tr>
          <td className="section-title">{get(data, 'title')}</td>
          <th colSpan="2">HOT</th>
          <th colSpan="2">OVER ICE</th>
        </tr>
        <tr>
          <td />
          <th>R</th>
          <th>L</th>
          <th>R</th>
          <th>L</th>
        </tr>
      </thead>
      <tbody>
        {get(data, 'list', []).map(item => (
          <tr key={item.id}>
            <td className="label"><span>{get(item, 'label', '')}</span></td>
            <td className="value"><span>{get(item, 'hot.regular', '')}</span></td>
            <td className="value"><span>{get(item, 'hot.large', '')}</span></td>
            <td className="value"><span>{get(item, 'over_ice.regular', '')}</span></td>
            <td className="value"><span>{get(item, 'over_ice.large', '')}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MenuTableLG.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default MenuTableLG;
