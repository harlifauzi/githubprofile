import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './LangChart.css';

const LangData = (props) => {
    const [label, setLabel] = useState(null);
    const [value, setValue] = useState(null);
    const [colors, setColors] = useState(null);


    useEffect(() => {
        let label = [];
        let value = [];
        let colors = [];
        props.langData.map(data => {
            label.push(data.label);
            value.push(data.value);
            colors.push(data.color);
        })
        setLabel(label);
        setValue(value);
        setColors(colors);
    }, [])


    return (
        <div>
            <div className="langchart-top">
                <p className="langchart-title">Top Languages</p>

                { label && value && colors && 
                <Pie
                    data={{
                        label: 'top languages',
                        labels: label,
                        datasets: [
                            {
                                data: value,
                                backgroundColor: colors,
                                borderColor: colors,
                                borderWidth: 1,
                            }
                        ]
                    }}
                    height={300}
                    width={300}
                />
                }
            </div>
        </div>
    )
}

export default LangData
