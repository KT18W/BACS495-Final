import React, {useState} from 'react'; 
import lines from './images/lines.jpg';
import './Header.css';

function Header() {

  const [value, setValue] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!value){
      setValue(true);
    }
    if (value){
      setValue(false);
    }
  };

  const styles = StyleSheet.create({
    parentView: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    menuView: {
      flex:1,
    },
    titleView: {
      flex:4,
    },
    loginView: {
      flex:2,
    },
  })

  return (
    <div className="Header">
      <parentView style={styles.parentView}>
        <menuView style={styles.menuView}>
          <button className="linesButton">
            <img className="Lines" src={lines} alt="Menu" />
          </button>
        </menuView>
        <titleView style={styles.titleView}>
          <h1 className="Title">
            The Answers to University
          </h1>
        </titleView>
        <loginView style={styles.loginView}>
          <div className="done">
            {!value ? (<form onSubmit={submit}>
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <input type="submit" value="login" />
            </form>) :
              <form onSubmit={submit}>
                <input type="submit" value="logout" />
              </form>}
          </div>
        </loginView>
      </parentView>
    </div>
  );
}

export default Header;
