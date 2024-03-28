import { useEffect, useState } from 'react';
import { BarChart  , Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const BrChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(()=>{
    const getReadList = JSON.parse(localStorage.getItem("readList"));
    if(getReadList){
      const barChartData = getReadList.map(item=>({
            name: item.bookName,
            totalPages: item.totalPages
      }));
      setChartData(barChartData)
    }
  },[])
  // ---------------------------------------
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// -------------------------------------------------------------
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
// ----------------------------------------------------------------

// --------------------------------------


    return (
        
    <div>
        <div className='flex items-center justify-center text-3xl font-bold'>
            <h1>Maping Your Reading Summery </h1>
        </div>
          <div>
          <div className='flex items-center justify-center  bg-[#dff9fb] py-26'>
            
            <div>
               
            </div>
               <BarChart width={1400} height={600} data={chartData}>
               <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis></YAxis>

      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}  label={{ position: 'top' }}>
        
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
                </BarChart>            
        </div>
                          </div>
    </div>
    );
};

export default BrChart;