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

var MdiPinOff = function (_React$Component) {
    _inherits(MdiPinOff, _React$Component);

    function MdiPinOff() {
        _classCallCheck(this, MdiPinOff);

        return _possibleConstructorReturn(this, (MdiPinOff.__proto__ || Object.getPrototypeOf(MdiPinOff)).apply(this, arguments));
    }

    _createClass(MdiPinOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 12.7994,16.0679L 12.7994,21.9981L 11.1994,21.9981L 11.1994,15.9981L 5.99939,15.9981L 5.99939,13.9981L 7.99939,11.9981L 7.99939,11.2679L 2,5.26848 Z M 15.9994,11.9981L 17.9994,13.9981L 17.9994,15.9981L 17.8208,15.9981L 7.99939,6.1767L 7.99939,3.99807L 6.99939,3.99807L 6.99939,1.99807L 16.9994,1.99807L 16.9994,3.99807L 15.9994,3.99807L 15.9994,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiPinOff;
}(React.Component);

exports.default = MdiPinOff;
module.exports = exports['default'];