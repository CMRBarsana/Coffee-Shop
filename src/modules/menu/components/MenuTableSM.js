import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

function MenuTableSM({ data }) {
  return (
    <table className="table table-borderless menu-table horizontal-bar-init">
      <thead>
        <tr>
          <td colSpan="5" className="pb-0">
            <div className="horizontal-bar horizontal-bar-init" />
          </td>
        </tr>
        <tr>
          <td className="section-title">{get(data, 'title')}</td>
          <th />
        </tr>
        <tr>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {get(data, 'list', []).map(item => (
          <tr key={item.id}>
            <td className="label"><span>{get(item, 'label', '')}</span></td>
            <td className="value"><span>{get(item, 'price', '')}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MenuTableSM.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default MenuTableSM;
