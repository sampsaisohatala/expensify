import { NavLink } from 'react-router-dom';

const Header = () => (
   <header>
      <h1>Expensify</h1>
      <div>
         <NavLink exact to="/" activeClassName="is-active">
            Dashboard
         </NavLink>
         <NavLink to="/create" activeClassName="is-active">
            Create Expense
         </NavLink>
      </div>
   </header>
);

export default Header;
