var React = require('react')
var ReactGMaps = require('react-gmaps')
var {Gmaps, Marker} = ReactGMaps

var theatres = require('../data/theatres.json')

var MovieMap = React.createClass({
  render: function() {
    return (
      <div className="map col-sm-12">
        <Gmaps width={'100%'}
               height={'480px'}
               lat={'41.9021988'}
               lng={'-87.6285782'}
               zoom={11}
               loadingMessage={'Theatres soon...'}
               params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
            {theatres.map(function(theatres) {
                return <Marker lat={theatres.lat} lng={theatres.long} />
            })}
        </Gmaps>
      </div>
    )
  }
})

module.exports = MovieMap
