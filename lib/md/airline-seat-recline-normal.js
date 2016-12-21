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

var MdAirlineSeatReclineNormal = function (_React$Component) {
    _inherits(MdAirlineSeatReclineNormal, _React$Component);

    function MdAirlineSeatReclineNormal() {
        _classCallCheck(this, MdAirlineSeatReclineNormal);

        return _possibleConstructorReturn(this, (MdAirlineSeatReclineNormal.__proto__ || Object.getPrototypeOf(MdAirlineSeatReclineNormal)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatReclineNormal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 33.4l-2.5 2.5-5.8-5.9h-8.5q-2 0-3.5-1.5t-1.5-3.5v-9.6q0-1.5 1.2-2.6t2.6-1.2h0.1q1.5 0 2.7 1.3l2.4 2.6q1.3 1.5 3.5 2.4t4.3 0.9v3.7q-4.9 0-9.3-3.7v6.2h5.8z m-23.4-6.8q0 2.1 1.5 3.6t3.5 1.4h10v3.4h-10q-3.4 0-5.9-2.5t-2.5-5.9v-15h3.4v15z m2.7-17.6q-1.1-1-1.1-2.4t1.1-2.3 2.3-1 2.3 1 1.1 2.3-1.1 2.4-2.3 1-2.3-1z' })
                )
            );
        }
    }]);

    return MdAirlineSeatReclineNormal;
}(React.Component);

exports.default = MdAirlineSeatReclineNormal;
module.exports = exports['default'];