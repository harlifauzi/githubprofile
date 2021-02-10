import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { LangColors } from '../../utils';
import './LangChart.css';

const LangData = (props) => {
    const [langChartData, setLangChartData] = useState(null);
    const [starLangChartData, setStarLangChartData] = useState(null);
    const [starChartData, setStarChartData] = useState(null);


    useEffect(() => {
        initLangChart();
        initStarLanguage();
        initStarChart();
    }, [])


    const initLangChart = () => {
        const label = props.langData.map(lang => lang.label);
        const value = props.langData.map(lang => lang.value);
        const backgroundColor = props.langData.map(({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,);
        const borderColor = props.langData.map(lang => `${lang.color}`);
        setLangChartData({label, value, backgroundColor, borderColor});
    }


    const initStarChart = () => {
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const mostStarredRepos = props.repoData
            .filter(repo => !repo.fork)
            .sort((a, b) => b[sortProperty] - a[sortProperty])
            .slice(0, LIMIT);
        const labels = mostStarredRepos.map(repo => repo.name);
        const data = mostStarredRepos.map(repo => repo[sortProperty]);
        setStarChartData({labels, data});
    };


    const initStarLanguage = () => {
        const filteredRepos = props.repoData.filter(repo => !repo.fork && repo.stargazers_count > 0);
        const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
        const labels = Array.from(uniqueLangs.values()).filter(l => l);
        const data = labels.map(lang => {
          const repos = filteredRepos.filter(repo => repo.language === lang);
          const starsArr = repos.map(r => r.stargazers_count);
          const starSum = starsArr.reduce((a, b) => a + b, 0);
          return starSum;
        });
        const borderColor = labels.map(label => LangColors[label]);
        const backgroundColor = borderColor.map(color => `${color}B3`);
        setStarLangChartData({labels, data, backgroundColor, borderColor});
      };


    return (
        <div className="langchart">
            <div className="chart-wrapper">
                <p className="chart-title">Top Languages</p>

                { langChartData && 
                <Pie
                    data={{
                        label: 'top languages',
                        labels: langChartData.label,
                        datasets: [
                            {
                                data: langChartData.value,
                                backgroundColor: langChartData.backgroundColor,
                                borderColor: langChartData.borderColor,
                                borderWidth: 1,
                            }
                        ]
                    }}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        legend: {
                            position: 'right',
                        }
                    }}
                    height={250}
                />
                }
            </div>

            <div className="chart-wrapper">
                <p className="chart-title">Star per Language</p>

                { starChartData && 
                <Bar
                    data={{
                        label: 'star per languages',
                        labels: starChartData.labels,
                        datasets: [
                            {
                                data: starChartData.data,
                                backgroundColor: starChartData.backgroundColor,
                                borderColor: starChartData.borderColor,
                                borderWidth: 1,
                            }
                        ]
                    }}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        legend: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                    }}
                    height={250}
                />
                }
            </div>

            <div className="chart-wrapper">
                <p className="chart-title">Star per Language</p>

                { starLangChartData && 
                <Doughnut
                    data={{
                        label: 'star per languages',
                        labels: starLangChartData.labels,
                        datasets: [
                            {
                                data: starLangChartData.data,
                                backgroundColor: starLangChartData.backgroundColor,
                                borderColor: starLangChartData.borderColor,
                                borderWidth: 1,
                            }
                        ],
                    }}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        legend: {
                            position: 'right',
                        },
                    }}
                    height={250}
                />
                }
            </div>
        </div>
    )
}

export default LangData
