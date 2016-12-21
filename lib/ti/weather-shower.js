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

var TiWeatherShower = function (_React$Component) {
    _inherits(TiWeatherShower, _React$Component);

    function TiWeatherShower() {
        _classCallCheck(this, TiWeatherShower);

        return _possibleConstructorReturn(this, (TiWeatherShower.__proto__ || Object.getPrototypeOf(TiWeatherShower)).apply(this, arguments));
    }

    _createClass(TiWeatherShower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 30c-0.9 0-1.6-0.7-1.6-1.7s0.7-1.6 1.6-1.6c2.8 0 5-2.3 5-5s-2.2-5-5-5c-0.4 0-0.8 0-1.3 0.2l-1.8 0.5-0.3-1.8c-0.6-3.3-3.3-5.6-6.6-5.6-3.6 0-6.6 3-6.6 6.7 0 0.4 0 0.9 0.1 1.3l0.4 2-2.4 0c-1.6 0-3.1 1.5-3.1 3.3s1.5 3.4 3.3 3.4c0.9 0 1.7 0.7 1.7 1.6s-0.8 1.7-1.7 1.7c-3.7 0-6.7-3-6.7-6.7 0-3.1 2.2-5.7 5-6.4 0-0.1 0-0.2 0-0.2 0-5.5 4.5-10 10-10 4.3 0 8.1 2.7 9.4 6.7 4.9-0.4 9 3.5 9 8.3 0 4.6-3.8 8.3-8.4 8.3z m-10.8 0l1.7-5 1.6 5c0.3 0.9-0.2 1.9-1.1 2.2-0.9 0.3-1.9-0.2-2.2-1.1-0.1-0.4-0.1-0.8 0-1.1z m5 3.3l1.7-5 1.6 5c0.3 1-0.2 1.9-1.1 2.3-0.9 0.3-1.9-0.2-2.2-1.2-0.1-0.3-0.1-0.7 0-1.1z m-10 0l1.7-5 1.6 5c0.3 1-0.2 1.9-1.1 2.3-0.9 0.3-1.9-0.2-2.2-1.2-0.1-0.3-0.1-0.7 0-1.1z' })
                )
            );
        }
    }]);

    return TiWeatherShower;
}(React.Component);

exports.default = TiWeatherShower;
module.exports = exports['default'];