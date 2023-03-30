import { useForm } from '../hooks/useForm';
import { ButtonLimit, ButtonSubmit, Form, Input, InputGroup, InputNumber } from './styled-components/AddCategory';
import { GrSearch } from 'react-icons/gr';
import { useState } from 'react';

const AddCategory = ({ setCategories }) => {

  const [ { category, number }, handleInputChange ] = useForm({ category: '', number: null })
  const [ limit, setLimit ] = useState(1)


  const handleNumber = (e) => {
    setLimit(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( category.trim().length > 2 || number > 3) {
      setCategories([{category, number: limit}]);
      // setInputValue('');
    }
  }

  const handleStepper = (e) => {
    const myInput = document.getElementById("myInput")
    let step = myInput.getAttribute("step")
    let calcStep = (e.target.id === 'increment' ? (step*1) : (step* -1));

    let newValue = +(limit) + calcStep;

    setLimit(newValue)
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <InputGroup>
        <Input
          type="text"
          placeholder="Name Gif"
          autoComplete="off"
          name="category"
          onChange={ handleInputChange }
          value={ category }
        />
      </InputGroup>
      <InputNumber>
        <ButtonLimit
          id="decrement"
          onClick={ handleStepper }
        ><span>-</span></ButtonLimit>
        <InputGroup>
          <Input
            type="number"
            name="number"
            id="myInput"
            // readOnly
            step={ 1 }
            onChange={ handleNumber }
            value={ limit }
          />
        </InputGroup>
        <ButtonLimit
          id="increment"
          onClick={ handleStepper }
        ><span>+</span></ButtonLimit>
      </InputNumber>
      <InputGroup>
        <ButtonSubmit
          type="submit"
        >
          <GrSearch />
          Search Gif
        </ButtonSubmit>
      </InputGroup>
    </Form>
  )
}

export default AddCategory
