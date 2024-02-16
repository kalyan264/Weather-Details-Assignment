import {Table} from 'react-bootstrap'
import "./weather-table.css"

const WeatherTable = ({ date, weatherDetails }) =>{
    
    console.log(weatherDetails,"weatherDetails--------")
    const {temp_min, temp_max, pressure, humidity } = weatherDetails 

  return (
    <Table striped bordered hover className='weather-table-styles'>
      <thead className='weather-table-header'>
        <tr>
          <th colSpan={2}>Date: {date}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}>Temperature</td>
        </tr>
        <tr>
          <td>Min</td>
          <td>Max</td>
        </tr>
        <tr>
          <td>{temp_min}</td>
          <td> {temp_max}</td>
        </tr>
        <tr>
          <td>Pressure </td>
          <td>{pressure}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td> {humidity}</td>
        </tr>
      </tbody>
    </Table>

  );
}

export default  WeatherTable;