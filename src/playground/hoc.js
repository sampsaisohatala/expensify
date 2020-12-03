import React from 'react';

const Info = (props) => {
   return (
      <div>
         <h1>Info</h1>
         <p>This is the info: {props.info}</p>
      </div>
   );
};

const requireAuthentication = (WrappedComponent) => {
   return (props) => <div>{props.isAuth ? <WrappedComponent {...props} /> : <p>Log in motherfucker</p>}</div>;
};

const AuthInfo = requireAuthentication(Info); // <--- Higher order component

export default function hoc() {
   return (
      <div>
         <h1>Higher order component</h1>
         <AuthInfo isAuth={false} info="lol" />
      </div>
   );
}
