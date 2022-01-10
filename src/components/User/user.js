import React from 'react';
import PropTypes from 'prop-types';
import s from './user.module.css';

export default function User({name, email, phone, website}){

  return(
    <div>
    <pre>name: {name}  |  phone: {phone}</pre>
    <pre>email: {email}  |  website: {website}</pre>
    </div>
  );
}

const isEmail = function(props, propName) {
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(props[propName])) {
    return new Error('Invalid email address');
  }
}

const isWebsite = function(props, propName) {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  if (!regex.test(props[propName])) {
    return new Error('Invalid website address');
  }
}

const isPhoneNumber = function(props, propName) {
  const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if (!regex.test(props[propName])) {
  return new Error('Invalid phone number');
  }
}

User.propTypes = {
  name: PropTypes.string,
  email: isEmail,
  phone: isPhoneNumber,
  website: isWebsite,
}


User.defaultProps = {
  name: "admin",
  email: "admin@gmail.com",
  phone: "+9800000000",
  website: "www.admin.com",
}
