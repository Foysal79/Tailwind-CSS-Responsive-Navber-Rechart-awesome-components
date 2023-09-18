
import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "Alice", math: 5, science: 88, english: 91, history: 87 },
        { id: 2, name: "Bob", math: 87, science: 92, english: 85, history: 78 },
        { id: 3, name: "Charlie", math: 92, science: 78, english: 9, history: 5 },
        { id: 4, name: "David", math: 78, science: 5, english: 82, history: 90 },
        { id: 5, name: "Eve", math: 89, science: 94, english: 90, history: 88 },
        { id: 6, name: "Frank", math: 1, science: 86, english: 88, history: 93 },
        { id: 7, name: "Grace", math: 84, science: 90, english: 87, history: 91 },
      ];
      
    return (
        <div>
           


  <LC width={800} height={400} data={studentData}>
    <XAxis dataKey="name"></XAxis>
    <YAxis></YAxis>
    <Line type="monotone" dataKey="math" stroke="red" />
    <Line type="monotone" dataKey="science" stroke="blue" />
    <Line type="monotone" dataKey="english" stroke="green" />
    <Line type="monotone" dataKey="history" stroke="pink" />
  </LC>

        </div>
    );
};

export default LineChart;