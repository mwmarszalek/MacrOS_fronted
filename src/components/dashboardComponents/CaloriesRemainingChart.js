import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const CaloriesRemainingChart = ({dayTotals, user}) => {




    const data = {
            labels: ['Calories consumed (Kcal)', `Calories remaining of ${user.caloriesGoal}Kcal`],
            datasets: [
            {
            label: 'Kcal',
            data: [dayTotals.calories, user.caloriesGoal],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };

    const options = {
        title: {
            display:true,
            text: `Remaining Calories`
        }
    }
    
    return (
        <>
        <Doughnut data={data} options={options}/>
        </>
    )
}
export default CaloriesRemainingChart;