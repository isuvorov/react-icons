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

var MdiEarth = function (_React$Component) {
    _inherits(MdiEarth, _React$Component);

    function MdiEarth() {
        _classCallCheck(this, MdiEarth);

        return _possibleConstructorReturn(this, (MdiEarth.__proto__ || Object.getPrototypeOf(MdiEarth)).apply(this, arguments));
    }

    _createClass(MdiEarth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.8956,17.3916C 17.6376,16.5856 16.8906,15.9986 15.9996,15.9986L 14.9996,15.9986L 14.9996,12.9986C 14.9996,12.4456 14.5516,11.9986 13.9996,11.9986L 7.99959,11.9986L 7.99959,9.99857L 9.99959,9.99857C 10.5516,9.99857 10.9996,9.55057 10.9996,8.99857L 10.9996,6.99857L 12.9996,6.99857C 14.1036,6.99857 14.9996,6.10257 14.9996,4.99857L 14.9996,4.58557C 17.9296,5.77257 19.9996,8.64157 19.9996,11.9986C 19.9996,14.0796 19.1986,15.9686 17.8956,17.3916 Z M 10.9996,19.9286C 7.0546,19.4356 3.99959,16.0766 3.99959,11.9986C 3.99959,11.3816 4.07559,10.7836 4.2076,10.2066L 8.99959,14.9986L 8.99959,15.9986C 8.99959,17.1026 9.89459,17.9986 10.9996,17.9986M 11.9996,1.99857C 6.47659,1.99857 1.99959,6.47557 1.99959,11.9986C 1.99959,17.5206 6.47659,21.9986 11.9996,21.9986C 17.5226,21.9986 21.9996,17.5206 21.9996,11.9986C 21.9996,6.47557 17.5226,1.99857 11.9996,1.99857 Z ' })
                )
            );
        }
    }]);

    return MdiEarth;
}(React.Component);

exports.default = MdiEarth;
module.exports = exports['default'];