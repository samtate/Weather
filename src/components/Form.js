import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Form = props => (
            <form onSubmit={props.getWeather}>
                <Input type="text" name="city" placeholder="City..."/>
                <Input type="text" name="country" placeholder="Country..."/>
                <Button
                    color="secondary"
                    type="submit"
                >
                    Get Weather
                </Button>
            </form>
);

export default Form;
