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

var MdiCity = function (_React$Component) {
    _inherits(MdiCity, _React$Component);

    function MdiCity() {
        _classCallCheck(this, MdiCity);

        return _possibleConstructorReturn(this, (MdiCity.__proto__ || Object.getPrototypeOf(MdiCity)).apply(this, arguments));
    }

    _createClass(MdiCity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,14.9981L 16.9994,14.9981L 16.9994,12.9981L 18.9994,12.9981M 18.9994,18.9981L 16.9994,18.9981L 16.9994,16.9981L 18.9994,16.9981M 12.9994,6.99807L 10.9994,6.99807L 10.9994,4.99807L 12.9994,4.99807M 12.9994,10.9981L 10.9994,10.9981L 10.9994,8.99807L 12.9994,8.99807M 12.9994,14.9981L 10.9994,14.9981L 10.9994,12.9981L 12.9994,12.9981M 12.9994,18.9981L 10.9994,18.9981L 10.9994,16.9981L 12.9994,16.9981M 6.99939,10.9981L 4.99939,10.9981L 4.99939,8.99807L 6.99939,8.99807M 6.99939,14.9981L 4.99939,14.9981L 4.99939,12.9981L 6.99939,12.9981M 6.99939,18.9981L 4.99939,18.9981L 4.99939,16.9981L 6.99939,16.9981M 14.9994,10.9981L 14.9994,4.99807L 11.9994,1.99807L 8.99939,4.99807L 8.99939,6.99807L 2.99939,6.99807L 2.99939,20.9981L 20.9994,20.9981L 20.9994,10.9981L 14.9994,10.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCity;
}(React.Component);

exports.default = MdiCity;
module.exports = exports['default'];