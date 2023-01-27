import MyApp from "./components/MyApp";
import WeatherContexProvider from "./contex/WeatherContex";


function App() {
  return (
    <WeatherContexProvider>

      <MyApp />
      
    </WeatherContexProvider>
  );
}

export default App;
