import { useState } from "react";
import Layout from "../layout";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.checked);
    let val = e.target.value;
    if (e.target.checked) {
      setHobbies([...hobbies, e.target.value]);
    } else {
      let newHob = hobbies.filter((value) => {
        return value ==! val;
      });
      setHobbies(newHob);
    }
    console.log(hobbies);
  };

  
  // ['sing', 'read', 'write']
  return (
    <Layout>
      <div>
        <label>Hobbies</label>
        <label>
          <input
            type="checkbox"
            name="hobbies[]"
            value={"read"}
            onChange={handleChange}
          />
          READING
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies[]"
            value={"write"}
            onChange={handleChange}
          />
          WRITTING
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies[]"
            value={"sing"}
            onChange={handleChange}
          />
          SINGING
        </label>
      </div>
    </Layout>
  );
};
export default Hobbies;
