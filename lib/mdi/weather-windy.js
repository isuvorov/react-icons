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

var MdiWeatherWindy = function (_React$Component) {
    _inherits(MdiWeatherWindy, _React$Component);

    function MdiWeatherWindy() {
        _classCallCheck(this, MdiWeatherWindy);

        return _possibleConstructorReturn(this, (MdiWeatherWindy.__proto__ || Object.getPrototypeOf(MdiWeatherWindy)).apply(this, arguments));
    }

    _createClass(MdiWeatherWindy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,10C 3.44771,10 3,9.55229 3,9C 3,8.44772 3.44772,8 4,8L 12,8C 13.1046,8 14,7.10457 14,6C 14,4.89543 13.1046,4 12,4C 11.4477,4 10.9477,4.22386 10.5858,4.58578C 10.1953,4.97631 9.56209,4.97631 9.17157,4.58578C 8.78104,4.19526 8.78104,3.56209 9.17157,3.17157C 9.89543,2.44772 10.8954,2.00001 12,2.00001C 14.2091,2.00001 16,3.79086 16,6C 16,8.20914 14.2091,10 12,10L 4,10 Z M 19,12C 19.5523,12 20,11.5523 20,11C 20,10.4477 19.5523,10 19,10C 18.7238,10 18.4738,10.1119 18.2929,10.2929C 17.9024,10.6834 17.2692,10.6834 16.8787,10.2929C 16.4881,9.90237 16.4882,9.2692 16.8787,8.87868C 17.4216,8.33579 18.1716,8 19,8C 20.6568,8 22,9.34315 22,11C 22,12.6569 20.6568,14 19,14L 5,14C 4.44771,14 4,13.5523 4,13C 4,12.4477 4.44772,12 5,12L 19,12 Z M 18,18L 4,18C 3.44772,18 3,17.5523 3,17C 3,16.4477 3.44771,16 4,16L 18,16C 19.6568,16 21,17.3431 21,19C 21,20.6569 19.6568,22 18,22C 17.1716,22 16.4216,21.6642 15.8787,21.1213C 15.4882,20.7308 15.4881,20.0976 15.8787,19.7071C 16.2692,19.3166 16.9024,19.3166 17.2929,19.7071C 17.4738,19.8881 17.7238,20 18,20C 18.5523,20 19,19.5523 19,19C 19,18.4477 18.5523,18 18,18 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherWindy;
}(React.Component);

exports.default = MdiWeatherWindy;
module.exports = exports['default'];