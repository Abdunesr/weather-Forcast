import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "lisbon" };
    this.FetchWeather = this.FetchWeather.bind(this);
  }
  async FetchWeather(location) {
    try {
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      console.log(`${name} ${convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData.daily);
    } catch (err) {
      console.err(err);
    }
  }

  render() {
    return (
      <div className="app">
        <h1>classy Weather </h1>
        <div>
          <input
            type="text"
            placeholder="location search ..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.FetchWeather}>Get Weather</button>
      </div>
    );
  }
}
export default App;
