import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import useNewsletter from '../../../Hooks/useNewsletter';
import usePackage from '../../../Hooks/usePackage';


const BalanceChart = () => {

    const [Newsletter] = useNewsletter()
    const [Package] = usePackage()


    const newMember = Newsletter.length
    const paidMember=Package.length





    const data01 = [
        { name: 'Group A', value: newMember },
        { name: 'Group B', value: paidMember },
        
      ];
      
      const data02 = [
        { name: 'Paid Member', value: paidMember },
        { name: 'Newsletter', value: newMember },
        
      ];


    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="80%"
            cy="80%"
            outerRadius={80}
            fill="#000000"
            label
          />
          <Pie dataKey="value" data={data02} cx={650} cy={200} innerRadius={40} outerRadius={100} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
};

export default BalanceChart;