
const Car = (props) => {
  return (
    <div>
   
      <h3>
        <u>Parts of Car</u>
      </h3>
      <ol>
        <li>
          <b>Engine: </b> {props.engine}
        </li>
        <li>
          <b>GearBox: </b>
          {props.gearBox}
        </li>
        <li>
          <b>Type: </b>
          {props.type}
        </li>
        <li>
          <b>BHP: </b>
          {props.bhp}
        </li>
        <li>
          <b>Torque: </b>
          {props.torque}
        </li>
      </ol>
    
      <h3>
        <u>ignoredProperties</u>
        </h3>
      <ol>
        <li>
        <b>SpareWheel:</b>
        {props.spareWheel}
      </li>
      <li>
        <b>SeatingCapacity:</b>
        {props.seatingCapacity}
      </li>
      </ol>
    </div>
  );
};



export default Car;