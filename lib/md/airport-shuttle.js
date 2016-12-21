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

var MdAirportShuttle = function (_React$Component) {
    _inherits(MdAirportShuttle, _React$Component);

    function MdAirportShuttle() {
        _classCallCheck(this, MdAirportShuttle);

        return _possibleConstructorReturn(this, (MdAirportShuttle.__proto__ || Object.getPrototypeOf(MdAirportShuttle)).apply(this, arguments));
    }

    _createClass(MdAirportShuttle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 18.4h8.4l-6.8-6.8h-1.6v6.8z m4.1 10.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-7.5-10.7v-6.8h-6.6v6.8h6.6z m-11.6 10.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-5-10.7h6.6v-6.8h-6.6v6.8z m23.4-10l10 10v8.2h-4.3c0 2.8-2.2 5-5 5s-5-2.2-5-5h-9.1c0 2.8-2.3 5-5 5s-5-2.2-5-5h-3.4v-15c0-1.8 1.6-3.2 3.4-3.2h23.4z' })
                )
            );
        }
    }]);

    return MdAirportShuttle;
}(React.Component);

exports.default = MdAirportShuttle;
module.exports = exports['default'];