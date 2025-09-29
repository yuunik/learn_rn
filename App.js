import GrandPa from "./components/GrandPa";
import ThemeContext from "./utils/context";

// 主题色
const themes = {
  light: {
    backgroundColor: '#fff',
    color: '#000'
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff'
  }
}

const App = () => {
  return (
      <ThemeContext.Provider value={themes.dark}>
        <GrandPa />
      </ThemeContext.Provider>
  )
}

export default App;