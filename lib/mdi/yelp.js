'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiYelp = function (_React$Component) {
    _inherits(MdiYelp, _React$Component);

    function MdiYelp() {
        _classCallCheck(this, MdiYelp);

        return _possibleConstructorReturn(this, (MdiYelp.__proto__ || Object.getPrototypeOf(MdiYelp)).apply(this, arguments));
    }

    _createClass(MdiYelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10.5887,2.01585C 11.2317,2.01485 11.5237,2.26985 11.5827,2.96785L 11.7927,6.14285L 12.0337,10.2859C 12.0537,10.6439 12.0147,10.9969 11.8587,11.3219C 11.6377,11.7739 11.1357,11.8869 10.7347,11.5829C 10.4857,11.3939 10.3077,11.1409 10.1507,10.8749L 6.4197,4.55285C 6.0597,3.93985 6.1667,3.53685 6.7657,3.15585C 7.5167,2.67885 9.7337,2.01785 10.5887,2.01585 Z M 14.8341,14.8485L 15.0901,14.9145L 18.9541,16.3055C 19.6111,16.5485 19.7871,16.9245 19.5231,17.5695C 19.0591,18.6985 18.3431,19.6575 17.4211,20.4515C 16.9631,20.8454 16.5101,20.7805 16.2131,20.2785L 13.9361,16.3195C 13.5451,15.6125 14.0341,14.8005 14.8341,14.8485 Z M 4.4769,13.9885C 4.4809,13.2625 4.5219,12.5515 4.7459,11.8675C 4.9659,11.1965 5.3339,11.0015 5.9789,11.2675L 9.6329,12.8135C 10.0899,13.0055 10.3529,13.3195 10.3279,13.8405C 10.3039,14.3615 9.9669,14.5805 9.5269,14.7255L 5.8459,15.9425C 5.1479,16.1675 4.7859,15.9615 4.6369,15.2495C 4.5499,14.8285 4.4749,14.3995 4.4769,13.9885 Z M 11.966,21.0191C 11.947,21.8131 11.6,22.1221 10.814,21.9841C 9.773,21.7991 8.806,21.4002 7.957,20.7572C 7.542,20.4441 7.45,19.9452 7.757,19.5292L 10.466,15.9682C 10.697,15.6682 11.034,15.6042 11.385,15.7362C 11.769,15.8822 11.969,16.1822 11.974,16.5902L 11.966,21.0191 Z M 14.4544,13.3198C 13.7264,13.3258 13.2314,12.5238 13.6434,11.9108C 14.4744,10.6708 15.3484,9.46075 16.2284,8.25575C 16.5234,7.85075 16.9374,7.81575 17.3134,8.15675C 18.2414,8.99975 18.9124,10.0228 19.2884,11.2228C 19.4314,11.6748 19.2494,12.0808 18.8314,12.1978L 15.0934,13.1748L 14.4544,13.3198 Z ' })
                )
            );
        }
    }]);

    return MdiYelp;
}(React.Component);

exports.default = MdiYelp;
module.exports = exports['default'];