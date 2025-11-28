import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const energyData = [
  { time: '06:00', solar: 10, usage: 20 },
  { time: '09:00', solar: 45, usage: 40 },
  { time: '12:00', solar: 95, usage: 60 },
  { time: '15:00', solar: 80, usage: 55 },
  { time: '18:00', solar: 30, usage: 70 },
  { time: '21:00', solar: 5, usage: 40 },
];

const wasteData = [
  { type: 'Plastic', amount: 85 },
  { type: 'Organic', amount: 120 },
  { type: 'Paper', amount: 90 },
  { type: 'Glass', amount: 45 },
  { type: 'Metal', amount: 30 },
];

export const EnergyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={energyData}>
        <defs>
          <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00FF88" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
        <XAxis dataKey="time" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: '#0A1628', border: '1px solid #334155', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Area type="monotone" dataKey="solar" stroke="#00D4FF" fillOpacity={1} fill="url(#colorSolar)" name="Solar Generated (kWh)" />
        <Area type="monotone" dataKey="usage" stroke="#00FF88" fillOpacity={1} fill="url(#colorUsage)" name="Station Usage (kWh)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const WasteChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={wasteData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
        <XAxis type="number" stroke="#ffffff50" fontSize={12} hide />
        <YAxis dataKey="type" type="category" stroke="#ffffff" fontSize={12} tickLine={false} axisLine={false} width={80} />
        <Tooltip
            cursor={{fill: '#ffffff10'}}
            contentStyle={{ backgroundColor: '#0A1628', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
        />
        <Bar dataKey="amount" fill="#00D4FF" radius={[0, 4, 4, 0]} barSize={20} name="Recycled (kg)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
