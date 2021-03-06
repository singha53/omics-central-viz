import React from 'react';
import Plot from 'react-plotly.js';
import { PrepareData } from './prepareData.js'

function BoxPlot(props){
  const { data, x, y, xlab, ylab, title, ...rest } = props;

  const plot = PrepareData(data, x, y, xlab, ylab, title)

  return (<Plot
            data={ plot.data }
            useResizeHandler
            style={{ width: '100%', height: '100%' }}
            layout={ plot.layout }
          />);
};

export default BoxPlot;